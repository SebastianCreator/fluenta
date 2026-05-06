// data/lessons/pt_A1_active.js — Portuguese A1 con métodos de aprendizaje activos
module.exports = [

  // ══════════════════════════════════════════════════════
  //  MODULE: VOCABULARY — SRS + Dictation + Image-Match
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'pt', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Cumprimentos e Apresentações — Método Ativo & SRS',
    titleEs: 'Saludos y presentaciones — Método activo y SRS',
    description: 'Master Brazilian Portuguese greetings using spaced repetition, audio dictation and mnemonic stories.',
    descriptionEs: 'Domina los saludos en portugués brasileño usando repetición espaciada, audio y mnemónicos.',
    objectives: ['Recall Brazilian Portuguese greetings', 'Distinguish formal from informal', 'Create mnemonic connections'],
    objectivesEs: ['Recordar saludos en portugués brasileño', 'Distinguir formal de informal', 'Crear conexiones mnemónicas'],
    content: [
      { type: 'text', content: 'SRS Method: Review each greeting 3 times at increasing intervals. Brazilian Portuguese uses "você" (you) — unlike Portugal which uses "tu".', contentEs: 'Método SRS: Repasa cada saludo 3 veces en intervalos crecientes. El portugués brasileño usa "você" (tú) — a diferencia de Portugal que usa "tu".' },
      { type: 'tip', content: '"Obrigado" (masc) vs "Obrigada" (fem) — men say "obrigado", women say "obrigada". Small detail that makes a big impression!', contentEs: '"Obrigado" (masc) vs "Obrigada" (fem) — los hombres dicen "obrigado", las mujeres dicen "obrigada". ¡Detalle pequeño que causa gran impresión!' },
      { type: 'example', content: `Associations:
Bom dia → morning sun over Copacabana beach
Boa tarde → afternoon in São Paulo
Boa noite → evening with friends
Oi/Olá → casual wave to someone you know
Tchau → wave + air kiss (Brazilian style)
Obrigado/a → hand over heart (gratitude)` }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Associe a imagem ao cumprimento correto', promptEs: 'Asocia la imagen con el saludo correcto', options: ['🌅', '🌇', '👋', '🤝'], correctAnswer: { 'Bom dia': '🌅', 'Boa tarde': '🌇', 'Oi': '👋', 'Tchau': '🤝' }, explanation: 'Connect each greeting with a specific Brazilian social scene.', explanationEs: 'Conecta cada saludo con una escena social brasileña específica.', xpReward: 15 },
      { type: 'dictation', prompt: 'Ouça e escreva: "Olá! Tudo bem? Meu nome é Lucas."', correctAnswer: 'Olá! Tudo bem? Meu nome é Lucas.', explanation: 'Dictation trains sound-to-spelling in Brazilian Portuguese.', explanationEs: 'El dictado entrena sonido-ortografía en portugués brasileño.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Crie uma história pessoal para "Tchau": qual imagem ajuda você a lembrar? Escreva uma frase.', correctAnswer: 'open', explanation: 'Personal mnemonic stories are 40% more effective.', explanationEs: 'Las historias mnemónicas personales son 40% más efectivas.', xpReward: 15 },
      { type: 'interleaved', prompt: 'Responda rápido: É manhã, você cumprimenta um amigo. É noite, você se despede. Você diz ___ de manhã. Você diz ___ à noite.', correctAnswer: ['Bom dia / Oi', 'Boa noite / Tchau'], explanation: 'Context mixing builds automatic time-of-day discrimination.', explanationEs: 'Mezclar contextos desarrolla discriminación automática de momento del día.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Repita com o áudio: "Oi! Tudo bem? Prazer em conhecer você!"', correctAnswer: 'Oi! Tudo bem? Prazer em conhecer você!', explanation: 'Shadowing trains Brazilian Portuguese rhythm and pronunciation.', explanationEs: 'El shadowing entrena el ritmo y pronunciación del portugués brasileño.', xpReward: 20 }
    ],
    xpReward: 85, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['vocabulário', 'cumprimentos', 'srs', 'mnemônicos']
  },

  // ─────────────────────────────────────────
  //  PORTUGUESE A1 — GRAMMAR: Ser & Estar
  // ─────────────────────────────────────────

  {
    languageCode: 'pt', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Ser e Estar — Conjugação Ativa',
    titleEs: 'Ser y Estar — Conjugación activa',
    description: 'Master the two "to be" verbs in Brazilian Portuguese through dictation and sentence reconstruction.',
    descriptionEs: 'Domina los dos verbos "ser/estar" en portugués brasileño a través de dictado y reconstrucción.',
    objectives: ['Conjugate ser and estar in present', 'Know when to use each verb', 'Use them in natural sentences'],
    objectivesEs: ['Conjugar ser y estar en presente', 'Saber cuándo usar cada verbo', 'Usarlos en oraciones naturales'],
    content: [
      { type: 'text', content: 'SER = permanent (identity, nationality, profession): "Eu sou brasileiro" (I am Brazilian). ESTAR = temporary (location, states, emotions): "Eu estou cansado" (I am tired).', contentEs: 'SER = permanente (identidad, nacionalidad, profesión): "Eu sou brasileiro". ESTAR = temporal (ubicación, estados, emociones): "Eu estou cansado".' },
      { type: 'tip', content: 'Memory trick: SER → "esser" permanent like your essence. ESTAR → "estar" temporary like a temporary job or staying somewhere.', contentEs: 'Truco de memoria: SER → "esser" permanente como tu esencia. ESTAR → "estar" temporal como un trabajo temporal o estar en algún lugar.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Ouça e escreva: "Nós somos estudantes. Eu estou em São Paulo."', correctAnswer: 'Nós somos estudantes. Eu estou em São Paulo.', xpReward: 20 },
      { type: 'scramble', prompt: 'Reconstrua: "médica / Ela / é / uma"', correctAnswer: 'Ela é uma médica.', explanation: 'Word order: Subject + Verb + rest. "Médica" for female doctor.', explanationEs: 'Orden: Sujeto + Verbo + resto. "Médica" para doctora mujer.', xpReward: 15 },
      { type: 'dictation', prompt: 'Ouça e escreva: "Você está cansado? Estou feliz hoje. Estamos no Brasil."', correctAnswer: 'Você está cansado? Estou feliz hoje. Estamos no Brasil.', xpReward: 20 },
      { type: 'scramble', prompt: 'Reconstrua: "brasileiro / Nós / somos"', correctAnswer: 'Nós somos brasileiros.', explanation: 'Nationality adjective follows verb, agrees in gender (brasileiro/brasileira).', explanationEs: 'El adjetivo de nacionalidad sigue al verbo, concuerda en género.', xpReward: 15 },
      { type: 'cloze', prompt: 'Complete: "Eu ___ de Bogotá (permanente). Ela ___ cansada (temporal). Nós ___ no Brasil." (sou/está/estamos)', correctAnswer: ['sou', 'está', 'estamos'], explanation: 'sou (permanent origin), está (temporary state), estamos (location).', explanationEs: 'sou (origen permanente), está (estado temporal), estamos (ubicación).', xpReward: 20 },
      { type: 'shadowing', prompt: 'Repita rápido: "Eu sou, você é, ele/ela é, nós somos, vocês são, eles/elas são" — sinta o ritmo!', correctAnswer: 'Eu sou, você é, ele/ela é, nós somos, vocês são, eles/elas são', explanation: 'Chain repetition builds conjugation reflexes for ser.', explanationEs: 'La repetición encadenada desarrolla reflejos de conjugación para ser.', xpReward: 15 }
    ],
    xpReward: 105, totalDurationMinutes: 22, offlineAvailable: true, isPublished: true,
    tags: ['gramática', 'ser', 'estar', 'conjugação', 'ativo']
  },

  // ─────────────────────────────────────────
  //  PORTUGUESE A1 — VOCABULARY: Numbers
  // ─────────────────────────────────────────

  {
    languageCode: 'pt', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'Números — Ditado & Reconstrução',
    titleEs: 'Los números — Dictado y reconstrucción',
    description: 'Master Brazilian Portuguese numbers 0-100 including masculine/feminine number agreement.',
    descriptionEs: 'Domina los números en portugués brasileño 0-100 incluyendo concordancia de número masculino/femenino.',
    objectives: ['Dictate numbers from audio', 'Use numbers in context (ages, prices)', 'Apply gender agreement (um/uma, dois/duas)'],
    objectivesEs: ['Dictar números del audio', 'Usar números en contexto (edades, precios)', 'Aplicar concordancia de género (um/uma, dois/duas)'],
    content: [
      { type: 'text', content: 'Portuguese has masculine/feminine numbers! Um (1 masc) / Uma (1 fem). Dois (2 masc) / Duas (2 fem). Example: dois livros (2 books, masc), duas casas (2 houses, fem).', contentEs: '¡El portugués tiene números masculinos/femeninos! Um/Uma (1), Dois/Duas (2). Ej: dois livros (2 libros, masc), duas casas (2 casas, fem).' },
      { type: 'tip', content: 'Memory trick: "um" sounds like "one" (masculine), "uma" sounds like "uma" in other contexts (feminine). When in doubt, ask: is the noun masculine or feminine?', contentEs: 'Truco de memoria: "um" suena como "one" (masculino), "uma" suena diferente (femenino). Cuando dudes, pregunta: ¿el sustantivo es masculino o femenino?' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Ouça e escreva: "Vinte e cinco, trinta e sete, quarenta e oito, setenta e dois"', correctAnswer: 'Vinte e cinco, trinta e sete, quarenta e oito, setenta e dois', xpReward: 20 },
      { type: 'scramble', prompt: 'Reconstrua: "anos / Eu / tenho / vinte e cinco"', correctAnswer: 'Eu tenho vinte e cinco anos.', explanation: 'Age in Portuguese: "Tenho [number] anos." Uses AVERE (not "to be").', explanationEs: 'Edad en portugués: "Tenho [número] anos." Usa AVERE (no "to be").', xpReward: 15 },
      { type: 'dictation', prompt: 'Ouça e escreva: "Tenho dois irmãos e uma irmã. Duas casas e um carro."', correctAnswer: 'Tenho dois irmãos e uma irmã. Duas casas e um carro.', xpReward: 20 },
      { type: 'matching', prompt: 'Associe o número à escrita', options: ['vinte e um', 'trinta e dois', 'cinquenta e três', 'oitenta e quatro'], correctAnswer: { 'vinte e um': '21', 'trinta e dois': '32', 'cinquenta e três': '53', 'oitenta e quatro': '84' }, explanation: 'Practice the Portuguese "e" (and) for compound numbers.', explanationEs: 'Practica el "e" (y) portugués para números compuestos.', xpReward: 20 },
      { type: 'task-based', prompt: 'No restaurante: "Quero dois cafés e uma salada, por favor."', correctAnswer: 'Quero dois cafés e uma salada, por favor.', explanation: 'Practice numbers with "dois/duas" agreement in a real restaurant.', explanationEs: 'Practica números con concordancia "dois/duas" en un restaurante real.', xpReward: 20 }
    ],
    xpReward: 95, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['vocabulário', 'números', 'ditado', 'reconstrução']
  },

  // ─────────────────────────────────────────
  //  PORTUGUESE A1 — VOCABULARY: Family
  // ─────────────────────────────────────────

  {
    languageCode: 'pt', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'A Família — Imagem-Match & Mnemônicos',
    titleEs: 'La familia — Association visual y mnemónica',
    description: 'Learn Brazilian Portuguese family vocabulary using mnemonic stories and image association.',
    descriptionEs: 'Aprende vocabulario de familia en portugués brasileño usando historias mnemónicas y asociación visual.',
    objectives: ['Name all immediate family members', 'Use possessive adjectives correctly', 'Create mnemonic connections'],
    objectivesEs: ['Nombrar todos los miembros de la familia inmediata', 'Usar adjetivos posesivos correctamente', 'Crear conexiones mnemónicas'],
    content: [
      { type: 'text', content: 'Family in Portuguese: o pai, a mãe, o irmão, a irmã, o filho, a filha, o avô, a avó, o tio, a tia.', contentEs: 'Familia en portugués: o pai, a mãe, o irmão, a irmã, o filho, a filha, o avô, a avó, o tio, a tia.' },
      { type: 'tip', content: 'Possessives: meu (masc) / minha (fem) = my. "Meu pai" (masc), "minha mãe" (fem), "meus filhos" (masc pl), "minhas filhas" (fem pl).', contentEs: 'Posesivos: meu (masc) / minha (fem) = mi. "Meu pai" (masc), "minha mãe" (fem), "meus filhos" (masc pl), "minhas filhas" (fem pl).' }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Associe a palavra família à imagem correta', promptEs: 'Asocia la palabra de familia con la imagen correcta', options: ['👨', '👩', '👦', '👧'], correctAnswer: { 'o pai': '👨', 'a mãe': '👩', 'o filho': '👦', 'a filha': '👧' }, explanation: 'Visual association locks vocabulary in long-term memory.', explanationEs: 'La asociación visual bloquea el vocabulario en memoria a largo plazo.', xpReward: 15 },
      { type: 'dictation', prompt: 'Ouça e escreva: "Minha mãe se chama Rosa. Meu pai se chama João."', correctAnswer: 'Minha mãe se chama Rosa. Meu pai se chama João.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Crie um mnemônico para "avó" (= abuela): qual palavra na sua língua lembra você de "avó"?', correctAnswer: 'open', explanation: 'Family terms with personal mnemonics are highly memorable.', explanationEs: 'Términos de familia con mnemónicos personales son muy memorables.', xpReward: 15 },
      { type: 'cloze', prompt: 'Complete: "___ mãe é professora. Tenho ___ irmão e ___ irmã." (Minha/um/uma)', correctAnswer: ['Minha', 'um', 'uma'], explanation: 'Minha (possessive fem), um (masc), uma (fem).', explanationEs: 'Minha (posesivo fem), um (masc), uma (fem).', xpReward: 15 },
      { type: 'matching', prompt: 'Associe a palavra portuguesa ao espanhol', options: ['pai', 'mãe', 'irmão', 'avó'], correctAnswer: { 'pai': 'padre', 'mãe': 'madre', 'irmão': 'hermano', 'avó': 'abuela' }, explanation: 'Portuguese and Spanish share Latin roots — many words look similar!', explanationEs: 'Portugués y español comparten raíces latinas — ¡muchas palabras se ven similares!', xpReward: 15 }
    ],
    xpReward: 80, totalDurationMinutes: 16, offlineAvailable: true, isPublished: true,
    tags: ['vocabulário', 'família', 'possessivos', 'mnemônicos']
  },

  // ─────────────────────────────────────────
  //  PORTUGUESE A1 — GRAMMAR: Regular -AR Verbs
  // ─────────────────────────────────────────

  {
    languageCode: 'pt', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 2,
    title: 'Verbos Regulares em -AR — Conjugação Ativa',
    titleEs: 'Verbos regulares en -AR — Conjugación activa',
    description: 'Master regular -AR verb conjugation in Brazilian Portuguese through sentence reconstruction.',
    descriptionEs: 'Domina la conjugación de verbos regulares en -AR en portugués brasileiro.',
    objectives: ['Identify -AR verbs', 'Conjugate them in present tense', 'Use them in natural sentences'],
    objectivesEs: ['Identificar verbos en -AR', 'Conjugarlos en presente', 'Usarlos en oraciones naturales'],
    content: [
      { type: 'text', content: 'Most common Portuguese verb group. Remove -AR and add: -o, -a, -a, -amos, -am. Example: FALAR → eu falo, você fala, ele fala, nós falamos, vocês falam, eles falam.', contentEs: 'El grupo de verbos más común en portugués. Quita -AR y agrega: -o, -a, -a, -amos, -am. Ejemplo: FALAR → eu falo, você fala, ele fala, nós falamos, vocês falam, eles falam.' },
      { type: 'tip', content: 'Common -AR verbs: falar (speak), trabalhar (work), morar (live), estudar (study), gostar (like), comprar (buy), comer (eat), necesitar (need).', contentEs: 'Verbos -AR comunes: falar (hablar), trabalhar (trabajar), morar (vivir), estudiar (estudiar), gostar (gustar), comprar (comprar), comer (comer), necesitar (necesitar).' }
    ],
    exercises: [
      { type: 'scramble', prompt: 'Reconstrua: "português / Nós / falamos"', correctAnswer: 'Nós falamos português.', explanation: 'Language after falar = no article: "falar português" not "falar o português".', explanationEs: 'Idioma después de falar = sin artículo: "falar português" no "falar o português".', xpReward: 15 },
      { type: 'dictation', prompt: 'Ouça e escreva: "Eu moro em São Paulo. Você trabalha muito. Nós estudamos à noite."', correctAnswer: 'Eu moro em São Paulo. Você trabalha muito. Nós estudamos à noite.', xpReward: 25 },
      { type: 'cloze', prompt: 'Conjugue: "Eu ___ (estudar) inglês. Nós ___ (trabalhar) em Brasília. Vocês ___ (gostar) de música?"', correctAnswer: ['estudo', 'trabalhamos', 'gostam'], explanation: '-AR: eu -o, nós -amos, vocês -am.', explanationEs: '-AR: eu -o, nós -amos, vocês -am.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Repita rápido: "Eu falo, você fala, ele/ela fala, nós falamos, vocês falam, eles/elas falam" — sinta o ritmo!', correctAnswer: 'Eu falo, você fala, ele/ela fala, nós falamos, vocês falam, eles/elas falam', explanation: 'Rapid chain shadowing builds conjugation reflexes.', explanationEs: 'El shadowing encadenado rápido desarrolla reflejos de conjugación.', xpReward: 20 },
      { type: 'task-based', prompt: 'Descreva seu dia: "Eu me levanto às sete. Como早饭. Vou ao trabalho..."', correctAnswer: 'open', explanation: 'Use -AR verbs to describe your daily routine in Portuguese.', explanationEs: 'Usa verbos -AR para describir tu rutina diaria en portugués.', xpReward: 20 }
    ],
    xpReward: 95, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['gramática', 'verbos-AR', 'conjugação', 'presente']
  },

  // ─────────────────────────────────────────
  //  PORTUGUESE A1 — VOCABULARY: Daily Routine
  // ─────────────────────────────────────────

  {
    languageCode: 'pt', level: 'A1', module: 'vocabulary',
    order: 4, unitNumber: 2,
    title: 'Rotina Diária — Imagem-Match & Contexto',
    titleEs: 'La rutina diaria — Association visual y contexto',
    description: 'Learn daily routine vocabulary using image association and real-context sentences.',
    descriptionEs: 'Aprende vocabulario de rutina diaria usando asociación visual y oraciones de contexto real.',
    objectives: ['Name daily activities in Portuguese', 'Use time expressions', 'Describe your routine'],
    objectivesEs: ['Nombrar actividades diarias en portugués', 'Usar expresiones de tiempo', 'Describir tu rutina'],
    content: [
      { type: 'text', content: 'Daily routine: acordar (wake up), tomar café (have breakfast), ir trabalhar (go to work), almoçar (have lunch), jantar (have dinner), dormir (sleep).', contentEs: 'Rutina diaria: acordar (despertarse), tomar café (desayunar), ir trabalhar (ir al trabajo), almoçar (almorzar), jantar (cenar), dormir (dormir).' },
      { type: 'tip', content: 'In Brazil, "café" means breakfast, not just coffee! "Tomar café" = to have breakfast. "Almoço" = lunch, "jantar" = dinner (evening meal).', contentEs: 'En Brasil, "café" significa desayuno, ¡no solo café! "Tomar café" = desayunar. "Almoço" = almuerzo, "jantar" = cena.' }
    ],
    exercises: [
      { type: 'matching', prompt: 'Associe o verbo à imagem', options: ['acordar', 'tomar café', 'trabalhar', 'dormir'], correctAnswer: { 'acordar': '⏰', 'tomar café': '🥐', 'trabalhar': '💼', 'dormir': '🛏️' }, explanation: 'Connect each verb with a vivid morning routine scene.', explanationEs: 'Conecta cada verbo con una escena vívida de rutina matutina.', xpReward: 15 },
      { type: 'dictation', prompt: 'Ouça e escreva: "Eu acordo às seis. Tomo café às sete. Vou trabalhar às oito."', correctAnswer: 'Eu acordo às seis. Tomo café às sete. Vou trabalhar às oito.', xpReward: 25 },
      { type: 'fill-in-blank', prompt: '"Eu ___ às 7 horas." (despertarse)', correctAnswer: 'acordo', explanation: 'acordar → eu acordo (remove -ar, add -o).', explanationEs: 'acordar → eu acordo (quitar -ar, agregar -o).', xpReward: 15 },
      { type: 'task-based', prompt: 'Descreva sua rotina: "O que você faz de manhã? Eu acordo, eu..."', correctAnswer: 'open', explanation: 'Use time expressions and daily verbs together.', explanationEs: 'Usa expresiones de tiempo y verbos diarios juntos.', xpReward: 20 }
    ],
    xpReward: 75, totalDurationMinutes: 16, offlineAvailable: true, isPublished: true,
    tags: ['vocabulário', 'rotina-diária', 'contexto', 'ativo']
  },

  // ─────────────────────────────────────────
  //  PORTUGUESE A1 — READING: A Day in Brazil
  // ─────────────────────────────────────────

  {
    languageCode: 'pt', level: 'A1', module: 'reading',
    order: 1, unitNumber: 2,
    title: 'Leitura: Um Dia no Brasil',
    titleEs: 'Lectura: Un día en Brasil',
    description: 'Read and understand a short text about daily life in Brazil using active comprehension strategies.',
    descriptionEs: 'Lee y comprende un texto corto sobre la vida cotidiana en Brasil usando estrategias activas de comprensión.',
    objectives: ['Understand written self-descriptions', 'Identify routine activities', 'Answer comprehension questions'],
    objectivesEs: ['Comprender autodescripciones escritas', 'Identificar actividades rutinarias', 'Responder preguntas de comprensión'],
    content: [
      { type: 'example', content: `TEXTO — "Um Dia no Brasil":
Olá! Meu nome é Lucas e eu moro em São Paulo, no Brasil. Eu tenho 26 anos e sou engenheiro.

De manhã, eu acordo às seis horas e tomo café. Depois, vou trabalhar de metrô. No trabalho, eu falo muito em inglês porque a empresa é internacional.

À noite, eu gosto de assistir futebol na televisão. No fim de semana, eu visito minha família ou saio com amigos.

O Brasil é um país incrível! Tem muito sol, música e comida deliciosa. Eu adoro morar aqui!` },
      { type: 'tip', content: 'Key words: de manhã = in the morning, à noite = at night, no fim de semana = on the weekend, adorar = to love (very much), sair = to go out.', contentEs: 'Palabras clave: de manhã = por la mañana, à noite = por la noche, no fim de semana = el fin de semana, adorar = encantar (mucho), sair = salir.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Ouça e escreva: "Eu moro em São Paulo. Vou trabalhar de metrô. Gosto de assistir futebol."', correctAnswer: 'Eu moro em São Paulo. Vou trabalhar de metrô. Gosto de assistir futebol.', xpReward: 20 },
      { type: 'multiple-choice', prompt: 'Onde Lucas trabalha?', options: ['Em casa', 'No hospital', 'Em uma empresa internacional', 'Na escola'], correctAnswer: 'Em uma empresa internacional', xpReward: 15 },
      { type: 'cloze', prompt: 'Complete: "Lucas ___ (ter) 26 anos. Ele ___ (ir) trabalhar de metrô. Ele ___ (gostar) de futebol." (tem/vai/gosta)', correctAnswer: ['tem', 'vai', 'gosta'], explanation: 'tem (has), vai (goes), gosta (likes).', explanationEs: 'tem (tiene), vai (va), gosta (le gusta).', xpReward: 15 },
      { type: 'true-false', prompt: 'Lucas fala inglês no trabalho porque a empresa é internacional.', correctAnswer: true, xpReward: 10 },
      { type: 'translation', prompt: 'Traduza do texto: "Eu adoro morar aqui!"', correctAnswer: '¡Me encanta vivir aquí!', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['leitura', 'Brasil', 'cotidiano', 'compreensão']
  }
];