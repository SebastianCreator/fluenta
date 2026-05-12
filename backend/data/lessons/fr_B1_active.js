// data/lessons/fr_B1_active.js — French B1 (actives)
module.exports = [
  {
    languageCode: 'fr', level: 'B1', module: 'grammar',
    order: 1, unitNumber: 9,
    title: 'Passé composé vs Présent parfait (distinction)',
    titleEs: 'Presente perfecto vs pasado simple (distinción)',
    description: 'Comprenez quand utiliser chaque temps en français.',
    descriptionEs: 'Entiende cuándo usar cada tiempo.',
    objectives: ['Savoir distinguer les deux temps', 'Utiliser les expressions de temps', 'Construire des phrases correctes'],
    objectivesEs: ['Distinguir', 'Usar expresiones de tiempo', 'Construir oraciones correctas'],
    content: [
      { type: 'grammar-table', content: 'PASSÉ COMPOSÉ (action finie)\n→ hier / la semaine dernière / en 2019\n\nPRÉSENT PARFAIT (expérience/récent + lien au présent)\n→ aujourd’hui / récemment / depuis 5 ans' },
      { type: 'tip', content: 'Astuce: si vous donnez un moment terminé (hier, l’année dernière) → passé composé.' , contentEs: 'Consejo: si das un momento terminado (ayer, el año pasado) → passé composé.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"Je ___ à Tokyo deux fois." (expérience)', options: ['suis allé', 'vais', 'ai été', 'vais aller'], correctAnswer: 'ai été', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Elle ___ à la maison il y a une heure."', options: ['est arrivée', 'arrive', 'est arriver', 'arriva'], correctAnswer: 'est arrivée', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Avez-vous déjà ___ (manger) du poisson ?"', correctAnswer: 'mangé', xpReward: 15 },
      { type: 'translation', prompt: 'Traduire: "Nunca he visto esa película."', correctAnswer: 'Je n’ai jamais vu ce film.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"___ vous fini le projet ?" (auxiliaire pour le temps parfait)', options: ['Est', 'Avez', 'Êtes', 'Faites'], correctAnswer: 'Avez', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Je ___ (habiter) ici depuis 2018."', correctAnswer: 'ai habité', xpReward: 15 },
      { type: 'translation', prompt: 'Traduire: "¿Has estado alguna vez en Colombia ?"', correctAnswer: 'Êtes-vous déjà allé en Colombie ?', xpReward: 15 },
      { type: 'true-false', prompt: '"J’ai vu ce film hier." est correct.', correctAnswer: true, explanation: 'Hier = moment terminé → passé composé.', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammaire', 'passé', 'distinction', 'B1']
  }
];

