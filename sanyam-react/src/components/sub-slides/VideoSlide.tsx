import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  videoId?: string;
  videoSrc?: string;
  platform: 'youtube' | 'youtube-short' | 'local';
  caption?: string;
  subcaption?: string;
}

export default function VideoSlide({ videoId, videoSrc, platform, caption, subcaption }: Props) {
  const isShort = platform === 'youtube-short';
  const isLocal = platform === 'local';
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center gap-6 w-full max-w-[860px] relative"
    >
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
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-saffron/30 via-transparent to-jade/20">
          <div
            className={`rounded-2xl overflow-hidden bg-black ${
              isShort ? 'w-[260px] h-[462px]' : 'w-[min(720px,80vw)] aspect-video'
            }`}
          >
            {isLocal && videoSrc ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  controls={playing}
                  playsInline
                  onEnded={() => setPlaying(false)}
                  className="w-full h-full object-contain bg-black"
                />
                {!playing && (
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity hover:bg-black/30"
                  >
                    <div className="w-20 h-20 rounded-full bg-saffron/90 flex items-center justify-center shadow-lg shadow-saffron/30">
                      <svg className="w-9 h-9 text-surface ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={caption ?? 'Video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            )}
          </div>
        </div>

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
