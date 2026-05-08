import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { invisibleFoundationData as data } from '../../data/slides';

interface Props {
  onComplete: () => void;
}

const stepIcons: Record<string, React.ReactNode> = {
  clay: <ClayIcon />,
  fire: <FireIcon />,
  pot: <PotIcon />,
};

const InvisibleFoundation = forwardRef<InteractionHandle, Props>(
  ({ onComplete }, ref) => {
    const [step, setStep] = useState(0);

    const advance = useCallback(() => {
      if (step >= 2) return;
      const next = step + 1;
      setStep(next);
      if (next === 2) onComplete();
    }, [step, onComplete]);

    useImperativeHandle(ref, () => ({
      canAdvance: () => step < 2,
      advance,
      reset: () => setStep(0),
    }));

    return (
      <div className="flex flex-col items-center gap-5 w-full max-w-[640px]">
        <div className="flex gap-4 items-center w-full">
          {data.steps.map((s, i) => {
            const isActive = i === step && step < 2;
            const isDone = i < step || (i === step && step === 2);
            return (
              <div key={s.label} className="contents">
                <motion.div
                  animate={{
                    borderColor: isActive
                      ? '#FF7B29'
                      : isDone
                        ? '#00D4B0'
                        : 'rgba(255,255,255,0.07)',
                    backgroundColor: isActive
                      ? 'rgba(255,123,41,0.1)'
                      : isDone
                        ? 'rgba(0,212,176,0.08)'
                        : 'rgba(255,255,255,0.03)',
                    boxShadow: isActive
                      ? '0 0 24px rgba(255,123,41,0.15)'
                      : 'none',
                  }}
                  className="flex-1 rounded-[14px] p-6 text-center border-2"
                >
                  <div className="text-[34px] mb-2.5">
                    {stepIcons[s.icon]}
                  </div>
                  <div
                    className={`font-display text-[11px] font-extrabold tracking-[0.09em] uppercase ${
                      isActive
                        ? 'text-saffron'
                        : isDone
                          ? 'text-jade'
                          : 'text-muted'
                    }`}
                  >
                    {s.label}
                  </div>
                  <div className="text-[10px] text-muted font-normal mt-1">
                    {s.sublabel}
                  </div>
                </motion.div>
                {i < 2 && (
                  <span className="text-[22px] text-muted flex-shrink-0">
                    →
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <button
          className="ix-btn ix-btn-saffron"
          disabled={step >= 2}
          onClick={advance}
        >
          {step >= 2 ? data.doneLabel : data.buttonLabel}
        </button>
      </div>
    );
  },
);

InvisibleFoundation.displayName = 'InvisibleFoundation';
export default InvisibleFoundation;

function ClayIcon() {
  return (
    <div className="w-9 h-9 mx-auto rounded-full bg-muted/20 border border-muted/30 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <ellipse cx="9" cy="14" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" className="text-muted" />
        <path d="M5 14V8c0-2 1.5-4 4-4s4 2 4 4v6" stroke="currentColor" strokeWidth="1.5" className="text-muted" />
      </svg>
    </div>
  );
}

function FireIcon() {
  return (
    <div className="w-9 h-9 mx-auto rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center">
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path d="M8 1c0 4-6 6-6 11a6 6 0 0 0 12 0c0-3-2-5-3-7s-1-3-3-4z" stroke="currentColor" strokeWidth="1.5" className="text-saffron" />
        <path d="M8 11c0 1.5-2 2-2 3.5a2 2 0 0 0 4 0c0-1.5-2-2-2-3.5z" fill="currentColor" className="text-saffron/50" />
      </svg>
    </div>
  );
}

function PotIcon() {
  return (
    <div className="w-9 h-9 mx-auto rounded-full bg-jade/20 border border-jade/40 flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 6h12v2c0 4-2 7-6 8-4-1-6-4-6-8V6z" stroke="currentColor" strokeWidth="1.5" className="text-jade" />
        <path d="M5 4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-jade" />
      </svg>
    </div>
  );
}
