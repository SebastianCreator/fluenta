// data/lessons/pt_B1_active.js — Portuguese B1 (actives)
module.exports = [
  {
    languageCode: 'pt', level: 'B1', module: 'grammar',
    order: 1, unitNumber: 9,
    title: 'Passado (pretérito) vs experiência recente (distinção)',
    titleEs: 'Presente perfecto vs pasado simple (distinción)',
    description: 'Entenda quando usar tempos para experiências e ações concluídas.',
    descriptionEs: 'Entiende cuándo usar los tiempos.',
    objectives: ['Distinguir usos', 'Usar marcadores de tempo', 'Construir frases corretas'],
    objectivesEs: ['Distinguir', 'Usar marcadores', 'Construir oraciones correctas'],
    content: [
      { type: 'grammar-table', content: 'PASSADO (ação concluída)\n→ ontem / semana passada / em 2019\n\nEXPERIÊNCIA RECENTE / COM RELAÇÃO AO PRESENTE\n→ hoje / recentemente / desde 5 anos' },
      { type: 'tip', content: 'Dica: “ontem” normalmente pede passado (ação concluída).', contentEs: 'Consejo: “ayer” normalmente pide pasado simple.' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"Eu ___ ao Japão duas vezes."', options: ['vou', 'estou indo', 'fui', 'tenho ido'], correctAnswer: 'fui', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"Ela ___ para casa há uma hora."', options: ['chega', 'chegou', 'chegava', 'está chegando'], correctAnswer: 'chegou', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Você já ___ (comer) peixe?"', correctAnswer: 'comeu', xpReward: 15 },
      { type: 'translation', prompt: 'Traduza: "Nunca he visto esa película."', correctAnswer: 'Eu nunca vi esse filme.', xpReward: 15 },
      { type: 'multiple-choice', prompt: 'Qual auxiliar é mais comum com “tem” (experiência)?', options: ['tenho', 'têm', 'tem', 'estou'], correctAnswer: 'tenho', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Eu ___ (morar) aqui desde 2018."', correctAnswer: 'moro', xpReward: 15 },
      { type: 'translation', prompt: 'Traduza: "¿Has estado alguna vez en Colombia?"', correctAnswer: 'Você já esteve na Colômbia?', xpReward: 15 },
      { type: 'true-false', prompt: '"Eu vi esse filme ontem." é correto.', correctAnswer: true, explanation: 'Ontem = momento concluído → passado.', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['gramática', 'B1', 'passado', 'distinção']
  }
];

