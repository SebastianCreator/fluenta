// routes/evaluations.js
const router = require('express').Router();
const { protect, optionalAuth } = require('../middleware/auth');
const { Evaluation, EvaluationResult } = require('../models/index');
const User = require('../models/User');

// GET /api/evaluations?language=en&level=A1
router.get('/', optionalAuth, async (req, res, next) => {
  try {
    const { language, level, type } = req.query;
    const query = { isPublished: true };
    if (language) query.languageCode = language;
    if (level) query.level = level;
    if (type) query.type = type;
    const evaluations = await Evaluation.find(query).select('-questions');
    res.json({ evaluations });
  } catch (err) { next(err); }
});

// GET /api/evaluations/:id
router.get('/:id', protect, async (req, res, next) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) return res.status(404).json({ error: 'Evaluation not found' });
    res.json({ evaluation });
  } catch (err) { next(err); }
});

// POST /api/evaluations/:id/submit
router.post('/:id/submit', protect, async (req, res, next) => {
  try {
    const { answers, timeSpentSeconds } = req.body;
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) return res.status(404).json({ error: 'Evaluation not found' });

    // Helper: normalize a single answer for comparison
    const normalizeStr = (v) => String(v ?? '').trim().toLowerCase();

    // Helper: deep equality with case-insensitive strings
    const deepEqual = (a, b) => {
      if (a === b) return true;
      if (a == null && b == null) return true;
      if (a == null || b == null) return false;
      if (typeof a !== typeof b) return false;

      if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((item, idx) => deepEqual(item, b[idx]));
      }
      if (typeof a === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        return keysA.every(k => deepEqual(a[k], b[k]));
      }
      if (typeof a === 'string' && typeof b === 'string') {
        return normalizeStr(a) === normalizeStr(b);
      }
      return a === b;
    };

    // Score calculation
    let totalPoints = 0, earnedPoints = 0;
    const gradedAnswers = evaluation.questions.map((q, i) => {
      totalPoints += q.points;
      const userAnswer = answers[i];

      // Determine correctness based on question type
      let isCorrect = false;
      const type = q.type;

      if (['multiple-choice', 'matching', 'conversation-sim', 'image-match', 'scramble'].includes(type)) {
        // Exact string match (case-insensitive)
        isCorrect = deepEqual(userAnswer, q.correctAnswer);
      } else if (type === 'true-false') {
        // Boolean comparison (normalize)
        isCorrect = deepEqual(userAnswer, q.correctAnswer);
      } else if (['fill-in-blank', 'translation', 'dictation', 'cloze', 'essay', 'interleaved', 'task-based'].includes(type)) {
        // Case-insensitive string comparison (can be single string or array)
        isCorrect = deepEqual(userAnswer, q.correctAnswer);
      } else if (type === 'shadowing') {
        // Compare against correct answer, case-insensitive
        isCorrect = deepEqual(userAnswer, q.correctAnswer);
      } else {
        // Fallback: default deep equality
        isCorrect = deepEqual(userAnswer, q.correctAnswer);
      }

      if (isCorrect) earnedPoints += q.points;
      return { questionIndex: i, userAnswer, correct: isCorrect, points: isCorrect ? q.points : 0 };
    });

    const scorePercent = Math.round((earnedPoints / totalPoints) * 100);
    const passed = scorePercent >= evaluation.passingScore;
    const xpEarned = passed ? evaluation.xpReward : Math.round(evaluation.xpReward * 0.2);

    const result = await EvaluationResult.create({
      userId: req.user.id,
      evaluationId: evaluation._id,
      languageCode: evaluation.languageCode,
      level: evaluation.level,
      score: scorePercent,
      passed,
      xpEarned,
      answers: gradedAnswers,
      timeSpentSeconds
    });

    // Update user XP
    const user = await User.findById(req.user.id);
    const enrollment = user.getEnrollment(evaluation.languageCode);
    if (enrollment) {
      enrollment.totalXP += xpEarned;
      if (passed) enrollment.completedEvaluations.push(evaluation._id);
      await user.save();
    }

    res.json({ result, passed, score: scorePercent, xpEarned, feedback: gradedAnswers });
  } catch (err) { next(err); }
});

module.exports = router;
