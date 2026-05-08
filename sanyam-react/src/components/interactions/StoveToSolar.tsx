import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { stoveToSolarData as data } from '../../data/slides';

type Phase = 'idle' | 'aligning' | 'done';

interface Props {
  onComplete: () => void;
}

const StoveToSolar = forwardRef<InteractionHandle, Props>(({ onComplete }, ref) => {
  const [phase, setPhase] = useState<Phase>('idle');

  const face = useCallback(() => {
    if (phase !== 'idle') return;
    setPhase('aligning');
    setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2100);
  }, [phase, onComplete]);

  useImperativeHandle(ref, () => ({
    canAdvance: () => phase === 'idle',
    advance: face,
    reset: () => setPhase('idle'),
  }));

  const lit = phase !== 'idle';

  return (
    <div className="flex flex-col items-center gap-4 max-w-[560px] w-full">
      {/* Sun icon */}
      <motion.div
        animate={{
          filter: lit ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.5)',
        }}
        transition={{ duration: 0.6 }}
        className={lit ? 'animate-solar_glow' : ''}
      >
        <SunIcon lit={lit} />
      </motion.div>

      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
        <motion.div
          animate={{ width: lit ? '100%' : '0%' }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #FF7B29, #FFD166)',
          }}
        />
      </div>

      {/* Button */}
      <button
        className="ix-btn ix-btn-saffron"
        disabled={phase !== 'idle'}
        onClick={face}
      >
        {phase === 'idle'
          ? data.buttonLabel
          : phase === 'aligning'
            ? 'ALIGNING...'
            : '✓ FACING THE SUN'}
      </button>

      {/* CTA */}
      <motion.div
        animate={{
          opacity: phase === 'done' ? 1 : 0,
          y: phase === 'done' ? 0 : 12,
        }}
        transition={{ duration: 0.6, delay: phase === 'done' ? 0 : 0 }}
        className="bg-jade/10 border-2 border-jade/40 rounded-[14px] p-5 text-center max-w-[480px]"
      >
        <div className="font-display text-[15px] font-extrabold text-jade mb-2 tracking-[0.05em]">
          {data.ctaTitle}
        </div>
        <div className="text-[13px] text-muted leading-relaxed">
          {data.ctaBody}
        </div>
      </motion.div>
    </div>
  );
});

StoveToSolar.displayName = 'StoveToSolar';
export default StoveToSolar;

function SunIcon({ lit }: { lit: boolean }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle
        cx="32"
        cy="32"
        r="14"
        stroke={lit ? '#FFD166' : '#8A8699'}
        strokeWidth="2.5"
        fill={lit ? 'rgba(255,209,102,0.15)' : 'none'}
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 32 + Math.cos(rad) * 18;
        const y1 = 32 + Math.sin(rad) * 18;
        const x2 = 32 + Math.cos(rad) * 24;
        const y2 = 32 + Math.sin(rad) * 24;
        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={lit ? '#FFD166' : '#8A8699'}
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
