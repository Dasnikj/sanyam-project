import { forwardRef } from 'react';
import type { InteractionType, InteractionHandle } from '../../types';
import InteractionRouter from '../interactions';

interface Props {
  interactionType: InteractionType;
  onscreenText?: string;
  contextImage?: string;
  contextImageAlt?: string;
  onComplete: () => void;
}

const InteractionSlide = forwardRef<InteractionHandle, Props>(
  ({ interactionType, onscreenText, contextImage, contextImageAlt, onComplete }, ref) => {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        {contextImage && (
          <div className="w-full max-w-[820px] rounded-xl overflow-hidden"
               style={{ maxHeight: '28vh' }}>
            <img
              src={contextImage}
              alt={contextImageAlt ?? ''}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
        {onscreenText && (
          <p className="font-display font-bold text-center text-jade max-w-[700px] leading-snug"
             style={{ fontSize: 'clamp(14px, 1.8vw, 24px)' }}>
            {onscreenText}
          </p>
        )}
        <div className="w-full max-w-[820px] flex items-center justify-center flex-1 min-h-[160px]">
          <InteractionRouter ref={ref} type={interactionType} slideIndex={0} onComplete={onComplete} />
        </div>
      </div>
    );
  }
);
InteractionSlide.displayName = 'InteractionSlide';
export default InteractionSlide;
