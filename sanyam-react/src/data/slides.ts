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
  /* ─── S1: Direction, Not Deletion ─── */
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
      },
      {
        type: 'story',
        id: 's1c',
        storyTitle: 'The River & The Dam',
        narrative:
          'A blocked river floods and destroys. A channeled river powers a city. Sanyam is the channel — not the wall. The river doesn\'t lose energy when channeled. It gains PURPOSE.',
        source: 'Vachanamrut Gadhada II-54',
        highlight: 'Channel the energy. Don\'t dam it.',
      },
      {
        type: 'interaction',
        id: 's1d',
        interactionType: 'steering-wheel',
        onscreenText: 'Sanyam is not a \'No.\' It\'s a bigger \'Yes.\'',
        contextImage: '/assets/suppress-vs-redirect.png',
        contextImageAlt: 'Left: crash and sparks (suppress). Right: golden road, calm destination (redirect).',
      },
      {
        type: 'takeaway',
        id: 's1e',
        punchline: '"Sanyam doesn\'t brake your life. It steers it."',
        transition: 'Steering wheel ready. But to redirect, you need a MAP. Bina map, speed is just danger.',
      },
    ],
    speakerNotes: {
      title: 'S1 · Sanyam: Direction, Not Deletion',
      open: 'Open with big energy. Ask: \'Haath uthao — kitno ko lagta hai Sanyam matlab restrictions?\' Let hands go up. Pause. Then flip.',
      prasang: 'River & Dam (Vachanamrut Gadhada II-54): A blocked river floods. A channeled river powers a city.',
      clickDirection: 'Invite volunteer to click both cards. SUPPRESS first for the laugh. Then RE-ORIENT.',
      transition: '\'Steering wheel ready. But to redirect, you need a MAP.\'',
    },
  },

  /* ─── S2: The Map is Already Written ─── */
  {
    id: 's2',
    sectionNumber: 2,
    principleTag: 'Agna & Maryada · Boundaries',
    title: 'The Map is Already Written',
    subSlides: [
      {
        type: 'stat',
        id: 's2a',
        value: '35,000',
        label: 'decisions the average adult makes per day',
        context: 'Each Sanyam decision burns mental fuel — unless it\'s already been made for you.',
        source: 'Cornell University Research',
      },
      {
        type: 'concept',
        id: 's2b',
        conceptTitle: 'Maryada = Highway Lane Markings',
        points: [
          { label: 'You don\'t go SLOWER in a lane', description: 'You go FASTER', variant: 'positive' },
          { label: 'Because you don\'t think about the edge', description: 'The boundary frees you', variant: 'positive' },
          { label: 'The Shikshapatri is your lane', description: 'On the highway of life', variant: 'positive' },
        ],
      },
      {
        type: 'image',
        id: 's2b2',
        imageSrc: '/assets/regret-vs-wisdom-road.png',
        caption: 'Two Roads. One Choice.',
        subcaption: 'Without Maryada: regret, guilt, distractions. With Maryada: awareness, discipline, freedom — and a destination.',
      },
      {
        type: 'interaction',
        id: 's2c',
        interactionType: 'maryada-cards',
        onscreenText: 'No map? You\'re not traveling. You\'re lost.',
      },
      {
        type: 'takeaway',
        id: 's2d',
        punchline: '"When the Shikshapatri says No — the debate is over before it starts."',
        transition: 'Map is clear. But someone is stealing your GPS signal. Five thieves — one for every sense.',
      },
    ],
    speakerNotes: {
      title: 'S2 · The Map is Already Written',
      open: 'Decision fatigue is real. 35,000 decisions/day. Each burns mental fuel — unless already made.',
      prasang: 'Maryada = highway lane markings. You go FASTER in a lane because you don\'t think about the edge.',
      clickDirection: 'Click OPEN THE SHIKSHAPATRI together. Watch fog clear.',
      transition: '\'Map is clear. But someone is stealing your GPS signal. Five thieves — one for every sense.\'',
    },
  },

  /* ─── S3: Audit Your Sensory Diet ─── */
  {
    id: 's3',
    sectionNumber: 3,
    principleTag: 'Kusang-tyag · Avoiding Toxic Intake',
    title: 'Audit Your Sensory Diet',
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
        id: 's3a2',
        imageSrc: '/assets/youth-distractions.png',
        caption: 'Running from Yourself',
        subcaption: 'Notifications, reels, junk food, anger — every distraction competes for your energy, your focus, your future.',
      },
      {
        type: 'image',
        id: 's3a3',
        imageSrc: '/assets/phone-monster.png',
        caption: 'The Algorithm Has Hands',
        subcaption: 'Social media is engineered to grip you. Lonely → Scroll → FOMO → More isolated → Scroll more. The cycle doesn\'t break on its own.',
      },
      {
        type: 'video',
        id: 's3a4',
        videoId: 'jgp0x9r5Q-0',
        platform: 'youtube-short',
        caption: 'Even Apple\'s CEO Says: Put the Phone Down',
        subcaption: '"If I\'m looking at the device more than I\'m looking into someone\'s eyes, I\'m doing the wrong thing." — Tim Cook',
      },
      {
        type: 'concept',
        id: 's3b',
        conceptTitle: 'Five-Fold Aahar: 5 Entry Points',
        points: [
          { label: 'Eyes', description: 'Doomscrolling reels vs Kirtan darshan', variant: 'negative' },
          { label: 'Ears', description: 'Gossip & negativity vs Satsang katha', variant: 'negative' },
          { label: 'Mouth', description: 'Junk food & addictions vs Satvik prasad', variant: 'negative' },
          { label: 'Touch', description: 'Inappropriate contact vs Seva with bhav', variant: 'negative' },
          { label: 'Mind', description: 'Overthinking & anxiety vs Swadhyay reflection', variant: 'negative' },
        ],
      },
      {
        type: 'interaction',
        id: 's3c',
        interactionType: 'five-fold-aahar',
        onscreenText: 'Eyes. Ears. Mouth. Touch. Mind. All five need fasting.',
      },
      {
        type: 'takeaway',
        id: 's3d',
        punchline: '"If you wouldn\'t eat from a trash can — don\'t scroll through one."',
        transition: 'Five thieves identified. How do we guard the doors? A tortoise figured it out first.',
      },
    ],
    speakerNotes: {
      title: 'S3 · Audit Your Sensory Diet',
      open: 'Netflix\'s CEO: biggest competitor is sleep. Algorithms hunt you. You\'re not scrolling — you\'re being consumed.',
      prasang: 'Five-Fold Aahar: Mouth, Eyes, Ears, Touch, Mind. Each is an entry point. Junk through any one poisons the whole system.',
      clickDirection: 'Ask: \'Haath uthao jinhe eyes wali problem zyada hai?\' Click each bubble with the room.',
      transition: '\'Five thieves identified. One ancient defensive technique — a tortoise figured it out first.\'',
    },
  },

  /* ─── S4: Pull Back to Move Forward ─── */
  {
    id: 's4',
    sectionNumber: 4,
    principleTag: 'Jagrata · Constant Alertness',
    title: 'Pull Back to Move Forward',
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
        type: 'image',
        id: 's4b2',
        imageSrc: '/assets/phone-on-leash.png',
        caption: 'You Hold the Leash',
        subcaption: 'Sanyam isn\'t deleting your phone — it\'s taking back control. The phone walks with you. You don\'t walk for it.',
      },
      {
        type: 'interaction',
        id: 's4c',
        interactionType: 'tortoise-mode',
        onscreenText: 'Elite skill: Withdraw your senses at will.',
      },
      {
        type: 'takeaway',
        id: 's4d',
        punchline: '"If you can\'t be alone with your thoughts — you\'re a prisoner of your distractions."',
        transition: 'You\'ve pulled back. But why were we scrolling so desperately? What are we running from?',
      },
    ],
    speakerNotes: {
      title: 'S4 · Pull Back to Move Forward',
      open: 'Ask: \'When did you last sit bored without your phone — even 2 minutes?\' Let the silence land.',
      prasang: 'Tortoise analogy (Gadhada I-16): withdraws all limbs. Re-emerges on its own terms. That\'s Jagrata.',
      clickDirection: 'Click WITHDRAW SENSES. Chips fade. Hold 3-4 seconds of REAL silence. \'That was Jagrata.\'',
      transition: '\'You\'ve pulled back. But why were we scrolling so desperately? What are we running from?\'',
    },
  },

  /* ─── S5: The Expensive Illusion ─── */
  {
    id: 's5',
    sectionNumber: 5,
    principleTag: 'Atmanishtha · Soul-Consciousness',
    title: 'The Expensive Illusion',
    subSlides: [
      {
        type: 'story',
        id: 's5a',
        storyTitle: '₹15,000 Sneakers',
        narrative:
          '₹21,000 ka rent. ₹15,000 ke joote. ₹40,000 family income. Ghar se pehle joote? This isn\'t financial planning — this is insecurity on sale. We\'ve all done some version. Bought something for validation. Posted for approval. Curated a life for strangers.',
        highlight: 'The root is always the same: insecurity.',
      },
      {
        type: 'comparison',
        id: 's5b',
        leftTitle: 'Borrowed Confidence',
        leftItems: ['Costs money', 'Needs an audience', 'Expires with trends', 'Algorithm-dependent'],
        leftVariant: 'danger',
        rightTitle: 'Atma Confidence',
        rightItems: ['Free', 'Self-sourced', 'Permanent', 'Guru-given'],
        rightVariant: 'success',
      },
      {
        type: 'interaction',
        id: 's5c',
        interactionType: 'anti-flex',
        onscreenText: 'Secure people don\'t flex. Only the lost need to show off.',
      },
      {
        type: 'takeaway',
        id: 's5d',
        punchline: '"Don\'t crash your real life to maintain a virtual illusion."',
        transition: 'Internally secure now. What happens when someone tries to knock us off balance — with words?',
      },
    ],
    speakerNotes: {
      title: 'S5 · The Expensive Illusion',
      open: 'Tell the 15k shoes story warmly. We\'ve all done some version. The root is always insecurity.',
      prasang: 'Atmanishtha: When you know you are the Atma — no algorithm can rank your worth.',
      clickDirection: 'Click UNFILTER. Atma panel rises. \'This is what\'s real. That left side? Borrowed confidence.\'',
      transition: '\'Internally secure. What happens when someone tries to knock us off balance — with words?\'',
    },
  },

  /* ─── S6: Before the Bullet Leaves the Gun ─── */
  {
    id: 's6',
    sectionNumber: 6,
    principleTag: 'Vani Sanyam · Restraint in Speech',
    title: 'Before the Bullet Leaves the Gun',
    subSlides: [
      {
        type: 'stat',
        id: 's6a',
        value: '3 sec',
        label: 'to go from hero to villain',
        context: 'Words spoken in the first 3 seconds of anger cause the most lasting damage. That window is where Vani Sanyam lives.',
      },
      {
        type: 'image',
        id: 's6a2',
        imageSrc: '/assets/unkind-truth.png',
        caption: 'Unkind Truth vs Kind Lie',
        subcaption: 'Unkind truths build functional systems over time. Kind lies feel good — and destroy everything slowly.',
      },
      {
        type: 'story',
        id: 's6b',
        storyTitle: 'The Cowshed Insult',
        narrative:
          'Someone insulted Bhagat directly — in front of Maharaj. The room tensed. Everyone waited for the explosion. But Bhagat stayed centered. Not passive. Not a pushover. He chose the Guru over his ego.',
        highlight: 'He didn\'t suppress his anger. He redirected it into grace.',
      },
      {
        type: 'image',
        id: 's6b2',
        imageSrc: '/assets/sanyam-car-uturn.png',
        caption: 'Anger vs Sanyam',
        subcaption: 'Left: out of control, sparks, damage. Right: calm, glowing, directed. One second is the entire difference.',
      },
      {
        type: 'interaction',
        id: 's6c',
        interactionType: 'one-second-uturn',
        onscreenText: 'Your character is what you didn\'t say in anger.',
      },
      {
        type: 'takeaway',
        id: 's6d',
        punchline: '"Speech is silver. Sanyam is gold."',
        transition: 'You\'ve mastered your mouth. Now what about your work — your Dharma?',
      },
    ],
    speakerNotes: {
      title: 'S6 · Before the Bullet Leaves the Gun',
      open: 'Ask: \'When did you last regret something you said in the first 3 seconds of anger?\'',
      prasang: 'Cowshed Insult: Bhagat chose the Guru over his ego. One second of pause was the whole difference.',
      clickDirection: 'Click EK SECOND PAUSE. Watch countdown ring fill. \'That\'s Vani Sanyam in action.\'',
      transition: '\'Mastered your mouth. Now what about your work — your Dharma?\'',
    },
  },

  /* ─── S7: Nobody Sees the Kitchen ─── */
  {
    id: 's7',
    sectionNumber: 7,
    principleTag: 'Dharma · Duty & Disciplined Work',
    title: 'Nobody Sees the Kitchen',
    subSlides: [
      {
        type: 'story',
        id: 's7a',
        storyTitle: 'MBAs Washing Dishes',
        narrative:
          'Suhradam Shibir. MBAs, engineers, doctors — all mopping floors and washing bartan with full bhav. No LinkedIn post. No package attached. Pure sevabhav killing the intellectual ego.',
        highlight: 'The kitchen nobody sees is where character gets built.',
      },
      {
        type: 'image',
        id: 's7a2',
        imageSrc: '/assets/hariprasad-swamiji-vision.png',
        caption: 'Success: You Don\'t Need Eyes. You Need Vision.',
        subcaption: 'Pujya Hariprasad Swamiji on the inner discipline that creates extraordinary impact.',
      },
      {
        type: 'quote',
        id: 's7b',
        quote: 'Focused work without your phone is the rarest professional skill in the 21st century.',
        attribution: 'Cal Newport, Deep Work',
        context: '2 hours of undistracted deep work is worth more than any degree on a résumé. That concentration IS Sanyam.',
      },
      {
        type: 'video',
        id: 's7b2',
        videoId: 'GtaxU6DZvLs',
        platform: 'youtube',
        caption: 'Work Twice as Hard as Others',
        subcaption: 'Elon Musk on the discipline behind success. "Nobody ever changed the world on 40 hours a week." The kitchen is invisible — the grind is real.',
      },
      {
        type: 'interaction',
        id: 's7c',
        interactionType: 'invisible-foundation',
        onscreenText: 'Talent is wet clay. Sanyam is the fire.',
      },
      {
        type: 'takeaway',
        id: 's7d',
        punchline: '"Talent gets you noticed. Sanyam gets you promoted."',
        transition: 'Even the best get knocked down. What\'s the spiritual reset protocol when we fall?',
      },
    ],
    speakerNotes: {
      title: 'S7 · Nobody Sees the Kitchen',
      open: 'Suhradam Shibir story: MBAs washing dishes. No LinkedIn post. Pure sevabhav.',
      prasang: 'Cal Newport: \'Deep work without phone is the rarest professional skill.\' 2 hours > any degree.',
      clickDirection: 'Three clicks with the room. Step 1→2→3. \'POT IS READY. The kitchen made that possible.\'',
      transition: '\'Even the best get knocked down. What\'s the spiritual reset protocol?\'',
    },
  },

  /* ─── S8: Recalculating. Not Broken. ─── */
  {
    id: 's8',
    sectionNumber: 8,
    principleTag: 'Bhajan & Swadhyay · Daily Practice',
    title: 'Recalculating. Not Broken.',
    subSlides: [
      {
        type: 'image',
        id: 's8a0',
        imageSrc: '/assets/prabodh-swamiji-writing.png',
        caption: 'The Practice Nobody Posts',
        subcaption: 'Swadhyay in silence. No audience. No likes. The invisible work is what builds the unbreakable self.',
      },
      {
        type: 'comparison',
        id: 's8a',
        leftTitle: 'Willpower = Battery',
        leftItems: ['Depletes with use', 'Crashes at night', 'Limited charges', 'Self-powered only'],
        leftVariant: 'danger',
        rightTitle: 'Bhajan = Solar',
        rightItems: ['Recharges with use', 'Refills every morning', 'Unlimited capacity', 'Guru-powered'],
        rightVariant: 'success',
      },
      {
        type: 'story',
        id: 's8b',
        storyTitle: 'The Midnight Wait',
        narrative:
          'Yogiji Maharaj waited all night for a devotee who had strayed. When the devotee returned, broken and ashamed, Maharaj didn\'t lecture. He smiled. \'I was waiting for you.\' The Guru never deletes the route.',
        highlight: 'You hit Reset — He was already waiting.',
      },
      {
        type: 'video',
        id: 's8b2',
        videoId: 'TFEzFI-igxA',
        platform: 'youtube-short',
        caption: 'The Drowning Rat Experiment',
        subcaption: 'A rat swam 15 minutes before giving up. But when rescued once and put back — it swam for 60 HOURS. Hope didn\'t add a little. It multiplied everything. That\'s what the Guru\'s hand does.',
      },
      {
        type: 'concept',
        id: 's8c',
        conceptTitle: 'Oil on Hand — Not in Hand',
        points: [
          { label: 'Oil ON the hand', description: 'You can wash it off', variant: 'positive' },
          { label: 'Oil IN the hand', description: 'It seeps into everything', variant: 'negative' },
          { label: 'A lapse is oil ON the hand', variant: 'positive' },
          { label: 'Guilt that festers is oil IN the hand', variant: 'negative' },
        ],
      },
      {
        type: 'image',
        id: 's8c2',
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
      title: 'S8 · Recalculating. Not Broken.',
      open: 'Reassure: \'Willpower is a battery. Bhajan is solar — it recharges you.\'',
      prasang: 'Yogiji Maharaj waited all night for a stray devotee. GPS never gives up. Neither does the Guru.',
      clickDirection: 'Three clicks build the sandwich. \'4 minutes. Bhajan bookends everything.\'',
      transition: '\'You can\'t run this alone. That\'s not weakness — that\'s wisdom.\'',
    },
  },

  /* ─── S9: Solo Hero is a Myth ─── */
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
        id: 's9b2',
        imageSrc: '/assets/people-in-life.png',
        caption: 'Choose Who You Let In',
        subcaption: 'Some push you to your limits. Some teach you. Some take more than they give. A few bring out the best in you.',
      },
      {
        type: 'interaction',
        id: 's9c',
        interactionType: 'power-grid',
        onscreenText: 'Sanyam is a team sport. Plug into the grid.',
      },
      {
        type: 'takeaway',
        id: 's9d',
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

  /* ─── S10: Stop Pumping. Start Facing. ─── */
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
        id: 's10b2',
        imageSrc: '/assets/hariprasad-prabodh-swamiji.png',
        caption: 'Face the Guru. Receive the Light.',
        subcaption: 'The solar panel has one job: face toward Him. That alignment — that turning — is Sanyam.',
      },
      {
        type: 'interaction',
        id: 's10c',
        interactionType: 'stove-to-solar',
        onscreenText: 'Stop pumping the stove. Turn your face to the Sun.',
      },
      {
        type: 'takeaway',
        id: 's10d',
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
