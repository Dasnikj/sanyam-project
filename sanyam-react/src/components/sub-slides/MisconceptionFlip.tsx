import { motion } from 'framer-motion';

interface Props {
  items: { wrong: string; right: string }[];
}

const XCircleIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: '#FF3B5C' }}>
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: '#00D4B0' }}>
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const TransformArrow = () => (
  <motion.div
    className="flex justify-center py-1"
    variants={{
      hidden: { opacity: 0, y: -4 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  >
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      style={{ color: '#FF7B29' }}
      animate={{ y: [0, 3, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M12 4v16m0 0l-4-4m4 4l4-4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  </motion.div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const MisconceptionFlip = ({ items }: Props) => (
  <motion.div
    className="flex flex-col items-center justify-center w-full h-full gap-6 px-6"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[850px] w-full">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="relative rounded-xl overflow-hidden"
          variants={cardVariants}
          transition={{ type: 'spring', stiffness: 130, damping: 16 }}
        >
          {/* Gradient border effect */}
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              padding: 1,
              background: 'linear-gradient(to bottom, rgba(255,59,92,0.3), rgba(0,212,176,0.3))',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          <div
            className="relative rounded-xl p-5 flex flex-col gap-1"
            style={{
              background:
                'radial-gradient(ellipse at top left, rgba(255,59,92,0.03), transparent 60%), radial-gradient(ellipse at bottom right, rgba(0,212,176,0.03), transparent 60%), #11111C',
            }}
          >
            {/* Before label */}
            <motion.span
              className="text-muted uppercase tracking-widest mb-1"
              style={{ fontSize: '9px', letterSpacing: '0.15em' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 0.5 },
              }}
            >
              Before
            </motion.span>

            {/* Wrong text */}
            <motion.div
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.05 }}
            >
              <XCircleIcon />
              <span
                className="text-danger line-through opacity-80"
                style={{ fontSize: 'clamp(13px, 1.3vw, 18px)' }}
              >
                {item.wrong}
              </span>
            </motion.div>

            {/* Animated arrow */}
            <TransformArrow />

            {/* After label */}
            <motion.span
              className="text-muted uppercase tracking-widest mb-1"
              style={{ fontSize: '9px', letterSpacing: '0.15em' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 0.5 },
              }}
            >
              After
            </motion.span>

            {/* Right text */}
            <motion.div
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.15 }}
            >
              <CheckCircleIcon />
              <span
                className="text-jade font-bold"
                style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
              >
                {item.right}
              </span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default MisconceptionFlip;
