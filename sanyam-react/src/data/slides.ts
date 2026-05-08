import type {
  SectionData,
  FlatSlide,
  SteeringWheelData,
  MaryadaData,
  AaharAuditData,
  TortoiseModeData,
  AntiFlexData,
  UTurnData,
  InvisibleFoundationData,
  SandwichData,
  PowerGridData,
  StoveToSolarData,
} from '../types';

/* ═══════════════════════════════════════════
   INTERACTION-SPECIFIC DATA
   ═══════════════════════════════════════════ */

export const steeringWheelData: SteeringWheelData = {
  cards: [
    {
      key: 'suppress',
      icon: 'stop',
      label: 'SUPPRESS',
      description: 'Pull the handbrake.\nForce everything to stop.',
      variant: 'danger',
    },
    {
      key: 'orient',
      icon: 'wave',
      label: 'RE-ORIENT',
      description: 'Dig the channel.\nRedirect the river.',
      variant: 'success',
    },
  ],
  suppressResult: 'Sparks. Smoke. Crash.',
  orientResult: 'Energy → Power. River → Turbine.',
};

export const maryadaData: MaryadaData = {
  foggyIcon: 'fog',
  foggyText:
    'Gray area ahead. No visibility. Every decision costs mental energy. Kusang arrives — what do you do? Your brain burns calculating…',
  clearIcon: 'map',
  clearText:
    '3 boundaries. Clear lane. Kusang arrives — already decided. Zero debates. Zero brain-burning. The lane is open.',
  buttonLabel: 'OPEN THE SHIKSHAPATRI →',
  doneLabel: '✓ MARYADA MODE: ON',
};

export const aaharAuditData: AaharAuditData = {
  senses: [
    { icon: 'eye', label: 'EYES', healthyLabel: 'KIRTAN', toxicLabel: '⚠ AUDIT' },
    { icon: 'ear', label: 'EARS', healthyLabel: 'SATSANG', toxicLabel: '⚠ AUDIT' },
    { icon: 'mouth', label: 'MOUTH', healthyLabel: 'SATVIK', toxicLabel: '⚠ AUDIT' },
    { icon: 'hand', label: 'TOUCH', healthyLabel: 'SEVA', toxicLabel: '⚠ AUDIT' },
    { icon: 'brain', label: 'MIND', healthyLabel: 'SWADHYAY', toxicLabel: '⚠ AUDIT' },
  ],
  prompt: 'TAP EACH SENSE · AUDIT YOUR DIET',
};

export const tortoiseModeData: TortoiseModeData = {
  distractions: [
    'Notification',
    'Reels',
    'WhatsApp',
    'Story Views',
    'Breaking News',
    'Mentions',
    'Background Music',
    'Overthinking',
  ],
  buttonLabel: 'WITHDRAW SENSES',
  doneCaption: 'That was Jagrata.',
};

export const antiFlexData: AntiFlexData = {
  flexTitle: 'The Highlight Reel',
  flexItems: [
    '₹15,000 sneakers',
    '₹21,000/mo rent',
    '₹40,000/mo family income',
    '500 likes · 0 peace',
    'Priorities? Backwards.',
  ],
  atmaTitle: 'Atma Reality',
  atmaItems: [
    'You are the Atma',
    'Guru ka bachcha',
    'No filter needed',
    'Algorithm can\'t rank this.',
  ],
  buttonLabel: 'UNFILTER →',
};

export const uturnData: UTurnData = {
  angryMessage:
    '"Tumhe kuch nahi pata. Mere kaam mein haath mat daalo — tum sab ek jaisa sochte ho!"',
  calmMessage:
    '"Aapki baat sun raha hoon. Shayad mere perspective mein kuch gap hai — baat karte hain?"',
  buttonLabel: 'EK SECOND PAUSE',
  doneLabel: 'EGO CANCELLED ✓',
};

export const invisibleFoundationData: InvisibleFoundationData = {
  steps: [
    { icon: 'clay', label: 'Wet Clay', sublabel: 'Raw talent, unformed' },
    { icon: 'fire', label: 'Sanyam Fire', sublabel: 'Invisible seva + deep work' },
    { icon: 'pot', label: 'Baked Pot', sublabel: 'Can hold success under pressure' },
  ],
  buttonLabel: 'NEXT STEP →',
  doneLabel: 'POT IS READY ✓',
};

export const sandwichData: SandwichData = {
  blocks: [
    { type: 'bhajan', label: 'Bhajan', sublabel: '2 min · morning' },
    { type: 'work', label: 'Deep Work', sublabel: 'focused duty' },
    { type: 'swadhyay', label: 'Swadhyay', sublabel: '2 min · close' },
  ],
  buttonLabels: ['ADD BHAJAN FIRST', 'ADD WORK BLOCK', 'ADD SWADHYAY'],
  doneText: 'SANDWICH BUILT · RESET PROTOCOL READY ✓',
};

export const powerGridData: PowerGridData = {
  nodes: [
    { icon: 'santo', label: 'SANTO' },
    { icon: 'sabha', label: 'SABHA' },
    { icon: 'suhrad', label: 'SUHRAD' },
    { icon: 'bhajan', label: 'BHAJAN' },
    { icon: 'swadhyay', label: 'SWADHYAY' },
    { icon: 'seva', label: 'SEVA' },
  ],
  prompt: 'TAP EACH NODE',
};

export const stoveToSolarData: StoveToSolarData = {
  buttonLabel: 'FACE THE SUN',
  ctaTitle: '21-Day Commitment',
  ctaBody:
    'Pick 1 Aahar habit + 1 Reset habit. Write it down. Share with your Suhrad. Start tonight.',
};

/* ═══════════════════════════════════════════
   SECTIONS WITH SUB-SLIDES
   ═══════════════════════════════════════════ */

export const sections: SectionData[] = [
  /* ═══════════════════════════════════════════════════════
     S1: Introduction — "Sanyam: Direction, Not Deletion"
     ═══════════════════════════════════════════════════════ */
  {
    id: 's1',
    sectionNumber: 1,
    principleTag: 'Indriya Nigrah · Sense Mastery',
    title: 'Sanyam: Direction, Not Deletion',
    subSlides: [
      {
        type: 'statement',
        id: 's1a',
        headline: 'Haath uthao — kitno ko lagta hai Sanyam matlab restrictions?',
        subtext: 'Let the hands go up. Now watch the flip.',
        audiencePrompt: 'Raise your hand if Sanyam = giving things up.',
      },
      {
        type: 'misconception',
        id: 's1b',
        items: [
          { wrong: 'Sanyam = Suppression', right: 'Sanyam = Redirection' },
          { wrong: 'Sanyam = Becoming boring', right: 'Sanyam = Becoming focused' },
          { wrong: 'Sanyam = Religious restriction', right: 'Sanyam = Disciplined freedom' },
          { wrong: 'Sanyam = Passive patience', right: 'Sanyam = Active self-mastery' },
        ],
        speakerNote: 'River & Dam (Vachanamrut Gadhada II-54): A blocked river floods and destroys. A channeled river powers a city. Sanyam is the channel — not the wall.',
      },
      {
        type: 'interaction',
        id: 's1c',
        interactionType: 'steering-wheel',
        onscreenText: 'Sanyam is not a \'No.\' It\'s a bigger \'Yes.\'',
        contextImage: '/assets/suppress-vs-redirect.png',
        contextImageAlt: 'Left: crash and sparks (suppress). Right: golden road, calm destination (redirect).',
        speakerNote: 'Invite volunteer to click both cards. SUPPRESS first for the laugh. Then RE-ORIENT. Punchline is integrated in resolved state.',
      },
    ],
    speakerNotes: {
      title: 'S1 · Sanyam: Direction, Not Deletion',
      open: 'Open with big energy. Ask: \'Haath uthao — kitno ko lagta hai Sanyam matlab restrictions?\' Let hands go up. Pause. Then flip.',
      prasang: 'River & Dam (Vachanamrut Gadhada II-54): A blocked river floods. A channeled river powers a city.',
      clickDirection: 'Misconception flip cards first, then steering-wheel interaction with suppress-vs-redirect image.',
      transition: '\'Steering wheel ready. But your mind is already under siege — let\'s see the numbers.\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S2: "The Silent Crisis" — Mental Health, Stress, Anxiety
     ═══════════════════════════════════════════════════════ */
  {
    id: 's2',
    sectionNumber: 2,
    principleTag: 'Mano-Nigrah · Mind Control',
    title: 'The Silent Crisis',
    subSlides: [
      {
        type: 'stat',
        id: 's2a',
        value: '70,000',
        label: 'thoughts per day — 80% are negative',
        context: 'Your brain\'s default mode is a negativity factory. Without Sanyam it runs on autopilot toward anxiety, regret, and rumination.',
        source: 'National Science Foundation / Cognitive Psychology',
      },
      {
        type: 'stat',
        id: 's2b',
        value: '35,000',
        label: 'decisions the average adult makes per day',
        context: 'Each decision burns mental fuel. Decision fatigue is real — unless the framework is already decided for you.',
        source: 'Cornell University Research',
      },
      {
        type: 'concept',
        id: 's2c',
        conceptTitle: 'Dopamine Deficit State',
        points: [
          { label: 'Pleasure ↑', description: 'Instant scroll, junk food, late-night reels', variant: 'negative' },
          { label: 'Pain ↑↑', description: 'Brain compensates — anxiety, emptiness, craving MORE', variant: 'negative' },
          { label: 'Balance', description: 'Bhajan, deep work, seva — slow dopamine = lasting satisfaction', variant: 'positive' },
        ],
        speakerNote: 'Dr. Anna Lembke (Dopamine Nation): pleasure and pain are a see-saw. Every cheap thrill creates an equal and opposite crash.',
      },
      {
        type: 'comparison',
        id: 's2d',
        leftTitle: 'Willpower = Battery',
        leftItems: ['Depletes with use', 'Crashes at night', 'Limited charges', 'Self-powered only'],
        leftVariant: 'danger',
        rightTitle: 'Bhajan = Solar',
        rightItems: ['Recharges with use', 'Refills every morning', 'Unlimited capacity', 'Guru-powered'],
        rightVariant: 'success',
      },
      {
        type: 'takeaway',
        id: 's2e',
        punchline: '"Your brain\'s default is autopilot. Sanyam is the manual override."',
        transition: 'The mind is under siege. But the biggest attacker isn\'t inside your head — it\'s in your pocket.',
      },
    ],
    speakerNotes: {
      title: 'S2 · The Silent Crisis',
      open: '70,000 thoughts. 80% negative. 35,000 decisions. Your brain is a factory running on fumes.',
      prasang: 'Dopamine Nation (Lembke): pleasure-pain see-saw. Every cheap thrill = equal crash. Bhajan is slow, sustainable dopamine.',
      clickDirection: 'Let stats land with silence. Comparison card: \'This is why willpower alone always fails.\'',
      transition: '\'The biggest attacker isn\'t in your head — it\'s in your pocket.\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S3: "The Wild Animal" — Social Media & Phone
     ═══════════════════════════════════════════════════════ */
  {
    id: 's3',
    sectionNumber: 3,
    principleTag: 'Kusang-tyag · Avoiding Toxic Intake',
    title: 'The Wild Animal',
    subSlides: [
      {
        type: 'quote',
        id: 's3a',
        quote: 'Our biggest competitor is human sleep.',
        attribution: 'Reed Hastings, Netflix CEO',
        context: 'Social media algorithms are engineered to keep you scrolling. They are not neutral. You are being hunted.',
      },
      {
        type: 'image',
        id: 's3b',
        imageSrc: '/assets/youth-distractions.png',
        caption: 'Lemon & Spoon: Focus and Control',
        subcaption: 'Life is a race where distractions grab at you from every side. Sanyam is the steady hand that keeps the spoon balanced.',
      },
      {
        type: 'image',
        id: 's3c',
        imageSrc: '/assets/phone-monster.png',
        caption: 'The Algorithm Has Hands',
        subcaption: 'Social media is engineered to grip you. Lonely → Scroll → FOMO → More isolated → Scroll more. The cycle doesn\'t break on its own.',
      },
      {
        type: 'video',
        id: 's3d',
        platform: 'local',
        videoSrc: '/assets/kids_issue.mp4',
        caption: 'Broken Homes: When Desire Meets Rejection',
        subcaption: 'Uncontrolled desire and inability to handle rejection — this is what happens when Sanyam is missing.',
      },
      {
        type: 'video',
        id: 's3e',
        videoId: 'GtaxU6DZvLs',
        platform: 'youtube',
        caption: 'Work Twice as Hard as Others',
        subcaption: 'Elon Musk on the discipline behind success. Discipline is not optional — it\'s the entry fee.',
      },
      {
        type: 'interaction',
        id: 's3f',
        interactionType: 'five-fold-aahar',
        onscreenText: 'Eyes. Ears. Mouth. Touch. Mind. All five need fasting.',
        contextImage: '/assets/hariprasad-swamiji-vision.png',
        contextImageAlt: 'Hariprasad Swamiji — Success: You don\'t need eyes. You need vision.',
      },
      {
        type: 'takeaway',
        id: 's3g',
        punchline: '"If you wouldn\'t eat from a trash can — don\'t scroll through one."',
        transition: 'Five thieves identified. How do we guard the doors? One sense at a time.',
      },
    ],
    speakerNotes: {
      title: 'S3 · The Wild Animal',
      open: 'Netflix CEO quote. Then show images. Let the visuals do the talking.',
      prasang: 'kids_issue video: show how uncontrolled desire destroys homes. Manual play — let the room absorb.',
      clickDirection: 'Five-fold aahar interaction with Hariprasad Swamiji image. Tap each sense bubble with the audience.',
      transition: '\'Five thieves identified. Guard every gate — one sense at a time.\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S4: "Guard Every Gate" — 5 Senses, Professional Life
     ═══════════════════════════════════════════════════════ */
  {
    id: 's4',
    sectionNumber: 4,
    principleTag: 'Jagrata · Constant Alertness',
    title: 'Guard Every Gate',
    subSlides: [
      {
        type: 'statement',
        id: 's4a',
        headline: 'When did you last sit without your phone — even for 2 minutes?',
        subtext: 'Not 2 hours. Just 2 minutes. That discomfort is the symptom.',
        audiencePrompt: 'Be honest with yourself.',
      },
      {
        type: 'story',
        id: 's4b',
        storyTitle: 'Kachhua — The Tortoise Defense',
        narrative:
          'The tortoise doesn\'t run from danger — it withdraws all limbs into the shell. Full retreat. Then re-emerges on its own terms. That withdrawal is not weakness.',
        source: 'Vachanamrut Gadhada I-16',
        highlight: 'Withdrawal is not escape. It\'s a tactical reset.',
      },
      {
        type: 'quote',
        id: 's4c',
        quote: 'કેટલાક ને મન રમાડે છે, કેટલાક મન ને રમાડે છે.',
        attribution: 'Swamini Vaat',
        context: 'Some are played by their mind; some play the mind. Sanyam decides which side you\'re on.',
      },
      {
        type: 'image',
        id: 's4d',
        imageSrc: '/assets/phone-on-leash.png',
        caption: 'You Hold the Leash',
        subcaption: 'Sanyam isn\'t deleting your phone — it\'s taking back control. The phone walks with you. You don\'t walk for it.',
      },
      {
        type: 'concept',
        id: 's4e',
        conceptTitle: 'The Gates Under Attack',
        points: [
          { label: 'POSH issues', description: 'One wrong look, one wrong word — career over', variant: 'negative' },
          { label: 'Attention span', description: '8 seconds — less than a goldfish', variant: 'negative' },
          { label: 'Anger & emotional outbursts', description: 'React first, regret forever', variant: 'negative' },
          { label: 'Vaani issues', description: 'Words spoken in anger that can\'t be unheard', variant: 'negative' },
          { label: 'Hardwork + Talent', description: 'Without Sanyam, talent leaks through every crack', variant: 'neutral' },
        ],
      },
      {
        type: 'video',
        id: 's4f',
        videoId: 'aT0efqZ8lws',
        platform: 'youtube-short',
        caption: 'Discipline: The Edge Nobody Sees',
      },
      {
        type: 'interaction',
        id: 's4g',
        interactionType: 'tortoise-mode',
        onscreenText: 'Elite skill: Withdraw your senses at will.',
      },
      {
        type: 'takeaway',
        id: 's4h',
        punchline: '"If you can\'t be alone with your thoughts — you\'re a prisoner of your distractions."',
        transition: 'You\'ve seen the problem. Now let\'s see the proof — from people who mastered it in the real world.',
      },
    ],
    speakerNotes: {
      title: 'S4 · Guard Every Gate',
      open: 'Ask: \'When did you last sit without your phone — even 2 minutes?\' Let the silence land.',
      prasang: 'Tortoise (Gadhada I-16): withdraws all limbs. Swamini Vaat: who plays whom?',
      clickDirection: 'Concept slide: walk through each gate. Then tortoise-mode interaction. Hold 3-4 sec of real silence.',
      transition: '\'You\'ve seen the problem. Now the proof — from the real world.\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S5: "Real-Life Sanyam" — Examples from the World
     ═══════════════════════════════════════════════════════ */
  {
    id: 's5',
    sectionNumber: 5,
    principleTag: 'Atmanishtha · Soul-Consciousness',
    title: 'Real-Life Sanyam',
    subSlides: [
      {
        type: 'story',
        id: 's5a',
        storyTitle: 'Warren Buffett: 500 Pages a Day',
        narrative:
          'Warren Buffett reads 500 pages every single day. When asked the secret to success, he pointed at a stack of books and said: "Read 500 pages every day. That\'s how knowledge works — it builds up, like compound interest." No shortcuts. No reels. Just deep, patient Sanyam.',
        highlight: '"The more you learn, the more you earn."',
      },
      {
        type: 'video',
        id: 's5b',
        videoId: 'GtaxU6DZvLs',
        platform: 'youtube',
        caption: 'Elon Musk: Work Twice as Hard',
        subcaption: '"Nobody ever changed the world on 40 hours a week." Discipline, focus, relentless work ethic.',
      },
      {
        type: 'story',
        id: 's5c',
        storyTitle: 'Donald Trump: Zero Substances',
        narrative:
          'No alcohol. No drugs. No cigarettes. Whatever you think of his politics, the man is 80+ and still running at full speed. His older brother Fred died from alcoholism. Trump chose total abstinence — a form of Sanyam that most people dismiss. Discipline despite controversy.',
        highlight: 'Relentless perseverance. No substances. Full control.',
      },
      {
        type: 'story',
        id: 's5d',
        storyTitle: '₹15,000 Jordans vs ₹21,000 Rent',
        narrative:
          'A youth, influenced by social media, buys ₹15,000 Jordans. His rent is ₹21,000. Family income: ₹40,000. He wasn\'t even earning. Ghar se pehle joote? This isn\'t financial planning — this is insecurity on sale.',
        highlight: 'Social media made him buy a life he couldn\'t afford.',
      },
      {
        type: 'comparison',
        id: 's5e',
        leftTitle: 'Borrowed Confidence',
        leftItems: ['Costs money', 'Needs an audience', 'Expires with trends', 'Algorithm-dependent'],
        leftVariant: 'danger',
        rightTitle: 'Atma Confidence',
        rightItems: ['Free', 'Self-sourced', 'Permanent', 'Guru-given'],
        rightVariant: 'success',
      },
      {
        type: 'interaction',
        id: 's5f',
        interactionType: 'anti-flex',
        onscreenText: 'Secure people don\'t flex. Only the lost need to show off.',
      },
      {
        type: 'takeaway',
        id: 's5g',
        punchline: '"Don\'t crash your real life to maintain a virtual illusion."',
        transition: 'Okay, so restraint works. But how does it actually function inside you? Let\'s open the hood.',
      },
    ],
    speakerNotes: {
      title: 'S5 · Real-Life Sanyam',
      open: 'Buffett: 500 pages/day. Musk: work twice as hard. Trump: zero substances at 80+. All forms of Sanyam.',
      prasang: '15k shoes story — social media made him buy a life he couldn\'t afford. We\'ve all done some version.',
      clickDirection: 'Anti-flex interaction: UNFILTER. Atma panel rises. \'This is what\'s real.\'',
      transition: '\'Restraint works. But how does it actually function? Let\'s open the hood.\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S6: "Restrain in Detail" — Mechanics of Restraint
     ═══════════════════════════════════════════════════════ */
  {
    id: 's6',
    sectionNumber: 6,
    principleTag: 'Vani Sanyam · Restraint in Speech',
    title: 'Restrain in Detail',
    subSlides: [
      {
        type: 'stat',
        id: 's6a',
        value: '3 sec',
        label: 'to go from hero to villain',
        context: 'Words spoken in the first 3 seconds of anger cause the most lasting damage. That window is where Vani Sanyam lives.',
      },
      {
        type: 'concept',
        id: 's6b',
        conceptTitle: 'Spring Analogy: Suppression Rebounds',
        points: [
          { label: 'Force a spring down', description: 'It stores energy — and snaps back HARDER', variant: 'negative' },
          { label: 'Suppression ≠ Sanyam', description: 'Pushing feelings down doesn\'t delete them', variant: 'negative' },
          { label: 'Redirect the energy', description: 'Channel it into bhajan, seva, deep work', variant: 'positive' },
          { label: 'Willpower is limited', description: 'Smart rules + redirection > raw suppression', variant: 'positive' },
        ],
      },
      {
        type: 'story',
        id: 's6c',
        storyTitle: 'The Cowshed Insult',
        narrative:
          'Someone insulted Bhagat directly — in front of Maharaj. The room tensed. Everyone waited for the explosion. But Bhagat stayed centered. Not passive. Not a pushover. He chose the Guru over his ego.',
        highlight: 'He didn\'t suppress his anger. He redirected it into grace.',
      },
      {
        type: 'image',
        id: 's6d',
        imageSrc: '/assets/sanyam-car-uturn.png',
        caption: 'Anger vs Sanyam',
        subcaption: 'Left: out of control, sparks, damage. Right: calm, glowing, directed. One second is the entire difference.',
      },
      {
        type: 'interaction',
        id: 's6e',
        interactionType: 'one-second-uturn',
        onscreenText: 'Your character is what you didn\'t say in anger.',
      },
      {
        type: 'takeaway',
        id: 's6f',
        punchline: '"Speech is silver. Sanyam is gold."',
        transition: 'Now we know the mechanics. But who shows us this in real life — selflessly, every single day?',
      },
    ],
    speakerNotes: {
      title: 'S6 · Restrain in Detail',
      open: '3 seconds. That\'s the window. Spring analogy: suppression rebounds. Redirect instead.',
      prasang: 'Cowshed Insult: Bhagat chose the Guru over his ego. One second of pause was the whole difference.',
      clickDirection: 'Click EK SECOND PAUSE. Watch countdown ring fill. \'That\'s Vani Sanyam in action.\'',
      transition: '\'Who shows us this selflessly, every day?\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S7: "Selfless Love and Duty"
     ═══════════════════════════════════════════════════════ */
  {
    id: 's7',
    sectionNumber: 7,
    principleTag: 'Dharma · Duty & Disciplined Work',
    title: 'Selfless Love and Duty',
    subSlides: [
      {
        type: 'story',
        id: 's7a',
        storyTitle: 'A Mother\'s Invisible Seva',
        narrative:
          'Your mother wakes up before you. Cooks without being asked. Cleans without applause. No validation, no audience, no likes — pure duty. She doesn\'t post about it. She doesn\'t need your approval. That is the highest form of Sanyam: selfless love without expectation.',
        highlight: 'No filter needed. No audience required.',
      },
      {
        type: 'story',
        id: 's7b',
        storyTitle: 'The Japan Boy — Suhradam Youth Shibir',
        narrative:
          'At the Suhradam Youth Shibir, a boy from Japan volunteered to clean the entire hall alone — before anyone asked. No instruction. No reward. When asked why, he said: "In my country, we leave a place better than we found it." Good deeds reflect culture and country.',
        highlight: 'Culture is what you do when nobody is watching.',
      },
      {
        type: 'story',
        id: 's7c',
        storyTitle: 'MBAs Washing Dishes',
        narrative:
          'Suhradam Shibir. MBAs, engineers, doctors — all mopping floors and washing bartan with full bhav. No LinkedIn post. No package attached. Pure sevabhav killing the intellectual ego.',
        highlight: 'The kitchen nobody sees is where character gets built.',
      },
      {
        type: 'image',
        id: 's7d',
        imageSrc: '/assets/hariprasad-swamiji-vision.png',
        caption: 'Success: You Don\'t Need Eyes. You Need Vision.',
        subcaption: 'Pujya Hariprasad Swamiji on the inner discipline that creates extraordinary impact.',
      },
      {
        type: 'quote',
        id: 's7e',
        quote: 'કાઈ પણ હોય, હું નવરોજ છું આવી જવાનું.',
        attribution: 'Pujya Hariprasad Swamiji Maharaj',
        context: '"Whatever happens, I am free — I will come." Unwavering commitment. Zero excuses. Total Sanyam.',
      },
      {
        type: 'story',
        id: 's7f',
        storyTitle: 'Yogiji Maharaj: The Midnight Wait',
        narrative:
          'Yogiji Maharaj waited all night for a devotee who had strayed. When the devotee returned, broken and ashamed, Maharaj didn\'t lecture. He smiled. \'I was waiting for you.\' The Guru never gives up on you.',
        highlight: 'You hit Reset — He was already waiting.',
      },
      {
        type: 'image',
        id: 's7g',
        imageSrc: '/assets/prabodh-swamiji-writing.png',
        caption: 'Tireless at 75',
        subcaption: 'Prabodh Swamiji Maharaj — travelling, writing, serving tirelessly at the age of 75. This is Sanyam in action.',
      },
      {
        type: 'image',
        id: 's7h',
        imageSrc: '/assets/hariprasad-prabodh-swamiji.png',
        caption: 'The Gunatit Purusho',
        subcaption: 'Living proof that selfless love and relentless duty can coexist in one life.',
      },
      {
        type: 'takeaway',
        id: 's7i',
        punchline: '"Talent gets you noticed. Sanyam gets you promoted."',
        transition: 'Inspired by the greats. Now — what do we actually do tomorrow morning?',
      },
    ],
    speakerNotes: {
      title: 'S7 · Selfless Love and Duty',
      open: 'Start with mother\'s selfless work. Then Japan boy. Then MBAs washing dishes. Build the arc of selfless duty.',
      prasang: 'Hariprasad Swamiji: "Kai pan hoi, Hu navroj chu aavi javanu." Yogiji Maharaj midnight wait. Prabodh Swamiji at 75.',
      clickDirection: 'Let images breathe. Hariprasad Swamiji quote should land with silence.',
      transition: '\'Inspired. Now what do we actually do tomorrow morning?\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S8: "Daily Hacks" — Practical Reset Protocol
     ═══════════════════════════════════════════════════════ */
  {
    id: 's8',
    sectionNumber: 8,
    principleTag: 'Bhajan & Swadhyay · Daily Practice',
    title: 'Daily Hacks',
    subSlides: [
      {
        type: 'statement',
        id: 's8a',
        headline: 'Change will not happen in a day.',
        subtext: 'But it starts with one.',
      },
      {
        type: 'concept',
        id: 's8b',
        conceptTitle: 'The Sandwich Technique',
        points: [
          { label: 'Bhajan (2 min)', description: 'Start your day with connection — before the phone', variant: 'positive' },
          { label: 'Deep Work', description: 'Focused duty — phone on silent, one task, full presence', variant: 'positive' },
          { label: 'Swadhyay (2 min)', description: 'End with reflection — what went right, what to reset', variant: 'positive' },
        ],
      },
      {
        type: 'image',
        id: 's8c',
        imageSrc: '/assets/how-change-created.png',
        caption: 'How Change is Created',
        subcaption: 'Idea → Thoughts → Feelings → Plan → Habits → Commitment → Lifestyle → Change. Sanyam lives at every ring.',
      },
      {
        type: 'interaction',
        id: 's8d',
        interactionType: 'sandwich-technique',
        onscreenText: 'Sanyam is how fast you hit Reset — not how often you fall.',
      },
      {
        type: 'takeaway',
        id: 's8e',
        punchline: '"A lapse in Sanyam is a broken shoelace — not a broken leg."',
        transition: 'You can\'t run this protocol alone. That\'s not weakness — that\'s wisdom.',
      },
    ],
    speakerNotes: {
      title: 'S8 · Daily Hacks',
      open: '\'Change will not happen in a day. But it starts with one.\' Introduce the Sandwich Technique.',
      prasang: 'Bhajan bookends everything. 4 minutes total. Show the change-rings image.',
      clickDirection: 'Three clicks build the sandwich. \'4 minutes. Bhajan bookends everything.\'',
      transition: '\'You can\'t run this alone. That\'s not weakness — that\'s wisdom.\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S9: "Solo Hero is a Myth" — 2+4 Rule and Sabha
     ═══════════════════════════════════════════════════════ */
  {
    id: 's9',
    sectionNumber: 9,
    principleTag: 'Satsang & Suhradbhav · Spiritual Fellowship',
    title: 'Solo Hero is a Myth',
    subSlides: [
      {
        type: 'concept',
        id: 's9a',
        conceptTitle: 'The 2+4 Rule',
        points: [
          { label: '2 ANCHORS', description: 'Santo + Suhrad — humans who will correct you', variant: 'positive' },
          { label: '4 HABITS', description: 'Sabha · Bhajan · Swadhyay · Seva', variant: 'positive' },
          { label: 'Can you name your 2 anchors right now?', description: 'An actual name. Not a concept.', variant: 'neutral' },
        ],
      },
      {
        type: 'story',
        id: 's9b',
        storyTitle: 'The Pin That Keeps the Flame',
        narrative:
          'A kerosene stove needs constant pumping to stay lit. But there\'s a tiny pin that holds the pressure. Remove the pin — the flame dies. Slowly at first. Then suddenly dark. The Sabha is your pin.',
        highlight: 'Remove yourself from the grid, and the flame dies — slowly, then suddenly.',
      },
      {
        type: 'image',
        id: 's9c',
        imageSrc: '/assets/people-in-life.png',
        caption: 'Choose Who You Let In',
        subcaption: 'Some push you to your limits. Some teach you. Some take more than they give. A few bring out the best in you.',
      },
      {
        type: 'interaction',
        id: 's9d',
        interactionType: 'power-grid',
        onscreenText: 'Sanyam is a team sport. Plug into the grid.',
      },
      {
        type: 'takeaway',
        id: 's9e',
        punchline: '"Sanyam is a team sport. Stop carrying the whole game alone."',
        transition: 'Grid connected. How do we move from trying... to just being? From pumping the stove... to facing the Sun?',
      },
    ],
    speakerNotes: {
      title: 'S9 · Solo Hero is a Myth',
      open: '2+4 Rule. Ask: \'Can you name your 2 anchors right now? An actual name.\'',
      prasang: 'Kerosene stove & pin: remove the pin, flame dies — slowly, then suddenly.',
      clickDirection: 'Ask audience to name one person for each node. When all 6 light up — hold it.',
      transition: '\'Grid connected. How do we move from trying... to just being?\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S10: "Stop Pumping. Start Facing." — Guru-bhav
     ═══════════════════════════════════════════════════════ */
  {
    id: 's10',
    sectionNumber: 10,
    principleTag: 'Guru-bhav · Devotion to the Teacher',
    title: 'Stop Pumping. Start Facing.',
    subSlides: [
      {
        type: 'comparison',
        id: 's10a',
        leftTitle: 'Kerosene Stove',
        leftItems: ['Constant pumping', 'Smoke and effort', 'Runs out of fuel', 'Self-dependent'],
        leftVariant: 'muted',
        rightTitle: 'Solar Panel',
        rightItems: ['Just face the sun', 'Clean, effortless', 'Unlimited energy', 'Guru-dependent'],
        rightVariant: 'success',
      },
      {
        type: 'story',
        id: 's10b',
        storyTitle: 'The Sun Never Stopped',
        narrative:
          'Yogiji Maharaj said: \'The Guru is the Sun — always shining, always constant, always full. The solar panel has only one job: face toward Him.\' The alignment itself is Sanyam. Not straining. Not forcing. Just turning.',
        highlight: 'You don\'t CREATE the energy. You RECEIVE it by facing the right direction.',
      },
      {
        type: 'image',
        id: 's10c',
        imageSrc: '/assets/hariprasad-prabodh-swamiji.png',
        caption: 'Face the Guru. Receive the Light.',
        subcaption: 'The solar panel has one job: face toward Him. That alignment — that turning — is Sanyam.',
      },
      {
        type: 'interaction',
        id: 's10d',
        interactionType: 'stove-to-solar',
        onscreenText: 'Stop pumping the stove. Turn your face to the Sun.',
      },
      {
        type: 'takeaway',
        id: 's10e',
        punchline: '"The Guru is the Sun. Sanyam is just... turning your face."',
        closingCta: 'Jai Swaminarayan',
      },
    ],
    speakerNotes: {
      title: 'S10 · Stop Pumping. Start Facing.',
      open: 'Two energy systems: Stove (willpower — exhausting) vs Solar (Guru-bhav — effortless alignment).',
      prasang: 'Yogiji Maharaj: The Guru is the Sun. The solar panel\'s job: face toward Him.',
      clickDirection: 'Click FACE THE SUN. Bar fills. CTA appears. Hold 4 seconds of silence. End: \'Jai Swaminarayan.\'',
      transition: '— Final. Close with conviction and silence. —',
    },
  },
];

export const TOTAL_SECTIONS = sections.length;

/* ═══════════════════════════════════════════
   HELPER — flatten sections into linear slide list
   ═══════════════════════════════════════════ */

export function flattenSections(secs: SectionData[]): FlatSlide[] {
  const flat: FlatSlide[] = [];
  let gi = 0;
  secs.forEach((sec, si) => {
    sec.subSlides.forEach((sub, li) => {
      flat.push({
        globalIndex: gi++,
        sectionIndex: si,
        localIndex: li,
        localTotal: sec.subSlides.length,
        section: sec,
        subSlide: sub,
      });
    });
  });
  return flat;
}
