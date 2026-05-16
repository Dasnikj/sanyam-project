import { motion } from 'framer-motion';

interface ConceptPoint {
  label: string;
  description?: string;
  variant: 'positive' | 'negative' | 'neutral';
}

interface PrasangBlock {
  title: string;
  narrative: string;
  source?: string;
  highlight?: string;
}

interface Props {
  conceptTitle: string;
  points: ConceptPoint[];
  prasangs?: PrasangBlock[];
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
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
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
    borderClass: 'border-jade/30',
    textClass: 'text-jade',
    bgGrad: 'rgba(0,212,176,0.08)',
    icon: <CheckIcon />,
  },
  negative: {
    color: '#FF3B5C',
    borderClass: 'border-danger/30',
    textClass: 'text-danger',
    bgGrad: 'rgba(255,59,92,0.08)',
    icon: <XIcon />,
  },
  neutral: {
    color: '#FF7B29',
    borderClass: 'border-saffron/30',
    textClass: 'text-saffron',
    bgGrad: 'rgba(255,123,41,0.08)',
    icon: <ArrowRightIcon />,
  },
} as const;

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" style={{ color: '#FF7B29' }}>
    <path
      d="M10 8H6a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2V8zm10 0h-4a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2V8z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ConceptDiagram = ({ conceptTitle, points, prasangs }: Props) => {
  const cols = points.length <= 4 ? 2 : 3;

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-full gap-5 px-4"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <motion.div
        className="flex items-center gap-3"
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <LightbulbIcon />
        <h2
          className="font-display font-bold text-cream text-center"
          style={{ fontSize: 'clamp(18px, 2.4vw, 32px)' }}
        >
          {conceptTitle}
        </h2>
      </motion.div>

      <div
        className="concept-grid grid gap-2 md:gap-3 w-full"
        style={{
          maxWidth: cols === 3 ? '920px' : '740px',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {points.map((pt, i) => {
          const v = variantConfig[pt.variant];
          return (
            <motion.div
              key={i}
              className={`relative rounded-xl border ${v.borderClass} p-4 flex flex-col gap-2 overflow-hidden`}
              style={{ background: v.bgGrad }}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            >
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-[0.06]"
                style={{ background: v.color }}
              />
              <div className={`flex items-center gap-2 ${v.textClass}`}>
                {v.icon}
                <span
                  className="font-bold text-cream"
                  style={{ fontSize: 'clamp(13px, 1.3vw, 18px)' }}
                >
                  {pt.label}
                </span>
              </div>
              {pt.description && (
                <span
                  className="text-muted leading-snug"
                  style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}
                >
                  {pt.description}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {prasangs && prasangs.length > 0 && (
        <div className="flex flex-col gap-3 w-full" style={{ maxWidth: '740px' }}>
          {prasangs.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-saffron/20 p-4 flex flex-col gap-2"
              style={{ background: 'rgba(255,123,41,0.06)' }}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.3 + i * 0.15 }}
            >
              <div className="flex items-center gap-2">
                <QuoteIcon />
                <span
                  className="font-bold text-saffron"
                  style={{ fontSize: 'clamp(12px, 1.2vw, 16px)' }}
                >
                  {p.title}
                </span>
                {p.source && (
                  <span className="text-muted ml-auto" style={{ fontSize: 'clamp(10px, 0.9vw, 12px)' }}>
                    {p.source}
                  </span>
                )}
              </div>
              <p
                className="text-cream/80 leading-snug"
                style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}
              >
                {p.narrative}
              </p>
              {p.highlight && (
                <span
                  className="text-saffron font-semibold italic"
                  style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}
                >
                  "{p.highlight}"
                </span>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ConceptDiagram;
