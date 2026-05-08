import { motion } from 'framer-motion';

interface Props {
  punchline: string;
  transition?: string;
  closingCta?: string;
}

const CornerOrnament = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const size = 24;
  const paths: Record<string, string> = {
    tl: `M0 ${size} L0 0 L${size} 0`,
    tr: `M${size - size} 0 L${size} 0 L${size} ${size}`,
    bl: `M0 0 L0 ${size} L${size} ${size}`,
    br: `M0 ${size} L${size} ${size} L${size} 0`,
  };
  const posClass: Record<string, string> = {
    tl: 'top-4 left-4',
    tr: 'top-4 right-4',
    bl: 'bottom-4 left-4',
    br: 'bottom-4 right-4',
  };

  return (
    <svg
      className={`absolute ${posClass[position]} pointer-events-none`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <path
        d={paths[position]}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DiamondDivider = () => (
  <motion.div
    className="flex items-center gap-3"
    variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1 } }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    style={{ originX: 0.5 }}
  >
    <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(to right, transparent, #FF7B29)' }} />
    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 shrink-0">
      <rect x="5" y="0" width="7" height="7" rx="1" transform="rotate(45 5 5)" fill="#FF7B29" />
    </svg>
    <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(to left, transparent, #FF7B29)' }} />
  </motion.div>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0 mt-[3px]" style={{ color: '#8A8699' }}>
    <path
      d="M3 8h10m0 0L9 4m4 4L9 12"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TakeawaySlide = ({ punchline, transition: transitionText, closingCta }: Props) => (
  <motion.div
    className="relative flex flex-col items-center justify-center w-full h-full gap-6 px-6 overflow-hidden"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.22 } } }}
  >
    {/* Corner ornaments */}
    <CornerOrnament position="tl" />
    <CornerOrnament position="tr" />
    <CornerOrnament position="bl" />
    <CornerOrnament position="br" />

    {/* Animated spotlight behind punchline */}
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: '50vw',
        height: '50vw',
        maxWidth: 500,
        maxHeight: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,209,102,0.08) 0%, transparent 70%)',
      }}
      variants={{
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }}
    />

    {/* Punchline */}
    <motion.p
      className="relative font-display font-bold italic text-center max-w-[800px] leading-snug"
      style={{
        fontSize: 'clamp(22px, 3.2vw, 44px)',
        background: 'linear-gradient(135deg, #FFD166, #FF7B29)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: '0 0 40px rgba(255,209,102,0.15)',
        // textShadow won't render with clip; the glow comes from the spotlight
      }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 18 }}
    >
      {punchline}
    </motion.p>

    {/* Decorative divider */}
    <DiamondDivider />

    {/* Transition text */}
    {transitionText && (
      <motion.div
        className="flex items-start gap-2 max-w-[600px]"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      >
        <ArrowIcon />
        <p
          className="text-muted italic text-center"
          style={{ fontSize: 'clamp(13px, 1.3vw, 18px)' }}
        >
          {transitionText}
        </p>
      </motion.div>
    )}

    {/* Closing CTA */}
    {closingCta && (
      <motion.span
        className="relative mt-2 px-8 py-3.5 rounded-full font-display font-bold tracking-wide text-cream cursor-default"
        style={{
          fontSize: 'clamp(14px, 1.5vw, 22px)',
          background: 'linear-gradient(135deg, #00D4B0, #00b89c)',
        }}
        variants={{
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ type: 'spring', stiffness: 140, damping: 14 }}
        animate={{
          boxShadow: [
            '0 0 0px rgba(0,212,176,0.3), 0 0 20px rgba(0,212,176,0.1)',
            '0 0 8px rgba(0,212,176,0.5), 0 0 30px rgba(0,212,176,0.15)',
            '0 0 0px rgba(0,212,176,0.3), 0 0 20px rgba(0,212,176,0.1)',
          ],
        }}
      >
        {closingCta}
      </motion.span>
    )}
  </motion.div>
);

export default TakeawaySlide;
