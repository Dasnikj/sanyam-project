import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
  value: string;
  label: string;
  context: string;
  source?: string;
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);

  const numericMatch = value.match(/^([\d,.]+)(.*)$/);

  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => {
    if (!numericMatch) return value;
    const suffix = numericMatch[2] || '';
    const target = parseFloat(numericMatch[1].replace(/,/g, ''));
    if (target >= 1000) {
      return Math.round(v).toLocaleString() + suffix;
    }
    if (Number.isInteger(target)) {
      return Math.round(v).toString() + suffix;
    }
    return v.toFixed(1) + suffix;
  });

  useEffect(() => {
    if (!numericMatch) return;
    const target = parseFloat(numericMatch[1].replace(/,/g, ''));
    const controls = animate(motionVal, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on('change', (v) => setDisplayed(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [value]);

  if (!numericMatch) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.3 }}
      >
        {value}
      </motion.span>
    );
  }

  return <span ref={ref}>{displayed}</span>;
}

const StatReveal = ({ value, label, context, source }: Props) => (
  <motion.div
    className="relative flex flex-col items-center justify-center w-full h-full gap-4 px-6 overflow-hidden"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
  >
    {/* Decorative rotating hexagon */}
    <motion.svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      width="320"
      height="320"
      viewBox="0 0 320 320"
      fill="none"
      style={{ opacity: 0.05 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    >
      <polygon
        points="160,20 290,80 290,240 160,300 30,240 30,80"
        stroke="#FF7B29"
        strokeWidth="1"
        fill="none"
      />
    </motion.svg>

    {/* Top line */}
    <motion.div
      className="h-[1px] w-[100px] rounded-full"
      style={{ background: '#FF7B29' }}
      variants={{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1 },
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />

    {/* Big number */}
    <motion.span
      className="relative z-10 font-display font-bold text-saffron leading-none"
      style={{
        fontSize: 'clamp(48px, 8vw, 96px)',
        textShadow: '0 0 40px rgba(255,123,41,0.3), 0 0 80px rgba(255,123,41,0.1)',
      }}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ type: 'spring', stiffness: 160, damping: 14 }}
    >
      <AnimatedNumber value={value} />
    </motion.span>

    {/* Bottom line */}
    <motion.div
      className="h-[1px] w-[100px] rounded-full"
      style={{ background: '#FF7B29' }}
      variants={{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1 },
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />

    {/* Label */}
    <motion.h2
      className="relative z-10 font-display text-cream text-center tracking-wider uppercase"
      style={{ fontSize: 'clamp(14px, 1.8vw, 24px)' }}
      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5 }}
    >
      {label}
    </motion.h2>

    {/* Context with left border accent */}
    <motion.div
      className="relative z-10 flex max-w-[700px]"
      variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[2px] rounded-full bg-saffron mr-4 shrink-0" />
      <p
        className="text-cream/80 leading-relaxed"
        style={{ fontSize: 'clamp(13px, 1.4vw, 20px)' }}
      >
        {context}
      </p>
    </motion.div>

    {/* Source with icon */}
    {source && (
      <motion.span
        className="relative z-10 flex items-center gap-1.5 text-muted text-xs mt-2"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="opacity-60">
          <path
            d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M5 5h6M5 8h6M5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        {source}
      </motion.span>
    )}
  </motion.div>
);

export default StatReveal;
