import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { steeringWheelData as data } from '../../data/slides';

type Phase = 'choose' | 'suppress' | 'done';

interface Props {
  onComplete: () => void;
}

const SteeringWheelInteraction = forwardRef<InteractionHandle, Props>(
  ({ onComplete }, ref) => {
    const [phase, setPhase] = useState<Phase>('choose');

    const handleClick = useCallback(
      (key: 'suppress' | 'orient') => {
        if (phase === 'done') return;
        if (key === 'suppress') {
          setPhase('suppress');
          setTimeout(() => setPhase('choose'), 1600);
        } else {
          setPhase('done');
          onComplete();
        }
      },
      [phase, onComplete],
    );

    const reset = useCallback(() => {
      setPhase('choose');
    }, []);

    useImperativeHandle(ref, () => ({
      canAdvance: () => phase === 'choose',
      advance: () => handleClick('orient'),
      reset,
    }));

    return (
      <AnimatePresence mode="wait">
        {phase === 'choose' && (
          <motion.div
            key="cards"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full max-w-[640px]"
          >
            {data.cards.map((card) => (
              <button
                key={card.key}
                onClick={() => handleClick(card.key)}
                className={`flex-1 rounded-[14px] p-4 sm:p-5 md:p-7 text-center cursor-pointer transition-all duration-300
                  border-2 touch-manipulation ${
                    card.variant === 'danger'
                      ? 'bg-danger/10 border-danger/30 hover:border-danger'
                      : 'bg-jade/[0.08] border-jade/25 hover:border-jade'
                  } hover:-translate-y-0.5`}
              >
                <div className="text-4xl mb-2.5">
                  {card.key === 'suppress' ? (
                    <StopIcon />
                  ) : (
                    <WaveIcon />
                  )}
                </div>
                <div
                  className={`font-display text-sm font-extrabold tracking-[0.08em] mb-2 ${
                    card.variant === 'danger' ? 'text-danger' : 'text-jade'
                  }`}
                >
                  {card.label}
                </div>
                <div className="text-xs text-muted leading-relaxed whitespace-pre-line">
                  {card.description}
                </div>
              </button>
            ))}
          </motion.div>
        )}

        {phase === 'suppress' && (
          <motion.div
            key="suppress"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="font-display text-[22px] font-extrabold text-danger text-center"
          >
            <span className="text-3xl inline-block mb-2">💥</span>
            <br />
            {data.suppressResult}
          </motion.div>
        )}

        {phase === 'done' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-[22px] font-extrabold text-jade text-center"
          >
            <span className="text-3xl inline-block mb-2">⚡</span>
            <br />
            {data.orientResult}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

SteeringWheelInteraction.displayName = 'SteeringWheelInteraction';
export default SteeringWheelInteraction;

/* ── CSS-based icon replacements ── */

function StopIcon() {
  return (
    <div className="w-10 h-10 mx-auto rounded-lg bg-danger/20 border-2 border-danger/50 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-danger" />
      </svg>
    </div>
  );
}

function WaveIcon() {
  return (
    <div className="w-10 h-10 mx-auto rounded-full bg-jade/20 border-2 border-jade/50 flex items-center justify-center">
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
        <path d="M1 7C3 3 5 11 7 7C9 3 11 11 13 7C15 3 17 11 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-jade" />
      </svg>
    </div>
  );
}
