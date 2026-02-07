import { PotteryScene, DrawPath, FadeShape, Flame, StaggerGroup, StaggerChild } from './shared';

export function AlaricSacksRome() {
  return (
    <PotteryScene>
      {/* City gate — broken open */}
      <FadeShape delay={0.3}>
        <g transform="translate(960, 300)">
          {/* Gate walls */}
          <DrawPath
            d="M-250,350 V-50 L-200,-100 H-150 V350"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.3}
            duration={1.2}
          />
          <DrawPath
            d="M150,350 V-50 L200,-100 H250 V350"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.35}
            duration={1.2}
          />
          {/* Arch over gate */}
          <DrawPath
            d="M-150,-50 Q0,-150 150,-50"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.5}
          />
          {/* Broken gate doors — left door swinging */}
          <DrawPath
            d="M-140,350 L-140,50 L-80,80"
            stroke="#D4845A"
            strokeWidth={3}
            delay={0.7}
          />
          {/* Right door broken off hinge */}
          <DrawPath
            d="M140,350 L140,100 L120,120"
            stroke="#D4845A"
            strokeWidth={3}
            delay={0.75}
          />
          {/* Broken pieces on ground */}
          <DrawPath d="M-60,340 L-30,350 L-50,360" stroke="#D4845A" strokeWidth={2} delay={0.9} />
          <DrawPath d="M40,335 L70,345 L50,355" stroke="#D4845A" strokeWidth={2} delay={0.95} />
        </g>
      </FadeShape>

      {/* Visigoth warriors storming through */}
      <StaggerGroup delay={1.0} stagger={0.2}>
        {[
          { x: 860, y: 500, scale: 1.1 },
          { x: 940, y: 480, scale: 1.2 },
          { x: 1020, y: 510, scale: 1 },
          { x: 1080, y: 530, scale: 0.9 },
        ].map((pos, i) => (
          <StaggerChild key={i}>
            <g transform={`translate(${pos.x}, ${pos.y}) scale(${pos.scale})`}>
              {/* Head */}
              <circle cx="0" cy="-35" r="12" fill="#C65D3E" />
              {/* Horned/crested helmet */}
              <DrawPath
                d="M-10,-45 L-15,-60 M10,-45 L15,-60"
                stroke="#C65D3E"
                strokeWidth={2}
                delay={1.3 + i * 0.15}
              />
              {/* Body */}
              <path d="M-15,-20 L-18,40 L18,40 L15,-20Z" fill="#C65D3E" />
              {/* Weapon raised */}
              <DrawPath
                d="M12,-10 L30,-30 L35,-55"
                stroke="#C65D3E"
                strokeWidth={3}
                delay={1.4 + i * 0.15}
              />
              {/* Axe/sword head */}
              <DrawPath
                d="M30,-55 L40,-50 L35,-60Z"
                stroke="#E8C99B"
                strokeWidth={2}
                delay={1.5 + i * 0.15}
              />
              {/* Shield */}
              <circle cx="-18" cy="0" r="12" fill="none" stroke="#C65D3E" strokeWidth={2} />
              {/* Legs running */}
              <line x1="-8" y1="40" x2="-18" y2="70" stroke="#C65D3E" strokeWidth={3} />
              <line x1="8" y1="40" x2="20" y2="68" stroke="#C65D3E" strokeWidth={3} />
            </g>
          </StaggerChild>
        ))}
      </StaggerGroup>

      {/* Flames behind the gate */}
      <Flame cx={800} cy={280} scale={2} delay={1.8} />
      <Flame cx={960} cy={250} scale={2.5} delay={1.5} />
      <Flame cx={1120} cy={270} scale={2} delay={2.0} />
      <Flame cx={880} cy={260} scale={1.5} delay={1.7} />
      <Flame cx={1040} cy={240} scale={1.8} delay={1.9} />

      {/* Ground */}
      <DrawPath d="M400,700 H1520" stroke="#C65D3E" strokeWidth={2} delay={0.2} />
    </PotteryScene>
  );
}
