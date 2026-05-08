import { motion } from 'framer-motion';

interface Props {
  quote: string;
  attribution: string;
  context?: string;
}

const floatingDot = (delay: number, x: number, y: number, _size: number) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 0.05, 0],
    x: [x, x + 15, x],
    y: [y, y - 20, y],
  },
  transition: {
    duration: 6,
    delay,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
});

const QuoteCard = ({ quote, attribution, context }: Props) => (
  <motion.div
    className="relative flex flex-col items-center justify-center w-full h-full px-6 overflow-hidden"
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
  >
    {/* Floating particles */}
    <motion.div
      className="absolute rounded-full bg-saffron pointer-events-none"
      style={{ width: 6, height: 6 }}
      {...floatingDot(0, 80, 60, 6)}
    />
    <motion.div
      className="absolute rounded-full bg-saffron pointer-events-none"
      style={{ width: 4, height: 4 }}
      {...floatingDot(2, -60, -40, 4)}
    />
    <motion.div
      className="absolute rounded-full bg-saffron pointer-events-none"
      style={{ width: 5, height: 5 }}
      {...floatingDot(4, 120, -80, 5)}
    />

    <div className="relative max-w-[800px] w-full flex flex-col items-center gap-5">
      {/* Opening quote mark SVG */}
      <motion.svg
        className="absolute -top-2 left-0 pointer-events-none"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{ filter: 'drop-shadow(0 4px 8px rgba(255,123,41,0.2))' }}
      >
        <path
          d="M20 55C14 55 10 51 10 45C10 35 18 25 30 22L32 26C24 29 20 34 20 38C22 37 24 37 26 37C31 37 35 41 35 46C35 51 31 55 26 55H20ZM50 55C44 55 40 51 40 45C40 35 48 25 60 22L62 26C54 29 50 34 50 38C52 37 54 37 56 37C61 37 65 41 65 46C65 51 61 55 56 55H50Z"
          fill="#FF7B29"
        />
      </motion.svg>

      {/* Closing quote mark SVG */}
      <motion.svg
        className="absolute -bottom-2 right-0 pointer-events-none"
        width="48"
        height="48"
        viewBox="0 0 80 80"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <path
          d="M60 25C66 25 70 29 70 35C70 45 62 55 50 58L48 54C56 51 60 46 60 42C58 43 56 43 54 43C49 43 45 39 45 34C45 29 49 25 54 25H60ZM30 25C36 25 40 29 40 35C40 45 32 55 20 58L18 54C26 51 30 46 30 42C28 43 26 43 24 43C19 43 15 39 15 34C15 29 19 25 24 25H30Z"
          fill="#8A8699"
        />
      </motion.svg>

      {/* Quote text with left gradient border */}
      <motion.div
        className="relative flex pt-14 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div
          className="w-[2px] rounded-full mr-5 shrink-0"
          style={{
            background: 'linear-gradient(180deg, #FF7B29 0%, #FFD166 100%)',
          }}
        />
        <p
          className="font-display text-cream italic leading-snug"
          style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}
        >
          {quote}
        </p>
      </motion.div>

      {/* Attribution with icon */}
      <motion.span
        className="flex items-center gap-2 text-gold font-body"
        style={{ fontSize: 'clamp(13px, 1.3vw, 18px)' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="opacity-70">
          <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        &mdash; {attribution}
      </motion.span>

      {/* Context card */}
      {context && (
        <motion.p
          className="text-muted text-center text-sm max-w-[600px] px-4 py-3 rounded-lg bg-surface-elevated"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          {context}
        </motion.p>
      )}
    </div>
  </motion.div>
);

export default QuoteCard;
