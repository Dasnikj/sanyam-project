import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { antiFlexData as data } from '../../data/slides';

interface Props {
  onComplete: () => void;
}

const AntiFlexRealityCheck = forwardRef<InteractionHandle, Props>(
  ({ onComplete }, ref) => {
    const [revealed, setRevealed] = useState(false);

    const reveal = useCallback(() => {
      if (revealed) return;
      setRevealed(true);
      onComplete();
    }, [revealed, onComplete]);

    useImperativeHandle(ref, () => ({
      canAdvance: () => !revealed,
      advance: reveal,
      reset: () => setRevealed(false),
    }));

    return (
      <div className="flex flex-col items-center gap-3.5 w-full max-w-[680px]">
        <div className="flex gap-5 w-full">
          {/* Flex / Highlight side */}
          <div className="flex-1 rounded-[14px] p-6 text-center bg-danger/[0.08] border-2 border-danger/20">
            <div className="mb-2.5">
              <CameraIcon />
            </div>
            <div className="font-display text-[13px] font-extrabold tracking-[0.08em] uppercase text-danger mb-2.5">
              {data.flexTitle}
            </div>
            <div className="text-xs text-muted leading-[2]">
              {data.flexItems.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>

          {/* Atma side */}
          <motion.div
            animate={{
              opacity: revealed ? 1 : 0.25,
              borderColor: revealed
                ? 'rgba(0,212,176,0.4)'
                : 'rgba(0,212,176,0.15)',
              backgroundColor: revealed
                ? 'rgba(0,212,176,0.1)'
                : 'rgba(0,212,176,0.06)',
            }}
            transition={{ duration: 0.6 }}
            className="flex-1 rounded-[14px] p-6 text-center border-2 border-dashed"
          >
            <div className="mb-2.5">
              <DiamondIcon />
            </div>
            <div className="font-display text-[13px] font-extrabold tracking-[0.08em] uppercase text-jade mb-2.5">
              {data.atmaTitle}
            </div>
            <motion.div
              animate={{ color: revealed ? '#F0EDE8' : '#8A8699' }}
              className="text-xs leading-[2]"
            >
              {data.atmaItems.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <button
          className="ix-btn ix-btn-saffron"
          disabled={revealed}
          onClick={reveal}
        >
          {revealed ? 'ATMA > ALGORITHM' : data.buttonLabel}
        </button>
      </div>
    );
  },
);

AntiFlexRealityCheck.displayName = 'AntiFlexRealityCheck';
export default AntiFlexRealityCheck;

function CameraIcon() {
  return (
    <div className="w-9 h-9 mx-auto rounded-lg bg-danger/20 border border-danger/40 flex items-center justify-center">
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
        <rect x="1" y="4" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-danger" />
        <circle cx="9" cy="9.5" r="3" stroke="currentColor" strokeWidth="1.5" className="text-danger" />
        <path d="M6 4l1-3h4l1 3" stroke="currentColor" strokeWidth="1.5" className="text-danger" />
      </svg>
    </div>
  );
}

function DiamondIcon() {
  return (
    <div className="w-9 h-9 mx-auto rounded-lg bg-jade/20 border border-jade/40 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1L15 8L8 15L1 8L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-jade" />
        <circle cx="8" cy="8" r="2" fill="currentColor" className="text-jade/50" />
      </svg>
    </div>
  );
}
