import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape, StaggerGroup, StaggerChild } from './shared';

export function CaesarAssassination() {
  return (
    <PotteryScene>
      {/* Senate columns */}
      <FadeShape delay={0.2}>
        <g opacity="0.3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <DrawPath
                d={`M${350 + i * 250},150 V700`}
                stroke="#C65D3E"
                strokeWidth={6}
                delay={0.2 + i * 0.1}
              />
              {/* Column capitals */}
              <DrawPath
                d={`M${335 + i * 250},150 H${365 + i * 250}`}
                stroke="#C65D3E"
                strokeWidth={8}
                delay={0.3 + i * 0.1}
              />
            </g>
          ))}
        </g>
      </FadeShape>

      {/* Caesar — fallen figure center */}
      <FadeShape delay={0.8}>
        <g transform="translate(960, 550)">
          {/* Fallen body */}
          <DrawPath
            d="M-60,-10 Q-30,-30 30,-20 Q60,-10 80,10"
            stroke="#C65D3E"
            strokeWidth={5}
            delay={0.8}
            duration={1}
          />
          {/* Head */}
          <circle cx="-70" cy="-5" r="18" fill="#C65D3E" />
          {/* Toga draped */}
          <DrawPath
            d="M-40,-25 Q0,-40 40,-20 Q60,-10 80,10 Q70,30 20,25 Q-20,20 -50,0"
            stroke="#D4845A"
            strokeWidth={2}
            delay={1.0}
          />
          {/* Arm reaching */}
          <DrawPath d="M30,-15 L60,-40" stroke="#C65D3E" strokeWidth={3} delay={1.1} />
        </g>
      </FadeShape>

      {/* Fallen laurel wreath */}
      <FadeShape delay={1.5}>
        <g transform="translate(880, 580)">
          <DrawPath
            d="M-15,-5 Q-20,-15 -10,-20 Q0,-22 10,-15 Q15,-5 10,5 Q0,10 -10,5 Q-18,0 -15,-5Z"
            stroke="#B8860B"
            strokeWidth={2}
            delay={1.5}
          />
        </g>
      </FadeShape>

      {/* Senators with daggers — surrounding */}
      <StaggerGroup delay={1.2} stagger={0.2}>
        {[
          { x: 750, y: 400, rot: 10 },
          { x: 850, y: 380, rot: -5 },
          { x: 1050, y: 370, rot: 5 },
          { x: 1150, y: 390, rot: -10 },
          { x: 1000, y: 350, rot: 0 },
        ].map((pos, i) => (
          <StaggerChild key={i}>
            <g transform={`translate(${pos.x}, ${pos.y}) rotate(${pos.rot})`}>
              {/* Head */}
              <circle cx="0" cy="-30" r="12" fill="#C65D3E" />
              {/* Body/toga */}
              <path d="M-15,-16 L-18,50 L18,50 L15,-16Z" fill="#C65D3E" opacity="0.85" />
              {/* Arm with dagger */}
              <DrawPath
                d="M12,-8 L30,-25 L35,-50"
                stroke="#C65D3E"
                strokeWidth={3}
                delay={1.5 + i * 0.15}
              />
              {/* Dagger blade */}
              <motion.line
                x1="35"
                y1="-50"
                x2="38"
                y2="-70"
                stroke="#E8C99B"
                strokeWidth={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.15 }}
              />
            </g>
          </StaggerChild>
        ))}
      </StaggerGroup>

      {/* Ground / Senate floor */}
      <DrawPath d="M300,700 H1620" stroke="#C65D3E" strokeWidth={2} delay={0.2} />
    </PotteryScene>
  );
}
