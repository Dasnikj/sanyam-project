import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { tortoiseModeData as data } from '../../data/slides';

type Phase = 'idle' | 'withdrawing' | 'done';

interface Props {
  onComplete: () => void;
}

const TortoiseMode = forwardRef<InteractionHandle, Props>(({ onComplete }, ref) => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [fadedCount, setFadedCount] = useState(0);

  const withdraw = useCallback(() => {
    if (phase !== 'idle') return;
    setPhase('withdrawing');

    data.distractions.forEach((_, i) => {
      setTimeout(() => setFadedCount((c) => c + 1), (i + 1) * 120);
    });

    setTimeout(() => {
      setPhase('done');
      onComplete();
    }, data.distractions.length * 120 + 600);
  }, [phase, onComplete]);

  useImperativeHandle(ref, () => ({
    canAdvance: () => phase === 'idle',
    advance: withdraw,
    reset: () => {
      setPhase('idle');
      setFadedCount(0);
    },
  }));

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[600px]">
      {/* Chips */}
      <div className="flex flex-wrap gap-2.5 justify-center min-h-[80px] items-center">
        {data.distractions.map((label, i) => (
          <motion.span
            key={label}
            animate={{
              opacity: i < fadedCount ? 0 : 1,
              scale: i < fadedCount ? 0.7 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="bg-white/[0.07] border border-line rounded-full px-4 py-1.5 text-xs font-medium text-cream"
          >
            {label}
          </motion.span>
        ))}
      </div>

      {/* Focus dot */}
      <AnimatePresence>
        {phase === 'done' && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-3.5 h-3.5 rounded-full bg-jade animate-pulse_glow"
          />
        )}
      </AnimatePresence>

      {/* Caption */}
      <AnimatePresence>
        {phase === 'done' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-display text-base font-bold text-jade"
          >
            {data.doneCaption}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <button
        className="ix-btn ix-btn-outline"
        disabled={phase !== 'idle'}
        onClick={withdraw}
      >
        {phase === 'idle'
          ? data.buttonLabel
          : phase === 'withdrawing'
            ? 'WITHDRAWING...'
            : 'SENSES WITHDRAWN ✓'}
      </button>
    </div>
  );
});

TortoiseMode.displayName = 'TortoiseMode';
export default TortoiseMode;
