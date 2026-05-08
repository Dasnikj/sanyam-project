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
        headline: 'Sanyam = Mental Discipline Toward Your Goal',
        subtext: 'Not suppression — redirection. Not restriction — disciplined freedom. The steering wheel that gives direction to freedom.',
        audiencePrompt: 'Haath uthao — kitno ko lagta hai Sanyam matlab restrictions?',
        imageSrc: '/assets/youth-distractions.png',
        imageAlt: 'Lemon and spoon — focus amid distractions',
      },
    ],
    speakerNotes: {
      title: 'S1 · Sanyam: Direction, Not Deletion',
      open: 'Screen: QR code. "Open your phone, scan the QR, connect — I have a few questions." Run through engagement. Then: "Let us look into our subject — what is Sanyam?"',
      prasang: 'Sanyam means self-control, self-restraint, moderation. Mental discipline / self-discipline toward a given goal. Not suppression — redirecting energy with awareness. Modern youth are not just distracted — they are disoriented. Sanyam is the steering wheel. The ecosystem of Sabha, Bhajan, Swadhyay, Jagrata, Guru-bhav keeps the wheel stable.',
      clickDirection: 'Single slide. QR + definition + lemon image all visible at once. Speak over it. Pose questions verbally: "Can we control mobile use? Should we quit social media completely? These days guruhari is behind us to control over social media, let alone…"',
      transition: '"This is hard. That\'s Sanyam. We will do a deep dive into this topic and find out the winning formula."',
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
        type: 'concept',
        id: 's2a',
        conceptTitle: 'The Silent Crisis: Your Brain & The Epidemic',
        points: [
          { label: '70,000 thoughts/day', description: '80% are negative — anxiety, regret, rumination on autopilot', variant: 'negative' },
          { label: '35,000 decisions/day', description: 'Each one burns mental fuel — decision fatigue is real', variant: 'negative' },
          { label: 'Dopamine deficit', description: 'Instant pleasure (scroll, junk, reels) → brain compensates with MORE anxiety & emptiness', variant: 'negative' },
          { label: 'Depression', description: '280M worldwide — WHO\'s leading cause of disability', variant: 'negative' },
          { label: 'Anxiety', description: 'Youth anxiety up 70% since 2012 — the smartphone generation', variant: 'negative' },
          { label: 'Loneliness', description: 'Most "connected" generation is the loneliest — 1 in 5 youth have a mental health disorder', variant: 'negative' },
        ],
        speakerNote: 'NSF, Cornell, Lembke, WHO, APA, NIMH, US Surgeon General. Let this land — the brain is a factory running on fumes. 1 in 5 youth. Look around this room.',
      },
      {
        type: 'concept',
        id: 's2b',
        conceptTitle: 'The Smart Solution: Self Control — But How?',
        points: [
          { label: '70K negative thoughts → Redirect', description: 'You can\'t stop thoughts. But you can choose which ones get the mic. Sanyam = choosing the channel.', variant: 'positive' },
          { label: '35K decisions → Pre-decide', description: 'Decision fatigue is real. Set Maryada once — stop burning fuel on the same choices daily.', variant: 'positive' },
          { label: 'Dopamine deficit → Earn it slow', description: 'Replace cheap hits (reels, junk) with seva, reading, skill — compound interest for the brain.', variant: 'positive' },
          { label: 'Attention span shrinking → Deep work blocks', description: '2 hours phone-off, single-task focus > 8 hours of scattered half-presence.', variant: 'positive' },
          { label: 'POSH / Anger / Stress → 1-second pause', description: 'One breath before reacting. That one second is the entire difference between career & catastrophe.', variant: 'positive' },
          { label: 'Divorces / Sleep / Family → Digital Maryada', description: 'Phone down at dinner. No screen 30 min before bed. Small rules, massive life upgrades.', variant: 'positive' },
        ],
        speakerNote: 'Walk through tiles quickly — don\'t read all. Then land both prasangs back to back. First the well analogy, then Mani bhai\'s real-life corporate example.',
        prasangs: [
          {
            title: 'Shamaldasbhai & Gunatitanand Swami — The Well',
            narrative: 'Shamaldasbhai asked: "Swami, how do we control the mind? It runs everywhere." Swami replied: "Pour water on flat ground — it spreads, useless. Dig a well with walls — same water collects, deepens, serves a village. Your mind is the water. Maryada is the wall."',
            source: 'Swamini Vaat · Gunatitanand Swami',
            highlight: 'The walls aren\'t restriction. The walls are what make you useful.',
          },
          {
            title: 'Mani Bhai — PRs Rejected, Faith Accepted',
            narrative: 'Mani bhai — leader of our Germany mandal — worked at Texas Instruments. His boss kept rejecting his project proposals. Again and again. Like our PRs getting rejected. He was going through very difficult times. What did he do? He called Swamiji and asked for guidance. Swamiji said: "Do your job as if you are doing it for God. Take your boss\'s feedback and deliver it." He followed. The walls (Maryada) held the water (his effort) — and it worked.',
            source: 'Real-life · Germany Mandal',
            highlight: 'Same Sanyam. Corporate desk. Guru\'s guidance turned rejection into direction.',
          },
        ],
      },
    ],
    speakerNotes: {
      title: 'S2 · The Silent Crisis',
      open: 'Combined stat: 70k thoughts, 35k decisions, dopamine deficit. Your brain is a factory running on fumes.',
      prasang: 'Mental health epidemic — then flip to solutions. Loneliness → real friends. Anxiety → five senses discipline. Burnout → deep work. Each has a Sanyam answer.',
      clickDirection: 'Let problems land with silence. Then the solutions slide: walk through each row — personal and professional life.',
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
        type: 'statement',
        id: 's3a',
        headline: 'The Original Wild Animal',
        subtext: '"Our biggest competitor is human sleep." — Reed Hastings, Netflix CEO. Social media algorithms are engineered to hunt you. You are not scrolling — you are being scrolled.',
        imageSrc: '/assets/phone-monster.png',
        imageAlt: 'Phone monster gripping youth — the algorithm has hands',
        speakerNote: 'Prabodh Swamiji calls social media the "original wild animal." Why? Because we are no longer in our own thoughts — we are getting easily influenced. The Coca-Cola Challenge: they made the whole world believe sugar water = happiness. Same playbook — social media sells you dopamine hits disguised as connection.',
      },
      {
        type: 'video',
        id: 's3b',
        platform: 'local',
        videoSrc: '/assets/kids_issue.mp4',
        caption: 'When Sanyam Is Missing',
        subcaption: 'Uncontrolled desire + inability to handle rejection. This is what happens.',
        contextImage: '/assets/tech-pervasive.png',
        contextImageAlt: 'Technology is all pervasive — Cinema, Casino, Music, News, Dating, Games',
        speakerNote: 'Personal story: "My son Nirmaan — when he came from India, Prabodh Swamiji gave agna not to show TV to him at all. We saw tremendous change — he started to focus, get good results, became ambidextrous. But peer pressure came — he started watching TV. Negative changes followed." Then play the video. Let the room absorb.',
      },
      {
        type: 'statement',
        id: 's3c',
        headline: 'Eyes. Ears. Mouth. Touch. Mind. All five need fasting.',
        subtext: 'POSH issues — one wrong look, career over. Attention span — 8 sec, less than a goldfish. Anger, vaani, talent without Sanyam — all leak through the cracks.',
        imageSrc: '/assets/hariprasad-swamiji-vision.png',
        imageAlt: 'Hariprasad Swamiji — You don\'t need eyes. You need vision.',
        speakerNote: 'Five senses are the five gates under attack. POSH at work, 8-second attention spans, anger outbursts, words you can\'t take back. Purnam bhai gave up cricket — it consumed his focus. Prabodh Swamiji told youth: 300 MB per day only. That\'s Sanyam in daily life.',
      },
      {
        type: 'takeaway',
        id: 's3d',
        punchline: '"If you wouldn\'t eat from a trash can — don\'t scroll through one."',
        transition: 'Five thieves identified. Now — the solution. Guard every gate.',
      },
    ],
    speakerNotes: {
      title: 'S3 · The Wild Animal',
      open: '"Prabodh Swamiji calls this the original wild animal." Tech-pervasive image on screen — Cinema, Casino, Music, News, Dating, Games. Coca-Cola Challenge analogy.',
      prasang: 'Personal story about Nirmaan: agna from Prabodh Swamiji, no TV, tremendous growth. Then peer pressure. Then kids_issue video — let it land.',
      clickDirection: '4 slides. Statement + tech image → Video (manual play) → Five senses interaction → Takeaway punchline.',
      transition: '"Five thieves identified. Guard every gate — one sense at a time."',
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
        imageSrc: '/assets/vitamin-water.png',
        imageAlt: 'Coca-Cola Vitamin Water contest 2018 — no smartphone for 365 days, 125% more productive',
      },
      {
        type: 'statement',
        id: 's4b',
        headline: 'કેટલાક ને મન રમાડે છે, કેટલાક મન ને રમાડે છે.',
        subtext: 'The Tortoise Defense (Gadhada I-16): withdraw all limbs, then re-emerge on your own terms. That\'s not weakness — it\'s a tactical reset.',
        audiencePrompt: 'Some are played by their mind. Some play the mind. Sanyam decides which side you\'re on.',
      },
      {
        type: 'image',
        id: 's4d',
        imageSrc: '/assets/phone-on-leash.png',
        caption: 'You Hold the Leash',
        subcaption: 'Sanyam isn\'t deleting your phone — it\'s taking back control. The phone walks with you. You don\'t walk for it.',
      },
      {
        type: 'video',
        id: 's4f',
        videoId: 'jgp0x9r5Q-0',
        platform: 'youtube-short',
        caption: 'Apple CEO: Screen Time from the Man Who Sells Screens',
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
        type: 'concept',
        id: 's5a',
        conceptTitle: 'Sanyam in the Real World',
        points: [
          { label: 'Warren Buffett', description: 'Reads 500 pages every day. "That\'s how knowledge works — compound interest." No shortcuts, no reels.', variant: 'positive' },
          { label: 'Donald Trump', description: 'No alcohol, no drugs, no cigarettes. 80+ and full speed. His brother died from alcoholism — he chose total abstinence.', variant: 'positive' },
          { label: 'Elon Musk', description: '"Nobody changed the world on 40 hrs/week." Relentless discipline, focus, 100-hour weeks.', variant: 'positive' },
        ],
        speakerNote: 'Three very different people, one common thread — Sanyam. Discipline is the entry fee to greatness.',
      },
      {
        type: 'video',
        id: 's5b',
        videoId: 'GtaxU6DZvLs',
        platform: 'youtube',
        caption: 'Elon Musk: Work Twice as Hard',
        subcaption: '"Nobody ever changed the world on 40 hours a week."',
      },
    ],
    speakerNotes: {
      title: 'S5 · Real-Life Sanyam',
      open: 'Buffett: 500 pages/day. Trump: zero substances at 80+. Musk: 100-hour weeks. All forms of Sanyam.',
      prasang: 'These are not saints — they are proof that discipline works in every domain.',
      clickDirection: '2 slides only. Tile examples → Musk video. Let the examples speak.',
      transition: '"Restraint works. But how does it actually function? Let\'s open the hood."',
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
        type: 'interaction',
        id: 's6a',
        interactionType: 'one-second-uturn',
        onscreenText: '3 seconds — hero to villain. Your character is what you didn\'t say in anger.',
        speakerNote: 'Words spoken in the first 3 seconds of anger cause the most lasting damage. That window is where Vani Sanyam lives. Click through the U-turn interaction.',
      },
      {
        type: 'concept',
        id: 's6b',
        conceptTitle: 'Suppression Rebounds — Redirect Instead',
        points: [
          { label: 'Force a spring down', description: 'It stores energy — snaps back HARDER', variant: 'negative' },
          { label: 'Suppression ≠ Sanyam', description: 'Pushing feelings down doesn\'t delete them', variant: 'negative' },
          { label: 'Redirect the energy', description: 'Channel it into bhajan, seva, deep work', variant: 'positive' },
          { label: 'The Cowshed Insult', description: 'Bhagat was insulted in front of Maharaj. He chose the Guru over his ego — redirected anger into grace.', variant: 'positive' },
        ],
        speakerNote: 'Spring analogy first. Then Cowshed prasang: the room tensed, everyone waited for the explosion. But Bhagat stayed centered. Not passive — he chose redirection. Willpower is limited. Smart rules + redirection > raw suppression.',
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
      open: '3 seconds — that\'s the window. One-second U-turn interaction first.',
      prasang: 'Spring analogy: suppression rebounds. Cowshed Insult: Bhagat chose Guru over ego.',
      clickDirection: '3 slides. U-turn interaction → Spring + Cowshed concept tiles → Takeaway.',
      transition: '"Who shows us this selflessly, every day?"',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S7: "Daily Hacks" — Practical Reset Protocol
     ═══════════════════════════════════════════════════════ */
  {
    id: 's7',
    sectionNumber: 7,
    principleTag: 'Bhajan & Swadhyay · Daily Practice',
    title: 'Daily Hacks',
    subSlides: [
      {
        type: 'statement',
        id: 's8a',
        headline: 'Change will not happen in a day.',
        subtext: 'But it starts with one. Idea → Thoughts → Feelings → Plan → Habits → Commitment → Lifestyle → Change.',
        imageSrc: '/assets/how-change-created.png',
        imageAlt: 'How Change is Created — Sanyam lives at every ring',
      },
      {
        type: 'concept',
        id: 's8b',
        conceptTitle: 'Daily Hacks — Small Habits, Big Reset',
        points: [
          { label: 'Bhajan (2 min)', description: 'Start your day with connection — before the phone', variant: 'positive' },
          { label: '30-min Dhun', description: 'Daily dhun anchors your mind. Even 30 minutes rewires your default mode.', variant: 'positive' },
          { label: 'Deep Work', description: 'Focused duty — phone on silent, one task, full presence', variant: 'positive' },
          { label: 'Gosti', description: 'Weekly honest discussion with Sara Mitro (good friends) — clears the cache, kills blind spots', variant: 'positive' },
          { label: 'Swadhyay (2 min)', description: 'End with reflection — what went right, what to reset', variant: 'positive' },
          { label: 'Hit Reset', description: 'Sanyam is how fast you hit Reset — not how often you fall', variant: 'positive' },
        ],
        speakerNote: 'The Sandwich Technique: Bhajan before work, Swadhyay after. 30-min dhun daily. Weekly Gosti with Suhrads. These small habits compound into a lifestyle.',
      },
      {
        type: 'takeaway',
        id: 's8e',
        punchline: '"A lapse in Sanyam is a broken shoelace — not a broken leg."',
        transition: 'You can\'t run this protocol alone. That\'s not weakness — that\'s wisdom.',
      },
    ],
    speakerNotes: {
      title: 'S7 · Daily Hacks',
      open: '\'Change will not happen in a day. But it starts with one.\' Introduce the Sandwich Technique.',
      prasang: 'Bhajan bookends everything. 4 minutes total. Show the change-rings image.',
      clickDirection: 'Three clicks build the sandwich. \'4 minutes. Bhajan bookends everything.\'',
      transition: '\'You can\'t run this alone. That\'s not weakness — that\'s wisdom.\'',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S8: "Solo Hero is a Myth" — 2+4 Rule and Sabha
     ═══════════════════════════════════════════════════════ */
  {
    id: 's8',
    sectionNumber: 8,
    principleTag: 'Satsang · Spiritual Fellowship',
    title: 'Solo Hero is a Myth',
    subSlides: [
      {
        type: 'concept',
        id: 's9a',
        conceptTitle: 'The 2+4 Rule',
        points: [
          { label: '2 ANCHORS', description: 'Santo + Sara Mitro (good friends) — people who will correct you', variant: 'positive' },
          { label: '4 HABITS', description: 'Sabha · Bhajan · Swadhyay · Seva', variant: 'positive' },
          { label: 'The Pin That Keeps the Flame', description: 'A stove needs a pin to hold pressure. Remove the pin — flame dies. Slowly, then suddenly. Sabha is your pin.', variant: 'neutral' },
        ],
        speakerNote: 'Ask: "Can you name your 2 anchors right now? An actual name — not a concept." Kerosene stove prasang: the pin keeps the flame alive. Remove yourself from the grid, and the flame dies.',
      },
      {
        type: 'image',
        id: 's9c',
        imageSrc: '/assets/people-in-life.png',
        caption: 'Choose Who You Let In',
        subcaption: 'Some push you to your limits. Some teach you. Some take more than they give. A few bring out the best in you.',
      },
      {
        type: 'takeaway',
        id: 's9e',
        punchline: '"Sanyam is a team sport. Stop carrying the whole game alone."',
        transition: 'Grid connected. How do we move from trying... to just being? From pumping the stove... to facing the Sun?',
      },
    ],
    speakerNotes: {
      title: 'S8 · Solo Hero is a Myth',
      open: '2+4 Rule. Ask: "Can you name your 2 anchors right now? An actual name."',
      prasang: 'Kerosene stove & pin: remove the pin, flame dies — slowly, then suddenly.',
      clickDirection: '3 slides. Concept tiles → People image → Takeaway. No clicks needed.',
      transition: '"Grid connected. How do we move from trying... to just being?"',
    },
  },

  /* ═══════════════════════════════════════════════════════
     S9: "Stop Pumping. Start Facing." — Guru-bhav
     ═══════════════════════════════════════════════════════ */
  {
    id: 's9',
    sectionNumber: 9,
    principleTag: 'Guru-bhav · Devotion to the Teacher',
    title: 'Stop Pumping. Start Facing.',
    subSlides: [
      {
        type: 'concept',
        id: 's10a',
        conceptTitle: 'Stove vs Solar — Two Energy Systems',
        points: [
          { label: 'Kerosene Stove', description: 'Constant pumping, smoke, runs out of fuel — self-dependent willpower', variant: 'negative' },
          { label: 'Solar Panel', description: 'Just face the sun — clean, effortless, unlimited energy — Guru-dependent', variant: 'positive' },
          { label: 'The Sun Never Stopped', description: 'Yogiji Maharaj: "The Guru is the Sun — always shining." The panel\'s only job: face toward Him.', variant: 'positive' },
        ],
        speakerNote: 'Two energy systems side by side. Willpower = stove — exhausting, runs out. Guru-bhav = solar — effortless alignment. You don\'t CREATE the energy. You RECEIVE it by facing the right direction.',
      },
      {
        type: 'statement',
        id: 's10c',
        headline: 'Face the Guru. Receive the Light.',
        subtext: 'The solar panel has one job: face toward Him. That alignment — that turning — is Sanyam.',
        imageSrc: '/assets/hariprasad-prabodh-swamiji.png',
        imageAlt: 'Hariprasad Swamiji & Prabodh Swamiji — the Gunatit Purusho',
      },
      {
        type: 'takeaway',
        id: 's10e',
        punchline: '"The Guru is the Sun. Sanyam is just... turning your face."',
        closingCta: 'Jai Swaminarayan',
      },
    ],
    speakerNotes: {
      title: 'S9 · Stop Pumping. Start Facing.',
      open: 'Two energy systems: Stove (willpower) vs Solar (Guru-bhav). Let the concept tiles land.',
      prasang: 'Yogiji Maharaj: The Guru is the Sun. The solar panel\'s job: face toward Him.',
      clickDirection: '3 slides. Concept tiles → Swamiji image + statement → Closing takeaway. No interactions. Hold 4 seconds of silence at the end.',
      transition: '— Final. Close with conviction and silence. Jai Swaminarayan. —',
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
