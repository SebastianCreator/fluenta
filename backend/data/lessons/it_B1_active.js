// data/lessons/it_B1_active.js — Italian B1 (actives)
module.exports = [
  {
    languageCode: 'it', level: 'B1', module: 'grammar',
    order: 1, unitNumber: 9,
    title: 'Passato prossimo vs Presente perfetto (distinzione)',
    titleEs: 'Presente perfecto vs pasado simple (distinción)',
    description: 'Impara quando usare i due tempi per raccontare esperienze e azioni finite.',
    descriptionEs: 'Aprende cuándo usar los dos tiempos.',
    objectives: ['Capire la differenza', 'Usare indicatori di tempo', 'Costruire frasi corrette'],
    objectivesEs: ['Entender la diferencia', 'Usar marcadores de tiempo', 'Construir oraciones correctas'],
    content: [
      { type: 'grammar-table', content: 'PASSATO PROSSIMO (azione finita)\n→ ieri / la settimana scorsa / nel 2019\n\nPRESENTE PERFETTO (esperienza con legame al presente)\n→ oggi / recentemente / da 5 anni (concetto di continuità)' },
      { type: 'tip', content: 'Suggerimento: se dici un momento chiuso nel passato (“ieri”) → passato prossimo.' , contentEs: 'Consejo: si dices un momento cerrado en pasado (“ayer”) → pasado simple.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"Io ___ in Giappone due volte."', options: ['ero andato', 'vado', 'sono andato', 'andavo'], correctAnswer: 'sono andato', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Lei ___ a casa un’ora fa."', options: ['è arrivata', 'arriva', 'è arrivare', 'arrivò'], correctAnswer: 'è arrivata', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Hai già ___ (mangiare) del pesce?"', correctAnswer: 'mangiato', xpReward: 15 },
      { type: 'translation', prompt: 'Traduci: "Nunca he visto esa película."', correctAnswer: 'Non ho mai visto quel film.', xpReward: 15 },
      { type: 'multiple-choice', prompt: 'Quale ausiliare serve con “avere”?', options: ['ho', 'sei', 'è', 'siamo'], correctAnswer: 'ho', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Io ___ (vivere) qui dal 2018."', correctAnswer: 'ho vissuto', xpReward: 15 },
      { type: 'translation', prompt: 'Traduci: "¿Has estado alguna vez en Colombia?"', correctAnswer: 'Sei mai stato in Colombia?', xpReward: 15 },
      { type: 'true-false', prompt: '"Ho visto questo film ieri." è corretto.', correctAnswer: true, explanation: 'Ieri = momento finito → passato prossimo.', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammatica', 'B1', 'passato', 'distinzione']
  }
];

