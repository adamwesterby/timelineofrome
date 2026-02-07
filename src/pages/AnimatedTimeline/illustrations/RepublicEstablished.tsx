import { PotteryScene, DrawPath, FadeShape, Flame } from './shared';

export function RepublicEstablished() {
  return (
    <PotteryScene>
      {/* Brutus standing figure — heroic pose with sword */}
      <FadeShape delay={0.3}>
        <g transform="translate(960, 300)">
          {/* Head */}
          <DrawPath
            d="M0,-80 Q25,-75 25,-50 Q25,-25 0,-20 Q-25,-25 -25,-50 Q-25,-75 0,-80Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.3}
            duration={1}
          />
          {/* Torso */}
          <DrawPath
            d="M-30,-15 L-40,120 L40,120 L30,-15Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.5}
            duration={1.2}
          />
          {/* Left arm raised with sword */}
          <DrawPath
            d="M-30,0 L-80,-40 L-85,-180"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.7}
            duration={1}
          />
          {/* Sword blade */}
          <DrawPath
            d="M-85,-180 L-83,-280 L-80,-180"
            stroke="#E8C99B"
            strokeWidth={3}
            delay={1.0}
            duration={0.8}
          />
          {/* Right arm */}
          <DrawPath
            d="M30,0 L70,50 L65,70"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.8}
          />
          {/* Legs */}
          <DrawPath d="M-15,120 L-25,280" stroke="#C65D3E" strokeWidth={4} delay={0.9} />
          <DrawPath d="M15,120 L35,280" stroke="#C65D3E" strokeWidth={4} delay={0.95} />
          {/* Cape/toga flowing */}
          <DrawPath
            d="M30,-10 Q80,40 70,120 Q65,160 80,200"
            stroke="#D4845A"
            strokeWidth={2}
            delay={1.1}
          />
        </g>
      </FadeShape>

      {/* Fallen crown on ground */}
      <FadeShape delay={1.4}>
        <g transform="translate(1150, 640)">
          {/* Crown shape — tilted on its side */}
          <DrawPath
            d="M-40,0 L-30,-30 L-15,-10 L0,-35 L15,-10 L30,-30 L40,0Z"
            stroke="#B8860B"
            strokeWidth={3}
            fill="none"
            delay={1.4}
            duration={1}
          />
          {/* Crown band */}
          <DrawPath
            d="M-40,0 L40,0"
            stroke="#B8860B"
            strokeWidth={2}
            delay={1.6}
          />
        </g>
      </FadeShape>

      {/* Ground/platform */}
      <DrawPath
        d="M400,680 H1520"
        stroke="#C65D3E"
        strokeWidth={2}
        delay={0.2}
      />

      {/* Decorative columns left and right */}
      <FadeShape delay={0.5}>
        <g opacity="0.4">
          <DrawPath d="M500,200 V680" stroke="#C65D3E" strokeWidth={4} delay={0.5} />
          <DrawPath d="M490,200 H510" stroke="#C65D3E" strokeWidth={6} delay={0.7} />
          <DrawPath d="M485,680 H515" stroke="#C65D3E" strokeWidth={6} delay={0.7} />
          <DrawPath d="M1420,200 V680" stroke="#C65D3E" strokeWidth={4} delay={0.6} />
          <DrawPath d="M1410,200 H1430" stroke="#C65D3E" strokeWidth={6} delay={0.8} />
          <DrawPath d="M1405,680 H1435" stroke="#C65D3E" strokeWidth={6} delay={0.8} />
        </g>
      </FadeShape>

      {/* Torches */}
      <Flame cx={530} cy={190} delay={1.5} />
      <Flame cx={1390} cy={190} delay={1.7} />
    </PotteryScene>
  );
}
