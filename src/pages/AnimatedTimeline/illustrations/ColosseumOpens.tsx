import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape, StaggerGroup, StaggerChild } from './shared';

export function ColosseumOpens() {
  return (
    <PotteryScene>
      {/* Colosseum structure — front elevation */}
      <FadeShape delay={0.3}>
        <g transform="translate(960, 350)">
          {/* Outer ellipse / facade */}
          <DrawPath
            d="M-450,200 Q-460,0 -350,-120 Q-200,-200 0,-220 Q200,-200 350,-120 Q460,0 450,200"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.3}
            duration={2}
          />

          {/* Three tiers of arches */}
          {/* Bottom tier */}
          {Array.from({ length: 11 }).map((_, i) => {
            const x = -400 + i * 80;
            const baseY = 160 - Math.abs(i - 5) * 8;
            return (
              <DrawPath
                key={`arch-1-${i}`}
                d={`M${x},${baseY} Q${x + 20},${baseY - 35} ${x + 40},${baseY}`}
                stroke="#C65D3E"
                strokeWidth={2}
                delay={0.6 + i * 0.05}
                duration={0.5}
              />
            );
          })}

          {/* Middle tier */}
          {Array.from({ length: 9 }).map((_, i) => {
            const x = -320 + i * 80;
            const baseY = 60 - Math.abs(i - 4) * 10;
            return (
              <DrawPath
                key={`arch-2-${i}`}
                d={`M${x},${baseY} Q${x + 20},${baseY - 30} ${x + 40},${baseY}`}
                stroke="#C65D3E"
                strokeWidth={2}
                delay={0.9 + i * 0.05}
                duration={0.5}
              />
            );
          })}

          {/* Top tier */}
          {Array.from({ length: 7 }).map((_, i) => {
            const x = -240 + i * 80;
            const baseY = -30 - Math.abs(i - 3) * 12;
            return (
              <DrawPath
                key={`arch-3-${i}`}
                d={`M${x},${baseY} Q${x + 15},${baseY - 25} ${x + 30},${baseY}`}
                stroke="#C65D3E"
                strokeWidth={1.5}
                delay={1.2 + i * 0.05}
                duration={0.5}
              />
            );
          })}

          {/* Tier division lines */}
          <DrawPath
            d="M-430,120 Q-200,80 0,70 Q200,80 430,120"
            stroke="#C65D3E"
            strokeWidth={2}
            delay={0.8}
          />
          <DrawPath
            d="M-380,20 Q-180,-10 0,-20 Q180,-10 380,20"
            stroke="#C65D3E"
            strokeWidth={2}
            delay={1.1}
          />
          <DrawPath
            d="M-300,-70 Q-150,-100 0,-110 Q150,-100 300,-70"
            stroke="#C65D3E"
            strokeWidth={1.5}
            delay={1.4}
          />
        </g>
      </FadeShape>

      {/* Gladiators at base */}
      <StaggerGroup delay={1.8} stagger={0.15}>
        {[0, 1].map((i) => (
          <StaggerChild key={i}>
            <g transform={`translate(${880 + i * 160}, 620)`}>
              <circle cx="0" cy="-25" r="10" fill="#C65D3E" />
              <path d="M-12,-13 L-14,30 L14,30 L12,-13Z" fill="#C65D3E" />
              {/* Sword */}
              <DrawPath d="M12,-5 L30,-20 L32,-35" stroke="#E8C99B" strokeWidth={2} delay={2.0 + i * 0.15} />
              {/* Shield */}
              <ellipse cx="-15" cy="5" rx="10" ry="15" fill="none" stroke="#C65D3E" strokeWidth={2} />
              <line x1="-5" y1="30" x2="-10" y2="60" stroke="#C65D3E" strokeWidth={3} />
              <line x1="5" y1="30" x2="10" y2="60" stroke="#C65D3E" strokeWidth={3} />
            </g>
          </StaggerChild>
        ))}
      </StaggerGroup>

      {/* Crowd dots in the stands */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.circle
          key={`crowd-${i}`}
          cx={680 + i * 40 + (i % 2) * 15}
          cy={420 - Math.abs(i - 7) * 6}
          r="3"
          fill="#D4845A"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.0 + i * 0.05 }}
        />
      ))}

      {/* Ground */}
      <DrawPath d="M400,700 H1520" stroke="#C65D3E" strokeWidth={2} delay={0.2} />
    </PotteryScene>
  );
}
