import { motion } from 'framer-motion';

interface Props {
  text: string;
  revealed: boolean;
}

export default function PunchlineBox({ text, revealed }: Props) {
  return (
    <motion.div
      animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 8 }}
      transition={{ duration: 0.5 }}
      className="text-center italic max-w-[660px] mt-3.5"
      style={{ color: revealed ? '#FFD166' : '#8A8699', fontSize: 'clamp(11px, 1.2vw, 14px)' }}
    >
      {text}
    </motion.div>
  );
}
