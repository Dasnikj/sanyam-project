import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { SlideData, InteractionHandle } from '../types';
import PunchlineBox from './PunchlineBox';
import InteractionRouter from './interactions';
import { TOTAL_SLIDES } from '../data/slides';

interface Props {
  slide: SlideData;
  index: number;
  punchlineRevealed: boolean;
  onRevealPunchline: () => void;
}

const Slide = forwardRef<InteractionHandle, Props>(
  ({ slide, index, punchlineRevealed, onRevealPunchline }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-16 py-8 gap-0"
      >
        {/* Meta badges */}
        <div className="flex gap-2.5 items-center mb-3.5 flex-wrap justify-center">
          <span className="text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full bg-saffron/15 border border-saffron/35 text-saffron">
            Section {slide.sectionNumber} of {TOTAL_SLIDES}
          </span>
          <span className="text-[10px] font-medium tracking-[0.07em] px-3 py-1 rounded-full bg-jade/10 border border-jade/30 text-jade">
            {slide.principleTag}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display font-extrabold leading-[1.1] text-center mb-2.5 text-cream"
          style={{ fontSize: 'clamp(28px, 4.2vw, 54px)' }}
        >
          {slide.title}
        </h1>

        {/* Hook */}
        <p
          className="text-gold italic text-center max-w-[780px] mb-4 leading-relaxed font-normal"
          style={{ fontSize: 'clamp(12px, 1.35vw, 16px)' }}
        >
          {slide.hook}
        </p>

        {/* On-screen text */}
        <p
          className="font-display font-bold text-center text-jade mb-5 max-w-[700px] leading-snug"
          style={{ fontSize: 'clamp(16px, 2.1vw, 26px)' }}
        >
          {slide.onscreenText}
        </p>

        {/* Interaction zone */}
        <div className="w-full max-w-[820px] flex items-center justify-center flex-1 min-h-[160px] relative">
          <InteractionRouter
            ref={ref}
            type={slide.interactionType}
            slideIndex={index}
            onComplete={onRevealPunchline}
          />
        </div>

        {/* Punchline */}
        <PunchlineBox text={slide.punchline} revealed={punchlineRevealed} />
      </motion.div>
    );
  },
);

Slide.displayName = 'Slide';
export default Slide;
