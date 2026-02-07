import { PotteryScene, DrawPath, FadeShape } from './shared';

export function MarcusAurelius() {
  return (
    <PotteryScene>
      {/* Dual scene — divider in middle */}
      <DrawPath
        d="M960,100 V950"
        stroke="#C65D3E"
        strokeWidth={1}
        delay={0.2}
        duration={1}
      />

      {/* LEFT: Warrior scene */}
      <FadeShape delay={0.4}>
        <g transform="translate(480, 320)">
          {/* Marcus in armor */}
          <DrawPath
            d="M0,-85 Q25,-80 28,-55 Q28,-30 0,-22 Q-28,-30 -28,-55 Q-25,-80 0,-85Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.4}
          />
          {/* Helmet crest */}
          <DrawPath
            d="M-15,-85 Q0,-110 15,-85"
            stroke="#D4845A"
            strokeWidth={3}
            delay={0.6}
          />
          {/* Armored torso */}
          <DrawPath
            d="M-35,-16 L-40,130 L40,130 L35,-16Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.6}
            duration={1}
          />
          {/* Sword arm */}
          <DrawPath d="M35,5 L80,-10 L95,-70" stroke="#C65D3E" strokeWidth={4} delay={0.8} />
          {/* Sword */}
          <DrawPath d="M95,-70 L100,-140" stroke="#E8C99B" strokeWidth={3} delay={1.0} />
          {/* Shield arm */}
          <DrawPath d="M-35,15 L-65,30" stroke="#C65D3E" strokeWidth={4} delay={0.85} />
          {/* Shield */}
          <DrawPath
            d="M-65,10 Q-90,30 -65,60 Q-55,65 -45,55 Q-35,30 -45,10Z"
            stroke="#C65D3E"
            strokeWidth={2}
            delay={0.9}
          />
          {/* Legs */}
          <DrawPath d="M-12,130 L-20,290" stroke="#C65D3E" strokeWidth={5} delay={1.0} />
          <DrawPath d="M12,130 L30,290" stroke="#C65D3E" strokeWidth={5} delay={1.05} />
          {/* Cape */}
          <DrawPath
            d="M30,-10 Q60,30 55,100 Q50,150 65,200"
            stroke="#D4845A"
            strokeWidth={2}
            delay={1.1}
          />
        </g>
      </FadeShape>

      {/* Fallen barbarians at warrior's feet */}
      <FadeShape delay={1.5}>
        <g transform="translate(380, 650)" opacity="0.5">
          <DrawPath d="M0,0 L60,10 L70,25" stroke="#C65D3E" strokeWidth={3} delay={1.5} />
          <circle cx="-10" cy="5" r="8" fill="#C65D3E" />
        </g>
      </FadeShape>

      {/* RIGHT: Philosopher scene */}
      <FadeShape delay={0.5}>
        <g transform="translate(1440, 320)">
          {/* Head */}
          <DrawPath
            d="M0,-75 Q25,-70 25,-48 Q25,-25 0,-18 Q-25,-25 -25,-48 Q-25,-70 0,-75Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.5}
          />
          {/* Beard */}
          <DrawPath
            d="M-15,-22 Q-18,-10 -10,0 Q0,5 10,0 Q18,-10 15,-22"
            stroke="#D4845A"
            strokeWidth={2}
            delay={0.7}
          />
          {/* Seated torso in toga */}
          <DrawPath
            d="M-35,-12 L-38,100 L38,100 L35,-12Z"
            stroke="#C65D3E"
            strokeWidth={3}
            fill="#C65D3E"
            delay={0.7}
            duration={1}
          />
          {/* Toga drapes */}
          <DrawPath
            d="M-35,0 Q-50,30 -45,60 Q-40,80 -50,100"
            stroke="#D4845A"
            strokeWidth={2}
            delay={0.9}
          />
          {/* Writing arm */}
          <DrawPath d="M35,20 L70,60 L75,65" stroke="#C65D3E" strokeWidth={4} delay={1.0} />
          {/* Stylus */}
          <DrawPath d="M75,65 L82,80" stroke="#E8C99B" strokeWidth={2} delay={1.2} />
          {/* Seated legs */}
          <DrawPath d="M-15,100 L-30,140 L-50,170" stroke="#C65D3E" strokeWidth={4} delay={1.1} />
          <DrawPath d="M15,100 L30,140 L50,170" stroke="#C65D3E" strokeWidth={4} delay={1.15} />
        </g>
      </FadeShape>

      {/* Writing desk / table */}
      <FadeShape delay={1.3}>
        <DrawPath
          d="M1380,480 H1540"
          stroke="#C65D3E"
          strokeWidth={3}
          delay={1.3}
        />
        <DrawPath d="M1400,480 V540" stroke="#C65D3E" strokeWidth={2} delay={1.35} />
        <DrawPath d="M1520,480 V540" stroke="#C65D3E" strokeWidth={2} delay={1.4} />
        {/* Scroll on desk */}
        <DrawPath
          d="M1420,470 Q1460,465 1500,470"
          stroke="#E8C99B"
          strokeWidth={2}
          delay={1.5}
        />
      </FadeShape>

      {/* Ground line */}
      <DrawPath d="M200,700 H1720" stroke="#C65D3E" strokeWidth={2} delay={0.2} />
    </PotteryScene>
  );
}
