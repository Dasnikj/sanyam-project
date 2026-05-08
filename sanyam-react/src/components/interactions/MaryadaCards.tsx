import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { maryadaData as data } from '../../data/slides';

interface Props {
  onComplete: () => void;
}

const MaryadaCards = forwardRef<InteractionHandle, Props>(({ onComplete }, ref) => {
  const [cleared, setCleared] = useState(false);

  const reveal = useCallback(() => {
    if (cleared) return;
    setCleared(true);
    onComplete();
  }, [cleared, onComplete]);

  useImperativeHandle(ref, () => ({
    canAdvance: () => !cleared,
    advance: reveal,
    reset: () => setCleared(false),
  }));

  return (
    <div className="w-full max-w-[540px]">
      <motion.div
        animate={{
          borderColor: cleared ? 'rgba(0,212,176,0.35)' : 'rgba(138,134,153,0.2)',
          backgroundColor: cleared ? 'rgba(0,212,176,0.1)' : 'rgba(138,134,153,0.1)',
        }}
        transition={{ duration: 0.6 }}
        className="rounded-[14px] p-8 text-center border-2"
      >
        {/* Icon */}
        <div className="text-[40px] mb-3">
          {cleared ? (
            <MapIcon />
          ) : (
            <FogIcon />
          )}
        </div>

        {/* Text */}
        <motion.p
          animate={{ color: cleared ? '#F0EDE8' : '#8A8699' }}
          transition={{ duration: 0.6 }}
          className="text-[15px] leading-relaxed mb-5"
        >
          {cleared ? data.clearText : data.foggyText}
        </motion.p>

        {/* Button */}
        <button
          className="ix-btn ix-btn-saffron"
          disabled={cleared}
          onClick={reveal}
        >
          {cleared ? data.doneLabel : data.buttonLabel}
        </button>
      </motion.div>
    </div>
  );
});

MaryadaCards.displayName = 'MaryadaCards';
export default MaryadaCards;

function FogIcon() {
  return (
    <div className="w-12 h-12 mx-auto rounded-full bg-muted/20 border-2 border-muted/30 flex items-center justify-center">
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
        <path d="M2 4h20M4 8h16M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted" />
      </svg>
    </div>
  );
}

function MapIcon() {
  return (
    <div className="w-12 h-12 mx-auto rounded-full bg-jade/20 border-2 border-jade/40 flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M1 5l6-3 6 3 6-3v14l-6 3-6-3-6 3V5z" stroke="currentColor" strokeWidth="1.5" className="text-jade" />
        <path d="M7 2v14M13 5v14" stroke="currentColor" strokeWidth="1.5" className="text-jade" />
      </svg>
    </div>
  );
}
