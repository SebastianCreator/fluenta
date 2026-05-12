// data/lessons/fr_A2_active.js — French A2 (actives)
module.exports = [
  {
    languageCode: 'fr', level: 'A2', module: 'vocabulary',
    order: 1, unitNumber: 5,
    title: 'Routines quotidiennes & expressions de temps',
    titleEs: 'Rutinas diarias y expresiones de tiempo',
    description: 'Décrire votre routine et utiliser des expressions de temps.',
    descriptionEs: 'Describe tu rutina diaria y usa expresiones de tiempo.',
    objectives: ['Décrire matin, après-midi et soir', 'Utiliser at / in / on (équivalents)', 'Demander et répondre sur des habitudes'],
    objectivesEs: ['Describir rutinas de mañana, tarde y noche', 'Usar expresiones de tiempo', 'Preguntar y responder sobre hábitos'],
    content: [
      { type: 'text', content: 'Expressions fréquentes en français (A2):\n- À + heure: à 7 heures, à midi, à minuit\n- Le matin / l’après-midi / le soir: (périodes de la journée)\n- Le + jour: le lundi, le week-end' },
      { type: 'grammar-table', content: 'À + heure = heure précise\nLe matin / l’après-midi / le soir = période\nLe + jour = jour' },
      { type: 'tip', content: 'Astuce: en français, on ne dit pas “in the morning” comme en anglais. On dit “le matin”.' , contentEs: 'Consejo: en francés, no se dice “in the morning” como en inglés. Se dice “le matin”.' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '"Je me réveille ___ 6h30 ___ le matin."', correctAnswer: 'à / le', explanation: 'À pour l’heure précise, le pour la période.', xpReward: 15 },
      { type: 'translation', prompt: 'Traduire: "Ella se ducha cada mañana."', correctAnswer: 'Elle se douche chaque matin.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '"___ dimanche matin, je vais au parc."', options: ['À', 'Le', 'En', 'Par'], correctAnswer: 'Le', explanation: 'Avec les jours: le dimanche.', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Qu’est-ce que vous faites D’ABORD le matin?', options: ['Aller au lit', 'Déjeuner', 'Se réveiller', 'Dîner'], correctAnswer: 'Se réveiller', xpReward: 10 },
      { type: 'translation', prompt: 'Traduire: "Normalmente como a las doce del mediodía."', correctAnswer: 'Je mange/souvent je déjeune à midi.', xpReward: 15 },
      { type: 'true-false', prompt: '"Elle se couche en nuit" est correct.', correctAnswer: false, explanation: 'Correct: “Elle se couche la nuit.”', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '"Ils prennent ___ (prendre) le petit déjeuner à 7h."', correctAnswer: 'le', xpReward: 10 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'routines', 'temps', 'prépositions']
  },

  // Vocabulary — Food & Drink
  {
    languageCode: 'fr', level: 'A2', module: 'vocabulary',
    order: 2, unitNumber: 5,
    title: 'Nourriture & boissons',
    titleEs: 'Comida y bebida',
    description: 'Vocabulaire pour manger, boire et commander au restaurant.',
    descriptionEs: 'Aprende vocabulario para comida, bebidas y comer fuera.',
    objectives: ['Nommer des aliments et boissons', 'Commander au restaurant', 'Exprimer likes/dislikes (aimer/ ne pas aimer)'],
    objectivesEs: ['Nombrar comidas y bebidas comunes', 'Pedir comida en un restaurante', 'Expresar gustos y disgustos'],
    content: [
      { type: 'example', content: 'Aliments: pain=pain, riz=riz, poulet=poulet, bœuf=bœuf\nœufs=œufs, légumes=légumes, fruits=fruits, salade=salade, soupe=soupe, pâtes=pâtes, fromage=fromage' },
      { type: 'example', content: 'Boissons: eau=eau, café=café, thé=thé, jus=jus\nlait=lait, bière=bière, vin=vin, boisson gazeuse=boisson gazeuse' },
      { type: 'example', content: 'Au restaurant:\nServeur: Je peux prendre votre commande?\nClient: Je voudrais la soupe au poulet, s’il vous plaît.\nServeur: Vous voulez boire quelque chose?\nClient: Un verre d’eau, s’il vous plaît.' },
      { type: 'grammar-table', content: 'J’aime / Je n’aime pas / Je déteste / Je préfère\nJe ne suis pas fan de...' }
    ],
    exercises: [
      { type: 'multiple-choice', prompt: '"Je voudrais" au restaurant veut dire:', options: ['J’ai', 'Je veux', 'Je voudrais (poli)', 'J’ai besoin'], correctAnswer: 'Je voudrais (poli)', xpReward: 10 },
      { type: 'translation', prompt: 'Traduire: "¿Me puede traer el menú, por favor?"', correctAnswer: 'Vous pouvez m’apporter le menu, s’il vous plaît?', xpReward: 15 },
      { type: 'fill-in-blank', prompt: '"Je ___ like broccoli." (désaccord)', correctAnswer: 'n’aime pas', xpReward: 10 },
      { type: 'multiple-choice', prompt: '"Jus" en espagnol est:', options: ['Leche', 'Agua', 'Jugo', 'Vino'], correctAnswer: 'Jugo', xpReward: 5 },
      { type: 'translation', prompt: 'Traduire: "Me encanta el café colombiano."', correctAnswer: 'J’adore le café colombien.', xpReward: 15 },
      { type: 'matching', prompt: 'Associer aliments et traductions', options: ['Poulet', 'Poisson', 'Pain', 'Œufs'], correctAnswer: { 'Poulet': 'Poulet', 'Poisson': 'Pescado', 'Pain': 'Pan', 'Œufs': 'Huevos' }, xpReward: 20 },
      { type: 'fill-in-blank', prompt: '"___ vous voulez un peu plus de café?" (offre)', correctAnswer: 'Est-ce que', xpReward: 15 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'manger', 'restaurant', 'aimer-n-aimer']
  }
];

