import { motion } from 'framer-motion';
import { PotteryScene, DrawPath, FadeShape } from './shared';

export function FallWesternEmpire() {
  return (
    <PotteryScene>
      {/* Setting sun — large circle sinking below horizon */}
      <FadeShape delay={0.3}>
        <motion.circle
          cx="960"
          cy="600"
          r="200"
          fill="none"
          stroke="#B8860B"
          strokeWidth={3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.circle
          cx="960"
          cy="600"
          r="180"
          fill="#B8860B"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        {/* Sun rays */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = ((i * 30) - 90) * Math.PI / 180;
          // Only upper rays (above horizon)
          if (Math.sin(angle) > 0.1) return null;
          const x1 = 960 + Math.cos(angle) * 210;
          const y1 = 600 + Math.sin(angle) * 210;
          const x2 = 960 + Math.cos(angle) * 260;
          const y2 = 600 + Math.sin(angle) * 260;
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#B8860B"
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, delay: 1 + i * 0.1, repeat: Infinity }}
            />
          );
        })}
      </FadeShape>

      {/* Horizon line */}
      <DrawPath d="M0,600 H1920" stroke="#C65D3E" strokeWidth={2} delay={0.2} />

      {/* Crown being handed down — central scene */}
      <FadeShape delay={0.8}>
        {/* Standing figure (Odoacer) — receiving */}
        <g transform="translate(1060, 340)">
          <circle cx="0" cy="-40" r="15" fill="#C65D3E" />
          {/* Body */}
          <path d="M-20,-22 L-22,80 L22,80 L20,-22Z" fill="#C65D3E" />
          {/* Arms reaching up for crown */}
          <DrawPath d="M-20,-5 L-50,-35" stroke="#C65D3E" strokeWidth={4} delay={1.0} />
          <DrawPath d="M20,-5 L-10,-40" stroke="#C65D3E" strokeWidth={4} delay={1.05} />
          {/* Legs */}
          <line x1="-8" y1="80" x2="-12" y2="170" stroke="#C65D3E" strokeWidth={4} />
          <line x1="8" y1="80" x2="12" y2="170" stroke="#C65D3E" strokeWidth={4} />
        </g>
      </FadeShape>

      <FadeShape delay={0.7}>
        {/* Young boy figure (Romulus Augustulus) — handing down crown */}
        <g transform="translate(860, 380)">
          <circle cx="0" cy="-30" r="12" fill="#C65D3E" />
          {/* Smaller body (young emperor) */}
          <path d="M-14,-16 L-16,55 L16,55 L14,-16Z" fill="#C65D3E" />
          {/* Arm extending crown */}
          <DrawPath d="M14,-5 L50,-25" stroke="#C65D3E" strokeWidth={3} delay={0.9} />
          {/* Legs */}
          <line x1="-6" y1="55" x2="-10" y2="130" stroke="#C65D3E" strokeWidth={3} />
          <line x1="6" y1="55" x2="10" y2="130" stroke="#C65D3E" strokeWidth={3} />
        </g>
      </FadeShape>

      {/* Crown — being passed between them */}
      <FadeShape delay={1.3}>
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <DrawPath
            d="M920,320 L930,295 L945,310 L960,288 L975,310 L990,295 L1000,320Z"
            stroke="#B8860B"
            strokeWidth={3}
            fill="none"
            delay={1.3}
            duration={1}
          />
          <DrawPath d="M920,320 H1000" stroke="#B8860B" strokeWidth={2} delay={1.5} />
        </motion.g>
      </FadeShape>

      {/* Crumbling column fragments on ground */}
      <FadeShape delay={1.8}>
        <g opacity="0.4">
          {/* Broken column left */}
          <DrawPath d="M400,500 V600" stroke="#C65D3E" strokeWidth={5} delay={1.8} />
          <DrawPath d="M392,500 H408" stroke="#C65D3E" strokeWidth={4} delay={1.85} />
          {/* Fallen capital */}
          <DrawPath d="M420,590 Q430,580 440,590" stroke="#C65D3E" strokeWidth={3} delay={1.9} />
          {/* Broken column right */}
          <DrawPath d="M1500,530 V600" stroke="#C65D3E" strokeWidth={5} delay={1.85} />
          <DrawPath d="M1492,530 H1508" stroke="#C65D3E" strokeWidth={4} delay={1.9} />
        </g>
      </FadeShape>

      {/* Fading SPQR */}
      <motion.text
        x="960"
        y="180"
        textAnchor="middle"
        fontFamily="Cinzel, serif"
        fontSize="60"
        fill="#C65D3E"
        letterSpacing="0.3em"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        SPQR
      </motion.text>
    </PotteryScene>
  );
}
