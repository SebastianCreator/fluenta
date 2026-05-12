// data/lessons/pt_A2_active.js — Portuguese A2 (actives)
module.exports = [
  {
    languageCode: 'pt', level: 'A2', module: 'vocabulary',
    order: 1, unitNumber: 5,
    title: 'Rotina & Expressões de Tempo',
    titleEs: 'Rutinas diarias y expresiones de tiempo',
    description: 'Descreva sua rotina e use expressões de tempo.',
    descriptionEs: 'Describe tu rutina diaria y usa expresiones de tiempo.',
    objectives: ['Descrever manhã, tarde e noite', 'Usar expressões de tempo', 'Perguntar e responder sobre hábitos'],
    objectivesEs: ['Describir rutinas de mañana, tarde y noche', 'Usar expresiones de tiempo', 'Preguntar y responder sobre hábitos'],
    content: [
      { type: 'text', content: 'Em português (Brasil):\n- Às + hora: às 7 horas, às 12 horas\n- De manhã / à tarde / à noite: períodos do dia\n- No + dia: no domingo, no fim de semana' , contentEs: 'En portugués (Brasil): às + hora; de manhã / à tarde / à noite; no + día.'},
      { type: 'grammar-table', content: 'Às + hora = horário preciso\nDe manhã / À tarde / À noite = período\nNo + dia = día' },
      { type: 'tip', content: 'Dica: „de manhã“ = morning (period). Para hora exata use „às“.' , contentEs: 'Consejo: “de manhã” = periodo. Para hora exacta: “às”.'}
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Eu acordo ___ 6h30 ___ manhã."', correctAnswer: 'às / de', explanation: 'Às para hora exata; de manhã para período.', xpReward: 15 },
      { type: 'translation', prompt: 'Traduza: "Ella se ducha cada mañana."', correctAnswer: 'Ela toma banho (todos os) dias de manhã.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"___ domingo de manhã, eu vou ao parque."', options: ['No', 'Em', 'À', 'De'], correctAnswer: 'No', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'O que você faz PRIMEIRO de manhã?', options: ['Dormir', 'Acordar', 'Almoçar', 'Jantar'], correctAnswer: 'Acordar', xpReward: 10 },
      { type: 'translation', prompt: 'Traduza: "Normalmente como a las doce del mediodía."', correctAnswer: 'Eu como normalmente ao meio-dia / às doze horas.', xpReward: 15 },
      { type: 'true-false', prompt: '"Eu vou dormir à noite" é errado.', correctAnswer: false, explanation: 'É correto: à noite = à noite.' , xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Eles tomam café ___ (tomar) às 7h."', correctAnswer: 'às', xpReward: 10 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulário', 'rotina', 'tempo', 'preposições']
  }
];

