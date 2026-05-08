import { useState, useCallback, useMemo } from 'react';
import { sections, flattenSections } from '../data/slides';
import type { FlatSlide } from '../types';

export function useDeckState() {
  const flat = useMemo(() => flattenSections(sections), []);
  const totalFlat = flat.length;
  const totalSections = sections.length;

  const [globalIndex, setGlobalIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);

  const current: FlatSlide = flat[globalIndex];

  const goToGlobal = useCallback(
    (idx: number) => {
      if (idx >= 0 && idx < totalFlat) setGlobalIndex(idx);
    },
    [totalFlat],
  );

  const next = useCallback(() => {
    setGlobalIndex((i) => Math.min(i + 1, totalFlat - 1));
  }, [totalFlat]);

  const prev = useCallback(() => {
    setGlobalIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goToSection = useCallback(
    (sectionIdx: number) => {
      const target = flat.find((f) => f.sectionIndex === sectionIdx);
      if (target) setGlobalIndex(target.globalIndex);
    },
    [flat],
  );

  const toggleNotes = useCallback(() => setNotesOpen((o) => !o), []);
  const closeNotes = useCallback(() => setNotesOpen(false), []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }, []);

  return {
    current,
    flat,
    globalIndex,
    totalFlat,
    totalSections,
    notesOpen,
    next,
    prev,
    goToGlobal,
    goToSection,
    toggleNotes,
    closeNotes,
    toggleFullscreen,
  };
}
