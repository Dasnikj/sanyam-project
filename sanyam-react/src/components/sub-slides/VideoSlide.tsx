import { motion } from 'framer-motion';

interface Props {
  videoId: string;
  platform: 'youtube' | 'youtube-short';
  caption?: string;
  subcaption?: string;
}

export default function VideoSlide({ videoId, platform, caption, subcaption }: Props) {
  const isShort = platform === 'youtube-short';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center gap-6 w-full max-w-[860px] relative"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full blur-[90px] opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF7B29 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 16 }}
        className="relative"
      >
        {/* Gradient border */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-saffron/30 via-transparent to-jade/20">
          <div
            className={`rounded-2xl overflow-hidden bg-black ${
              isShort ? 'w-[260px] h-[462px]' : 'w-[min(720px,80vw)] aspect-video'
            }`}
          >
            <iframe
              src={embedUrl}
              title={caption ?? 'Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </div>
        </div>

        {/* Play icon decoration (top-right) */}
        <svg className="absolute -top-2 -right-2 w-6 h-6 text-saffron/30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>

      {caption && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 18 }}
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
          transition={{ delay: 0.5 }}
          className="text-muted text-center max-w-[640px] leading-relaxed"
          style={{ fontSize: 'clamp(12px, 1.2vw, 16px)' }}
        >
          {subcaption}
        </motion.p>
      )}
    </motion.div>
  );
}
