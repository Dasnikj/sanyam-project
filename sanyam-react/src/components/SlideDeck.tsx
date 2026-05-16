import { useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TOTAL_SECTIONS } from '../data/slides';
import { useDeckState } from '../hooks/useDeckState';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useTouchSwipe } from '../hooks/useTouchSwipe';
import type { InteractionHandle } from '../types';
import SubSlideRouter from './sub-slides';
import ProgressBar from './ProgressBar';
import NavigationControls from './NavigationControls';
import SpeakerNotes from './SpeakerNotes';

export default function SlideDeck() {
  const deck = useDeckState();
  const interactionRef = useRef<InteractionHandle | null>(null);

  const handleNext = useCallback(() => {
    const handle = interactionRef.current;
    if (handle && handle.canAdvance()) {
      handle.advance();
    } else {
      deck.next();
    }
  }, [deck]);

  useKeyboardNavigation({
    next: handleNext,
    prev: deck.prev,
    toggleNotes: deck.toggleNotes,
    closeNotes: deck.closeNotes,
    toggleFullscreen: deck.toggleFullscreen,
    interactionRef,
    notesOpen: deck.notesOpen,
  });

  useTouchSwipe({ onSwipeLeft: handleNext, onSwipeRight: deck.prev });

  const { current } = deck;
  const section = current.section;
  const subSlide = current.subSlide;
  const isFirstInSection = current.localIndex === 0;

  return (
    <div className="h-dvh w-dvw overflow-hidden font-body text-cream relative">
      {/* Animated background — slow wave drift */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bg-cover bg-center bg-no-repeat animate-bg-drift"
          style={{
            backgroundImage: 'url(/assets/generalBG.png)',
            inset: '-5%',
            width: '110%',
            height: '110%',
          }}
        />
      </div>
      {/* ── Top nav bar ── */}
      <nav className="fixed top-0 left-0 right-0 h-[52px] flex items-center justify-between px-3 md:px-7 bg-surface/90 backdrop-blur-md border-b border-line z-[100]">
        {/* Title: full on lg+, abbreviated below */}
        <div className="font-display font-bold text-saffron tracking-[0.05em] uppercase shrink-0 min-w-0">
          <span className="hidden lg:inline text-[13px]">Sanyam · The Steering Wheel of Freedom</span>
          <span className="lg:hidden text-[11px] md:text-[12px]">Sanyam</span>
        </div>

        {/* Progress bar: visible on md+ only */}
        <div className="hidden md:block">
          <ProgressBar
            currentSectionIndex={current.sectionIndex}
            currentLocalIndex={current.localIndex}
            currentLocalTotal={current.localTotal}
            globalIndex={deck.globalIndex}
            totalFlat={deck.totalFlat}
            goToSection={deck.goToSection}
          />
        </div>

        {/* Right controls */}
        <div className="flex gap-2 md:gap-3.5 items-center text-xs text-muted shrink-0">
          <span className="hidden sm:inline text-[9px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-jade/10 border border-jade/30 text-jade whitespace-nowrap">
            Presented · May 2025
          </span>
          <span className="tracking-[0.05em] font-display font-bold text-[11px] md:text-xs">
            S{section.sectionNumber}
            <span className="text-muted/50 font-normal mx-1">·</span>
            <span className="text-cream/50 font-normal">
              {current.localIndex + 1}/{current.localTotal}
            </span>
          </span>
          <span className="text-muted/30 hidden md:inline">|</span>
          <span className="tracking-[0.05em] hidden md:inline">
            {current.sectionIndex + 1} / {TOTAL_SECTIONS}
          </span>
          <button
            onClick={deck.toggleNotes}
            aria-label="Toggle speaker notes"
            className="bg-saffron/10 border border-saffron/30 text-saffron font-body
                       text-[11px] font-semibold px-2 md:px-3 py-1.5 rounded-full cursor-pointer
                       tracking-[0.04em] transition-colors hover:bg-saffron/20 touch-manipulation"
          >
            <span className="hidden md:inline">Notes (N)</span>
            <span className="md:hidden">N</span>
          </button>
        </div>
      </nav>

      {/* ── Slide stage ── */}
      <div className="absolute top-[52px] left-0 right-0 bottom-0 overflow-hidden z-[1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={subSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="deck-slide absolute inset-0 flex flex-col items-center justify-center px-4 md:px-10 lg:px-16 py-3 md:py-5 lg:py-8 gap-0"
          >
            {/* Section header — shown on every sub-slide */}
            <div className="flex gap-2 md:gap-2.5 items-center mb-2 md:mb-4 flex-wrap justify-center">
              <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 md:px-3 py-1 rounded-full bg-saffron/15 border border-saffron/35 text-saffron">
                Section {section.sectionNumber} of {TOTAL_SECTIONS}
              </span>
              <span className="text-[9px] md:text-[10px] font-medium tracking-[0.07em] px-2.5 md:px-3 py-1 rounded-full bg-jade/10 border border-jade/30 text-jade">
                {section.principleTag}
              </span>
            </div>

            {/* Section title — only on first sub-slide */}
            {isFirstInSection && (
              <h1
                className="font-display font-extrabold leading-[1.1] text-center mb-2 md:mb-3 text-cream"
                style={{ fontSize: 'clamp(22px, 4.2vw, 54px)' }}
              >
                {section.title}
              </h1>
            )}

            {/* Sub-slide content */}
            <div className="flex-1 flex items-center justify-center w-full max-w-[900px] min-h-0">
              <SubSlideRouter
                ref={interactionRef}
                subSlide={subSlide}
                onInteractionComplete={() => {}}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Nav arrows ── */}
      <NavigationControls onPrev={deck.prev} onNext={handleNext} />

      {/* ── Speaker notes overlay ── */}
      <SpeakerNotes
        open={deck.notesOpen}
        notes={section.speakerNotes}
        onClose={deck.closeNotes}
      />
    </div>
  );
}
