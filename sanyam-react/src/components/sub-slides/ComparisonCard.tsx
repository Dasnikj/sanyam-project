import { motion } from 'framer-motion';

interface Props {
  leftTitle: string;
  leftItems: string[];
  leftVariant: 'danger' | 'muted';
  rightTitle: string;
  rightItems: string[];
  rightVariant: 'success' | 'muted';
}

const variantStyles = {
  danger: {
    color: '#FF3B5C',
    bg: 'rgba(255,59,92,0.06)',
    border: 'rgba(255,59,92,0.25)',
    titleClass: 'text-danger',
    gradient: 'linear-gradient(to bottom, rgba(255,59,92,0.12), transparent 60%)',
    bulletColor: '#FF3B5C',
  },
  success: {
    color: '#00D4B0',
    bg: 'rgba(0,212,176,0.06)',
    border: 'rgba(0,212,176,0.25)',
    titleClass: 'text-jade',
    gradient: 'linear-gradient(to bottom, rgba(0,212,176,0.12), transparent 60%)',
    bulletColor: '#00D4B0',
  },
  muted: {
    color: '#8A8699',
    bg: 'rgba(255,255,255,0.03)',
    border: 'rgba(255,255,255,0.07)',
    titleClass: 'text-muted',
    gradient: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 60%)',
    bulletColor: '#8A8699',
  },
} as const;

const WarningIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: '#FF3B5C' }}>
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: '#00D4B0' }}>
    <path
      fillRule="evenodd"
      d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-1.17a3 3 0 01-1.658 1.11L14 16h1a1 1 0 110 2H5a1 1 0 110-2h1l.828-4.89A3.001 3.001 0 015.17 10H4a2 2 0 110-4h1.17A3 3 0 015 5zm5.236 7.934L10 14h.001l-.236-1.066a1.013 1.013 0 01-.001 0zM8 8a2 2 0 104 0 2 2 0 00-4 0z"
      clipRule="evenodd"
    />
  </svg>
);

const CircleIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" style={{ color: '#8A8699' }}>
    <circle cx="10" cy="10" r="4" />
  </svg>
);

const titleIcons: Record<string, React.ReactNode> = {
  danger: <WarningIcon />,
  success: <TrophyIcon />,
  muted: <CircleIcon />,
};

const LightningBolt = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={{ color: '#FFD166' }}>
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      fill="currentColor"
    />
  </svg>
);

const BulletDot = ({ color }: { color: string }) => (
  <svg viewBox="0 0 8 8" className="w-2 h-2 shrink-0 mt-[7px]">
    <circle cx="4" cy="4" r="3" fill={color} opacity={0.7} />
  </svg>
);

const Panel = ({
  title,
  items,
  variant,
  direction,
}: {
  title: string;
  items: string[];
  variant: 'danger' | 'success' | 'muted';
  direction: 'left' | 'right';
}) => {
  const s = variantStyles[variant];

  return (
    <motion.div
      className="flex-1 rounded-xl p-6 flex flex-col gap-3 relative overflow-hidden"
      style={{
        backgroundColor: s.bg,
        border: `1px solid ${s.border}`,
        boxShadow: `inset 0 1px 12px rgba(0,0,0,0.25)`,
      }}
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 110, damping: 18, delay: direction === 'right' ? 0.25 : 0 }}
    >
      {/* Top gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: s.gradient }}
      />

      <div className="relative flex items-center gap-2">
        {titleIcons[variant]}
        <h3
          className={`font-display font-bold ${s.titleClass}`}
          style={{ fontSize: 'clamp(16px, 1.8vw, 24px)' }}
        >
          {title}
        </h3>
      </div>

      <ul className="relative flex flex-col gap-2.5">
        {items.map((item, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2.5 text-cream leading-relaxed"
            style={{
              fontSize: 'clamp(13px, 1.2vw, 18px)',
              opacity: Math.max(0.6, 1 - i * 0.1),
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: Math.max(0.6, 1 - i * 0.1), y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
          >
            <BulletDot color={s.bulletColor} />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const ComparisonCard = ({
  leftTitle,
  leftItems,
  leftVariant,
  rightTitle,
  rightItems,
  rightVariant,
}: Props) => (
  <div className="flex items-center justify-center w-full h-full px-6">
    <div className="flex flex-col md:flex-row gap-0 max-w-[880px] w-full items-stretch">
      <Panel title={leftTitle} items={leftItems} variant={leftVariant} direction="left" />

      {/* VS Divider */}
      <div className="flex flex-col items-center justify-center px-4 py-3 md:py-0">
        {/* Top dashed line */}
        <div
          className="hidden md:block w-px flex-1 min-h-[20px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 3px, transparent 3px, transparent 7px)',
          }}
        />

        <motion.div
          className="flex items-center justify-center rounded-full shrink-0"
          style={{
            width: 44,
            height: 44,
            background: 'linear-gradient(135deg, rgba(255,211,102,0.15), rgba(255,123,41,0.15))',
            border: '1px solid rgba(255,211,102,0.2)',
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.15 }}
        >
          <LightningBolt />
        </motion.div>

        {/* Bottom dashed line */}
        <div
          className="hidden md:block w-px flex-1 min-h-[20px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 3px, transparent 3px, transparent 7px)',
          }}
        />
      </div>

      <Panel title={rightTitle} items={rightItems} variant={rightVariant} direction="right" />
    </div>
  </div>
);

export default ComparisonCard;
