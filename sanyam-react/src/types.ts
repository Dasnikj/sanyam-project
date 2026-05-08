/* ═══════════════════════════════════════════
   INTERACTION TYPES (unchanged — used by
   existing interaction components)
   ═══════════════════════════════════════════ */

export type InteractionType =
  | 'steering-wheel'
  | 'maryada-cards'
  | 'five-fold-aahar'
  | 'tortoise-mode'
  | 'anti-flex'
  | 'one-second-uturn'
  | 'invisible-foundation'
  | 'sandwich-technique'
  | 'power-grid'
  | 'stove-to-solar';

export interface InteractionHandle {
  canAdvance: () => boolean;
  advance: () => void;
  reset: () => void;
}

/* ═══════════════════════════════════════════
   SPEAKER NOTES
   ═══════════════════════════════════════════ */

export interface SpeakerNotes {
  title: string;
  open: string;
  prasang: string;
  clickDirection: string;
  transition: string;
}

/* ═══════════════════════════════════════════
   SUB-SLIDE TYPES — discriminated union
   ═══════════════════════════════════════════ */

interface SubSlideBase {
  id: string;
  speakerNote?: string;
}

export interface StatementSubSlide extends SubSlideBase {
  type: 'statement';
  headline: string;
  subtext?: string;
  audiencePrompt?: string;
}

export interface StatSubSlide extends SubSlideBase {
  type: 'stat';
  value: string;
  label: string;
  context: string;
  source?: string;
}

export interface StorySubSlide extends SubSlideBase {
  type: 'story';
  storyTitle: string;
  narrative: string;
  source?: string;
  highlight?: string;
}

export interface QuoteSubSlide extends SubSlideBase {
  type: 'quote';
  quote: string;
  attribution: string;
  context?: string;
}

export interface ConceptPoint {
  label: string;
  description?: string;
  variant: 'positive' | 'negative' | 'neutral';
}

export interface ConceptSubSlide extends SubSlideBase {
  type: 'concept';
  conceptTitle: string;
  points: ConceptPoint[];
}

export interface MisconceptionSubSlide extends SubSlideBase {
  type: 'misconception';
  items: { wrong: string; right: string }[];
}

export interface InteractionSubSlide extends SubSlideBase {
  type: 'interaction';
  interactionType: InteractionType;
  onscreenText?: string;
  contextImage?: string;
  contextImageAlt?: string;
}

export interface ComparisonSubSlide extends SubSlideBase {
  type: 'comparison';
  leftTitle: string;
  leftItems: string[];
  leftVariant: 'danger' | 'muted';
  rightTitle: string;
  rightItems: string[];
  rightVariant: 'success' | 'muted';
}

export interface TakeawaySubSlide extends SubSlideBase {
  type: 'takeaway';
  punchline: string;
  transition?: string;
  closingCta?: string;
}

export interface ImageSubSlide extends SubSlideBase {
  type: 'image';
  imageSrc: string;
  caption?: string;
  subcaption?: string;
}

export interface VideoSubSlide extends SubSlideBase {
  type: 'video';
  videoId?: string;
  videoSrc?: string;
  platform: 'youtube' | 'youtube-short' | 'local';
  caption?: string;
  subcaption?: string;
}

export type SubSlide =
  | StatementSubSlide
  | StatSubSlide
  | StorySubSlide
  | QuoteSubSlide
  | ConceptSubSlide
  | MisconceptionSubSlide
  | InteractionSubSlide
  | ComparisonSubSlide
  | TakeawaySubSlide
  | ImageSubSlide
  | VideoSubSlide;

/* ═══════════════════════════════════════════
   SECTION — groups sub-slides
   ═══════════════════════════════════════════ */

export interface SectionData {
  id: string;
  sectionNumber: number;
  principleTag: string;
  title: string;
  subSlides: SubSlide[];
  speakerNotes: SpeakerNotes;
}

/* ═══════════════════════════════════════════
   FLAT SLIDE — for linear navigation
   ═══════════════════════════════════════════ */

export interface FlatSlide {
  globalIndex: number;
  sectionIndex: number;
  localIndex: number;
  localTotal: number;
  section: SectionData;
  subSlide: SubSlide;
}

/* ═══════════════════════════════════════════
   INTERACTION DATA INTERFACES
   (unchanged — used by interaction components)
   ═══════════════════════════════════════════ */

export interface SteeringWheelCard {
  key: 'suppress' | 'orient';
  icon: string;
  label: string;
  description: string;
  variant: 'danger' | 'success';
}
export interface SteeringWheelData {
  cards: [SteeringWheelCard, SteeringWheelCard];
  suppressResult: string;
  orientResult: string;
}

export interface MaryadaData {
  foggyIcon: string;
  foggyText: string;
  clearIcon: string;
  clearText: string;
  buttonLabel: string;
  doneLabel: string;
}

export interface SenseDef {
  icon: string;
  label: string;
  healthyLabel: string;
  toxicLabel: string;
}
export interface AaharAuditData {
  senses: SenseDef[];
  prompt: string;
}

export interface TortoiseModeData {
  distractions: string[];
  buttonLabel: string;
  doneCaption: string;
}

export interface AntiFlexData {
  flexItems: string[];
  flexTitle: string;
  atmaItems: string[];
  atmaTitle: string;
  buttonLabel: string;
}

export interface UTurnData {
  angryMessage: string;
  calmMessage: string;
  buttonLabel: string;
  doneLabel: string;
}

export interface FoundationStep {
  icon: string;
  label: string;
  sublabel: string;
}
export interface InvisibleFoundationData {
  steps: [FoundationStep, FoundationStep, FoundationStep];
  buttonLabel: string;
  doneLabel: string;
}

export interface SandwichBlock {
  type: 'bhajan' | 'work' | 'swadhyay';
  label: string;
  sublabel: string;
}
export interface SandwichData {
  blocks: [SandwichBlock, SandwichBlock, SandwichBlock];
  buttonLabels: string[];
  doneText: string;
}

export interface GridNode {
  icon: string;
  label: string;
}
export interface PowerGridData {
  nodes: GridNode[];
  prompt: string;
}

export interface StoveToSolarData {
  buttonLabel: string;
  ctaTitle: string;
  ctaBody: string;
}
