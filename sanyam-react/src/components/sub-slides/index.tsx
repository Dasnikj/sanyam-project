import { forwardRef } from 'react';
import type {
  SubSlide,
  InteractionHandle,
} from '../../types';
import StatementSlide from './StatementSlide';
import StatReveal from './StatReveal';
import StoryCard from './StoryCard';
import QuoteCard from './QuoteCard';
import ConceptDiagram from './ConceptDiagram';
import MisconceptionFlip from './MisconceptionFlip';
import ComparisonCard from './ComparisonCard';
import TakeawaySlide from './TakeawaySlide';
import ImageSlide from './ImageSlide';
import VideoSlide from './VideoSlide';
import InteractionSlide from './InteractionSlide';

interface Props {
  subSlide: SubSlide;
  onInteractionComplete: () => void;
}

const SubSlideRouter = forwardRef<InteractionHandle, Props>(
  ({ subSlide, onInteractionComplete }, ref) => {
    switch (subSlide.type) {
      case 'statement':
        return <StatementSlide {...subSlide} />;
      case 'stat':
        return <StatReveal {...subSlide} />;
      case 'story':
        return <StoryCard {...subSlide} />;
      case 'quote':
        return <QuoteCard {...subSlide} />;
      case 'concept':
        return <ConceptDiagram {...subSlide} />;
      case 'misconception':
        return <MisconceptionFlip {...subSlide} />;
      case 'comparison':
        return <ComparisonCard {...subSlide} />;
      case 'interaction':
        return (
          <InteractionSlide
            ref={ref}
            interactionType={subSlide.interactionType}
            onscreenText={subSlide.onscreenText}
            contextImage={subSlide.contextImage}
            contextImageAlt={subSlide.contextImageAlt}
            onComplete={onInteractionComplete}
          />
        );
      case 'takeaway':
        return <TakeawaySlide {...subSlide} />;
      case 'image':
        return <ImageSlide {...subSlide} />;
      case 'video':
        return <VideoSlide {...subSlide} />;
    }
  },
);

SubSlideRouter.displayName = 'SubSlideRouter';
export default SubSlideRouter;
