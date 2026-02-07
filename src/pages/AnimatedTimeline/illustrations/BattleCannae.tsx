import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function BattleCannae() {
  return (
    <PotteryScene>
      {/* Tactical diagram — double envelopment from above */}

      {/* Roman formation — center block */}
      <FadeShape delay={0.3}>
        <motion.rect
          x="810"
          y="400"
          width="300"
          height="200"
          fill="#C65D3E"
          opacity="0.6"
          rx="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        {/* Legionary rows */}
        {[0, 1, 2, 3].map((row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <motion.circle
              key={`roman-${row}-${col}`}
              cx={840 + col * 50}
              cy={430 + row * 45}
              r="8"
              fill="#D4845A"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5 + row * 0.1 + col * 0.05 }}
            />
          ))
        )}
      </FadeShape>

      {/* Carthaginian center — crescent retreating */}
      <FadeShape delay={0.8}>
        <DrawPath
          d="M780,350 Q960,300 1140,350"
          stroke="#E8C99B"
          strokeWidth={3}
          delay={0.8}
          duration={1}
        />
        {/* Warriors in arc */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={`carth-center-${i}`}
            cx={820 + i * 80}
            cy={340 - Math.abs(i - 2) * 15}
            r="6"
            fill="#E8C99B"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.0 + i * 0.1 }}
          />
        ))}
      </FadeShape>

      {/* Envelopment arrows — left flank */}
      <DrawPath
        d="M700,350 Q650,400 660,500 Q680,600 780,650 Q880,680 960,650"
        stroke="#B8860B"
        strokeWidth={4}
        delay={1.5}
        duration={1.5}
      />
      {/* Arrow head left */}
      <FadeShape delay={2.8}>
        <path d="M960,650 L940,640 L945,660Z" fill="#B8860B" />
      </FadeShape>

      {/* Envelopment arrows — right flank */}
      <DrawPath
        d="M1220,350 Q1270,400 1260,500 Q1240,600 1140,650 Q1040,680 960,650"
        stroke="#B8860B"
        strokeWidth={4}
        delay={1.5}
        duration={1.5}
      />
      {/* Arrow head right */}
      <FadeShape delay={2.8}>
        <path d="M960,650 L980,640 L975,660Z" fill="#B8860B" />
      </FadeShape>

      {/* Cavalry flanking dots */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`flank-l-${i}`}
          cx={670 + i * 10}
          cy={420 + i * 30}
          r="5"
          fill="#B8860B"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.8 + i * 0.2 }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`flank-r-${i}`}
          cx={1250 - i * 10}
          cy={420 + i * 30}
          r="5"
          fill="#B8860B"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.8 + i * 0.2 }}
        />
      ))}

      {/* Labels */}
      <motion.text
        x="960"
        y="520"
        textAnchor="middle"
        fontFamily="Cinzel, serif"
        fontSize="24"
        fill="#1A1008"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8 }}
      >
        ROMA
      </motion.text>
      <motion.text
        x="960"
        y="280"
        textAnchor="middle"
        fontFamily="Cinzel, serif"
        fontSize="20"
        fill="#E8C99B"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
      >
        CARTHAGO
      </motion.text>
    </PotteryScene>
  );
}
