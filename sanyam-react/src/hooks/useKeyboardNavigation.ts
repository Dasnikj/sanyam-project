import { useEffect, type RefObject } from 'react';
import type { InteractionHandle } from '../types';

interface KeyboardNavOptions {
  next: () => void;
  prev: () => void;
  toggleNotes: () => void;
  closeNotes: () => void;
  toggleFullscreen: () => void;
  interactionRef: RefObject<InteractionHandle | null>;
  notesOpen: boolean;
}

export function useKeyboardNavigation({
  next,
  prev,
  toggleNotes,
  closeNotes,
  toggleFullscreen,
  interactionRef,
  notesOpen,
}: KeyboardNavOptions) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (notesOpen) {
        if (e.key === 'Escape' || e.key === 'n' || e.key === 'N') {
          closeNotes();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ': {
          e.preventDefault();
          const handle = interactionRef.current;
          if (handle && handle.canAdvance()) {
            handle.advance();
          } else {
            next();
          }
          break;
        }
        case 'ArrowLeft':
          e.preventDefault();
          prev();
          break;
        case 'n':
        case 'N':
          toggleNotes();
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'r':
        case 'R': {
          const handle = interactionRef.current;
          if (handle) handle.reset();
          break;
        }
      }
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, toggleNotes, closeNotes, toggleFullscreen, interactionRef, notesOpen]);
}
