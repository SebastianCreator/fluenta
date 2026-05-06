// data/lessons/it_A1_active.js — Italian A1 con métodos de aprendizaje activos
module.exports = [

  // ══════════════════════════════════════════════════════
  //  MODULE: VOCABULARY — SRS + Dictation + Image-Match
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'it', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Saluti e Presentazioni — Metodo Attivo & SRS',
    titleEs: 'Saludos y presentaciones — Método activo y SRS',
    description: 'Master Italian greetings using spaced repetition, audio dictation and mnemonic stories.',
    descriptionEs: 'Domina los saludos italianos usando repetición espaciada, audio y historias mnemónicas.',
    objectives: ['Recall Italian greetings without cues', 'Distinguish formal and informal', 'Create mnemonic connections'],
    objectivesEs: ['Recordar saludos italianos sin pistas', 'Distinguir formal e informal', 'Crear conexiones mnemónicas'],
    content: [
      { type: 'text', content: 'SRS Method: Review each greeting 3 times at increasing intervals. Active retrieval builds permanent vocabulary memory.', contentEs: 'Método SRS: Repasa cada saludo 3 veces en intervalos crecientes. La recuperación activa construye vocabulario permanente.' },
      { type: 'tip', content: '"Ciao" is used for BOTH hello and goodbye with friends — like Spanish "chao". "Buongiorno" = good morning/day (until ~4pm). "Buonasera" = good evening (after ~4pm).', contentEs: '"Ciao" se usa para HOLA y ADIÓS con amigos — como "chao" en español. "Buongiorno" = buenos días (hasta ~4pm). "Buonasera" = buenas tardes/noches.' },
      { type: 'example', content: `Associations:
Buongiorno → morning sun + handshake
Buonasera → sunset light + elegant greeting
Ciao → two-cheek kiss (Italian style) or wave
Arrivederci → formal bow + "until I see you again"
Grazie → hand over heart as thanks
Prego → open hand offering help` }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Abbina il saluto all\'immagine corretta', promptEs: 'Empareja el saludo con la imagen correcta', options: ['🌅', '🌇', '👋', '🤝'], correctAnswer: { 'Buongiorno': '🌅', 'Buonasera': '🌇', 'Ciao': '👋', 'Arrivederci': '🤝' }, explanation: 'Each greeting has a social context — connect image to situation.', explanationEs: 'Cada saludo tiene un contexto social — conecta imagen con situación.', xpReward: 15 },
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Buongiorno, come si chiama lei?"', correctAnswer: 'Buongiorno, come si chiama lei?', explanation: 'Dictation trains sound-to-spelling connection in Italian.', explanationEs: 'El dictado entrena la conexión sonido-ortografía en italiano.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Crea una storia personale per "Arrivederci": quale immagine ti aiuta a ricordarla? Scrivi una frase.', correctAnswer: 'open', explanation: 'Personal mnemonic stories are 40% more effective.', explanationEs: 'Las historias mnemónicas personales son 40% más efectivas.', xpReward: 15 },
      { type: 'interleaved', prompt: 'Rispondi velocemente: È mattina, saluti un amico. È sera, saluti il capo. Dici ___ a un amico. Dici ___ al capo.', correctAnswer: ['Ciao', 'Buongiorno / Buonasera'], explanation: 'Mixing formal/informal contexts builds automatic discrimination.', explanationEs: 'Mezclar contextos formal/informal desarrolla discriminación automática.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Ripeti con l\'audio: "Ciao! Mi chiamo Marco. Piacere di conoscerti!"', correctAnswer: 'Ciao! Mi chiamo Marco. Piacere di conoscerti!', explanation: 'Shadowing trains Italian pronunciation rhythm and muscle memory.', explanationEs: 'El shadowing entrena el ritmo y la memoria muscular de pronunciación italiana.', xpReward: 20 }
    ],
    xpReward: 85, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['vocabolario', 'saluti', 'srs', 'mnemonici']
  },

  // ─────────────────────────────────────────
  //  ITALIAN A1 — GRAMMAR: Essere & Avere
  // ─────────────────────────────────────────

  {
    languageCode: 'it', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Essere e Avere — Coniugazione Attiva',
    titleEs: 'Essere y Avere — Conjugación activa',
    description: 'Master the two essential Italian verbs through dictation, sentence reconstruction and conjugation chains.',
    descriptionEs: 'Domina los dos verbos esenciales italianos a través de dictado, reconstruir oraciones y cadenas de conjugación.',
    objectives: ['Conjugate essere and avere in present', 'Use them in real contexts', 'Express age and identity correctly'],
    objectivesEs: ['Conjugar essere y avere en presente', 'Usarlos en contextos reales', 'Expresar edad e identidad correctamente'],
    content: [
      { type: 'text', content: 'Essere (to be) and Avere (to have) are the most used verbs in Italian. Like French, Italian uses AVERE for age: "Ho venti anni" (I am 20).', contentEs: 'Essere (ser/estar) y Avere (tener) son los verbos más usados en italiano. Como en francés, el italiano usa AVERE para la edad: "Ho venti anni".' },
      { type: 'tip', content: 'Memory trick: ESSERE = identity, location, characteristics. AVERE = possessions, age, expressions (ho fame = I\'m hungry, ho caldo = I\'m hot).', contentEs: 'Truco de memoria: ESSERE = identidad, ubicación, características. AVERE = posesiones, edad, expresiones (ho fame = tengo hambre, ho caldo = tengo calor).' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Noi siamo studenti. Io ho venticinque anni."', correctAnswer: 'Noi siamo studenti. Io ho venticinque anni.', xpReward: 20 },
      { type: 'scramble', prompt: 'Ricostruisci: "studente / Lei / è / un"', correctAnswer: 'Lei è una studentessa.', explanation: 'Word order: Subject + Verb + rest. "Studentessa" for female student.', explanationEs: 'Orden: Sujeto + Verbo + resto. "Studentessa" para estudiante mujer.', xpReward: 15 },
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Tu hai un gatto. Esso è nero. Io sono contenta."', correctAnswer: 'Tu hai un gatto. Esso è nero. Io sono contenta.', xpReward: 20 },
      { type: 'scramble', prompt: 'Ricostruisci: "italiano / Noi / di / siamo"', correctAnswer: 'Noi siamo italiani.', explanation: 'Nationality adjective goes after the verb and agrees in gender.', explanationEs: 'El adjetivo de nacionalidad va después del verbo y concuerda en género.', xpReward: 15 },
      { type: 'cloze', prompt: 'Completa: "___ gatto è nero. ___ amico è a Roma. ___ (noi) ___ fame." (Il/L\'/Noi/abbiamo)', correctAnswer: ['Il', 'L\'', 'Noi', 'abbiamo'], explanation: 'gatto=il (masc), amico=l\' (before vowel), noi=abbiamo.', explanationEs: 'gatto=il (masc), amico=l\' (antes de vocal), noi=abbiamo.', xpReward: 20 },
      { type: 'shadowing', prompt: 'Ripeti velocemente: "Io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono" — senti il ritmo!', correctAnswer: 'Io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono', explanation: 'Rapid chain repetition builds conjugation reflexes.', explanationEs: 'La repetición encadenada rápida desarrolla reflejos de conjugación.', xpReward: 15 }
    ],
    xpReward: 105, totalDurationMinutes: 22, offlineAvailable: true, isPublished: true,
    tags: ['grammatica', 'essere', 'avere', 'coniugazione', 'attivo']
  },

  // ─────────────────────────────────────────
  //  ITALIAN A1 — VOCABULARY: Numbers
  // ─────────────────────────────────────────

  {
    languageCode: 'it', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'I Numeri — Dettato & Ricostruzione',
    titleEs: 'Los números — Dictado y reconstrucción',
    description: 'Master Italian numbers 0-100 including the vowel-dropping rule (venti + uno = ventuno).',
    descriptionEs: 'Domina los números italianos 0-100 incluyendo la regla de eliminación de vocales (venti + uno = ventuno).',
    objectives: ['Dictate numbers from audio', 'Understand Italian vowel-dropping (21, 81...)', 'Use numbers in real contexts'],
    objectivesEs: ['Dictar números del audio', 'Entender la eliminación de vocales italiana (21, 81...)', 'Usar números en contextos reales'],
    content: [
      { type: 'text', content: 'Italian drops the final vowel when adding 1 or 8: venti + uno = ventuno (not "ventiuno"). Same for 28: ventotto (not "ventiotto"). All tens follow this: trenta + uno = trentuno.', contentEs: 'El italiano elimina la vocal final al agregar 1 u 8: venti + uno = ventuno (no "ventiuno"). Lo mismo para 28: ventotto (no "ventiotto").' },
      { type: 'tip', content: 'Memory trick: Imagine the numbers "holding hands" — they merge vowels when they meet! venti + uno = ventuno (i+o=u, compact and easy).', contentEs: 'Truco de memoria: Imagina los números "dándose la mano" — ¡mezclan vocales cuando se encuentran! venti + uno = ventuno.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Ventuno, trentadue, quarantacinque, settantotto"', correctAnswer: 'Ventuno, trentadue, quarantacinque, settantotto', xpReward: 20 },
      { type: 'scramble', prompt: 'Ricostruisci: "anni / Ho / ventotto"', correctAnswer: 'Ho ventotto anni.', explanation: 'Age in Italian: "Ho [number] anni." Uses AVERE, not "to be".', explanationEs: 'Edad en italiano: "Ho [número] anni." Usa AVERE, no "to be".', xpReward: 15 },
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Il mio numero è zero sei, uno sette, quattro due, nove otto."', correctAnswer: 'Il mio numero è zero sei, uno sette, quattro due, nove otto.', xpReward: 25 },
      { type: 'matching', prompt: 'Abbina il numero alla parola', options: ['ventuno', 'trentotto', 'sessantasei', 'novantadue'], correctAnswer: { 'ventuno': '21', 'trentotto': '38', 'sessantasei': '66', 'novantadue': '92' }, explanation: 'Practice the vowel-dropping rule: i+o=u, a+o=o.', explanationEs: 'Practica la regla de eliminación de vocales: i+o=u, a+o=o.', xpReward: 20 },
      { type: 'task-based', prompt: 'In un ristorante: "Vorrei due caffè e una insalata, per favore."', correctAnswer: 'Vorrei due caffè e una insalata, per favore.', explanation: 'Practice numbers in an authentic restaurant situation.', explanationEs: 'Practica números en una situación auténtica de restaurante.', xpReward: 20 }
    ],
    xpReward: 100, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['vocabolario', 'numeri', 'dettato', 'ricostruzione']
  },

  // ─────────────────────────────────────────
  //  ITALIAN A1 — GRAMMAR: Articles & Gender
  // ─────────────────────────────────────────

  {
    languageCode: 'it', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 1,
    title: 'Articoli e Genere — Riconoscimento Attivo',
    titleEs: 'Artículos y Género — Reconocimiento activo',
    description: 'Master Italian definite and indefinite articles and noun gender patterns.',
    descriptionEs: 'Domina los artículos definidos e indefinidos italianos y patrones de género.',
    objectives: ['Use il, lo, la, gli, le correctly', 'Apply gender agreement', 'Identify masculine/feminine patterns'],
    objectivesEs: ['Usar il, lo, la, gli, le correctamente', 'Aplicar concordancia de género', 'Identificar patrones masculino/femenino'],
    content: [
      { type: 'text', content: 'Italian definite articles: il (masc), lo (masc before s+consonant/z), l\' (vowel), la (fem), gli (masc pl), le (fem pl). Indefinite: un (masc), uno (masc before s+consonant/z), una (fem), un\' (fem before vowel).', contentEs: 'Artículos definidos italianos: il (masc), lo (masc antes de s+consonante/z), l\' (vocal), la (fem), gli (masc pl), le (fem pl). Indefinidos: un, uno, una, un\'.' },
      { type: 'tip', content: 'Gender patterns: nouns ending in -o → usually masculine. Nouns ending in -a → usually feminine. Nouns in -e can be either! Remember: "la problema" is WRONG — problema is masculine (il problema).', contentEs: 'Patrones de género: sustantivos en -o → generalmente masculino. En -a → generalmente femenino. Los en -e pueden ser cualquiera. ¡"la problema" es INCORRECTO — problema es masculino (il problema)!' }
    ],
    exercises: [
      { type: 'cloze', prompt: 'Completa con l\'articolo corretto: "___ libro (m) è interessante. ___ amica (f) è a Roma. ___ studente (m) studia." (Il/L\'/Lo)', correctAnswer: ['Il', "L'", 'Lo'], explanation: 'libro=il, amica=l\' (before vowel), studente=lo (before s+cons).', explanationEs: 'libro=il, amica=l\' (antes de vocal), studente=lo (antes de s+cons).', xpReward: 20 },
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Il ragazzo legge un libro. La ragazza beve il caffè."', correctAnswer: 'Il ragazzo legge un libro. La ragazza beve il caffè.', xpReward: 20 },
      { type: 'matching', prompt: 'Abbina il nome all\'articolo', options: ['libro', 'amica', 'studente', 'casa'], correctAnswer: { 'libro': 'il', 'amica': "l'", 'studente': 'lo', 'casa': 'la' }, explanation: 'l\' before vowel sound, lo before s+consonant.', explanationEs: 'l\' antes de sonido vocal, lo antes de s+consonante.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Ripeti: "il libro, l\'amica, lo studente, gli studenti, le case" — senti la differenza di genere!', correctAnswer: 'Il libro, l\'amica, lo studente, gli studenti, le case', explanation: 'Hearing article+noun together builds gender intuition.', explanationEs: 'Escuchar artículo+sustantivo juntos desarrolla intuición de género.', xpReward: 15 },
      { type: 'task-based', prompt: 'Descrivi la tua casa: "Nella mia casa c\'è il letto, la sedia, il tavolo..."', correctAnswer: 'open', explanation: 'Use definite articles when describing specific objects.', explanationEs: 'Usa artículos definidos al describir objetos específicos.', xpReward: 20 }
    ],
    xpReward: 90, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammatica', 'articoli', 'genere', 'attivo']
  },

  // ─────────────────────────────────────────
  //  ITALIAN A1 — VOCABULARY: Family
  // ─────────────────────────────────────────

  {
    languageCode: 'it', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'La Famiglia — Immagine-Match & Mnemonica',
    titleEs: 'La familia — Association visual y mnemónica',
    description: 'Learn Italian family vocabulary using mnemonic stories and image association.',
    descriptionEs: 'Aprende vocabulario de familia italiano usando historias mnemónicas y asociación visual.',
    objectives: ['Name all immediate family members', 'Use possessive adjectives correctly', 'Create mnemonic connections'],
    objectivesEs: ['Nombrar todos los miembros de la familia inmediata', 'Usar adjetivos posesivos correctamente', 'Crear conexiones mnemónicas'],
    content: [
      { type: 'text', content: 'Family in Italian: il padre, la madre, il fratello, la sorella, il figlio, la figlia, il nonno, la nonna, lo zio, la zia.', contentEs: 'Familia en italiano: il padre, la madre, il fratello, la sorella, il figlio, la figlia, il nonno, la nonna, lo zio, la zia.' },
      { type: 'tip', content: 'Important rule: NO article for immediate family with possessives! "Mio padre" (not "il mio padre"). But "Il mio cane" (not immediate family → use article).', contentEs: 'Regla importante: SIN artículo para familia inmediata con posesivos. "Mio padre" (no "il mio padre"). Pero "Il mio cane" (no familia inmediata → usa artículo).' }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Abbina la parola famiglia all\'immagine corretta', promptEs: 'Asocia la palabra de familia con la imagen correcta', options: ['👨', '👩', '👦', '👧'], correctAnswer: { 'il padre': '👨', 'la madre': '👩', 'il figlio': '👦', 'la figlia': '👧' }, explanation: 'Visual association locks vocabulary in long-term memory.', explanationEs: 'La asociación visual bloquea el vocabulario en memoria a largo plazo.', xpReward: 15 },
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Mio padre si chiama Marco. Mia madre si chiama Giulia."', correctAnswer: 'Mio padre si chiama Marco. Mia madre si chiama Giulia.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Crea un mnemonico per "la nonna" (= abuela): quale parola nella tua lingua ti ricorda "nonna"?', correctAnswer: 'open', explanation: 'Family terms with personal mnemonics are highly memorable.', explanationEs: 'Términos de familia con mnemónicos personales son muy memorables.', xpReward: 15 },
      { type: 'cloze', prompt: 'Completa: "___ madre è professoressa. ___ fratello ha vent\'anni. Ho ___ sorella." (La/Mio/una)', correctAnswer: ['La', 'Mio', 'una'], explanation: 'la + mother (with verb "è"), mio + brother, una = a.', explanationEs: 'la + madre (con verbo "è"), mio + hermano, una = una.', xpReward: 15 },
      { type: 'matching', prompt: 'Abbina la parola italiana allo spagnolo', options: ['padre', 'madre', 'fratello', 'sorella'], correctAnswer: { 'padre': 'padre', 'madre': 'madre', 'fratello': 'hermano', 'sorella': 'hermana' }, explanation: 'Italian and Spanish share Latin roots — many words look almost identical!', explanationEs: 'Italiano y español comparten raíces latinas — ¡muchas palabras se ven casi idénticas!', xpReward: 15 }
    ],
    xpReward: 80, totalDurationMinutes: 16, offlineAvailable: true, isPublished: true,
    tags: ['vocabolario', 'famiglia', 'possessivi', 'mnemonici']
  },

  // ─────────────────────────────────────────
  //  ITALIAN A1 — GRAMMAR: -ARE Verbs
  // ─────────────────────────────────────────

  {
    languageCode: 'it', level: 'A1', module: 'grammar',
    order: 3, unitNumber: 2,
    title: 'Verbi in -ARE — Coniugazione Attiva',
    titleEs: 'Verbos en -ARE — Conjugación activa',
    description: 'Master regular -ARE Italian verb conjugation through sentence reconstruction and shadowing.',
    descriptionEs: 'Aprende la conjugación de verbos regulares en -ARE a través de reconstruir oraciones.',
    objectives: ['Identify -ARE verbs', 'Conjugate them in present tense', 'Use them in natural sentences'],
    objectivesEs: ['Identificar verbos en -ARE', 'Conjugarlos en presente', 'Usarlos en oraciones naturales'],
    content: [
      { type: 'text', content: 'The most common Italian verb group. Remove -ARE and add: -o, -i, -a, -iamo, -ate, -ano. Example: PARLARE → io parlo, tu parli, lui parla, noi parliamo, voi parlate, loro parlano.', contentEs: 'El grupo de verbos más común en italiano. Quita -ARE y agrega: -o, -i, -a, -iamo, -ate, -ano. Ejemplo: PARLARE → io parlo, tu parli, lui parla, noi parliamo, voi parlate, loro parlano.' },
      { type: 'tip', content: 'Most common -ARE verbs: parlare (speak), mangiare (eat), abitare (live), studiare (study), lavorare (work), comprare (buy), guardare (watch).', contentEs: 'Verbos -ARE más comunes: parlare (hablar), mangiare (comer), abitare (vivir), studiare (estudiar), lavorare (trabajar), comprare (comprar), guardare (mirar).' }
    ],
    exercises: [
      { type: 'scramble', prompt: 'Ricostruisci: "italiano / Noi / parliamo"', correctAnswer: 'Noi parliamo italiano.', explanation: 'Language after parlare = no article: "parlare italiano" not "parlare l\'italiano".', explanationEs: 'Idioma después de parlare = sin artículo: "parlare italiano" no "parlare l\'italiano".', xpReward: 15 },
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Abito a Roma. Tu studi all\'università. Noi mangiamo a mezzogiorno."', correctAnswer: 'Abito a Roma. Tu studi all\'università. Noi mangiamo a mezzogiorno.', xpReward: 25 },
      { type: 'cloze', prompt: 'Coniuga: "Io ___ (parlare) italiano. Noi ___ (studiare) molto. Voi ___ (lavorare) in ufficio."', correctAnswer: ['parlo', 'studiamo', 'lavorate'], explanation: '-ARE: io -o, noi -iamo, voi -ate.', explanationEs: '-ARE: io -o, noi -iamo, voi -ate.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Ripeti velocemente: "Io parlo, tu parli, lui parla, noi parliamo, voi parlate, loro parlano" — senti il ritmo!', correctAnswer: 'Io parlo, tu parli, lui parla, noi parliamo, voi parlate, loro parlano', explanation: 'Rapid chain shadowing builds conjugation reflexes.', explanationEs: 'El shadowing encadenado rápido desarrolla reflejos de conjugación.', xpReward: 20 },
      { type: 'task-based', prompt: 'Descrivi la tua giornata tipo: "Mi alzo alle sette. Faccio colazione. Vado all\'università..."', correctAnswer: 'open', explanation: 'Use -ARE verbs to describe daily routine — high-frequency, practical Italian.', explanationEs: 'Usa verbos -ARE para describir tu rutina diaria — italiano práctico y de alta frecuencia.', xpReward: 20 }
    ],
    xpReward: 95, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['grammatica', 'verbi-ARE', 'coniugazione', 'presente']
  },

  // ─────────────────────────────────────────
  //  ITALIAN A1 — VOCABULARY: Colors & Descriptions
  // ─────────────────────────────────────────

  {
    languageCode: 'it', level: 'A1', module: 'vocabulary',
    order: 4, unitNumber: 2,
    title: 'I Colori — Genere & Accordo',
    titleEs: 'Los colores — Género y concordancia',
    description: 'Learn Italian colors and adjective agreement patterns.',
    descriptionEs: 'Aprende colores italianos y patrones de concordancia de adjetivos.',
    objectives: ['Name 10+ colors in Italian', 'Apply gender agreement to adjectives', 'Build descriptive sentences'],
    objectivesEs: ['Nombrar 10+ colores en italiano', 'Aplicar concordancia de género en adjetivos', 'Construir oraciones descriptivas'],
    content: [
      { type: 'text', content: 'Colors in Italian: rosso (red), blu (blue), verde (green), giallo (yellow), nero (black), bianco (white), arancione (orange), rosa (pink), viola (purple), marrone (brown).', contentEs: 'Colores en italiano: rosso, blu, verde, giallo, nero, bianco, arancione, rosa, viola, marrone.' },
      { type: 'tip', content: 'Adjective gender rule: colors ending in -o take -a for feminine. rosso → rossa, bianco → bianca, nero → nera. Colors ending in -e or consonants stay the same.', contentEs: 'Regla de género de adjetivos: colores terminados en -o toman -a para femenino. rosso → rossa, bianco → bianca, nero → nera. Los terminados en -e o consonantes se quedan igual.' }
    ],
    exercises: [
      { type: 'matching', prompt: 'Abbina il colore alla traduzione', options: ['rosso', 'blu', 'verde', 'giallo'], correctAnswer: { 'rosso': 'rojo', 'blu': 'azul', 'verde': 'verde', 'giallo': 'amarillo' }, explanation: 'Colors are high-frequency vocabulary.', explanationEs: 'Los colores son vocabulario de alta frecuencia.', xpReward: 15 },
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Il taxi è giallo. La macchina blu è bella. La camicia rossa è di mia madre."', correctAnswer: 'Il taxi è giallo. La macchina blu è bella. La camicia rossa è di mia madre.', xpReward: 20 },
      { type: 'fill-in-blank', prompt: '"La gonna ___" (roja — femenino)', correctAnswer: 'rossa', explanation: 'rosso → rossa (fem). Colors in -o add -a for feminine.', explanationEs: 'rosso → rossa (fem). Colores en -o agregan -a para femenino.', xpReward: 10 },
      { type: 'cloze', prompt: 'Accorda: "La casa bianca (fem.) è ___ (grande). Il cane nero (masc.) è ___ (piccolo)."', correctAnswer: ['grande', 'piccolo'], explanation: 'bianca stays same (ends in -a), grande/piccolo agree with noun gender.', explanationEs: 'bianca se queda igual (termina en -a), grande/piccolo concuerdan con el género del sustantivo.', xpReward: 15 },
      { type: 'task-based', prompt: 'Descrivi il tuo colore preferito: "Il mio colore preferito è il blu. Ho una maglietta blu."', correctAnswer: 'open', explanation: 'Practice both color vocabulary and adjective agreement.', explanationEs: 'Practica tanto vocabulario de colores como concordancia de adjetivos.', xpReward: 20 }
    ],
    xpReward: 80, totalDurationMinutes: 16, offlineAvailable: true, isPublished: true,
    tags: ['vocabolario', 'colori', 'aggettivi', 'genere']
  },

  // ─────────────────────────────────────────
  //  ITALIAN A1 — READING: A Day in Rome
  // ─────────────────────────────────────────

  {
    languageCode: 'it', level: 'A1', module: 'reading',
    order: 1, unitNumber: 2,
    title: 'Lettura: Una Giornata a Roma',
    titleEs: 'Lectura: Un día en Roma',
    description: 'Read and understand a short text about daily life in Rome using active comprehension strategies.',
    descriptionEs: 'Lee y comprende un texto corto sobre la vida cotidiana en Roma usando estrategias activas de comprensión.',
    objectives: ['Understand written self-descriptions', 'Identify routine activities', 'Answer comprehension questions'],
    objectivesEs: ['Comprender autodescripciones escritas', 'Identificar actividades rutinarias', 'Responder preguntas de comprensión'],
    content: [
      { type: 'example', content: `TESTO — "La mia vita a Roma":
Ciao! Mi chiamo Giulia. Ho 24 anni e abito a Roma, la capitale d\'Italia. Roma è una città meravigliosa!

La mattina, mi alzo alle sette e faccio colazione. Poi prendo l\'autobus per andare all\'università. Studio architettura.

Il pomeriggio, studio in biblioteca o passeggio nel centro storico. La sera, ceniamo con la mia famiglia o vedo i miei amici.

Roma ha monumenti incredibili: il Colosseo, il Vaticano, la Fontana di Trevi. Mi piace moltissimo vivere qui!` },
      { type: 'tip', content: 'Key words: abito = I live, mi alzo = I get up, faccio colazione = I have breakfast, la sera = in the evening, il pomeriggio = in the afternoon, mi piace = I like.', contentEs: 'Palabras clave: abito = vivo, mi alzo = me levanto, faccio colazione = desayuno, la sera = por la noche, il pomeriggio = por la tarde, mi piace = me gusta.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Ascolta e scrivi: "Abito a Roma. Mi alzo alle sette. Studio architettura."', correctAnswer: 'Abito a Roma. Mi alzo alle sette. Studio architettura.', xpReward: 20 },
      { type: 'multiple-choice', prompt: 'Cosa studia Giulia?', options: ['Medicina', 'Architettura', 'Ingegneria', 'Lingue'], correctAnswer: 'Architettura', xpReward: 15 },
      { type: 'cloze', prompt: 'Completa: "Giulia si ___ alle sette. Lei ___ (studiare) architettura. Lei ___ (avere) 24 anni." (alza/studia/ha)', correctAnswer: ['alza', 'studia', 'ha'], explanation: 'si alza (gets up), studia (studies), ha (has).', explanationEs: 'si alza (se levanta), studia (estudia), ha (tiene).', xpReward: 15 },
      { type: 'true-false', prompt: 'Giulia prende il metrò per andare all\'università.', correctAnswer: false, explanation: 'Prende l\'autobus: "prendo l\'autobus per andare all\'università".', explanationEs: 'Toma el autobús: "prendo l\'autobus per andare all\'università".', xpReward: 10 },
      { type: 'translation', prompt: 'Traduci dal testo: "Mi piace moltissimo vivere qui!"', correctAnswer: '¡Me gusta muchísimo vivir aquí!', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['lettura', 'Roma', 'comprensione', 'vita-quotidiana']
  }
];