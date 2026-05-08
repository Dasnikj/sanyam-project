import { motion } from 'framer-motion';

interface Props {
  storyTitle: string;
  narrative: string;
  source?: string;
  highlight?: string;
}

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 18,
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const StoryCard = ({ storyTitle, narrative, source, highlight }: Props) => (
  <motion.div
    className="flex items-center justify-center w-full h-full px-6"
    initial="hidden"
    animate="visible"
    variants={container}
  >
    {/* Gradient border wrapper */}
    <div
      className="relative rounded-2xl p-[1px] max-w-[800px] w-full"
      style={{
        background: 'linear-gradient(135deg, rgba(255,123,41,0.2) 0%, rgba(0,212,176,0.2) 100%)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <div className="bg-surface-elevated rounded-2xl p-8 md:p-10 flex flex-col gap-5 relative overflow-hidden">
        {/* Decorative book icon */}
        <svg
          className="absolute top-6 left-6 pointer-events-none"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{ opacity: 0.3 }}
        >
          <path
            d="M4 6C4 4.89543 4.89543 4 6 4H13C14.6569 4 16 5.34315 16 7V27C16 25.3431 14.6569 24 13 24H6C4.89543 24 4 23.1046 4 22V6Z"
            stroke="#FF7B29"
            strokeWidth="1.5"
          />
          <path
            d="M28 6C28 4.89543 27.1046 4 26 4H19C17.3431 4 16 5.34315 16 7V27C16 25.3431 17.3431 24 19 24H26C27.1046 24 28 23.1046 28 22V6Z"
            stroke="#FF7B29"
            strokeWidth="1.5"
          />
        </svg>

        {/* Story title */}
        <motion.div className="flex flex-col gap-2 mt-4" variants={item}>
          <h2
            className="font-display font-bold text-gold"
            style={{ fontSize: 'clamp(18px, 2.4vw, 32px)' }}
          >
            {storyTitle}
          </h2>
          <div className="w-[40px] h-[1px] bg-gold rounded-full" />
        </motion.div>

        {/* Narrative */}
        <motion.p
          className="text-cream max-w-[700px]"
          style={{
            fontSize: 'clamp(14px, 1.4vw, 20px)',
            lineHeight: 1.85,
            textIndent: '1.5em',
          }}
          variants={item}
        >
          {narrative}
        </motion.p>

        {/* Source pill */}
        {source && (
          <motion.span
            className="inline-flex items-center self-start px-3 py-1 rounded-md bg-white/5 text-muted text-xs italic"
            variants={item}
          >
            {source}
          </motion.span>
        )}

        {/* Highlight box */}
        {highlight && (
          <motion.div
            className="relative mt-2 flex items-start gap-3 rounded-lg px-5 py-4"
            style={{
              background: 'linear-gradient(90deg, rgba(0,212,176,0.05) 0%, transparent 100%)',
              borderLeft: '3px solid #00D4B0',
            }}
            variants={item}
          >
            {/* Lightbulb icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              className="shrink-0 mt-0.5"
            >
              <path
                d="M10 2a5.5 5.5 0 00-2 10.63V14a1 1 0 001 1h2a1 1 0 001-1v-1.37A5.5 5.5 0 0010 2z"
                stroke="#00D4B0"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8.5 17h3" stroke="#00D4B0" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M9 14v-2.5" stroke="#00D4B0" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              <path d="M11 14v-2.5" stroke="#00D4B0" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            </svg>
            <p
              className="text-jade leading-relaxed"
              style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}
            >
              {highlight}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  </motion.div>
);

export default StoryCard;
