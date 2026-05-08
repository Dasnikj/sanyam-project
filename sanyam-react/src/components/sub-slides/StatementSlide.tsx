import { motion } from 'framer-motion';

interface Props {
  headline: string;
  subtext?: string;
  audiencePrompt?: string;
}

const StatementSlide = ({ headline, subtext, audiencePrompt }: Props) => (
  <motion.div
    className="relative flex flex-col items-center justify-center w-full h-full gap-6 px-6 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    {/* Animated radial gradient background */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,123,41,0.06) 0%, rgba(0,212,176,0.03) 40%, transparent 70%)',
      }}
    />

    {/* Decorative concentric circles */}
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      style={{ opacity: 0.04 }}
    >
      <circle cx="300" cy="300" r="200" stroke="#F0EDE8" strokeWidth="1" />
      <circle cx="300" cy="300" r="280" stroke="#F0EDE8" strokeWidth="0.5" />
    </svg>

    {/* Headline with gradient text */}
    <motion.div
      className="relative z-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
    >
      <h1
        className="font-display font-bold text-center max-w-[800px] leading-tight"
        style={{
          fontSize: 'clamp(24px, 3.5vw, 48px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F0EDE8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {headline}
      </h1>

      {/* Animated underline */}
      <motion.div
        className="mt-3 h-[2px] rounded-full"
        style={{ background: '#FF7B29' }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-[120px] h-full" />
      </motion.div>
    </motion.div>

    {/* Subtext with fade-in drift */}
    {subtext && (
      <motion.p
        className="relative z-10 text-muted italic text-center max-w-[700px]"
        style={{ fontSize: 'clamp(14px, 1.6vw, 22px)' }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
      >
        {subtext}
      </motion.p>
    )}

    {/* Audience prompt pill with pulsing glow */}
    {audiencePrompt && (
      <motion.span
        className="relative z-10 mt-4 px-5 py-2 rounded-full border border-saffron text-saffron font-body text-sm tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          boxShadow: [
            '0 0 0px rgba(255,123,41,0.0)',
            '0 0 16px rgba(255,123,41,0.35)',
            '0 0 0px rgba(255,123,41,0.0)',
          ],
        }}
        transition={{
          opacity: { delay: 0.6, duration: 0.4 },
          y: { delay: 0.6, type: 'spring', stiffness: 140, damping: 16 },
          boxShadow: { delay: 1, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        {audiencePrompt}
      </motion.span>
    )}
  </motion.div>
);

export default StatementSlide;
