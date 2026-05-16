import { motion, AnimatePresence } from 'framer-motion';
import type { SpeakerNotes as SpeakerNotesType } from '../types';

interface Props {
  open: boolean;
  notes: SpeakerNotesType;
  onClose: () => void;
}

const sections: { key: keyof Omit<SpeakerNotesType, 'title'>; label: string }[] = [
  { key: 'open', label: 'OPEN' },
  { key: 'prasang', label: 'PRASANG / CONCEPT' },
  { key: 'clickDirection', label: 'CLICK DIRECTION' },
  { key: 'transition', label: 'TRANSITION' },
];

export default function SpeakerNotes({ open, notes, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="notes-panel fixed inset-0 z-[200] bg-surface/[0.97] backdrop-blur-xl flex flex-col px-4 pt-6 pb-8 md:px-12 md:py-12 lg:px-20 lg:py-16 overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-5 md:right-7 w-10 h-10 rounded-full bg-white/[0.07] border border-line
                       text-cream text-xl flex items-center justify-center cursor-pointer
                       hover:bg-white/[0.14] transition-colors touch-manipulation"
          >
            ✕
          </button>

          <h2 className="font-display text-[18px] md:text-[22px] text-saffron mb-4 md:mb-6 font-bold pr-12">
            {notes.title}
          </h2>

          {sections.map((s) => (
            <div key={s.key} className="mb-6">
              <div className="text-[10px] uppercase tracking-[0.1em] text-muted font-semibold mb-1.5">
                {s.label}
              </div>
              <div className="text-base leading-relaxed text-cream max-w-[900px]">
                {s.key === 'transition' ? (
                  <em>{notes[s.key]}</em>
                ) : (
                  notes[s.key]
                )}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
