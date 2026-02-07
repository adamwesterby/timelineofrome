import { PotteryScene, DrawPath, FadeShape, StaggerGroup, StaggerChild } from './shared';

export function PyrrhicWar() {
  return (
    <PotteryScene>
      {/* War elephant — center-left */}
      <FadeShape delay={0.3}>
        <g transform="translate(650, 350)">
          {/* Elephant body */}
          <DrawPath
            d="M-100,50 Q-120,0 -80,-40 Q-40,-70 40,-70 Q100,-60 120,-20 Q140,20 120,60 Q100,80 -60,80 Q-100,70 -100,50Z"
            stroke="#C65D3E"
            strokeWidth={4}
            fill="#C65D3E"
            delay={0.3}
            duration={1.5}
          />
          {/* Head */}
          <DrawPath
            d="M-100,20 Q-140,10 -150,-20 Q-155,-40 -140,-50 Q-120,-55 -100,-30"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.6}
          />
          {/* Trunk */}
          <DrawPath
            d="M-150,-20 Q-170,20 -160,60 Q-155,80 -145,90 Q-135,85 -140,70 Q-150,40 -135,0"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={0.8}
            duration={1.2}
          />
          {/* Tusks */}
          <DrawPath d="M-140,-30 L-165,-50" stroke="#E8C99B" strokeWidth={3} delay={1.0} />
          {/* Ear */}
          <DrawPath
            d="M-110,-20 Q-130,-15 -125,5 Q-115,15 -105,0"
            stroke="#D4845A"
            strokeWidth={2}
            delay={0.9}
          />
          {/* Legs */}
          <DrawPath d="M-60,80 V200" stroke="#C65D3E" strokeWidth={6} delay={1.0} />
          <DrawPath d="M-20,80 V200" stroke="#C65D3E" strokeWidth={6} delay={1.05} />
          <DrawPath d="M40,80 V200" stroke="#C65D3E" strokeWidth={6} delay={1.1} />
          <DrawPath d="M80,75 V200" stroke="#C65D3E" strokeWidth={6} delay={1.15} />
          {/* War tower on back */}
          <DrawPath
            d="M-40,-70 L-50,-130 L60,-130 L50,-70"
            stroke="#D4845A"
            strokeWidth={2}
            delay={1.2}
          />
          {/* Warrior in tower */}
          <circle cx="5" cy="-115" r="12" fill="#C65D3E" />
          <DrawPath d="M5,-103 V-80" stroke="#C65D3E" strokeWidth={3} delay={1.3} />
        </g>
      </FadeShape>

      {/* Roman legionaries — right side, smaller figures */}
      <StaggerGroup delay={1.0} stagger={0.2}>
        {[0, 1, 2, 3, 4].map((i) => (
          <StaggerChild key={i}>
            <g transform={`translate(${1200 + i * 60}, 440)`}>
              {/* Shield (scutum) */}
              <rect x="-15" y="-20" width="25" height="50" rx="4" fill="#C65D3E" opacity="0.9" />
              {/* Head */}
              <circle cx="0" cy="-35" r="10" fill="#C65D3E" />
              {/* Helmet crest */}
              <DrawPath d="M-5,-45 Q0,-55 5,-45" stroke="#D4845A" strokeWidth={2} delay={1.3 + i * 0.15} />
              {/* Pilum (spear) */}
              <DrawPath
                d="M10,-50 L10,40"
                stroke="#D4845A"
                strokeWidth={2}
                delay={1.2 + i * 0.15}
              />
              {/* Legs */}
              <line x1="-5" y1="30" x2="-8" y2="80" stroke="#C65D3E" strokeWidth={3} />
              <line x1="5" y1="30" x2="8" y2="80" stroke="#C65D3E" strokeWidth={3} />
            </g>
          </StaggerChild>
        ))}
      </StaggerGroup>

      {/* Ground */}
      <DrawPath d="M200,700 H1720" stroke="#C65D3E" strokeWidth={2} delay={0.2} />
    </PotteryScene>
  );
}
