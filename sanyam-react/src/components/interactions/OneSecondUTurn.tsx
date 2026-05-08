import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { InteractionHandle } from '../../types';

type Step = 0 | 1 | 2;

const COUNTDOWN_MS = 1200;

const LABELS = ['THE TRIGGER', 'THE FIRE', 'THE U-TURN'] as const;
const TEXTS = [
  'Someone disrespects you.',
  'Anger grabs the wheel.',
  'One second. New direction.',
] as const;

const C = {
  saffron: '#FF7B29',
  teal: '#00D4B0',
  gold: '#FFD166',
  danger: '#FF3B5C',
  cream: '#F0EDE8',
  muted: '#8A8699',
  bg: '#0a0e1a',
  road: '#1c2038',
} as const;

interface Props {
  onComplete: () => void;
}

const OneSecondUTurn = forwardRef<InteractionHandle, Props>(
  ({ onComplete }, ref) => {
    const [step, setStep] = useState<Step>(0);
    const [ringPct, setRingPct] = useState(0);
    const [resolved, setResolved] = useState(false);
    const raf = useRef(0);

    const doAdvance = useCallback(() => {
      if (step === 0) {
        setStep(1);
      } else if (step === 1) {
        setStep(2);
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / COUNTDOWN_MS, 1);
          setRingPct(p);
          if (p < 1) {
            raf.current = requestAnimationFrame(tick);
          } else {
            setResolved(true);
            onComplete();
          }
        };
        raf.current = requestAnimationFrame(tick);
      }
    }, [step, onComplete]);

    useEffect(() => () => cancelAnimationFrame(raf.current), []);

    // canAdvance absorbs keypresses during countdown so we don't skip ahead
    useImperativeHandle(ref, () => ({
      canAdvance: () => step < 2 || (step === 2 && !resolved),
      advance: doAdvance,
      reset: () => {
        cancelAnimationFrame(raf.current);
        setStep(0);
        setRingPct(0);
        setResolved(false);
      },
    }));

    const ringR = 64;
    const ringCirc = 2 * Math.PI * ringR;
    const accent = step === 0 ? C.saffron : step === 1 ? C.danger : C.teal;

    const carX = step === 0 ? 260 : step === 1 ? 470 : resolved ? 750 : 470;
    const carY = step === 0 ? 260 : step === 1 ? 260 : resolved ? 360 : 260;
    const carRot = resolved ? 12 : 0;
    const carFill = step === 1 && !resolved ? C.danger : resolved ? C.teal : C.saffron;

    return (
      <div
        className="w-full flex flex-col items-center gap-3 cursor-pointer select-none"
        onClick={() => step < 2 && doAdvance()}
      >
        {/* ── Step indicator ── */}
        <div className="flex items-center gap-2">
          {([0, 1, 2] as Step[]).map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold font-display transition-all duration-500"
                style={{
                  background:
                    s < step
                      ? `${C.teal}18`
                      : s === step
                        ? `${accent}18`
                        : 'rgba(255,255,255,0.04)',
                  border: `2px solid ${s < step ? C.teal : s === step ? accent : 'rgba(255,255,255,0.08)'}`,
                  color: s < step ? C.teal : s === step ? accent : C.muted,
                  boxShadow: s === step ? `0 0 12px ${accent}30` : 'none',
                }}
              >
                {s < step ? '✓' : s + 1}
              </div>
              {s < 2 && (
                <div
                  className="w-9 h-[2px] rounded transition-all duration-500"
                  style={{
                    background: s < step ? C.teal : 'rgba(255,255,255,0.07)',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── SVG scene ── */}
        <div className="relative w-full" style={{ maxWidth: 880 }}>
          <svg
            viewBox="0 0 1100 520"
            className="w-full h-auto"
            style={{ maxHeight: '48vh' }}
          >
            <defs>
              <filter
                id="ut-glow-r"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
              </filter>
              <filter
                id="ut-glow-t"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              </filter>
              <filter
                id="ut-glow-s"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              </filter>
              <radialGradient id="ut-bg" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#0e1225" />
                <stop offset="100%" stopColor={C.bg} />
              </radialGradient>
            </defs>

            {/* Background */}
            <rect width="1100" height="520" fill="url(#ut-bg)" rx="18" />

            {/* Ambient dots */}
            {Array.from({ length: 30 }, (_, i) => (
              <circle
                key={i}
                cx={20 + ((i * 71) % 1070)}
                cy={15 + (((i * 43 + 7) % 490))}
                r="1"
                fill="rgba(255,255,255,0.03)"
              />
            ))}

            {/* State-based ambient glow */}
            {step === 1 && !resolved && (
              <motion.circle
                cx="500"
                cy="260"
                r="200"
                fill={C.danger}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.04 }}
                transition={{ duration: 0.5 }}
              />
            )}
            {resolved && (
              <motion.circle
                cx="750"
                cy="360"
                r="250"
                fill={C.teal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                transition={{ duration: 0.8 }}
              />
            )}

            {/* ═══ MAIN ROAD ═══ */}
            <path
              d="M 50 260 L 500 260"
              stroke={C.road}
              strokeWidth="68"
              strokeLinecap="round"
              fill="none"
            />
            {/* Road edge lines */}
            <path
              d="M 50 226 L 500 226"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 50 294 L 500 294"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              fill="none"
            />
            {/* Center dashes */}
            <path
              d="M 70 260 L 480 260"
              stroke={C.muted}
              strokeWidth="2.5"
              strokeDasharray="18 12"
              fill="none"
              opacity="0.15"
            />

            {/* ═══ FORK PATHS (from step >= 1) ═══ */}
            <AnimatePresence>
              {step >= 1 && (
                <motion.g
                  key="fork-paths"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Junction dot */}
                  <circle
                    cx="500"
                    cy="260"
                    r="5"
                    fill={C.muted}
                    opacity="0.3"
                  />

                  {/* ── RED PATH (upper-right → REGRET) ── */}
                  <path
                    d="M 500 260 C 620 260, 720 170, 920 140"
                    stroke={C.road}
                    strokeWidth="58"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <motion.path
                    d="M 500 260 C 620 260, 720 170, 920 140"
                    stroke={C.danger}
                    strokeWidth="58"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ opacity: resolved ? 0.04 : 0.12 }}
                    transition={{ duration: 0.6 }}
                  />
                  {!resolved && (
                    <motion.path
                      d="M 500 260 C 620 260, 720 170, 920 140"
                      stroke={C.danger}
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#ut-glow-r)"
                      animate={{ opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  {/* Red path center dashes */}
                  <path
                    d="M 520 252 C 625 252, 720 165, 900 137"
                    stroke={C.danger}
                    strokeWidth="2"
                    strokeDasharray="12 10"
                    fill="none"
                    opacity={resolved ? 0.06 : 0.2}
                  />

                  {/* Crash icon at end of red path */}
                  <motion.g
                    transform="translate(900, 150)"
                    animate={{
                      opacity: resolved ? 0.12 : 0.85,
                      scale: resolved ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <polygon
                      points="0,-20 6,-7 18,-10 9,2 20,13 7,8 0,22 -7,8 -20,13 -9,2 -18,-10 -6,-7"
                      fill={C.danger}
                      opacity="0.6"
                    />
                    <text
                      textAnchor="middle"
                      y="40"
                      fill={C.danger}
                      fontSize="13"
                      fontFamily="'Syne', sans-serif"
                      fontWeight="800"
                      letterSpacing="0.12em"
                    >
                      REGRET
                    </text>
                  </motion.g>

                  {/* ── TEAL PATH (lower-right → WISDOM) ── */}
                  <path
                    d="M 500 260 C 620 260, 720 360, 920 390"
                    stroke={C.road}
                    strokeWidth="58"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <motion.path
                    d="M 500 260 C 620 260, 720 360, 920 390"
                    stroke={C.teal}
                    strokeWidth="58"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ opacity: resolved ? 0.18 : 0.03 }}
                    transition={{ duration: 0.8 }}
                  />
                  {resolved && (
                    <motion.path
                      d="M 500 260 C 620 260, 720 360, 920 390"
                      stroke={C.teal}
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#ut-glow-t)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {/* Teal path center dashes */}
                  <path
                    d="M 520 268 C 625 268, 720 365, 900 393"
                    stroke={C.teal}
                    strokeWidth="2"
                    strokeDasharray="12 10"
                    fill="none"
                    opacity={resolved ? 0.3 : 0.06}
                  />

                  {/* Wisdom icon at end of teal path */}
                  <motion.g
                    transform="translate(900, 385)"
                    animate={{
                      opacity: resolved ? 1 : 0.2,
                      scale: resolved ? 1 : 0.85,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: resolved ? 0.3 : 0,
                    }}
                  >
                    {resolved && (
                      <motion.circle
                        r="28"
                        fill={C.teal}
                        opacity="0.1"
                        style={{ transformOrigin: '0px 0px' }}
                        animate={{ scale: [0.87, 1.13, 0.87] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    <circle
                      r="16"
                      fill={C.teal}
                      opacity={resolved ? 0.15 : 0.07}
                    />
                    <polygon
                      points="0,-9 6,0 0,9 -6,0"
                      fill={C.teal}
                      opacity="0.8"
                    />
                    <text
                      textAnchor="middle"
                      y="36"
                      fill={C.teal}
                      fontSize="13"
                      fontFamily="'Syne', sans-serif"
                      fontWeight="800"
                      letterSpacing="0.12em"
                    >
                      WISDOM
                    </text>
                  </motion.g>
                </motion.g>
              )}
            </AnimatePresence>

            {/* ═══ CAR ═══ */}
            <motion.g
              animate={{ x: carX, y: carY, rotate: carRot }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Car aura */}
              {step === 1 && !resolved && (
                <motion.circle
                  r="50"
                  fill={C.danger}
                  animate={{ opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              {resolved && (
                <motion.circle
                  r="45"
                  fill={C.teal}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.06, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              {/* Body */}
              <motion.rect
                x="-38"
                y="-17"
                width="76"
                height="34"
                rx="12"
                animate={{ fill: carFill }}
                transition={{ duration: 0.5 }}
              />
              {/* Windshield */}
              <rect
                x="-28"
                y="-12"
                width="22"
                height="24"
                rx="5"
                fill={C.gold}
                opacity="0.3"
              />
              {/* Rear window */}
              <rect
                x="6"
                y="-12"
                width="18"
                height="24"
                rx="4"
                fill={C.gold}
                opacity="0.15"
              />
              {/* Headlights */}
              <circle cx="36" cy="-8" r="3.5" fill={C.gold} opacity="0.9" />
              <circle cx="36" cy="8" r="3.5" fill={C.gold} opacity="0.9" />
            </motion.g>

            {/* ═══ STATE 0: NOTIFICATION BUBBLE ═══ */}
            <AnimatePresence>
              {step === 0 && (
                <motion.g
                  key="notif"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <g transform="translate(340, 50)">
                    {/* Card background */}
                    <rect
                      width="260"
                      height="85"
                      rx="14"
                      fill={C.danger}
                      fillOpacity="0.06"
                      stroke={C.danger}
                      strokeWidth="2"
                      strokeOpacity="0.3"
                    />
                    {/* Bubble tail pointing down toward road */}
                    <path
                      d="M 80 85 L 100 115 L 120 85"
                      fill={C.danger}
                      fillOpacity="0.06"
                      stroke={C.danger}
                      strokeWidth="2"
                      strokeOpacity="0.3"
                    />
                    <line
                      x1="80"
                      y1="85"
                      x2="120"
                      y2="85"
                      stroke={C.bg}
                      strokeWidth="3"
                    />
                    {/* Alert icon */}
                    <circle cx="28" cy="30" r="11" fill={C.danger} opacity="0.75" />
                    <text
                      x="28"
                      y="35"
                      textAnchor="middle"
                      fill={C.cream}
                      fontSize="14"
                      fontWeight="bold"
                    >
                      !
                    </text>
                    {/* Message lines (abstract) */}
                    <rect x="52" y="18" width="165" height="9" rx="3" fill={C.danger} fillOpacity="0.2" />
                    <rect x="52" y="35" width="125" height="9" rx="3" fill={C.danger} fillOpacity="0.14" />
                    <rect x="52" y="52" width="85" height="9" rx="3" fill={C.danger} fillOpacity="0.09" />
                    {/* HARSH badge */}
                    <rect
                      x="182"
                      y="48"
                      width="55"
                      height="22"
                      rx="11"
                      fill={C.danger}
                      opacity="0.65"
                    />
                    <text
                      x="209"
                      y="63"
                      textAnchor="middle"
                      fill={C.cream}
                      fontSize="9"
                      fontWeight="800"
                      fontFamily="'Syne', sans-serif"
                      letterSpacing="0.06em"
                    >
                      HARSH
                    </text>
                  </g>
                </motion.g>
              )}
            </AnimatePresence>

            {/* ═══ STATE 1: ANGER EFFECTS ═══ */}
            <AnimatePresence>
              {step === 1 && !resolved && (
                <motion.g
                  key="anger"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Pulsing red glow at fork area */}
                  <motion.circle
                    cx="500"
                    cy="260"
                    r="100"
                    fill={C.danger}
                    style={{ transformOrigin: '500px 260px' }}
                    animate={{
                      opacity: [0.02, 0.06, 0.02],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />

                  {/* Anger sparks around the fork */}
                  {[
                    { x: 420, y: 200, d: 0 },
                    { x: 545, y: 210, d: 0.3 },
                    { x: 465, y: 180, d: 0.6 },
                    { x: 525, y: 320, d: 0.15 },
                    { x: 400, y: 295, d: 0.4 },
                    { x: 565, y: 290, d: 0.7 },
                  ].map((s, i) => (
                    <motion.g
                      key={i}
                      style={{
                        transformOrigin: `${s.x}px ${s.y}px`,
                      }}
                      animate={{
                        opacity: [0, 0.7, 0],
                        scale: [0.5, 1.2, 0.5],
                      }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        delay: s.d,
                      }}
                    >
                      <polygon
                        transform={`translate(${s.x},${s.y})`}
                        points="0,-10 3,-4 10,-5 5,0 10,7 3,4 0,10 -3,4 -10,7 -5,0 -10,-5 -3,-4"
                        fill={C.danger}
                        opacity="0.7"
                      />
                    </motion.g>
                  ))}

                  {/* "WHICH WAY?" pulsing label */}
                  <motion.text
                    x="500"
                    y="460"
                    textAnchor="middle"
                    fill={C.muted}
                    fontSize="13"
                    fontFamily="'Syne', sans-serif"
                    fontWeight="700"
                    letterSpacing="0.15em"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    WHICH WAY?
                  </motion.text>
                </motion.g>
              )}
            </AnimatePresence>

            {/* ═══ STATE 2: COUNTDOWN RING ═══ */}
            <AnimatePresence>
              {step === 2 && !resolved && (
                <motion.g
                  key="countdown"
                  style={{ transformOrigin: '550px 260px' }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.3 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Backdrop */}
                  <circle
                    cx="550"
                    cy="260"
                    r="85"
                    fill={C.bg}
                    opacity="0.88"
                  />
                  {/* Track */}
                  <circle
                    cx="550"
                    cy="260"
                    r={ringR}
                    fill="none"
                    stroke={C.saffron}
                    strokeWidth="6"
                    opacity="0.12"
                  />
                  {/* Progress arc */}
                  <circle
                    cx="550"
                    cy="260"
                    r={ringR}
                    fill="none"
                    stroke={C.saffron}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${ringPct * ringCirc} ${ringCirc}`}
                    transform="rotate(-90 550 260)"
                  />
                  {/* Glow arc */}
                  <circle
                    cx="550"
                    cy="260"
                    r={ringR}
                    fill="none"
                    stroke={C.saffron}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${ringPct * ringCirc} ${ringCirc}`}
                    transform="rotate(-90 550 260)"
                    filter="url(#ut-glow-s)"
                    opacity="0.25"
                  />
                  {/* Center label */}
                  <text
                    x="550"
                    y="267"
                    textAnchor="middle"
                    fill={C.saffron}
                    fontSize="32"
                    fontFamily="'Syne', sans-serif"
                    fontWeight="800"
                  >
                    {ringPct < 0.8 ? '1s' : '…'}
                  </text>
                  <text
                    x="550"
                    y="288"
                    textAnchor="middle"
                    fill={C.saffron}
                    fontSize="9"
                    fontFamily="'Syne', sans-serif"
                    fontWeight="700"
                    letterSpacing="0.2em"
                    opacity="0.5"
                  >
                    PAUSE
                  </text>
                </motion.g>
              )}
            </AnimatePresence>

            {/* ═══ STATE 2 RESOLVED: U-TURN + CHECKMARK ═══ */}
            <AnimatePresence>
              {resolved && (
                <motion.g
                  key="resolved"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* U-turn arrow near fork junction */}
                  <motion.g
                    style={{ transformOrigin: '560px 320px' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.15,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <path
                      d="M 546 334 C 546 304, 574 304, 574 334"
                      fill="none"
                      stroke={C.teal}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <polygon
                      points="574,334 567,324 581,324"
                      fill={C.teal}
                    />
                    <path
                      d="M 546 334 C 546 304, 574 304, 574 334"
                      fill="none"
                      stroke={C.teal}
                      strokeWidth="8"
                      filter="url(#ut-glow-t)"
                      opacity="0.3"
                    />
                  </motion.g>

                  {/* Checkmark badge */}
                  <motion.g
                    style={{ transformOrigin: '550px 260px' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35, type: 'spring' }}
                  >
                    <circle
                      cx="550"
                      cy="260"
                      r="30"
                      fill={C.teal}
                      opacity="0.1"
                    />
                    <circle
                      cx="550"
                      cy="260"
                      r="20"
                      fill={C.teal}
                      opacity="0.06"
                    />
                    <path
                      d="M 540 262 L 547 269 L 560 255"
                      fill="none"
                      stroke={C.teal}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.g>

                  {/* Particles trailing along teal path */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.circle
                      key={`particle-${i}`}
                      cx={570 + i * 80}
                      cy={280 + i * 24}
                      r="3"
                      fill={C.teal}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3 + i * 0.12,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </motion.g>
              )}
            </AnimatePresence>
          </svg>
        </div>

        {/* ── Per-state text ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`t-${step}-${resolved}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span
              className="text-[10px] font-extrabold tracking-[0.15em] uppercase font-display px-3 py-1 rounded-full"
              style={{
                background: `${accent}12`,
                color: accent,
                border: `1px solid ${accent}30`,
              }}
            >
              Step {step + 1} · {LABELS[step]}
            </span>
            <p
              className="font-display font-extrabold text-center leading-tight"
              style={{
                fontSize: 'clamp(16px, 2.2vw, 26px)',
                color:
                  step === 0
                    ? C.cream
                    : step === 1
                      ? C.danger
                      : resolved
                        ? C.teal
                        : C.saffron,
              }}
            >
              {TEXTS[step]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Calm response message after resolution ── */}
        <AnimatePresence>
          {resolved && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-[460px] rounded-xl px-5 py-3.5 text-sm leading-relaxed bg-jade/10 border-l-[3px] border-jade text-cream text-center"
            >
              ✅ &ldquo;I hear you. Let me understand your perspective.&rdquo;
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Interaction hint ── */}
        {step < 2 && (
          <motion.p
            className="text-[10px] tracking-[0.1em]"
            style={{ color: `${C.muted}60` }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            SPACE · → · CLICK
          </motion.p>
        )}
      </div>
    );
  },
);

OneSecondUTurn.displayName = 'OneSecondUTurn';
export default OneSecondUTurn;
