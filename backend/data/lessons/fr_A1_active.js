// data/lessons/fr_A1_active.js — French A1 con métodos de aprendizaje activos
module.exports = [

  // ══════════════════════════════════════════════════════
  //  MODULE: VOCABULARY — SRS + Dictation + Image-Match
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Salutations — Méthode Active & SRS',
    titleEs: 'Saludos — Método activo y SRS',
    description: 'Master French greetings using spaced repetition, audio dictation and mnemonic stories.',
    descriptionEs: 'Domina los saludos franceses usando repetición espaciada, audio y mnemónicos.',
    objectives: ['Recall greetings without cues', 'Associate sounds with spelling', 'Create mnemonic connections'],
    objectivesEs: ['Recordar saludos sin pistas', 'Asociar sonidos con ortografía', 'Crear conexiones mnemónicas'],
    content: [
      { type: 'text', content: 'SRS Method: Review each greeting 3 times — immediately, after 2 minutes, then after 10 minutes. This builds long-term memory through active retrieval.', contentEs: 'Método SRS: Repasa cada saludo 3 veces — inmediatamente, después de 2 minutos, y luego de 10 minutos. Esto construye memoria a largo plazo mediante recuperación activa.' },
      { type: 'tip', content: 'Mnemonic for "Bonjour": BON + JOUR = "Good day" → Imagine a bon/jour (good day) when you greet someone formally.', contentEs: 'Mnemónico para "Bonjour": BON + JOUR = "Buen día" → Imagina un bon/jour cuando saludas formalmente.' },
      { type: 'example', content: `Associations sonores:
Bonjour → imagen de солнце (sol = día)
Bonsoir → imagen de Луна (luna = noche)
Salut → imagine un saludo de mano rápido
Au revoir → imagine decir "or" (oro) al despedirte — es valioso` }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Associe le salut avec la bonne image', promptEs: 'Asocia el saludo con la imagen correcta', options: ['🌅', '🌙', '👋', '🤝'], correctAnswer: { 'Bonjour': '🌅', 'Bonsoir': '🌙', 'Salut': '👋', 'Au revoir': '🤝' }, explanation: 'Associate each greeting with a time-of-day scene.', explanationEs: 'Asocia cada saludo con una escena del momento del día.', xpReward: 15 },
      { type: 'dictation', prompt: 'Écoutez et écrivez: "Bonjour, comment allez-vous?"', correctAnswer: 'Bonjour, comment allez-vous?', explanation: 'Dictation trains your ear to connect sounds with French spelling.', explanationEs: 'El dictado entrena tu oído para conectar sonidos con ortografía francesa.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Créez une histoire personnelle pour "Au revoir": Quelle image vous aide à vous en souvenir? Écrivez une phrase.', correctAnswer: 'open', explanation: 'Personal connections improve memory by 40%.', explanationEs: 'Las conexiones personales mejoran la memoria en un 40%.', xpReward: 15 },
      { type: 'interleaved', prompt: 'Répondez vite: Vous arrivez à 8h du matin. Vous dites ___ ? Un amipart. Vous dites ___ ?', correctAnswer: ['Bonjour', 'Au revoir / Salut'], explanation: 'Context mixing forces deeper retrieval from memory.', explanationEs: 'Mezclar contextos fuerza una recuperación más profunda.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Répétez en même temps que l\'audio: "Je m\'appelle Marie. Enchanté!"', correctAnswer: 'Je m\'appelle Marie. Enchanté!', explanation: 'Shadowing trains pronunciation muscles and natural French rhythm.', explanationEs: 'El shadowing entrena los músculos de pronunciación y el ritmo natural del francés.', xpReward: 20 }
    ],
    xpReward: 85, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'srs', 'mnemoniques', 'salutations']
  },

  // ─────────────────────────────────────────
  //  FRENCH A1 — GRAMMAR: Être & Avoir
  // ─────────────────────────────────────────

  {
    languageCode: 'fr', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Être et Avoir — Conjugaison Active',
    titleEs: 'Être y Avoir — Conjugación activa',
    description: 'Master the two essential French verbs through dictation, scramble and sentence reconstruction.',
    descriptionEs: 'Domina los dos verbos esenciales franceses a través de dictado, ordenar y reconstruir frases.',
    objectives: ['Conjugate être and avoir in present', 'Use them in real contexts', 'Recognize subject-verb agreement'],
    objectivesEs: ['Conjugar être y avoir en presente', 'Usarlos en contextos reales', 'Reconocer concordancia sujeto-verbo'],
    content: [
      { type: 'text', content: 'Être (to be) and Avoir (to have) are the most used verbs in French. Being = identity, location. Having = possessions, age.', contentEs: 'Être (ser/estar) y Avoir (tener) son los verbos más usados en francés. Ser = identidad, ubicación. Tener = posesiones, edad.' },
      { type: 'tip', content: 'Memory trick: "Je SUIS content" (I am happy) vs "J\'AI 20 ans" (I am 20 years old). French uses AVOIR for age, not "to be"!', contentEs: 'Truco de memoria: "Je SUIS content" (estoy feliz) vs "J\'AI 20 ans" (tengo 20 años). ¡El francés usa AVOIR para la edad, no "to be"!' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Écoutez et écrivez: "Nous sommes étudiants. J\'ai vingt ans."', correctAnswer: 'Nous sommes étudiants. J\'ai vingt ans.', xpReward: 20 },
      { type: 'scramble', prompt: 'Reconstituez: "études / Elle / à Paris"', correctAnswer: 'Elle études à Paris.', explanation: 'Word order in French: Subject + Verb + Object/Adverb.', explanationEs: 'Orden de palabras en francés: Sujeto + Verbo + Objeto/Adverbio.', xpReward: 15 },
      { type: 'dictation', prompt: 'Écoutez et écrivez: "Tu as un chat. Il est noir."', correctAnswer: 'Tu as un chat. Il est noir.', xpReward: 20 },
      { type: 'scramble', prompt: 'Reconstituez: "français / Nous / de / sommes"', correctAnswer: 'Nous sommes français.', explanation: 'Nationality adjectives in French go after the verb without "of".', explanationEs: 'Los adjetivos de nacionalidad en francés van después del verbo sin "de".', xpReward: 15 },
      { type: 'cloze', prompt: 'Complétez: "___ femme ___ un enfant. ___ enfant ___ sage." (Le/a/un)', correctAnswer: ['La', 'a', 'L\'', 'est'], explanation: 'Le/La = the (definite article). Un = a/an. L\' before vowel.', explanationEs: 'Le/La = el/la (artículo definido). Un = un/una. L\' antes de vocal.', xpReward: 20 },
      { type: 'shadowing', prompt: 'Répétez: "Je suis français, tu es français, il est français, nous sommes français!"', correctAnswer: 'Je suis français, tu es français, il est français, nous sommes français!', explanation: 'This chain sentence practices all conjugations rapidly.', explanationEs: 'Esta oración encadenada practica todas las conjugaciones rápidamente.', xpReward: 15 }
    ],
    xpReward: 105, totalDurationMinutes: 22, offlineAvailable: true, isPublished: true,
    tags: ['grammaire', 'être', 'avoir', 'conjugaison', 'actif']
  },

  // ─────────────────────────────────────────
  //  FRENCH A1 — VOCABULARY: Numbers
  // ─────────────────────────────────────────

  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'Les Nombres — Dictée & Scramble',
    titleEs: 'Los números — Dictado y ordenar',
    description: 'Master French numbers 0-100, including tricky 70/80/90 system, through dictation and reconstruction.',
    descriptionEs: 'Domina los números franceses 0-100, incluyendo el sistema tricky de 70/80/90.',
    objectives: ['Dictate numbers from audio', 'Understand French counting (60+10, 4x20)', 'Use numbers in real contexts'],
    objectivesEs: ['Dictar números del audio', 'Entender el conteo francés (60+10, 4x20)', 'Usar números en contextos reales'],
    content: [
      { type: 'text', content: 'French counting system is unique: 70 = soixante-dix (60+10), 80 = quatre-vingts (4×20), 90 = quatre-vingt-dix (4×20+10).', contentEs: 'El sistema de conteo francés es único: 70 = soixante-dix (60+10), 80 = quatre-vingts (4×20), 90 = quatre-vingt-dix (4×20+10).' },
      { type: 'tip', content: 'Mnemonic for 80: quatre-vingts = "four twenties" → Imagine four 20-year-olds standing together!', contentEs: 'Mnemónico para 80: quatre-vingts = "cuatro veintes" → Imagina cuatro personas de 20 años paradas juntas.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Écoutez et écrivez: "Vingt, trente-cinq, soixante-dix, quatre-vingt-seize"', correctAnswer: 'Vingt, trente-cinq, soixante-dix, quatre-vingt-seize', xpReward: 20 },
      { type: 'scramble', prompt: 'Reconstituez: "âgé / Il / est / quatre-vingts / ans"', correctAnswer: 'Il est âgé de quatre-vingts ans.', explanation: 'Age in French: "Il est âgé de [number] ans."', explanationEs: 'Edad en francés: "Il est âgé de [número] ans."', xpReward: 15 },
      { type: 'dictation', prompt: 'Écoutez et écrivez: "Mon numéro de téléphone est zéro-six-dix-sept-quatre-deux-huit."', correctAnswer: 'Mon numéro de téléphone est zéro-six-dix-sept-quatre-deux-huit.', xpReward: 25 },
      { type: 'matching', prompt: 'Associez le nombre à son écriture', options: ['soixante-dix', 'quatre-vingts', 'quatre-vingt-dix', 'quatre-vingt-cinq'], correctAnswer: { 'soixante-dix': '70', 'quatre-vingts': '80', 'quatre-vingt-dix': '90', 'quatre-vingt-cinq': '85' }, explanation: 'Practice the unique French counting system.', explanationEs: 'Practica el único sistema de conteo francés.', xpReward: 20 },
      { type: 'task-based', prompt: 'Vous commandez au restaurant: "Je voudrais deux cafés et une salade, s\'il vous plaît." Écrivez ce que vous dites.', correctAnswer: 'Je voudrais deux cafés et une salade, s\'il vous plaît.', explanation: 'Real situation practice with numbers in context.', explanationEs: 'Práctica de situación real con números en contexto.', xpReward: 20 }
    ],
    xpReward: 100, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'nombres', 'dictée', 'scramble']
  },

  // ─────────────────────────────────────────
  //  FRENCH A1 — GRAMMAR: Articles & Gender
  // ─────────────────────────────────────────

  {
    languageCode: 'fr', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 2,
    title: 'Articles & Genre — Reconnaissance Active',
    titleEs: 'Artículos y Género — Reconocimiento activo',
    description: 'Learn definite/indefinite articles and noun gender through cloze and pattern recognition.',
    descriptionEs: 'Aprende artículos definidos/indefinidos y género de sustantivos.',
    objectives: ['Use le, la, les correctly', 'Apply gender agreement', 'Identify patterns for masculine/feminine'],
    objectivesEs: ['Usar le, la, les correctamente', 'Aplicar concordancia de género', 'Identificar patrones para masculino/femenino'],
    content: [
      { type: 'text', content: 'In French, every noun has a gender: masculine (le) or feminine (la). With vowels: l\'. Plural: les.', contentEs: 'En francés, cada sustantivo tiene género: masculino (le) o femenino (la). Con vocales: l\'. Plural: les.' },
      { type: 'tip', content: 'Pattern: nouns ending in -e are often feminine. BUT many exceptions exist! Always learn the article WITH the noun.', contentEs: 'Patrón: sustantivos terminados en -e son frecuentemente femeninos. ¡PERO existen muchas excepciones! Siempre aprende el artículo CON el sustantivo.' }
    ],
    exercises: [
      { type: 'cloze', prompt: 'Complétez avec le bon article: "___ chat (m) est dans ___ maison (f). J\'ai ___ ami (m) à Paris."', correctAnswer: ['Le', 'la', 'un'], explanation: 'le + masc, la + fem, un + masc indefinite.', explanationEs: 'le + masc, la + fem, un + masc indefinido.', xpReward: 20 },
      { type: 'dictation', prompt: 'Écoutez et écrivez: "La femme mange une pomme. Le garçon boit du lait."', correctAnswer: 'La femme mange une pomme. Le garçon boit du lait.', xpReward: 20 },
      { type: 'matching', prompt: 'Associez le nom avec son article', options: ['livre', 'femme', 'enfant', 'maison'], correctAnswer: { 'livre': 'le', 'femme': 'la', 'enfant': 'l\'', 'maison': 'la' }, explanation: 'l\' is used before vowel sounds.', explanationEs: 'l\' se usa antes de sonidos de vocal.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Répétez en chain: "Le livre, la femme, l\'enfant, les enfants, un livre, une femme" — feel the gender!', correctAnswer: 'Le livre, la femme, l\'enfant, les enfants, un livre, une femme', explanation: 'Hearing the article-noun together builds gender intuition.', explanationEs: 'Escuchar el artículo-sustantivo juntos desarrolla intuición de género.', xpReward: 15 },
      { type: 'task-based', prompt: 'Vous décrivez votre chambre: "Dans ma chambre, il y a le lit, la table, la chaise et les fenêtres."', correctAnswer: 'open', explanation: 'Use definite articles when describing specific objects in a room.', explanationEs: 'Usa artículos definidos al describir objetos específicos en una habitación.', xpReward: 20 }
    ],
    xpReward: 90, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammaire', 'articles', 'genre', 'actif']
  },

  // ─────────────────────────────────────────
  //  FRENCH A1 — VOCABULARY: Family
  // ─────────────────────────────────────────

  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'La Famille — Image-Match & Mnemonic',
    titleEs: 'La familia — Image-Match y Mnemónicos',
    description: 'Learn family vocabulary using mnemonic stories and image association.',
    descriptionEs: 'Aprende vocabulario de familia usando historias mnemónicas y asociación visual.',
    objectives: ['Name all immediate family members', 'Use possessive adjectives correctly', 'Create personal mnemonic stories'],
    objectivesEs: ['Nombrar todos los miembros de la familia inmediata', 'Usar adjetivos posesivos correctamente', 'Crear historias mnemónicas personales'],
    content: [
      { type: 'text', content: 'Family vocabulary in French uses possessives: mon/ma/mes (my), ton/ta/tes (your), son/sa/ses (his/her).', contentEs: 'El vocabulario de familia en francés usa posesivos: mon/ma/mes (mi), ton/ta/tes (tu), son/sa/ses (su).' },
      { type: 'tip', content: 'Remember "ma" before feminine nouns EXCEPT before vowel → use "mon": "mon amie" (not "ma amie"). Same with "ta" → "ton".', contentEs: 'Recuerda "ma" antes de sustantivos femeninos EXCEPTO antes de vocal → usa "mon": "mon amie". Lo mismo con "ta" → "ton".' }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Associez le mot famille à l\'image correcte', promptEs: 'Asocia la palabra de familia con la imagen correcta', options: ['👨', '👩', '👦', '👧'], correctAnswer: { 'le père': '👨', 'la mère': '👩', 'le fils': '👦', 'la fille': '👧' }, explanation: 'Visual association locks vocabulary in memory.', explanationEs: 'La asociación visual bloquea el vocabulario en la memoria.', xpReward: 15 },
      { type: 'dictation', prompt: 'Écoutez et écrivez: "Ma mère s\'appelle Rose. Mon père s\'appelle Pierre."', correctAnswer: 'Ma mère s\'appelle Rose. Mon père s\'appelle Pierre.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Créez un mnémonic pour "la grand-mère" (= abuela): Quel mot dans votre langue vous rappelle "grand-mère"?', correctAnswer: 'open', explanation: 'Personal connections to family terms are especially memorable.', explanationEs: 'Las conexiones personales con términos de familia son especialmente memorables.', xpReward: 15 },
      { type: 'cloze', prompt: 'Complétez: "___ sœur a ___ mari. ___ mari s\'appelle Jean." (Mon/ma/un)', correctAnswer: ['Ma', 'un', 'Le'], explanation: 'ma + fem = my, un = a, le = the (masc).', explanationEs: 'ma + fem = mi, un = un, le = el (masc).', xpReward: 15 },
      { type: 'matching', prompt: 'Associez le mot français à l\'équivalent espagnol', options: ['père', 'mère', 'frère', 'sœur'], correctAnswer: { 'père': 'padre', 'mère': 'madre', 'frère': 'hermano', 'sœur': 'hermana' }, explanation: 'French and Spanish share Latin roots — many words look similar.', explanationEs: 'Francés y español comparten raíces latinas — muchas palabras se ven similares.', xpReward: 15 }
    ],
    xpReward: 80, totalDurationMinutes: 16, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'famille', 'possessifs', 'mnemoniques']
  },

  // ─────────────────────────────────────────
  //  FRENCH A1 — GRAMMAR: -ER Verbs
  // ─────────────────────────────────────────

  {
    languageCode: 'fr', level: 'A1', module: 'grammar',
    order: 3, unitNumber: 2,
    title: 'Verbes en -ER — Conjugaison Active',
    titleEs: 'Verbos en -ER — Conjugación activa',
    description: 'Learn regular -ER verb conjugation through sentence reconstruction and shadowing.',
    descriptionEs: 'Aprende la conjugación de verbos regulares en -ER a través de reconstruir oraciones.',
    objectives: ['Identify -ER verbs', 'Conjugate them in present tense', 'Use them in natural sentences'],
    objectivesEs: ['Identificar verbos en -ER', 'Conjugarlos en presente', 'Usarlos en oraciones naturales'],
    content: [
      { type: 'text', content: 'The most common verb group in French. Remove -ER and add: -e, -es, -e, -ons, -ez, -ent. Example: PARLER → je parle, tu parles, il parle...', contentEs: 'El grupo de verbos más común en francés. Quita -ER y agrega: -e, -es, -e, -ons, -ez, -ent. Ejemplo: PARLER → je parle, tu parles, il parle...' },
      { type: 'tip', content: 'Ending sounds: -e, -es, -ent are SILENT in spoken French. "je parle", "tu parles", "ils parlent" all sound the same — context matters!', contentEs: 'Las terminaciones -e, -es, -ent son SILENCIOSAS en francés hablado. "je parle", "tu parles", "ils parlent" suenan igual — ¡el contexto importa!' }
    ],
    exercises: [
      { type: 'scramble', prompt: 'Reconstituez: "français / Nous / parlons"', correctAnswer: 'Nous parlons français.', explanation: 'Language after parler = no article. "Parler français" not "parler le français".', explanationEs: 'Idioma después de parler = sin artículo. "Parler français" no "parler le français".', xpReward: 15 },
      { type: 'dictation', prompt: 'Écoutez et écrivez: "J\'habite à Paris. Tu travailles dans un hôpital. Nous étudions l\'anglais."', correctAnswer: 'J\'habite à Paris. Tu travailles dans un hôpital. Nous étudions l\'anglais.', xpReward: 25 },
      { type: 'cloze', prompt: 'Conjuguez: "Je ___ (manger) une pomme. Nous ___ (travailler) beaucoup."', correctAnswer: ['mange', 'travaillons'], explanation: '-ER verbs: je → -e, nous → -ons.', explanationEs: 'Verbos -ER: je → -e, nous → -ons.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Répétez rapidement: "Je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent" — feel the rhythm!', correctAnswer: 'Je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent', explanation: 'Rapid chain shadowing builds conjugation reflexes.', explanationEs: 'El shadowing encadenado rápido desarrolla reflejos de conjugación.', xpReward: 20 },
      { type: 'task-based', prompt: 'Décrivez votre journée type: "Je me lève à sept heures. Je prends le petit déjeuner. Je vais au travail..."', correctAnswer: 'open', explanation: 'Use -ER verbs to describe your daily routine — this is high-frequency, practical French.', explanationEs: 'Usa verbos -ER para describir tu rutina diaria — esto es francés práctico y de alta frecuencia.', xpReward: 20 }
    ],
    xpReward: 95, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['grammaire', 'verbes-ER', 'conjugaison', 'présent']
  },

  // ─────────────────────────────────────────
  //  FRENCH A1 — VOCABULARY: Colors & Adjectives
  // ─────────────────────────────────────────

  {
    languageCode: 'fr', level: 'A1', module: 'vocabulary',
    order: 4, unitNumber: 2,
    title: 'Les Couleurs — Genre & Accord',
    titleEs: 'Los colores — Género y concordancia',
    description: 'Learn colors and adjective gender agreement in French.',
    descriptionEs: 'Aprende colores y concordancia de género de adjetivos en francés.',
    objectives: ['Name 10+ colors in French', 'Apply feminine agreement (-e ending)', 'Build descriptive sentences'],
    objectivesEs: ['Nombrar 10+ colores en francés', 'Aplicar concordancia femenina (-e final)', 'Construir oraciones descriptivas'],
    content: [
      { type: 'text', content: 'Colors in French: rouge, bleu/bleue, vert/verte, jaune, noir/noire, blanc/blanche, orange, rose, violet/violette, marron.', contentEs: 'Colores en francés: rouge, bleu/bleue, vert/verte, jaune, noir/noire, blanc/blanche, orange, rose, violet/violette, marron.' },
      { type: 'tip', content: 'Adjective gender rule: most adjectives add -e for feminine. vert → verte, noir → noire, blanc → blanche. Place adjectives AFTER the noun.', contentEs: 'Regla de género de adjetivos: la mayoría de adjetivos agregan -e para femenino. vert → verte, noir → noire, blanc → blanche. Pon adjetivos DESPUÉS del sustantivo.' }
    ],
    exercises: [
      { type: 'matching', prompt: 'Associez la couleur à sa traduction', options: ['rouge', 'bleu', 'vert', 'jaune'], correctAnswer: { 'rouge': 'rojo', 'bleu': 'azul', 'vert': 'verde', 'jaune': 'amarillo' }, explanation: 'Colors are high-frequency vocabulary.', explanationEs: 'Los colores son vocabulario de alta frecuencia.', xpReward: 15 },
      { type: 'dictation', prompt: 'Écoutez et écrivez: "Le taxi est jaune. La voiture bleue est belle."', correctAnswer: 'Le taxi est jaune. La voiture bleue est belle.', xpReward: 20 },
      { type: 'fill-in-blank', prompt: '"Une robe ___" (rojo — femenino)', correctAnswer: 'rouge', explanation: 'Colors ending in -e don\'t change in feminine.', explanationEs: 'Colores terminados en -e no cambian en femenino.', xpReward: 10 },
      { type: 'cloze', prompt: 'Accordez: "La voiture noir (fém.) est ___ (belle). Le chat noir (masc.) est ___ (petit)."', correctAnswer: ['noire', 'petit'], explanation: 'noir → noire (fem), petit stays same for masc.', explanationEs: 'noir → noire (fem), petit se queda igual para masc.', xpReward: 15 },
      { type: 'task-based', prompt: 'Décrivez votre couleur préférée et un objet de cette couleur: "Ma couleur préférée est le bleu. J\'ai un livre bleu."', correctAnswer: 'open', explanation: 'Practice both color vocabulary and adjective agreement.', explanationEs: 'Practica tanto vocabulario de colores como concordancia de adjetivos.', xpReward: 20 }
    ],
    xpReward: 80, totalDurationMinutes: 16, offlineAvailable: true, isPublished: true,
    tags: ['vocabulaire', 'couleurs', 'adjectifs', 'genre']
  },

  // ─────────────────────────────────────────
  //  FRENCH A1 — READING: Simple Paris Texts
  // ─────────────────────────────────────────

  {
    languageCode: 'fr', level: 'A1', module: 'reading',
    order: 1, unitNumber: 2,
    title: 'Lecture: Textes sur Paris',
    titleEs: 'Lectura: Textos sobre París',
    description: 'Read short texts about Paris and answer comprehension questions using active strategies.',
    descriptionEs: 'Lee textos cortos sobre París y responde preguntas de comprensión.',
    objectives: ['Read simple French texts fluently', 'Identify key information', 'Understand culture-specific references'],
    objectivesEs: ['Leer textos simples en francés con fluidez', 'Identificar información clave', 'Comprender referencias culturales específicas'],
    content: [
      { type: 'example', content: `TEXTE — "Ma vie à Paris":
Je m\'appelle Sophie. J\'ai 22 ans et j\'habite à Paris. Paris est magnifique! Il y a beaucoup de monuments: la Tour Eiffel, le Louvre, Notre-Dame.

Chaque matin, je prends le métro pour aller à mon travail. Je travaille dans un petit restaurant près du Louvre. Le soir, je rentre chez moi ou je vois mes amis dans un café.

Le week-end, je visite les musées ou je me promène le long de la Seine. Paris est une ville incroyable!` },
      { type: 'tip', content: 'Key phrases: il y a = there is/are, chaque = each, près de = near, le long de = along, incroyable = incredible.', contentEs: 'Frases clave: il y a = hay, chaque = cada, près de = cerca de, le long de = a lo largo de, incroyable = increíble.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Écoutez et écrivez la phrase: "Il y a beaucoup de monuments à Paris."', correctAnswer: 'Il y a beaucoup de monuments à Paris.', xpReward: 20 },
      { type: 'multiple-choice', prompt: 'Où travaille Sophie?', options: ['Dans un musée', 'Dans un restaurant', 'Dans une école', 'Dans un hôpital'], correctAnswer: 'Dans un restaurant', xpReward: 15 },
      { type: 'cloze', prompt: 'Complétez: "Sophie prend ___ métro chaque matin. Elle ___ (travailler) dans un restaurant." (le/le)', correctAnswer: ['le', 'travaille'], explanation: 'le + metro (masc), travail dans (dans = in/at).', explanationEs: 'le + metro (masc), travail dans (dans = en).', xpReward: 15 },
      { type: 'true-false', prompt: 'Sophie se promène le long de la Seine le week-end.', correctAnswer: true, explanation: 'Text says: "je me promène le long de la Seine le week-end".', explanationEs: 'El texto dice: "je me promène le long de la Seine le week-end".', xpReward: 10 },
      { type: 'translation', prompt: 'Translate from the text: "Paris est une ville incroyable!"', correctAnswer: '¡París es una ciudad increíble!', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['lecture', 'Paris', 'culture', 'compréhension']
  }
];