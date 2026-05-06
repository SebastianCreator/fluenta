// data/lessons/de_A1_active.js — German A1 con métodos de aprendizaje activos
module.exports = [

  // ══════════════════════════════════════════════════════
  //  MODULE: VOCABULARY — SRS + Dictation + Image-Match
  // ══════════════════════════════════════════════════════

  {
    languageCode: 'de', level: 'A1', module: 'vocabulary',
    order: 1, unitNumber: 1,
    title: 'Begrüßungen — Aktive Methode & SRS',
    titleEs: 'Saludos — Método activo y SRS',
    description: 'Master German greetings using spaced repetition, audio dictation and mnemonic connections.',
    descriptionEs: 'Domina los saludos alemanes usando repetición espaciada, audio y conexiones mnemónicas.',
    objectives: ['Recall German greetings without cues', 'Associate sounds with spelling', 'Use formal/informal appropriately'],
    objectivesEs: ['Recordar saludos alemanes sin pistas', 'Asociar sonidos con ortografía', 'Usar formal/informal apropiadamente'],
    content: [
      { type: 'text', content: 'SRS Method: Review each greeting 3 times at increasing intervals. This builds permanent memory through active retrieval practice.', contentEs: 'Método SRS: Repasa cada saludo 3 veces en intervalos crecientes. Esto construye memoria permanente mediante práctica de recuperación activa.' },
      { type: 'tip', content: 'Mnemonic for "Guten Tag": "Good day" in English — but in German you use it all day formally. Imagine a businessman saying it with a handshake.', contentEs: 'Mnemónico para "Guten Tag": "Good day" en inglés — pero en alemán lo usas todo el día formalmente. Imagina a un hombre de negocios diciéndolo con un apretón de manos.' },
      { type: 'example', content: `Associations:
Guten Morgen → picture sunrise (until ~12h)
Guten Tag → business handshake (formal, all day)
Guten Abend → sunset (evening)
Hallo → wave from friend
Tschüs → wave back (informal)
Auf Wiedersehen → formal goodbye with slight bow` }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Ordnen Sie das Bild dem richtigen Gruß zu', promptEs: 'Ordene la imagen con el saludo correcto', options: ['🌅', '🌇', '👋', '🤝'], correctAnswer: { 'Guten Morgen': '🌅', 'Guten Abend': '🌇', 'Hallo': '👋', 'Auf Wiedersehen': '🤝' }, explanation: 'Connect each greeting with a specific visual and social context.', explanationEs: 'Conecta cada saludo con un contexto visual y social específico.', xpReward: 15 },
      { type: 'dictation', prompt: 'Hören und schreiben: "Guten Tag, wie heißen Sie?"', correctAnswer: 'Guten Tag, wie heißen Sie?', explanation: 'Dictation connects sound → German spelling → meaning.', explanationEs: 'El dictado conecta sonido → ortografía alemana → significado.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Erstellen Sie eine persönliche Geschichte für "Tschüs": Welches Bild hilft Ihnen, es zu merken? Schreiben Sie einen Satz.', correctAnswer: 'open', explanation: 'Personal mnemonic stories are 40% more effective.', explanationEs: 'Las historias mnemónicas personales son 40% más efectivas.', xpReward: 15 },
      { type: 'interleaved', prompt: 'Schnell! Was sagen Sie um 8 Uhr morgens? Um 7 Uhr abends? Wenn Sie sich von einem Freund verabschieden?', correctAnswer: ['Guten Morgen', 'Guten Abend', 'Tschüs'], explanation: 'Context mixing forces deeper retrieval from memory.', explanationEs: 'Mezclar contextos fuerza recuperación más profunda de la memoria.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Wiederholen Sie mit dem Audio: "Guten Morgen! Ich heiße Anna. Freut mich!"', correctAnswer: 'Guten Morgen! Ich heiße Anna. Freut mich!', explanation: 'Shadowing trains German pronunciation muscles and rhythm.', explanationEs: 'El shadowing entrena los músculos de pronunciación alemana y el ritmo.', xpReward: 20 }
    ],
    xpReward: 85, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['vokabular', 'grüßen', 'srs', 'mnemonik']
  },

  // ─────────────────────────────────────────
  //  GERMAN A1 — GRAMMAR: "Sein" verb
  // ─────────────────────────────────────────

  {
    languageCode: 'de', level: 'A1', module: 'grammar',
    order: 1, unitNumber: 1,
    title: 'Das Verb „Sein" — Konjugation Aktiv',
    titleEs: 'El verbo "Sein" — Conjugación activa',
    description: 'Master the German "to be" verb through dictation, sentence reconstruction and conjugation chains.',
    descriptionEs: 'Domina el verbo alemán "ser/estar" a través de dictado, reconstruir oraciones y cadenas de conjugación.',
    objectives: ['Conjugate sein in present tense', 'Use sein in real contexts', 'Distinguish informal from formal "you"'],
    objectivesEs: ['Conjugar sein en presente', 'Usar sein en contextos reales', 'Distinguir "tu" informal de "usted" formal'],
    content: [
      { type: 'text', content: 'Sein (to be) is the most important German verb. ich bin, du bist, er/sie/es ist, wir sind, ihr seid, Sie sind (formal).', contentEs: 'Sein (ser/estar) es el verbo alemán más importante. ich bin, du bist, er/sie/es ist, wir sind, ihr seid, Sie sind (formal).' },
      { type: 'tip', content: 'Capitalize SIE (formal "you") to distinguish from sie (she/they). This is a unique German rule!', contentEs: 'Escribe con mayúscula SIE (tú formal) para distinguirla de sie (ella/ellos). ¡Esta es una regla única del alemán!' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Hören und schreiben: "Wir sind Studenten. Ich bin aus Kolumbien."', correctAnswer: 'Wir sind Studenten. Ich bin aus Kolumbien.', xpReward: 20 },
      { type: 'scramble', prompt: 'Rekonstruieren Sie: "Arzt / Er / ist / ein"', correctAnswer: 'Er ist ein Arzt.', explanation: 'Word order: Subject + Verb + rest. Indefinite article after verb.', explanationEs: 'Orden: Sujeto + Verbo + resto. Artículo indefinido después del verbo.', xpReward: 15 },
      { type: 'dictation', prompt: 'Hören und schreiben: "Bist du müde? Sind Sie müde? Wir sind müde."', correctAnswer: 'Bist du müde? Sind Sie müde? Wir sind müde.', xpReward: 20 },
      { type: 'scramble', prompt: 'Rekonstruieren Sie: "Eltern / Die / sind / in Berlin"', correctAnswer: 'Die Eltern sind in Berlin.', explanation: 'Articles (der/die/das) can come first in German sentences.', explanationEs: 'Los artículos (der/die/das) pueden venir primero en oraciones alemanas.', xpReward: 15 },
      { type: 'cloze', prompt: 'Ergänzen Sie: "Ich ___ müde. Wir ___ Studenten. ___ (you formal) ___ hungrig?" (bin/sind/Sie/sind)', correctAnswer: ['bin', 'sind', 'Sind', 'sind'], explanation: 'Sie always capitalized. Sie = you (formal), sie = they/she.', explanationEs: 'Sie siempre con mayúscula. Sie = usted, sie = ellos/ella.', xpReward: 20 },
      { type: 'shadowing', prompt: 'Wiederholen Sie: "Ich bin, du bist, er ist, wir sind, ihr seid, Sie sind, sie sind" — schnell!', correctAnswer: 'Ich bin, du bist, er ist, wir sind, ihr seid, Sie sind, sie sind', explanation: 'Chain repetition builds conjugation reflexes.', explanationEs: 'La repetición encadenada desarrolla reflejos de conjugación.', xpReward: 15 }
    ],
    xpReward: 105, totalDurationMinutes: 22, offlineAvailable: true, isPublished: true,
    tags: ['grammatik', 'sein', 'konjugation', 'aktiv']
  },

  // ─────────────────────────────────────────
  //  GERMAN A1 — VOCABULARY: Numbers
  // ─────────────────────────────────────────

  {
    languageCode: 'de', level: 'A1', module: 'vocabulary',
    order: 2, unitNumber: 1,
    title: 'Zahlen — Diktat & Rekonstruktion',
    titleEs: 'Los números — Dictado y reconstrucción',
    description: 'Master German numbers 0-100 including the reversed compound system (einundzwanzig = 21).',
    descriptionEs: 'Domina los números alemanes 0-100 incluyendo el sistema invertido de compuestos (einundzwanzig = 21).',
    objectives: ['Dictate numbers from audio', 'Understand German reversed counting (21, 45...)', 'Use numbers in real contexts'],
    objectivesEs: ['Dictar números del audio', 'Entender el conteo invertido alemán (21, 45...)', 'Usar números en contextos reales'],
    content: [
      { type: 'text', content: 'German reverses compound numbers: 21 = einundzwanzig (one-and-twenty), 45 = fünfundvierzig (five-and-forty). It\'s like saying "one and twenty" instead of "twenty-one".', contentEs: 'El alemán invierte los números compuestos: 21 = einundzwanzig (uno-y-veinte), 45 = fünfundvierzig (cinco-y-cuarenta). Es como decir "uno y veinte" en vez de "veintiuno".' },
      { type: 'tip', content: 'To form numbers 21-99: ones digit + "und" + tens digit. 21 = ein(1) + und + zwanzig(20). 58 = acht(8) + und + fünfzig(50).', contentEs: 'Para formar números 21-99: dígito de unidades + "und" + dígito de decenas. 21 = ein(1) + und + zwanzig(20). 58 = acht(8) + und + fünfzig(50).' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Hören und schreiben: "Dreiundzwanzig, sechsundvierzig, einundsiebzig, fünfundachtzig"', correctAnswer: 'Dreiundzwanzig, sechsundvierzig, einundsiebzig, fünfundachtzig', xpReward: 20 },
      { type: 'scramble', prompt: 'Rekonstruieren Sie: "Jahre / Ich / bin / achtundzwanzig / alt"', correctAnswer: 'Ich bin achtundzwanzig Jahre alt.', explanation: 'Age in German: "Ich bin [number] Jahre alt."', explanationEs: 'Edad en alemán: "Ich bin [número] Jahre alt."', xpReward: 15 },
      { type: 'dictation', prompt: 'Hören und schreiben: "Meine Telefonnummer ist null drei, eins sieben, vier zwei, neun null."', correctAnswer: 'Meine Telefonnummer ist null drei, eins sieben, vier zwei, neun null.', xpReward: 25 },
      { type: 'matching', prompt: 'Ordnen Sie die Zahl dem Wort zu', options: ['einundzwanzig', 'zweiunddreißig', 'fünfundvierzig', 'sechsundsiebzig'], correctAnswer: { 'einundzwanzig': '21', 'zweiunddreißig': '32', 'fünfundvierzig': '45', 'sechsundsiebzig': '67' }, explanation: 'Practice the reversed German counting system.', explanationEs: 'Practica el sistema de conteo invertido alemán.', xpReward: 20 },
      { type: 'task-based', prompt: 'Sie bestellen im Restaurant: "Ich möchte drei Kaffee und einen Salat, bitte."', correctAnswer: 'Ich möchte drei Kaffee und einen Salat, bitte.', explanation: 'Practice numbers in a real-life restaurant situation.', explanationEs: 'Practica números en una situación real de restaurante.', xpReward: 20 }
    ],
    xpReward: 100, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['vokabular', 'zahlen', 'diktat', 'rekonstruktion']
  },

  // ─────────────────────────────────────────
  //  GERMAN A1 — GRAMMAR: Articles (der/die/das)
  // ─────────────────────────────────────────

  {
    languageCode: 'de', level: 'A1', module: 'grammar',
    order: 2, unitNumber: 2,
    title: 'Artikel: der, die, das — Aktiv Gelernt',
    titleEs: 'Artículos: der, die, das — Aprendidos activamente',
    description: 'Master German definite articles through pattern recognition, cloze exercises and mnemonic stories.',
    descriptionEs: 'Domina los artículos definidos alemanes a través de reconocimiento de patrones y ejercicios.',
    objectives: ['Use der, die, das correctly', 'Identify gender patterns', 'Apply indefinite articles ein/eine'],
    objectivesEs: ['Usar der, die, das correctamente', 'Identificar patrones de género', 'Aplicar artículos indefinidos ein/eine'],
    content: [
      { type: 'text', content: 'German has THREE forms of "the": der (masculine), die (feminine), das (neutral). Plus die for ALL plurals. With vowels: der → den before accusative masculine.', contentEs: 'El alemán tiene TRES formas de "el": der (masculino), die (femenino), das (neutro). Más die para TODOS los plurales.' },
      { type: 'tip', content: 'Gender patterns: -ung, -heit, -keit → always feminine (die). -ment, -tum → usually neutral (das). Person doing action → usually masculine (der). Always learn the article WITH the noun!', contentEs: 'Patrones de género: -ung, -heit, -keit → siempre femenino (die). -ment, -tum → generalmente neutro (das). Siempre aprende el artículo CON el sustantivo.' }
    ],
    exercises: [
      { type: 'cloze', prompt: 'Ergänzen Sie: "___ Buch ist interessant. ___ Frau ist Ärztin. ___ Kinder spielen." (Das/Die/Die)', correctAnswer: ['Das', 'Die', 'Die'], explanation: 'Buch=das (neu), Frau=die (fem), Kinder=die (pl).', explanationEs: 'Buch=das (neutro), Frau=die (fem), Kinder=die (pl).', xpReward: 20 },
      { type: 'dictation', prompt: 'Hören und schreiben: "Der Mann liest ein Buch. Die Frau trinkt Kaffee. Das Kind spielt."', correctAnswer: 'Der Mann liest ein Buch. Die Frau trinkt Kaffee. Das Kind spielt.', xpReward: 20 },
      { type: 'matching', prompt: 'Ordnen Sie das Nomen dem Artikel zu', options: ['Mann', 'Frau', 'Kind', 'Buch'], correctAnswer: { 'Mann': 'der', 'Frau': 'die', 'Kind': 'das', 'Buch': 'das' }, explanation: 'Learn articles with nouns — they are inseparable!', explanationEs: 'Aprende artículos con sustantivos — son inseparables.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Wiederholen Sie: "der Mann, die Frau, das Kind, die Kinder, ein Mann, eine Frau, ein Buch" — spüren Sie den Unterschied!', correctAnswer: 'Der Mann, die Frau, das Kind, die Kinder, ein Mann, eine Frau, ein Buch', explanation: 'Hearing article+noun together builds gender intuition.', explanationEs: 'Escuchar artículo+sustantivo juntos desarrolla intuición de género.', xpReward: 15 },
      { type: 'task-based', prompt: 'Beschreiben Sie Ihr Zimmer: "In meinem Zimmer gibt es den Tisch, die Lampe, das Bett..."', correctAnswer: 'open', explanation: 'Use definite articles when describing specific objects.', explanationEs: 'Usa artículos definidos al describir objetos específicos.', xpReward: 20 }
    ],
    xpReward: 90, totalDurationMinutes: 18, offlineAvailable: true, isPublished: true,
    tags: ['grammatik', 'artikel', 'genus', 'aktiv']
  },

  // ─────────────────────────────────────────
  //  GERMAN A1 — VOCABULARY: Family
  // ─────────────────────────────────────────

  {
    languageCode: 'de', level: 'A1', module: 'vocabulary',
    order: 3, unitNumber: 2,
    title: 'Die Familie — Bild-Assoziation & Mnemonik',
    titleEs: 'La familia — Asociación visual y mnemónica',
    description: 'Learn German family vocabulary using mnemonic stories and image association.',
    descriptionEs: 'Aprende vocabulario de familia alemán usando historias mnemónicas y asociación visual.',
    objectives: ['Name all immediate family members', 'Use possessive adjectives correctly', 'Create mnemonic connections'],
    objectivesEs: ['Nombrar todos los miembros de la familia inmediata', 'Usar adjetivos posesivos correctamente', 'Crear conexiones mnemónicas'],
    content: [
      { type: 'text', content: 'Family in German: der Vater, die Mutter, der Bruder, die Schwester, der Sohn, die Tochter, der Großvater, die Großmutter.', contentEs: 'Familia en alemán: der Vater, die Mutter, der Bruder, die Schwester, der Sohn, die Tochter, der Großvater, die Großmutter.' },
      { type: 'tip', content: 'Possessives: mein (masc/neut) / meine (fem/pl) = my. "Mein Vater" (masc), "meine Mutter" (fem), "meine Kinder" (pl).', contentEs: 'Posesivos: mein (masc/neut) / meine (fem/pl) = mi. "Mein Vater" (masc), "meine Mutter" (fem), "meine Kinder" (pl).' }
    ],
    exercises: [
      { type: 'image-match', prompt: 'Ordnen Sie das Familienwort dem Bild zu', promptEs: 'Asocia la palabra de familia con la imagen correcta', options: ['👨', '👩', '👦', '👧'], correctAnswer: { 'der Vater': '👨', 'die Mutter': '👩', 'der Sohn': '👦', 'die Tochter': '👧' }, explanation: 'Visual association locks vocabulary in long-term memory.', explanationEs: 'La asociación visual bloquea el vocabulario en memoria a largo plazo.', xpReward: 15 },
      { type: 'dictation', prompt: 'Hören und schreiben: "Meine Mutter heißt Rosa. Mein Vater heißt Pedro."', correctAnswer: 'Meine Mutter heißt Rosa. Mein Vater heißt Pedro.', xpReward: 20 },
      { type: 'mnemonic', prompt: 'Erstellen Sie einen Mnemonik für "die Großmutter" (= abuela): Welches Bild in Ihrer Sprache erinnert Sie daran?', correctAnswer: 'open', explanation: 'Family terms with personal mnemonics are highly memorable.', explanationEs: 'Términos de familia con mnemónicos personales son muy memorables.', xpReward: 15 },
      { type: 'cloze', prompt: 'Ergänzen Sie: "___ Mutter ist Ärztin. Ich habe ___ Bruder und ___ Schwester." (Meine/einen/eine)', correctAnswer: ['Meine', 'einen', 'eine'], explanation: 'meine (possessive fem), einen (accusative masc ein), eine (accusative fem ein).', explanationEs: 'meine (posesivo fem), einen (acusativo masc ein), eine (acusativo fem ein).', xpReward: 15 },
      { type: 'matching', prompt: 'Ordnen Sie zu', options: ['Vater', 'Mutter', 'Bruder', 'Schwester'], correctAnswer: { 'Vater': 'father', 'Mutter': 'mother', 'Bruder': 'brother', 'Schwester': 'sister' }, explanation: 'German and English share Germanic roots — many words look similar!', explanationEs: 'Alemán e inglés comparten raíces germánicas — ¡muchas palabras se ven similares!', xpReward: 15 }
    ],
    xpReward: 80, totalDurationMinutes: 16, offlineAvailable: true, isPublished: true,
    tags: ['vokabular', 'familie', 'possessivpronomen', 'mnemonik']
  },

  // ─────────────────────────────────────────
  //  GERMAN A1 — GRAMMAR: Present Tense Verbs
  // ─────────────────────────────────────────

  {
    languageCode: 'de', level: 'A1', module: 'grammar',
    order: 3, unitNumber: 2,
    title: 'Verben im Präsens — Konjugation Aktiv',
    titleEs: 'Verbos en presente — Conjugación activa',
    description: 'Master regular German verb conjugation in present tense.',
    descriptionEs: 'Domina la conjugación de verbos alemanes regulares en presente.',
    objectives: ['Identify verb stems', 'Apply correct endings', 'Form natural sentences'],
    objectivesEs: ['Identificar raíces verbales', 'Aplicar terminaciones correctas', 'Formar oraciones naturales'],
    content: [
      { type: 'text', content: 'German verb conjugation: remove -en/-n from infinitive, add endings: ich -, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Example: spielen → ich spiele, du spielst, er spielt...', contentEs: 'Conjugación alemana: quitamos -en del infinitivo, agregamos terminaciones: ich -, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Ejemplo: spielen → ich spiele, du spielst, er spielt...' },
      { type: 'tip', content: 'If stem ends in -t or -d, add -e before -st/-t: arbeiten → du arbeitest, er arbeitet (not "arbeits...").', contentEs: 'Si la raíz termina en -t o -d, agrega -e antes de -st/-t: arbeiten → du arbeitest, er arbeitet.' }
    ],
    exercises: [
      { type: 'scramble', prompt: 'Rekonstruieren Sie: "Deutsch / Wir / lernen"', correctAnswer: 'Wir lernen Deutsch.', explanation: 'Language names in German have no article: "Deutsch lernen" not "das Deutsch lernen".', explanationEs: 'Nombres de idiomas en alemán no llevan artículo: "Deutsch lernen" no "das Deutsch lernen".', xpReward: 15 },
      { type: 'dictation', prompt: 'Hören und schreiben: "Ich wohne in Berlin. Du arbeitest im Krankenhaus. Wir lernen Englisch."', correctAnswer: 'Ich wohne in Berlin. Du arbeitest im Krankenhaus. Wir lernen Englisch.', xpReward: 25 },
      { type: 'cloze', prompt: 'Konjugieren Sie: "Ich ___ (wohnen) in München. Er ___ (arbeiten) viel. Wir ___ (spielen) Fußball."', correctAnswer: ['wohne', 'arbeitet', 'spielen'], explanation: 'wohnen: ich -e, er -et, wir -en. arbeiten: er -et (d→et). spielen: wir -en.', explanationEs: 'wohnen: ich -e, er -et, wir -en. arbeiten: er -et (d→et). spielen: wir -en.', xpReward: 15 },
      { type: 'shadowing', prompt: 'Wiederholen Sie schnell: "Ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie wohnen" — spüren Sie den Rhythmus!', correctAnswer: 'Ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie wohnen', explanation: 'Chain conjugation builds automatic reflexes.', explanationEs: 'La conjugación encadenada desarrolla reflejos automáticos.', xpReward: 20 },
      { type: 'task-based', prompt: 'Beschreiben Sie Ihren typischen Tag: "Ich stehe um 7 Uhr auf. Ich frühstücke. Ich gehe zur Arbeit..."', correctAnswer: 'open', explanation: 'Use high-frequency -ieren verbs and daily routine vocabulary.', explanationEs: 'Usa verbos de alta frecuencia en -ieren y vocabulario de rutina diaria.', xpReward: 20 }
    ],
    xpReward: 95, totalDurationMinutes: 20, offlineAvailable: true, isPublished: true,
    tags: ['grammatik', 'verben', 'präsens', 'konjugation']
  },

  // ─────────────────────────────────────────
  //  GERMAN A1 — VOCABULARY: Daily Routine
  // ─────────────────────────────────────────

  {
    languageCode: 'de', level: 'A1', module: 'vocabulary',
    order: 4, unitNumber: 2,
    title: 'Tagesablauf — Bild-Match & Kontext',
    titleEs: 'La rutina diaria — Image-Match y contexto',
    description: 'Learn daily routine vocabulary using image association and real-context sentences.',
    descriptionEs: 'Aprende vocabulario de rutina diaria usando asociación visual y oraciones de contexto real.',
    objectives: ['Name daily activities in German', 'Use time expressions', 'Describe your routine'],
    objectivesEs: ['Nombrar actividades diarias en alemán', 'Usar expresiones de tiempo', 'Describir tu rutina'],
    content: [
      { type: 'text', content: 'Daily routine: aufstehen (get up), frühstücken (breakfast), zur Arbeit gehen (go to work), essen (eat), schlafen (sleep).', contentEs: 'Rutina diaria: aufstehen (levantarse), frühstücken (desayunar), zur Arbeit gehen (ir al trabajo), essen (comer), schlafen (dormir).' },
      { type: 'tip', content: 'Separable verbs (trennbare Verben) like "aufstehen": the prefix goes to end in main clauses: "Ich stehe um 6 Uhr auf." In subordinate clauses, together: "...dass ich um 6 Uhr aufstehe."', contentEs: 'Verbos separables (trennbare Verben) como "aufstehen": el prefijo va al final en oraciones principales: "Ich stehe um 6 Uhr auf."' }
    ],
    exercises: [
      { type: 'matching', prompt: 'Ordnen Sie das Verb dem Bild zu', options: ['aufstehen', 'frühstücken', 'arbeiten', 'schlafen'], correctAnswer: { 'aufstehen': '⏰', 'frühstücken': '🥐', 'arbeiten': '💼', 'schlafen': '🛏️' }, explanation: 'Connect each verb with a vivid morning routine scene.', explanationEs: 'Conecta cada verbo con una escena vívida de rutina matutina.', xpReward: 15 },
      { type: 'dictation', prompt: 'Hören und schreiben: "Ich stehe um sechs Uhr auf. Ich frühstücke um sieben. Ich gehe um acht zur Arbeit."', correctAnswer: 'Ich stehe um sechs Uhr auf. Ich frühstücke um sieben. Ich gehe um acht zur Arbeit.', xpReward: 25 },
      { type: 'fill-in-blank', prompt: '"Ich ___ um 7 Uhr ___." (aufstehen /起床)', correctAnswer: 'stehe auf', explanation: 'Separable verb: prefix goes to end in main clause.', explanationEs: 'Verbo separable: el prefijo va al final en la oración principal.', xpReward: 15 },
      { type: 'task-based', prompt: 'Beschreiben Sie: "Was machen Sie am Morgen? Ich stehe auf, ich..."', correctAnswer: 'open', explanation: 'Use time expressions and daily verbs together.', explanationEs: 'Usa expresiones de tiempo y verbos diarios juntos.', xpReward: 20 }
    ],
    xpReward: 75, totalDurationMinutes: 16, offlineAvailable: true, isPublished: true,
    tags: ['vokabular', 'tagesablauf', 'routine', 'aktiv']
  },

  // ─────────────────────────────────────────
  //  GERMAN A1 — READING: Steckbrief (Profile)
  // ─────────────────────────────────────────

  {
    languageCode: 'de', level: 'A1', module: 'reading',
    order: 1, unitNumber: 2,
    title: 'Lesen: Steckbrief — Profiltext',
    titleEs: 'Lectura: Ficha personal en alemán',
    description: 'Read and understand a personal profile in German using active comprehension strategies.',
    descriptionEs: 'Lee y comprende una ficha personal en alemán usando estrategias activas de comprensión.',
    objectives: ['Understand written self-descriptions', 'Identify personal details', 'Answer comprehension questions'],
    objectivesEs: ['Comprender autodescripciones escritas', 'Identificar detalles personales', 'Responder preguntas de comprensión'],
    content: [
      { type: 'example', content: `STECKBRIEF:
Name: Tobias Braun
Alter: 28 Jahre
Kommt aus: München, Deutschland
Beruf: Lehrer (teacher)
Familie: Ich habe eine Schwester. Meine Eltern wohnen in Berlin.
Hobbys: Ich spiele Fußball und lese gern Bücher.
Sprachen: Deutsch und ein bisschen Spanisch.
Motto: "Lernen macht Spaß!" (Learning is fun!)` },
      { type: 'tip', content: 'Key words: Alter=age, Beruf=profession, Familie=family, Hobbys=hobbies, Sprachen=languages, wohnen=to live, haben=to have.', contentEs: 'Palabras clave: Alter=edad, Beruf=profesión, Familie=familia, Hobbys=hobbies, Sprachen=idiomas, wohnen=vivir, haben=tener.' }
    ],
    exercises: [
      { type: 'dictation', prompt: 'Hören und schreiben: "Er kommt aus München. Er ist Lehrer. Er spielt Fußball."', correctAnswer: 'Er kommt aus München. Er ist Lehrer. Er spielt Fußball.', xpReward: 20 },
      { type: 'multiple-choice', prompt: 'Wo wohnen Tobias\' Eltern?', options: ['München', 'Berlin', 'Hamburg', 'Wien'], correctAnswer: 'Berlin', xpReward: 15 },
      { type: 'cloze', prompt: 'Ergänzen Sie: "Er ___ 28 Jahre alt. Er ___ aus Deutschland. Er ___ (haben) eine Schwester." (ist/kommt/hat)', correctAnswer: ['ist', 'kommt', 'hat'], explanation: 'ist = is (alter), kommt aus = comes from, hat = has.', explanationEs: 'ist = es (edad), kommt aus = viene de, hat = tiene.', xpReward: 15 },
      { type: 'true-false', prompt: 'Tobias spricht Englisch und Deutsch.', correctAnswer: false, explanation: 'Er spricht Deutsch und ein bisschen Spanisch, nicht Englisch.', explanationEs: 'Él habla alemán y un poco de español, no inglés.', xpReward: 10 },
      { type: 'translation', prompt: 'Übersetzen Sie: "Lernen macht Spaß!"', correctAnswer: '¡Aprender es divertido!', xpReward: 15 }
    ],
    xpReward: 75, totalDurationMinutes: 15, offlineAvailable: true, isPublished: true,
    tags: ['lesen', 'steckbrief', 'leseverstehen', 'profil']
  }
];