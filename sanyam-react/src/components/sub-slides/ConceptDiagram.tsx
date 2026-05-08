import { motion } from 'framer-motion';

interface ConceptPoint {
  label: string;
  description?: string;
  variant: 'positive' | 'negative' | 'neutral';
}

interface Props {
  conceptTitle: string;
  points: ConceptPoint[];
}

const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" style={{ color: '#FF7B29' }}>
    <path
      d="M9 21h6M12 3a6 6 0 00-4 10.47V17a1 1 0 001 1h6a1 1 0 001-1v-3.53A6 6 0 0012 3z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.5 14h5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const variantConfig = {
  positive: {
    color: '#00D4B0',
    borderClass: 'border-l-jade',
    textClass: 'text-jade',
    icon: <CheckIcon />,
  },
  negative: {
    color: '#FF3B5C',
    borderClass: 'border-l-danger',
    textClass: 'text-danger',
    icon: <XIcon />,
  },
  neutral: {
    color: '#FF7B29',
    borderClass: 'border-l-saffron',
    textClass: 'text-saffron',
    icon: <ArrowRightIcon />,
  },
} as const;

const glowPulse = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.7, 1, 0.7],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

const ConceptDiagram = ({ conceptTitle, points }: Props) => (
  <motion.div
    className="flex flex-col items-center justify-center w-full h-full gap-6 px-6"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
  >
    <motion.div
      className="flex items-center gap-3"
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
    >
      <LightbulbIcon />
      <h2
        className="font-display font-bold text-cream text-center"
        style={{ fontSize: 'clamp(20px, 2.6vw, 36px)' }}
      >
        {conceptTitle}
      </h2>
    </motion.div>

    <div className="relative flex flex-col gap-0 max-w-[800px] w-full">
      {points.map((pt, i) => {
        const v = variantConfig[pt.variant];
        const isLast = i === points.length - 1;

        return (
          <div key={i} className="relative flex flex-col items-stretch">
            {/* Connecting dashed line */}
            {!isLast && (
              <div
                className="absolute left-[19px] top-[100%] w-px h-3 z-0"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 3px, transparent 3px, transparent 6px)',
                }}
              />
            )}

            <motion.div
              className={`relative flex items-start gap-4 border-l-[3px] ${v.borderClass} rounded-lg px-5 py-4 overflow-hidden`}
              style={{
                background: `linear-gradient(to right, ${v.color}0D, transparent)`,
              }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            >
              {/* Glow dot + icon */}
              <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: v.color,
                    boxShadow: `0 0 8px ${v.color}80`,
                  }}
                  animate={glowPulse.animate}
                  transition={glowPulse.transition}
                />
                <span className={`relative z-10 ${v.textClass}`}>{v.icon}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span
                  className="font-bold text-cream"
                  style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
                >
                  {pt.label}
                </span>
                {pt.description && (
                  <span
                    className="text-muted"
                    style={{ fontSize: 'clamp(12px, 1.1vw, 16px)' }}
                  >
                    {pt.description}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Spacer for the connecting line */}
            {!isLast && <div className="h-3" />}
          </div>
        );
      })}
    </div>
  </motion.div>
);

export default ConceptDiagram;
