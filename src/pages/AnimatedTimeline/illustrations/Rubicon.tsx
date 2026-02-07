import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function Rubicon() {
  return (
    <PotteryScene>
      {/* River — flowing horizontal across scene */}
      <FadeShape delay={0.2}>
        <DrawPath
          d="M0,550 Q300,530 600,560 Q900,590 1200,550 Q1500,510 1920,550"
          stroke="#D4845A"
          strokeWidth={2}
          delay={0.2}
          duration={1.5}
        />
        <DrawPath
          d="M0,580 Q300,560 600,590 Q900,620 1200,580 Q1500,540 1920,580"
          stroke="#D4845A"
          strokeWidth={1.5}
          delay={0.3}
          duration={1.5}
        />
        <DrawPath
          d="M0,610 Q300,590 600,620 Q900,650 1200,610 Q1500,570 1920,610"
          stroke="#D4845A"
          strokeWidth={1}
          delay={0.4}
          duration={1.5}
        />
      </FadeShape>

      {/* Caesar on horseback — at river's edge */}
      <FadeShape delay={0.6}>
        <g transform="translate(700, 350)">
          {/* Horse body */}
          <DrawPath
            d="M-80,40 Q-100,0 -60,-30 Q-20,-50 40,-45 Q80,-35 100,-10 Q110,20 90,45 Q60,55 -40,55 Q-80,50 -80,40Z"
            stroke="#C65D3E"
            strokeWidth={4}
            fill="#C65D3E"
            delay={0.6}
            duration={1.5}
          />
          {/* Horse head — looking forward */}
          <DrawPath
            d="M-80,15 Q-110,0 -130,-20 Q-140,-40 -125,-50 Q-110,-55 -100,-40 Q-95,-25 -80,15"
            stroke="#C65D3E"
            strokeWidth={4}
            fill="#C65D3E"
            delay={0.8}
          />
          {/* Horse ear */}
          <DrawPath d="M-120,-45 L-125,-60 L-112,-48" stroke="#C65D3E" strokeWidth={2} delay={1.0} />
          {/* Horse legs */}
          <DrawPath d="M-40,55 L-50,140" stroke="#C65D3E" strokeWidth={5} delay={0.9} />
          <DrawPath d="M0,55 L-5,140" stroke="#C65D3E" strokeWidth={5} delay={0.95} />
          <DrawPath d="M50,50 L55,135" stroke="#C65D3E" strokeWidth={5} delay={1.0} />
          <DrawPath d="M80,45 L90,130" stroke="#C65D3E" strokeWidth={5} delay={1.05} />
          {/* Horse tail */}
          <DrawPath d="M100,-10 Q120,-25 115,-45" stroke="#C65D3E" strokeWidth={3} delay={1.1} />

          {/* Caesar riding */}
          <DrawPath
            d="M-20,-50 V-110"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={1.2}
          />
          <circle cx="-20" cy="-125" r="15" fill="#C65D3E" />
          {/* Cape */}
          <DrawPath
            d="M-15,-95 Q20,-80 30,-60 Q40,-40 50,-50"
            stroke="#D4845A"
            strokeWidth={2}
            delay={1.3}
          />
          {/* Arm pointing forward */}
          <DrawPath d="M-25,-100 L-70,-115" stroke="#C65D3E" strokeWidth={3} delay={1.4} />
        </g>
      </FadeShape>

      {/* Tumbling die — "Alea iacta est" */}
      <FadeShape delay={2.0}>
        <motion.g
          transform="translate(1200, 420)"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 25 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {/* Die face */}
          <rect x="-25" y="-25" width="50" height="50" rx="5" fill="none" stroke="#E8C99B" strokeWidth={2} />
          {/* Dots */}
          <circle cx="-10" cy="-10" r="4" fill="#E8C99B" />
          <circle cx="10" cy="-10" r="4" fill="#E8C99B" />
          <circle cx="-10" cy="10" r="4" fill="#E8C99B" />
          <circle cx="10" cy="10" r="4" fill="#E8C99B" />
          <circle cx="0" cy="0" r="4" fill="#E8C99B" />
        </motion.g>
      </FadeShape>

      {/* ALEA IACTA EST text */}
      <motion.text
        x="960"
        y="900"
        textAnchor="middle"
        fontFamily="Cinzel, serif"
        fontSize="36"
        fill="#C65D3E"
        letterSpacing="0.25em"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        ALEA IACTA EST
      </motion.text>

      {/* Far bank (other side of river) */}
      <DrawPath d="M0,620 H1920" stroke="#C65D3E" strokeWidth={1} delay={0.5} />
    </PotteryScene>
  );
}
