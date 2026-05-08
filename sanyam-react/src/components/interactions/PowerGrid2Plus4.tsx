import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { powerGridData as data } from '../../data/slides';

interface Props {
  onComplete: () => void;
}

const nodeIcons: Record<string, React.ReactNode> = {
  santo: <SantoIcon />,
  sabha: <SabhaIcon />,
  suhrad: <SuhradIcon />,
  bhajan: <BhajanIcon />,
  swadhyay: <SwadhyayIcon />,
  seva: <SevaIcon />,
};

const PowerGrid2Plus4 = forwardRef<InteractionHandle, Props>(
  ({ onComplete }, ref) => {
    const [lit, setLit] = useState<Set<number>>(() => new Set());
    const done = lit.size === data.nodes.length;

    const lightNode = useCallback(
      (i: number) => {
        setLit((prev) => {
          if (prev.has(i)) return prev;
          const next = new Set(prev);
          next.add(i);
          if (next.size === data.nodes.length) onComplete();
          return next;
        });
      },
      [onComplete],
    );

    const advanceNext = useCallback(() => {
      for (let i = 0; i < data.nodes.length; i++) {
        if (!lit.has(i)) {
          lightNode(i);
          return;
        }
      }
    }, [lit, lightNode]);

    useImperativeHandle(ref, () => ({
      canAdvance: () => !done,
      advance: advanceNext,
      reset: () => setLit(new Set()),
    }));

    return (
      <div className="flex flex-col items-center gap-10">
        <div className="relative inline-block">
          {/* 3×2 Grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3.5 max-w-[500px] w-full">
            {data.nodes.map((node, i) => {
              const isLit = lit.has(i);
              return (
                <motion.button
                  key={node.label}
                  onClick={() => lightNode(i)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{
                    borderColor: isLit
                      ? '#00D4B0'
                      : 'rgba(255,255,255,0.07)',
                    backgroundColor: isLit
                      ? 'rgba(0,212,176,0.12)'
                      : 'rgba(255,255,255,0.03)',
                    boxShadow: isLit
                      ? '0 0 18px rgba(0,212,176,0.2)'
                      : 'none',
                  }}
                  className="rounded-xl p-4 text-center cursor-pointer border-2 flex flex-col items-center gap-1.5 min-h-[80px] justify-center"
                >
                  <span className="text-2xl">
                    {nodeIcons[node.icon]}
                  </span>
                  <span
                    className={`text-[10px] font-semibold tracking-[0.05em] ${
                      isLit ? 'text-jade' : 'text-muted'
                    }`}
                  >
                    {node.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Center "YOU" node */}
          <motion.div
            animate={{
              backgroundColor: done
                ? 'rgba(255,209,102,0.2)'
                : 'rgba(255,123,41,0.12)',
              borderColor: done ? '#FFD166' : 'rgba(255,123,41,0.4)',
              boxShadow: done
                ? '0 0 30px rgba(255,209,102,0.4)'
                : 'none',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center
                       border-2 z-10 gap-0.5"
          >
            <span className="text-[22px]">⚡</span>
            <span className="font-display text-[8px] font-extrabold text-saffron tracking-[0.07em]">
              YOU
            </span>
          </motion.div>
        </div>

        {/* Counter */}
        <div
          className={`font-display text-[11px] font-bold tracking-[0.1em] whitespace-nowrap ${
            done ? 'text-jade' : 'text-muted'
          }`}
        >
          {done
            ? '✓ GRID FULLY LIT · PROTECTION ACTIVE'
            : `${data.prompt} · ${lit.size} / ${data.nodes.length}`}
        </div>
      </div>
    );
  },
);

PowerGrid2Plus4.displayName = 'PowerGrid2Plus4';
export default PowerGrid2Plus4;

/* ── Minimal icons ── */

function SantoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M5 19c0-3 3-6 6-6s6 3 6 6" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M11 4v-2m-3 3l-1-1m7 1l1-1" stroke="currentColor" strokeWidth="1" className="text-gold" />
    </svg>
  );
}

function SabhaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M3 9h16" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M7 5V3m8 2V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cream" />
    </svg>
  );
}

function SuhradIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <circle cx="14" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M3 18c0-2.5 2-5 5-5m6 0c3 0 5 2.5 5 5" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M8 13c1 1 5 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cream" />
    </svg>
  );
}

function BhajanIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M8 18V6l10-3v12" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <circle cx="16" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
    </svg>
  );
}

function SwadhyayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 4h7c1 0 2 1 2 2v13c-1-1-2-1-3-1H3V4z" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M19 4h-7c-1 0-2 1-2 2v13c1-1 2-1 3-1h6V4z" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
    </svg>
  );
}

function SevaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 3c-4 0-7 3-7 6.5 0 5 7 9.5 7 9.5s7-4.5 7-9.5C18 6 15 3 11 3z" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
      <path d="M11 3c-2 0-3.5 1.5-3.5 3.5S9 10 11 12c2-2 3.5-3.5 3.5-5.5S13 3 11 3z" fill="currentColor" className="text-cream/20" />
    </svg>
  );
}
