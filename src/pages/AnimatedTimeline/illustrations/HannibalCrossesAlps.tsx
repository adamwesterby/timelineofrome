import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function HannibalCrossesAlps() {
  return (
    <PotteryScene>
      {/* Mountain range */}
      <FadeShape delay={0.2}>
        <DrawPath
          d="M0,750 L300,350 L500,500 L750,200 L1000,400 L1200,250 L1450,450 L1650,300 L1920,750"
          stroke="#C65D3E"
          strokeWidth={3}
          delay={0.2}
          duration={2}
        />
        <path
          d="M0,750 L300,350 L500,500 L750,200 L1000,400 L1200,250 L1450,450 L1650,300 L1920,750Z"
          fill="#1E1208"
        />
      </FadeShape>

      {/* Snow caps */}
      <FadeShape delay={0.8}>
        <path d="M700,230 L750,200 L800,240 Q750,220 700,230Z" fill="#E8C99B" opacity="0.3" />
        <path d="M1160,280 L1200,250 L1240,290 Q1200,270 1160,280Z" fill="#E8C99B" opacity="0.3" />
        <path d="M1610,330 L1650,300 L1690,340 Q1650,320 1610,330Z" fill="#E8C99B" opacity="0.3" />
      </FadeShape>

      {/* Mountain path — winding trail */}
      <DrawPath
        d="M400,700 Q500,650 550,550 Q600,450 700,400 Q800,350 850,320 Q950,300 1050,350 Q1100,380 1150,350"
        stroke="#D4845A"
        strokeWidth={2}
        delay={0.6}
        duration={1.8}
      />

      {/* Elephant procession climbing the path */}
      {[0, 1, 2].map((i) => (
        <FadeShape key={i} delay={1.2 + i * 0.3}>
          <g transform={`translate(${620 + i * 160}, ${430 - i * 40}) scale(0.6)`}>
            {/* Simplified elephant silhouette */}
            <path
              d="M-50,30 Q-60,0 -40,-20 Q-20,-35 20,-35 Q50,-25 60,-5 Q65,15 55,30 Q40,40 -30,40 Q-50,35 -50,30Z"
              fill="#C65D3E"
            />
            {/* Head + trunk */}
            <path
              d="M-50,10 Q-70,5 -75,-10 Q-78,-20 -70,-25 Q-60,-28 -50,-15"
              fill="none"
              stroke="#C65D3E"
              strokeWidth={3}
            />
            <path
              d="M-75,-10 Q-85,10 -80,25"
              fill="none"
              stroke="#C65D3E"
              strokeWidth={2}
            />
            {/* Legs */}
            <line x1="-25" y1="40" x2="-25" y2="80" stroke="#C65D3E" strokeWidth={4} />
            <line x1="5" y1="40" x2="5" y2="80" stroke="#C65D3E" strokeWidth={4} />
            <line x1="35" y1="38" x2="35" y2="78" stroke="#C65D3E" strokeWidth={4} />
          </g>
        </FadeShape>
      ))}

      {/* Hannibal figure on lead elephant */}
      <FadeShape delay={1.8}>
        <g transform="translate(580, 360)">
          <circle cx="0" cy="-20" r="8" fill="#C65D3E" />
          <DrawPath d="M0,-12 V10" stroke="#C65D3E" strokeWidth={3} delay={1.9} />
          {/* Raised arm pointing forward */}
          <DrawPath d="M0,-5 L20,-20" stroke="#C65D3E" strokeWidth={3} delay={2.0} />
        </g>
      </FadeShape>

      {/* Wind/snow particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={i}
          cx={400 + i * 250}
          cy={250 + (i % 3) * 50}
          r="2"
          fill="#E8C99B"
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [0, 60, 120],
            y: [0, -10, 5],
          }}
          transition={{
            duration: 3,
            delay: 1.5 + i * 0.4,
            repeat: Infinity,
          }}
        />
      ))}
    </PotteryScene>
  );
}
