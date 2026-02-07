import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function EmpireMaximum() {
  return (
    <PotteryScene>
      {/* Stylized map outline of Roman Empire at maximum extent */}
      <FadeShape delay={0.2}>
        <g transform="translate(960, 500)">
          {/* Mediterranean Sea area */}
          <DrawPath
            d="M-600,0 Q-500,-30 -350,-20 Q-200,0 -100,-40 Q0,-60 100,-40 Q200,-20 350,-30 Q500,-50 600,-20"
            stroke="#D4845A"
            strokeWidth={1.5}
            delay={0.5}
            duration={1.5}
          />

          {/* Empire border — simplified outline */}
          <DrawPath
            d="M-650,-200 Q-600,-250 -450,-280 Q-300,-300 -150,-320 Q0,-330 200,-310 Q400,-280 550,-250 Q650,-200 680,-100 Q700,0 650,80 Q580,140 400,160 Q200,170 0,150 Q-200,130 -400,100 Q-550,60 -640,-50 Q-680,-120 -650,-200Z"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={0.3}
            duration={2.5}
          />

          {/* Key cities marked */}
          {[
            { x: -100, y: -40, label: 'ROMA' },
            { x: 350, y: -180, label: 'BYZANTIVM' },
            { x: -400, y: -100, label: 'HISPANIA' },
            { x: 100, y: 100, label: 'AEGYPTVS' },
            { x: -200, y: -220, label: 'GALLIA' },
            { x: 500, y: -80, label: 'SYRIA' },
          ].map((city, i) => (
            <motion.g key={city.label}>
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={city.label === 'ROMA' ? 6 : 4}
                fill={city.label === 'ROMA' ? '#E8C99B' : '#C65D3E'}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.2 }}
              />
              <motion.text
                x={city.x}
                y={city.y - 12}
                textAnchor="middle"
                fontFamily="Cinzel, serif"
                fontSize={city.label === 'ROMA' ? 16 : 11}
                fill={city.label === 'ROMA' ? '#E8C99B' : '#C65D3E'}
                letterSpacing="0.15em"
                initial={{ opacity: 0 }}
                animate={{ opacity: city.label === 'ROMA' ? 0.9 : 0.5 }}
                transition={{ delay: 1.7 + i * 0.2 }}
              >
                {city.label}
              </motion.text>
            </motion.g>
          ))}
        </g>
      </FadeShape>

      {/* Eagle at top center */}
      <FadeShape delay={2.5}>
        <g transform="translate(960, 150)">
          <DrawPath
            d="M0,-30 L-60,10 L-40,5 L-70,30 L-20,15 L0,0 L20,15 L70,30 L40,5 L60,10 L0,-30Z"
            stroke="#B8860B"
            strokeWidth={2}
            fill="#B8860B"
            delay={2.5}
            duration={1}
          />
          {/* Eagle head detail */}
          <DrawPath d="M0,-30 Q5,-40 -5,-35" stroke="#E8C99B" strokeWidth={1} delay={2.8} />
        </g>
      </FadeShape>

      {/* Border fill effect — subtle glow inside territory */}
      <motion.path
        d="M310,300 Q360,250 510,220 Q660,200 810,190 Q960,180 1160,200 Q1360,230 1510,260 Q1610,310 1640,410 Q1660,510 1610,590 Q1540,650 1360,670 Q1160,680 960,660 Q760,640 560,610 Q410,570 320,460 Q280,390 310,300Z"
        fill="#C65D3E"
        opacity="0.05"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 2, duration: 1.5 }}
      />
    </PotteryScene>
  );
}
