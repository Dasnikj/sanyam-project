import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { aaharAuditData as data } from '../../data/slides';

interface Props {
  onComplete: () => void;
}

const senseIcons: Record<string, React.ReactNode> = {
  eye: <EyeIcon />,
  ear: <EarIcon />,
  mouth: <MouthIcon />,
  hand: <HandIcon />,
  brain: <BrainIcon />,
};

const FiveFoldAaharAudit = forwardRef<InteractionHandle, Props>(
  ({ onComplete }, ref) => {
    const [states, setStates] = useState<(null | 'healthy' | 'toxic')[]>(
      () => data.senses.map(() => null),
    );
    const count = states.filter(Boolean).length;
    const done = count === data.senses.length;

    const clickSense = useCallback(
      (i: number) => {
        setStates((prev) => {
          if (prev[i]) return prev;
          const next = [...prev];
          next[i] = Math.random() > 0.5 ? 'healthy' : 'toxic';
          const newCount = next.filter(Boolean).length;
          if (newCount === data.senses.length) onComplete();
          return next;
        });
      },
      [onComplete],
    );

    const advanceNext = useCallback(() => {
      const idx = states.findIndex((s) => s === null);
      if (idx !== -1) clickSense(idx);
    }, [states, clickSense]);

    useImperativeHandle(ref, () => ({
      canAdvance: () => !done,
      advance: advanceNext,
      reset: () => setStates(data.senses.map(() => null)),
    }));

    return (
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex gap-3.5 flex-wrap justify-center max-w-[700px]">
          {data.senses.map((sense, i) => {
            const st = states[i];
            return (
              <motion.button
                key={sense.label}
                onClick={() => clickSense(i)}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className={`w-[110px] h-[110px] rounded-full flex flex-col items-center justify-center gap-1.5
                  cursor-pointer transition-all duration-300 border-2 ${
                    st === 'healthy'
                      ? 'bg-jade/15 border-jade shadow-[0_0_20px_rgba(0,212,176,0.25)]'
                      : st === 'toxic'
                        ? 'bg-danger/15 border-danger shadow-[0_0_20px_rgba(255,59,92,0.2)]'
                        : 'bg-white/[0.04] border-line'
                  }`}
              >
                <span className="text-[26px]">{senseIcons[sense.icon]}</span>
                <span
                  className={`text-[10px] font-semibold tracking-[0.05em] ${
                    st === 'healthy'
                      ? 'text-jade'
                      : st === 'toxic'
                        ? 'text-danger'
                        : 'text-muted'
                  }`}
                >
                  {st === 'healthy'
                    ? sense.healthyLabel
                    : st === 'toxic'
                      ? sense.toxicLabel
                      : sense.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        <div
          className={`mt-3.5 font-display text-[13px] font-bold tracking-[0.08em] text-center transition-colors ${
            done ? 'text-jade' : 'text-muted'
          }`}
        >
          {done
            ? '✓ ALL 5 SENSES AUDITED'
            : `${data.prompt} · ${count} / ${data.senses.length}`}
        </div>
      </div>
    );
  },
);

FiveFoldAaharAudit.displayName = 'FiveFoldAaharAudit';
export default FiveFoldAaharAudit;

/* ── Minimal SVG icons ── */

function EyeIcon() {
  return (
    <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
      <path d="M1 9s4-8 12-8 12 8 12 8-4 8-12 8S1 9 1 9z" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <circle cx="13" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
    </svg>
  );
}

function EarIcon() {
  return (
    <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
      <path d="M15 4a8 8 0 0 0-12 6c0 3 2 5 2 8s-1 4 3 4c3 0 4-2 4-4 0-3 4-4 4-7a5 5 0 0 0-1-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cream" />
    </svg>
  );
}

function MouthIcon() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
      <path d="M2 6c3-4 6-4 10-4s7 0 10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cream" />
      <path d="M4 6c2 6 6 8 8 8s6-2 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cream" />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
      <path d="M7 14V4a2 2 0 1 1 4 0v8m0-10a2 2 0 1 1 4 0v8m0-6a2 2 0 1 1 4 0v10a8 8 0 0 1-16 0v-4a2 2 0 1 1 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2a5 5 0 0 0-4 2 4 4 0 0 0-5 4 5 5 0 0 0 0 8 4 4 0 0 0 5 4 5 5 0 0 0 8 0 4 4 0 0 0 5-4 5 5 0 0 0 0-8 4 4 0 0 0-5-4 5 5 0 0 0-4-2z" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M12 2v20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-cream/50" />
    </svg>
  );
}
