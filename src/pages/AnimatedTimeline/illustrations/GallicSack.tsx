import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function GallicSack() {
  return (
    <PotteryScene>
      {/* Brennus figure — large barbarian with scales */}
      <FadeShape delay={0.3}>
        <g transform="translate(750, 320)">
          {/* Head with wild hair */}
          <DrawPath
            d="M0,-90 Q30,-85 30,-60 Q30,-35 0,-30 Q-30,-35 -30,-60 Q-30,-85 0,-90Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.3}
          />
          {/* Wild hair strands */}
          <DrawPath d="M-20,-90 Q-35,-110 -25,-120" stroke="#C65D3E" strokeWidth={2} delay={0.5} />
          <DrawPath d="M0,-92 Q5,-115 0,-125" stroke="#C65D3E" strokeWidth={2} delay={0.55} />
          <DrawPath d="M20,-90 Q35,-108 30,-118" stroke="#C65D3E" strokeWidth={2} delay={0.6} />
          {/* Muscular torso */}
          <DrawPath
            d="M-35,-25 L-45,130 L45,130 L35,-25Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.5}
            duration={1}
          />
          {/* Right arm pointing at scales */}
          <DrawPath
            d="M35,0 L120,30 L160,20"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.8}
          />
          {/* Left arm on hip */}
          <DrawPath
            d="M-35,10 L-70,60 L-50,70"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.7}
          />
          {/* Legs */}
          <DrawPath d="M-15,130 L-20,300" stroke="#C65D3E" strokeWidth={5} delay={0.9} />
          <DrawPath d="M15,130 L25,300" stroke="#C65D3E" strokeWidth={5} delay={0.95} />
        </g>
      </FadeShape>

      {/* Scales of gold */}
      <FadeShape delay={1.2}>
        <g transform="translate(1150, 380)">
          {/* Scales post */}
          <DrawPath d="M0,-80 V80" stroke="#B8860B" strokeWidth={3} delay={1.2} />
          {/* Crossbar */}
          <DrawPath d="M-80,-80 H80" stroke="#B8860B" strokeWidth={3} delay={1.3} />
          {/* Left pan (gold side — heavier, lower) */}
          <DrawPath
            d="M-80,-80 L-100,0 Q-80,10 -60,0Z"
            stroke="#B8860B"
            strokeWidth={2}
            delay={1.4}
          />
          {/* Gold circles in pan */}
          <circle cx="-80" cy="-5" r="8" fill="#B8860B" opacity="0.6" />
          <circle cx="-70" cy="-8" r="6" fill="#B8860B" opacity="0.5" />
          {/* Right pan (sword thrown in — higher) */}
          <DrawPath
            d="M80,-80 L60,-40 Q80,-30 100,-40Z"
            stroke="#B8860B"
            strokeWidth={2}
            delay={1.5}
          />
          {/* Sword in pan */}
          <DrawPath d="M75,-55 L85,-38" stroke="#E8C99B" strokeWidth={2} delay={1.6} />
        </g>
      </FadeShape>

      {/* "VAE VICTIS" text etched in pottery style */}
      <motion.text
        x="960"
        y="900"
        textAnchor="middle"
        fontFamily="Cinzel, serif"
        fontSize="42"
        fill="#C65D3E"
        opacity="0"
        letterSpacing="0.3em"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 2 }}
      >
        VAE VICTIS
      </motion.text>

      {/* Ground */}
      <DrawPath d="M300,700 H1620" stroke="#C65D3E" strokeWidth={2} delay={0.2} />
    </PotteryScene>
  );
}
