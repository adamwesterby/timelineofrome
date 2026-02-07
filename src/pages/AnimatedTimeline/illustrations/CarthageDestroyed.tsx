import { PotteryScene, DrawPath, FadeShape, Flame } from './shared';

export function CarthageDestroyed() {
  return (
    <PotteryScene>
      {/* Harbor water */}
      <FadeShape delay={0.2}>
        <DrawPath
          d="M0,700 Q200,680 400,710 Q600,740 800,700 Q1000,660 1200,700 Q1400,740 1600,700 Q1800,660 1920,700"
          stroke="#D4845A"
          strokeWidth={1.5}
          delay={0.2}
          duration={1.5}
        />
        <DrawPath
          d="M0,730 Q300,710 600,740 Q900,770 1200,730 Q1500,690 1920,730"
          stroke="#D4845A"
          strokeWidth={1}
          delay={0.4}
          duration={1.5}
        />
      </FadeShape>

      {/* City walls — crumbling */}
      <FadeShape delay={0.5}>
        <g transform="translate(960, 400)">
          {/* Main wall */}
          <DrawPath
            d="M-400,150 L-380,0 L-300,-30 L-200,-20 L-100,-40 L0,-30 L100,-40 L200,-20 L300,-30 L380,0 L400,150"
            stroke="#C65D3E"
            strokeWidth={4}
            delay={0.5}
            duration={1.5}
          />
          {/* Crumbling sections */}
          <DrawPath d="M-200,-20 L-190,-50 L-180,-15" stroke="#C65D3E" strokeWidth={2} delay={1.0} />
          <DrawPath d="M50,-35 L60,-65 L70,-30" stroke="#C65D3E" strokeWidth={2} delay={1.1} />
          {/* Gate */}
          <DrawPath
            d="M-30,150 L-30,80 Q0,60 30,80 L30,150"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={0.8}
          />
          {/* Tower left */}
          <DrawPath
            d="M-350,0 L-360,-80 L-320,-80 L-330,0"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={0.7}
          />
          {/* Tower right */}
          <DrawPath
            d="M330,0 L320,-80 L360,-80 L350,0"
            stroke="#C65D3E"
            strokeWidth={3}
            delay={0.75}
          />
        </g>
      </FadeShape>

      {/* Flames consuming the city */}
      <Flame cx={750} cy={330} scale={2} delay={1.5} />
      <Flame cx={880} cy={300} scale={2.5} delay={1.7} />
      <Flame cx={960} cy={280} scale={3} delay={1.4} />
      <Flame cx={1050} cy={310} scale={2.2} delay={1.8} />
      <Flame cx={1160} cy={340} scale={1.8} delay={1.6} />
      <Flame cx={820} cy={350} scale={1.5} delay={2.0} />
      <Flame cx={1100} cy={320} scale={2} delay={1.9} />

      {/* Smoke rising */}
      {[0, 1, 2, 3].map((i) => (
        <DrawPath
          key={i}
          d={`M${800 + i * 100},${280 - i * 20} Q${810 + i * 100},${200 - i * 20} ${830 + i * 100},${120 - i * 15}`}
          stroke="#C65D3E"
          strokeWidth={1}
          delay={2.0 + i * 0.2}
          duration={1.5}
        />
      ))}

      {/* Small ship silhouette in harbor */}
      <FadeShape delay={2.0}>
        <g transform="translate(400, 680)" opacity="0.5">
          <DrawPath d="M-40,0 Q0,-20 40,0" stroke="#C65D3E" strokeWidth={2} delay={2.0} />
          <DrawPath d="M0,0 V-40" stroke="#C65D3E" strokeWidth={2} delay={2.1} />
          <DrawPath d="M0,-40 L20,-20" stroke="#C65D3E" strokeWidth={1} delay={2.2} />
        </g>
      </FadeShape>

      {/* Ground line */}
      <DrawPath d="M500,550 H1420" stroke="#C65D3E" strokeWidth={2} delay={0.3} />
    </PotteryScene>
  );
}
