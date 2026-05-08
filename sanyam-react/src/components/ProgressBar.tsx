import { sections } from '../data/slides';

interface Props {
  currentSectionIndex: number;
  currentLocalIndex: number;
  currentLocalTotal: number;
  globalIndex: number;
  totalFlat: number;
  goToSection: (idx: number) => void;
}

export default function ProgressBar({
  currentSectionIndex,
  currentLocalIndex,
  currentLocalTotal,
  globalIndex,
  totalFlat,
  goToSection,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-1">
      {/* Section dots */}
      <div className="flex gap-1.5 items-center">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSection(i)}
            aria-label={`Go to section ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
              i === currentSectionIndex
                ? 'bg-saffron w-[22px]'
                : i < currentSectionIndex
                  ? 'bg-saffron/50 w-1.5'
                  : 'bg-muted w-1.5 hover:bg-cream/40'
            }`}
          />
        ))}
      </div>
      {/* Sub-slide micro-progress */}
      {currentLocalTotal > 1 && (
        <div className="flex gap-[3px]">
          {Array.from({ length: currentLocalTotal }, (_, i) => (
            <div
              key={i}
              className={`h-[2px] rounded-full transition-all duration-200 ${
                i <= currentLocalIndex
                  ? 'bg-saffron/70 w-2.5'
                  : 'bg-muted/30 w-2.5'
              }`}
            />
          ))}
        </div>
      )}
      {/* Thin total progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-saffron to-gold transition-all duration-300"
          style={{ width: `${((globalIndex + 1) / totalFlat) * 100}%` }}
        />
      </div>
    </div>
  );
}
