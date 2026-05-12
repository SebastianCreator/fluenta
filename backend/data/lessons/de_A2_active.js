// data/lessons/de_A2_active.js — German A2 (actives)
module.exports = [
  {
    languageCode: 'de', level: 'A2', module: 'vocabulary',
    order: 1, unitNumber: 5,
    title: 'Alltag & Zeitangaben',
    titleEs: 'Rutinas diarias y expresiones de tiempo',
    description: 'Beschreiben Sie Ihre Routine und benutzen Sie Zeitangaben.',
    descriptionEs: 'Describe tu rutina diaria y usa expresiones de tiempo.',
    objectives: ['Tagesablauf beschreiben', 'Zeitangaben verwenden', 'Über Gewohnheiten sprechen'],
    objectivesEs: ['Describir rutinas de mañana, tarde y noche', 'Usar expresiones de tiempo', 'Preguntar y responder sobre hábitos'],
    content: [
      { type: 'example', content: 'Alltagsverben:\naufwachen=despertarse, aufstehen=levantarse, frühstücken=desayunar\nduschen=ducharse, sich anziehen=vestirse\nzur Arbeit gehen=ir al trabajo\nzu Mittag essen=almorzar, nach Hause kommen=volver a casa\nabends essen=cenar, ins Bett gehen=acostarse' },
      { type: 'grammar-table', content: 'UM (für Uhrzeit): um 7 Uhr, um Mittag, um Mitternacht\nAM/IM (für Tageszeiten): am Morgen, am Nachmittag, am Abend\nAM + Tag: am Montag, am Wochenende' },
      { type: 'tip', content: 'Tipp: „am Abend“/„am Morgen“ sind Tageszeiten. Für genaue Uhrzeiten: „um“.', contentEs: 'Consejo: “am Abend”/“am Morgen” son momentos del día. Para hora exacta: “um”.' }
    ],
    exercises: [
      { type: 'fill-in-blank', prompt: '„Ich wache ___ 6:30 ___ Morgen auf."', correctAnswer: 'um / am', explanation: 'UM para hora exacta; AM para parte del día.', xpReward: 15 },
      { type: 'translation', prompt: 'Übersetzen: "Ella se ducha cada mañana."', correctAnswer: 'Sie duscht sich jeden Morgen.', xpReward: 15 },
      { type: 'multiple-choice', prompt: '„___ Sonntagsmorgens gehe ich in den Park."', options: ['Am', 'Im', 'An', 'Bei'], correctAnswer: 'Am', xpReward: 10 },
      { type: 'multiple-choice', prompt: 'Was machen Sie ERST am Morgen?', options: ['Ins Bett gehen', 'Essen', 'Aufwachen', 'Zu Abend essen'], correctAnswer: 'Aufwachen', xpReward: 10 },
      { type: 'translation', prompt: 'Übersetzen: "Normalmente como a las doce del mediodía."', correctAnswer: 'Ich esse normalerweise um zwölf Uhr mittags.', xpReward: 15 },
      { type: 'true-false', prompt: '„Sie geht um Nacht ins Bett“ ist richtig.', correctAnswer: false, explanation: 'Korrekt: „Sie geht um/THE NIGHT ins Bett“ -> üblich: „Sie geht nachts ins Bett“.', xpReward: 10 },
      { type: 'fill-in-blank', prompt: '„Sie frühstücken ___ (haben) um 7 Uhr."', correctAnswer: 'haben', xpReward: 10 }
    ],
    xpReward: 60, totalDurationMinutes: 12, offlineAvailable: true, isPublished: true,
    tags: ['vokabular', 'alltag', 'zeitangaben', 'präpositionen']
  }
];

