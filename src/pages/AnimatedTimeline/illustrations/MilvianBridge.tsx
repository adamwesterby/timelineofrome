import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape, Flame } from './shared';

export function MilvianBridge() {
  return (
    <PotteryScene>
      {/* River beneath */}
      <FadeShape delay={0.2}>
        <DrawPath
          d="M0,650 Q300,630 600,660 Q900,690 1200,650 Q1500,610 1920,650"
          stroke="#D4845A"
          strokeWidth={2}
          delay={0.2}
          duration={1.5}
        />
        <DrawPath
          d="M0,680 Q300,660 600,690 Q900,720 1200,680 Q1500,640 1920,680"
          stroke="#D4845A"
          strokeWidth={1}
          delay={0.3}
          duration={1.5}
        />
      </FadeShape>

      {/* Bridge structure */}
      <FadeShape delay={0.4}>
        <g transform="translate(960, 580)">
          {/* Bridge deck */}
          <DrawPath d="M-400,0 H400" stroke="#C65D3E" strokeWidth={4} delay={0.4} />
          {/* Arches */}
          <DrawPath d="M-350,0 Q-280,60 -210,0" stroke="#C65D3E" strokeWidth={3} delay={0.5} />
          <DrawPath d="M-200,0 Q-130,60 -60,0" stroke="#C65D3E" strokeWidth={3} delay={0.55} />
          <DrawPath d="M-50,0 Q20,60 90,0" stroke="#C65D3E" strokeWidth={3} delay={0.6} />
          <DrawPath d="M100,0 Q170,60 240,0" stroke="#C65D3E" strokeWidth={3} delay={0.65} />
          <DrawPath d="M250,0 Q320,60 390,0" stroke="#C65D3E" strokeWidth={3} delay={0.7} />
        </g>
      </FadeShape>

      {/* Chi-Rho symbol in the sky — glowing */}
      <FadeShape delay={1.5}>
        <motion.g
          transform="translate(960, 200)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          {/* Radiant glow */}
          <motion.circle
            cx="0"
            cy="0"
            r="100"
            fill="none"
            stroke="#E8C99B"
            strokeWidth={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
          />
          <motion.circle
            cx="0"
            cy="0"
            r="70"
            fill="none"
            stroke="#B8860B"
            strokeWidth={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 2.7 }}
          />
          {/* Chi (X) */}
          <DrawPath d="M-50,-50 L50,50" stroke="#E8C99B" strokeWidth={4} delay={1.8} duration={0.8} />
          <DrawPath d="M50,-50 L-50,50" stroke="#E8C99B" strokeWidth={4} delay={1.9} duration={0.8} />
          {/* Rho (P) loop at top */}
          <DrawPath d="M0,-55 V-50" stroke="#E8C99B" strokeWidth={4} delay={2.0} duration={0.3} />
          <DrawPath
            d="M0,-55 Q25,-55 25,-40 Q25,-25 0,-25"
            stroke="#E8C99B"
            strokeWidth={4}
            delay={2.1}
            duration={0.6}
          />
        </motion.g>
      </FadeShape>

      {/* Light rays from Chi-Rho */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * Math.PI / 180;
        const x2 = 960 + Math.cos(angle) * 180;
        const y2 = 200 + Math.sin(angle) * 180;
        return (
          <motion.line
            key={i}
            x1="960"
            y1="200"
            x2={x2}
            y2={y2}
            stroke="#E8C99B"
            strokeWidth={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, delay: 2.5 + i * 0.15, repeat: Infinity }}
          />
        );
      })}

      {/* Constantine's soldiers on bridge — left side */}
      {[0, 1, 2].map((i) => (
        <FadeShape key={`const-${i}`} delay={0.9 + i * 0.15}>
          <g transform={`translate(${700 + i * 60}, 520)`}>
            <circle cx="0" cy="-25" r="8" fill="#C65D3E" />
            <rect x="-10" y="-15" width="16" height="35" fill="#C65D3E" opacity="0.8" />
            <DrawPath d="M6,-10 L15,-25" stroke="#E8C99B" strokeWidth={2} delay={1.1 + i * 0.1} />
          </g>
        </FadeShape>
      ))}

      {/* Enemy soldiers falling from bridge — right side */}
      {[0, 1].map((i) => (
        <motion.g
          key={`fall-${i}`}
          transform={`translate(${1200 + i * 80}, 560)`}
          initial={{ opacity: 0, y: 0, rotate: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: [0, 80], rotate: [0, 30 + i * 20] }}
          transition={{ duration: 2, delay: 2.0 + i * 0.3 }}
        >
          <circle cx="0" cy="-20" r="7" fill="#C65D3E" />
          <rect x="-8" y="-12" width="14" height="28" fill="#C65D3E" opacity="0.6" />
        </motion.g>
      ))}

      {/* Battle torches */}
      <Flame cx={650} cy={500} scale={0.8} delay={1.2} />
      <Flame cx={780} cy={505} scale={0.7} delay={1.4} />
    </PotteryScene>
  );
}
