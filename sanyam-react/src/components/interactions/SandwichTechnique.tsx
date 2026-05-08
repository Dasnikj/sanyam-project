import { forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { InteractionHandle } from '../../types';
import { sandwichData as data } from '../../data/slides';

interface Props {
  onComplete: () => void;
}

const blockStyles: Record<string, string> = {
  bhajan: 'bg-jade/10 border-jade/35 text-jade',
  work: 'bg-saffron/10 border-saffron/35 text-saffron font-display text-sm font-extrabold',
  swadhyay: 'bg-jade/10 border-jade/35 text-jade',
};

const SandwichTechnique = forwardRef<InteractionHandle, Props>(
  ({ onComplete }, ref) => {
    const [step, setStep] = useState(0);

    const addBlock = useCallback(() => {
      if (step >= 3) return;
      const next = step + 1;
      setStep(next);
      if (next === 3) onComplete();
    }, [step, onComplete]);

    useImperativeHandle(ref, () => ({
      canAdvance: () => step < 3,
      advance: addBlock,
      reset: () => setStep(0),
    }));

    return (
      <div className="flex flex-col items-center gap-3.5 w-full max-w-[660px]">
        {/* Track */}
        <div className="flex gap-2.5 items-center flex-wrap justify-center min-h-[60px]">
          {data.blocks.map((block, i) => (
            <div key={block.type} className="contents">
              <AnimatePresence>
                {i < step && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`rounded-[10px] px-5 py-3.5 text-center text-xs font-semibold border-2 min-w-[130px] ${blockStyles[block.type]}`}
                  >
                    {block.label}
                    <br />
                    <small className="opacity-70">{block.sublabel}</small>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Separator */}
              {i < 2 && i < step - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-muted"
                >
                  +
                </motion.span>
              )}
            </div>
          ))}
        </div>

        {/* Completion text */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-display text-[13px] font-extrabold text-jade tracking-[0.08em] uppercase text-center"
            >
              {data.doneText}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <button
          className="ix-btn ix-btn-saffron"
          disabled={step >= 3}
          onClick={addBlock}
        >
          {step >= 3 ? 'SANDWICH BUILT ✓' : data.buttonLabels[step]}
        </button>
      </div>
    );
  },
);

SandwichTechnique.displayName = 'SandwichTechnique';
export default SandwichTechnique;
