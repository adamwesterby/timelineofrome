import { PotteryScene, DrawPath, FadeShape, StaggerGroup, StaggerChild } from './shared';

export function FoundingOfRome() {
  return (
    <PotteryScene>
      {/* Seven hills silhouette */}
      <StaggerGroup delay={0.2} stagger={0.1}>
        <StaggerChild>
          <path d="M200,700 Q350,550 500,700" fill="#2A1A0F" />
        </StaggerChild>
        <StaggerChild>
          <path d="M400,700 Q530,520 660,700" fill="#2A1A0F" />
        </StaggerChild>
        <StaggerChild>
          <path d="M580,700 Q700,500 820,700" fill="#2A1A0F" />
        </StaggerChild>
        <StaggerChild>
          <path d="M740,700 Q870,480 1000,700" fill="#2A1A0F" />
        </StaggerChild>
        <StaggerChild>
          <path d="M920,700 Q1050,510 1180,700" fill="#2A1A0F" />
        </StaggerChild>
        <StaggerChild>
          <path d="M1100,700 Q1220,540 1340,700" fill="#2A1A0F" />
        </StaggerChild>
        <StaggerChild>
          <path d="M1260,700 Q1400,560 1540,700" fill="#2A1A0F" />
        </StaggerChild>
      </StaggerGroup>

      {/* Ground line */}
      <DrawPath d="M100,700 H1820" stroke="#C65D3E" strokeWidth={2} delay={0.3} />

      {/* She-wolf — large central figure */}
      <FadeShape delay={0.8}>
        <g transform="translate(860, 500)">
          {/* Wolf body */}
          <DrawPath
            d="M-120,20 Q-100,-30 -60,-40 Q-20,-48 20,-40 Q60,-30 100,-10 Q120,0 130,20 Q135,35 120,45 Q100,55 80,50"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.8}
            duration={1.5}
          />
          {/* Wolf head */}
          <DrawPath
            d="M-120,20 Q-140,5 -155,-10 Q-165,-25 -155,-40 Q-148,-50 -140,-45 Q-135,-30 -130,-20 Q-125,-15 -120,20"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={1.0}
            duration={1}
          />
          {/* Wolf ears */}
          <DrawPath
            d="M-150,-35 L-160,-55 L-145,-40"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={1.2}
          />
          <DrawPath
            d="M-140,-38 L-148,-58 L-133,-42"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={1.3}
          />
          {/* Wolf legs */}
          <DrawPath d="M-80,50 L-85,100" stroke="#C65D3E" strokeWidth={3} delay={1.1} />
          <DrawPath d="M-40,50 L-38,100" stroke="#C65D3E" strokeWidth={3} delay={1.15} />
          <DrawPath d="M40,50 L42,100" stroke="#C65D3E" strokeWidth={3} delay={1.2} />
          <DrawPath d="M90,50 L95,100" stroke="#C65D3E" strokeWidth={3} delay={1.25} />
          {/* Wolf tail */}
          <DrawPath
            d="M130,20 Q150,0 160,-20 Q165,-35 155,-30"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={1.3}
          />
        </g>
      </FadeShape>

      {/* Twin figures (Romulus & Remus) beneath wolf */}
      <FadeShape delay={1.5}>
        <g transform="translate(860, 580)">
          {/* Twin 1 */}
          <ellipse cx="-25" cy="0" rx="15" ry="20" fill="#C65D3E" opacity="0.8" />
          {/* Twin 2 */}
          <ellipse cx="25" cy="0" rx="15" ry="20" fill="#C65D3E" opacity="0.8" />
        </g>
      </FadeShape>

      {/* River Tiber flowing line */}
      <DrawPath
        d="M0,780 Q300,760 500,790 Q700,820 960,780 Q1200,740 1500,770 Q1700,790 1920,760"
        stroke="#D4845A"
        strokeWidth={2}
        delay={1.8}
        duration={1.5}
      />
      <DrawPath
        d="M0,800 Q300,780 500,810 Q700,840 960,800 Q1200,760 1500,790 Q1700,810 1920,780"
        stroke="#D4845A"
        strokeWidth={1}
        delay={2.0}
        duration={1.5}
      />
    </PotteryScene>
  );
}
