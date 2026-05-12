// data/lessons/de_B1_active.js — German B1 (actives)
module.exports = [
  {
    languageCode: 'de', level: 'B1', module: 'grammar',
    order: 1, unitNumber: 9,
    title: 'Present Perfect vs. Präteritum (Unterschied)',
    titleEs: 'Presente perfecto vs pasado simple (distinción)',
    description: 'Verstehen Sie, wann Sie Present Perfect oder Präteritum verwenden.',
    descriptionEs: 'Entiende cuándo usar presente perfecto o pasado simple.',
    objectives: ['Zeitformen unterscheiden', 'Zeitmarker nutzen', 'Korrekte Sätze bilden'],
    objectivesEs: ['Distinguir tiempos', 'Usar marcadores', 'Construir oraciones correctas'],
    content: [
      { type: 'grammar-table', content: 'PRÄTERITUM (abgeschlossene Handlung + bestimmter Zeitpunkt)\n→ gestern / letzte Woche / 2019\n\nPERFEKT (Erfahrung + Bezug zur Gegenwart)\n→ schon / gerade / noch / seit 5 Jahren' },
      { type: 'tip', content: 'Tipp: Wenn Sie “gestern” oder “letzte Woche” sagen → meistens Präteritum (bzw. im gesprochenen Deutsch oft Perfekt).' , contentEs: 'Consejo: si dices “ayer” o “la semana pasada” → normalmente Präteritum.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"Ich ___ zweimal in Japan." (Erfahrung)', options: ['ging', 'bin gegangen', 'gehe', 'ginge'], correctAnswer: 'bin gegangen', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Sie ___ vor einer Stunde nach Hause."', options: ['kam', 'kommt', 'ist gekommen', 'kommt nach'], correctAnswer: 'kam', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Haben Sie schon ___ (essen) Fisch?"', correctAnswer: 'gegessen', xpReward: 15 },
      { type: 'translation', prompt: 'Übersetzen: "Nunca he visto esa película."', correctAnswer: 'Ich habe diesen Film noch nie gesehen.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"___ du dein Projekt schon fertig?" (Auxiliar)', options: ['Hast', 'Bist', 'War', 'Wirst'], correctAnswer: 'Hast', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Ich ___ (leben) hier seit 2018."', correctAnswer: 'habe gelebt', xpReward: 15 },
      { type: 'translation', prompt: 'Übersetzen: "¿Has estado alguna vez en Colombia?"', correctAnswer: 'Warst du jemals in Kolumbien?', xpReward: 15 },
      { type: 'true-false', prompt: '"Ich habe diesen Film gestern gesehen." ist korrekt.', correctAnswer: false, explanation: 'Wenn “gestern” bestimmter Zeitpunkt ist, bevorzugt Präteritum: „Ich sah…“ (oder Perfekt auch möglich, je nach Register).' , xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammatik', 'B1', 'Perfekt', 'Präteritum']
  }
];

