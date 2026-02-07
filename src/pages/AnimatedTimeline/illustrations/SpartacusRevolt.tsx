import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function SpartacusRevolt() {
  return (
    <PotteryScene>
      {/* Spartacus — central heroic figure */}
      <FadeShape delay={0.3}>
        <g transform="translate(960, 300)">
          {/* Head */}
          <DrawPath
            d="M0,-80 Q25,-75 28,-50 Q28,-25 0,-18 Q-28,-25 -28,-50 Q-25,-75 0,-80Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.3}
          />
          {/* Muscular torso */}
          <DrawPath
            d="M-35,-12 L-42,130 L42,130 L35,-12Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.5}
            duration={1}
          />
          {/* Arms raised — breaking chains */}
          <DrawPath
            d="M-35,5 L-90,-30 L-110,-60"
            stroke="#C65D3E"
            strokeWidth={5}
            delay={0.7}
          />
          <DrawPath
            d="M35,5 L90,-30 L110,-60"
            stroke="#C65D3E"
            strokeWidth={5}
            delay={0.75}
          />
          {/* Legs in power stance */}
          <DrawPath d="M-15,130 L-45,300" stroke="#C65D3E" strokeWidth={5} delay={0.9} />
          <DrawPath d="M15,130 L45,300" stroke="#C65D3E" strokeWidth={5} delay={0.95} />
        </g>
      </FadeShape>

      {/* Breaking chains — left */}
      <FadeShape delay={1.2}>
        <g transform="translate(850, 240)">
          {/* Chain links */}
          <DrawPath d="M0,0 L-20,-5 L-40,0 L-60,-5" stroke="#B8860B" strokeWidth={3} delay={1.2} />
          {/* Breaking point */}
          <motion.g
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -15 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <DrawPath d="M-60,-5 L-80,-15 L-100,-10" stroke="#B8860B" strokeWidth={2} delay={1.3} />
          </motion.g>
        </g>
      </FadeShape>

      {/* Breaking chains — right */}
      <FadeShape delay={1.2}>
        <g transform="translate(1070, 240)">
          <DrawPath d="M0,0 L20,-5 L40,0 L60,-5" stroke="#B8860B" strokeWidth={3} delay={1.2} />
          <motion.g
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 15 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <DrawPath d="M60,-5 L80,-15 L100,-10" stroke="#B8860B" strokeWidth={2} delay={1.3} />
          </motion.g>
        </g>
      </FadeShape>

      {/* Followers behind — smaller silhouettes */}
      {[-3, -2, -1, 1, 2, 3].map((i) => (
        <FadeShape key={i} delay={1.8 + Math.abs(i) * 0.15}>
          <g transform={`translate(${960 + i * 120}, ${500 + Math.abs(i) * 20})`} opacity={0.5}>
            <circle cx="0" cy="-30" r="10" fill="#C65D3E" />
            <path d="M-12,-18 L-15,40 L15,40 L12,-18Z" fill="#C65D3E" />
            {/* Raised fists */}
            <line x1="-12" y1="-10" x2="-25" y2="-35" stroke="#C65D3E" strokeWidth={3} />
            <line x1="12" y1="-10" x2="25" y2="-35" stroke="#C65D3E" strokeWidth={3} />
          </g>
        </FadeShape>
      ))}

      {/* Arena ground with sand texture */}
      <DrawPath d="M200,700 H1720" stroke="#C65D3E" strokeWidth={2} delay={0.2} />
      <DrawPath d="M300,710 H1620" stroke="#D4845A" strokeWidth={1} delay={0.3} />
    </PotteryScene>
  );
}
