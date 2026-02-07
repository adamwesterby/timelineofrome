import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function CrisisThirdCentury() {
  return (
    <PotteryScene>
      {/* Cracking/fragmenting ground — main visual metaphor */}
      <FadeShape delay={0.3}>
        <g transform="translate(960, 540)">
          {/* Central crack */}
          <DrawPath
            d="M0,-300 L-10,-200 L15,-100 L-5,0 L10,100 L-15,200 L5,300"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={0.3}
            duration={1.5}
          />
          {/* Branching cracks left */}
          <DrawPath d="M-5,0 L-150,-50 L-250,-30" stroke="#C65D3E" strokeWidth={2} delay={0.8} />
          <DrawPath d="M-10,-200 L-120,-250 L-200,-220" stroke="#C65D3E" strokeWidth={2} delay={0.9} />
          <DrawPath d="M-15,200 L-140,180 L-200,220" stroke="#C65D3E" strokeWidth={2} delay={1.0} />
          {/* Branching cracks right */}
          <DrawPath d="M15,-100 L160,-150 L250,-120" stroke="#C65D3E" strokeWidth={2} delay={0.85} />
          <DrawPath d="M10,100 L130,80 L220,120" stroke="#C65D3E" strokeWidth={2} delay={0.95} />
          <DrawPath d="M5,300 L120,320" stroke="#C65D3E" strokeWidth={2} delay={1.05} />
          {/* Minor cracks */}
          <DrawPath d="M-150,-50 L-180,-100" stroke="#D4845A" strokeWidth={1} delay={1.1} />
          <DrawPath d="M160,-150 L200,-200" stroke="#D4845A" strokeWidth={1} delay={1.15} />
          <DrawPath d="M130,80 L170,40" stroke="#D4845A" strokeWidth={1} delay={1.2} />
        </g>
      </FadeShape>

      {/* Fragmenting eagle — SPQR symbol breaking apart */}
      <FadeShape delay={1.3}>
        <g transform="translate(960, 300)">
          {/* Eagle left half — drifting left */}
          <motion.g
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: -30, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            <path
              d="M0,-30 L-60,10 L-40,5 L-70,30 L-20,15 L0,0Z"
              fill="#C65D3E"
              stroke="#C65D3E"
              strokeWidth={2}
            />
          </motion.g>
          {/* Eagle right half — drifting right */}
          <motion.g
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 30, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            <path
              d="M0,-30 L60,10 L40,5 L70,30 L20,15 L0,0Z"
              fill="#C65D3E"
              stroke="#C65D3E"
              strokeWidth={2}
            />
          </motion.g>
        </g>
      </FadeShape>

      {/* Three competing emperor silhouettes — fragmented empire */}
      {[
        { x: 350, delay: 1.8 },
        { x: 960, delay: 1.6 },
        { x: 1570, delay: 2.0 },
      ].map((pos, i) => (
        <FadeShape key={i} delay={pos.delay}>
          <g transform={`translate(${pos.x}, 650)`} opacity="0.4">
            <circle cx="0" cy="-40" r="15" fill="#C65D3E" />
            <path d="M-18,-22 L-20,40 L20,40 L18,-22Z" fill="#C65D3E" />
            {/* Crown/wreath */}
            <DrawPath
              d="M-12,-52 Q0,-60 12,-52"
              stroke="#B8860B"
              strokeWidth={2}
              delay={pos.delay + 0.3}
            />
          </g>
        </FadeShape>
      ))}

      {/* Falling debris particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.rect
          key={i}
          x={600 + i * 100}
          y={200 + (i % 3) * 80}
          width={4 + (i % 3) * 2}
          height={4 + (i % 2) * 3}
          fill="#C65D3E"
          initial={{ opacity: 0, y: 200 + (i % 3) * 80 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [200 + (i % 3) * 80, 400 + (i % 3) * 80],
          }}
          transition={{
            duration: 3,
            delay: 1.5 + i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </PotteryScene>
  );
}
