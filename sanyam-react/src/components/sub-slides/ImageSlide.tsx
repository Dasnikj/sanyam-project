import { motion } from 'framer-motion';

interface Props {
  imageSrc: string;
  caption?: string;
  subcaption?: string;
}

export default function ImageSlide({ imageSrc, caption, subcaption }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-6 w-full max-w-[860px] relative"
    >
      {/* Ambient glow behind image */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] rounded-full blur-[80px] opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF7B29 0%, #00D4B0 60%, transparent 100%)' }}
      />

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 16 }}
        className="relative group"
      >
        {/* Gradient border wrapper */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-saffron/25 via-transparent to-jade/25">
          <div className="rounded-2xl overflow-hidden bg-surface-elevated">
            <img
              src={imageSrc}
              alt={caption ?? ''}
              className="block max-h-[58vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Subtle corner accents */}
        <svg className="absolute -top-1 -left-1 w-5 h-5 text-saffron/20" viewBox="0 0 20 20" fill="none">
          <path d="M0 8V0h8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -top-1 -right-1 w-5 h-5 text-saffron/20" viewBox="0 0 20 20" fill="none">
          <path d="M20 8V0h-8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -bottom-1 -left-1 w-5 h-5 text-jade/20" viewBox="0 0 20 20" fill="none">
          <path d="M0 12v8h8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -bottom-1 -right-1 w-5 h-5 text-jade/20" viewBox="0 0 20 20" fill="none">
          <path d="M20 12v8h-8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {caption && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, type: 'spring', stiffness: 120, damping: 18 }}
          className="font-display font-bold text-center text-cream leading-snug"
          style={{ fontSize: 'clamp(16px, 2.2vw, 28px)' }}
        >
          {caption}
        </motion.p>
      )}

      {subcaption && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-muted text-center max-w-[640px] leading-relaxed"
          style={{ fontSize: 'clamp(12px, 1.2vw, 16px)' }}
        >
          {subcaption}
        </motion.p>
      )}
    </motion.div>
  );
}
