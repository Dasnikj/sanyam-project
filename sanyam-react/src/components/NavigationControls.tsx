interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function NavigationControls({ onPrev, onNext }: Props) {
  const base =
    'fixed top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full ' +
    'flex items-center justify-center cursor-pointer transition-all duration-200 ' +
    'bg-white/[0.04] border border-line text-muted hover:bg-white/[0.09] hover:text-cream text-xl';

  return (
    <>
      <button className={`${base} left-3.5`} onClick={onPrev} aria-label="Previous slide">
        ←
      </button>
      <button className={`${base} right-3.5`} onClick={onNext} aria-label="Next slide">
        →
      </button>
    </>
  );
}
