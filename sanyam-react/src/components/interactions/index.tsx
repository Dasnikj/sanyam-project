import { forwardRef } from 'react';
import type { InteractionType, InteractionHandle } from '../../types';
import SteeringWheelInteraction from './SteeringWheelInteraction';
import MaryadaCards from './MaryadaCards';
import FiveFoldAaharAudit from './FiveFoldAaharAudit';
import TortoiseMode from './TortoiseMode';
import AntiFlexRealityCheck from './AntiFlexRealityCheck';
import OneSecondUTurn from './OneSecondUTurn';
import InvisibleFoundation from './InvisibleFoundation';
import SandwichTechnique from './SandwichTechnique';
import PowerGrid2Plus4 from './PowerGrid2Plus4';
import StoveToSolar from './StoveToSolar';

interface Props {
  type: InteractionType;
  slideIndex: number;
  onComplete: () => void;
}

const InteractionRouter = forwardRef<InteractionHandle, Props>(
  ({ type, onComplete }, ref) => {
    switch (type) {
      case 'steering-wheel':
        return <SteeringWheelInteraction ref={ref} onComplete={onComplete} />;
      case 'maryada-cards':
        return <MaryadaCards ref={ref} onComplete={onComplete} />;
      case 'five-fold-aahar':
        return <FiveFoldAaharAudit ref={ref} onComplete={onComplete} />;
      case 'tortoise-mode':
        return <TortoiseMode ref={ref} onComplete={onComplete} />;
      case 'anti-flex':
        return <AntiFlexRealityCheck ref={ref} onComplete={onComplete} />;
      case 'one-second-uturn':
        return <OneSecondUTurn ref={ref} onComplete={onComplete} />;
      case 'invisible-foundation':
        return <InvisibleFoundation ref={ref} onComplete={onComplete} />;
      case 'sandwich-technique':
        return <SandwichTechnique ref={ref} onComplete={onComplete} />;
      case 'power-grid':
        return <PowerGrid2Plus4 ref={ref} onComplete={onComplete} />;
      case 'stove-to-solar':
        return <StoveToSolar ref={ref} onComplete={onComplete} />;
    }
  },
);

InteractionRouter.displayName = 'InteractionRouter';
export default InteractionRouter;
