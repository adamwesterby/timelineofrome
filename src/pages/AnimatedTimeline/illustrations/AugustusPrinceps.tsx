import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function AugustusPrinceps() {
  return (
    <PotteryScene>
      {/* Augustus in Prima Porta pose */}
      <FadeShape delay={0.3}>
        <g transform="translate(960, 280)">
          {/* Head */}
          <DrawPath
            d="M0,-90 Q30,-85 32,-55 Q32,-25 0,-18 Q-32,-25 -32,-55 Q-30,-85 0,-90Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.3}
          />
          {/* Laurel wreath on head */}
          <DrawPath
            d="M-25,-80 Q-30,-95 -15,-100 Q0,-102 15,-100 Q30,-95 25,-80"
            stroke="#B8860B"
            strokeWidth={2}
            delay={0.5}
          />
          {/* Torso — armor/cuirass */}
          <DrawPath
            d="M-38,-12 L-42,140 L42,140 L38,-12Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.5}
            duration={1}
          />
          {/* Armor detail lines */}
          <DrawPath d="M-30,20 H30" stroke="#D4845A" strokeWidth={1.5} delay={0.8} />
          <DrawPath d="M-25,50 H25" stroke="#D4845A" strokeWidth={1.5} delay={0.85} />
          {/* Right arm raised — commanding gesture */}
          <DrawPath
            d="M38,0 L90,-20 L120,-60"
            stroke="#C65D3E"
            strokeWidth={5}
            delay={0.7}
          />
          {/* Left arm holding scroll */}
          <DrawPath
            d="M-38,10 L-70,40 L-75,50"
            stroke="#C65D3E"
            strokeWidth={5}
            delay={0.75}
          />
          {/* Scroll */}
          <DrawPath
            d="M-85,40 Q-75,35 -65,40 L-65,70 Q-75,75 -85,70Z"
            stroke="#E8C99B"
            strokeWidth={2}
            delay={1.0}
          />
          {/* Toga draped */}
          <DrawPath
            d="M-38,10 Q-55,60 -50,140"
            stroke="#D4845A"
            strokeWidth={2}
            delay={0.9}
          />
          {/* Legs */}
          <DrawPath d="M-15,140 L-20,310" stroke="#C65D3E" strokeWidth={5} delay={0.9} />
          <DrawPath d="M15,140 L25,310" stroke="#C65D3E" strokeWidth={5} delay={0.95} />
        </g>
      </FadeShape>

      {/* Eagle standards — flanking */}
      {[-1, 1].map((side) => (
        <FadeShape key={side} delay={1.3}>
          <g transform={`translate(${960 + side * 300}, 280)`}>
            {/* Pole */}
            <DrawPath
              d={`M0,0 V320`}
              stroke="#B8860B"
              strokeWidth={3}
              delay={1.3}
            />
            {/* Eagle */}
            <DrawPath
              d="M0,-20 L-20,0 L-15,-5 L-25,10 L0,0 L25,10 L15,-5 L20,0Z"
              stroke="#B8860B"
              strokeWidth={2}
              fill="#B8860B"
              delay={1.5}
            />
            {/* SPQR plate */}
            <motion.text
              x="0"
              y="40"
              textAnchor="middle"
              fontFamily="Cinzel, serif"
              fontSize="14"
              fill="#B8860B"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.7 }}
            >
              SPQR
            </motion.text>
          </g>
        </FadeShape>
      ))}

      {/* Platform/pedestal */}
      <FadeShape delay={0.2}>
        <DrawPath d="M750,680 H1170" stroke="#C65D3E" strokeWidth={3} delay={0.2} />
        <DrawPath d="M770,695 H1150" stroke="#C65D3E" strokeWidth={2} delay={0.25} />
      </FadeShape>
    </PotteryScene>
  );
}
