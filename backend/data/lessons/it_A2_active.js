// data/lessons/it_A2_active.js — Italian A2 (actives)
module.exports = [
  {
    languageCode: 'it', level: 'A2', module: 'vocabulary',
    order: 1, unitNumber: 5,
    title: 'Routine quotidiane & espressioni di tempo',
    titleEs: 'Rutinas diarias y expresiones de tiempo',
    description: 'Descrivi la tua routine e usa espressioni di tempo.',
    descriptionEs: 'Describe tu rutina diaria y usa expresiones de tiempo.',
    objectives: ['Descrivere mattina, pomeriggio e sera', 'Usare a/in/on (equivalenti italiani)', 'Chiedere e rispondere su abitudini'],
    objectivesEs: ['Describir rutinas de mañana, tarde y noche', 'Usar expresiones de tiempo', 'Preguntar y responder sobre hábitos'],
    content: [
      { type: 'text', content: 'Espressioni tipiche (A2):\n- Alle + ora: alle 7, alle 12, alle 24\n- Di mattina / di pomeriggio / di sera: periodi della giornata\n- Di + giorni: di lunedì, di domenica, di sabato' },
      { type: 'grammar-table', content: 'Alle + ora = ora precisa\nDi mattina/pomeriggio/sera = periodo\nDi + giorno = giorno' },
      { type: 'tip', content: 'Consiglio: spesso non si usa una preposizione come in inglese. “Di mattina” = la mattina.' , contentEs: 'Consejo: a menudo no se usa una preposición como en inglés. “Di mattina” = la mañana.' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Mi sveglio ___ 6:30 ___ la mattina."', correctAnswer: 'alle / di', explanation: 'Alle per la hora precisa; di per la parte del día.', xpReward: 15 },
      { type: 'translation', prompt: 'Traduce: "Ella se ducha cada mañana."', correctAnswer: 'Lei fa la doccia ogni mattina.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"___ domenica mattina, vado al parco."', options: ['Di', 'Alle', 'In', 'Per'], correctAnswer: 'Di', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Cosa fai D’ABORD al mattino?', options: ['Andare a letto', 'Fare colazione', 'Svegliare', 'Cenare'], correctAnswer: 'Sveglia', xpReward: 10 },
      { type: 'translation', prompt: 'Traduce: "Normalmente como a las doce del mediodía."', correctAnswer: 'Di solito mangio a mezzogiorno alle dodici.', xpReward: 15 },
      { type: 'true-false', prompt: '"Lei va a letto di notte" è corretto.', correctAnswer: true, explanation: 'Di notte / di sera: ambos se usan para “noche”.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Loro fanno colazione ___ (fare) alle 7."', correctAnswer: 'alle', xpReward: 10 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabolario', 'routine', 'tempo', 'preposizioni']
  }
];

