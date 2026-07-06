import React from 'react';
import { motion } from 'framer-motion';

/* ── Large feather — fills a big area, visible and elegant ── */
export function LargeFeather({ className = '', flip = false, opacity = 0.15, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 200 500" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M100,10 Q90,80 95,180 Q98,280 100,380 Q101,440 100,490" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M100,50 Q50,80 30,130 Q20,170 40,190 Q65,200 95,170" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M100,100 Q55,125 40,165 Q32,200 55,215 Q78,218 97,195" stroke={color} strokeWidth="1" fill="none" />
        <path d="M100,160 Q60,185 50,220 Q45,250 65,260 Q82,258 98,240" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M100,220 Q70,245 62,275 Q58,300 75,308 Q88,305 99,288" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M100,50 Q150,75 168,125 Q178,165 158,185 Q135,195 105,170" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M100,100 Q145,122 158,160 Q165,195 145,210 Q125,215 103,195" stroke={color} strokeWidth="1" fill="none" />
        <path d="M100,160 Q140,180 150,215 Q155,245 138,258 Q120,260 102,240" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M100,220 Q130,240 138,270 Q142,295 128,305 Q115,305 101,288" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M100,280 Q80,300 75,325 Q72,345 85,350 Q95,348 100,335" stroke={color} strokeWidth="0.5" fill="none" />
        <path d="M100,280 Q120,298 125,322 Q128,342 115,348 Q105,347 101,335" stroke={color} strokeWidth="0.5" fill="none" />
      </svg>
    </motion.div>
  );
}

/* ── Large pyramid — transparent background shape ── */
export function LargePyramid({ className = '', opacity = 0.1, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 400 400" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M200,20 L370,350 L30,350 Z" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M200,20 L200,350" stroke={color} strokeWidth="0.6" opacity="0.4" />
        <path d="M200,80 L320,300 L80,300 Z" stroke="#1e3a5f" strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M200,140 L270,260 L130,260 Z" stroke={color} strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="200" cy="180" r="4" fill={color} opacity="0.35" />
        <circle cx="200" cy="350" r="3" fill={color} opacity="0.2" />
        <circle cx="30" cy="350" r="3" fill={color} opacity="0.2" />
        <circle cx="370" cy="350" r="3" fill={color} opacity="0.2" />
        {/* Eye of pyramid */}
        <circle cx="200" cy="140" r="12" stroke={color} strokeWidth="0.6" fill="none" opacity="0.2" />
      </svg>
    </motion.div>
  );
}

/* ── Ink splash — organic watercolor effect ── */
export function InkSplash({ className = '', color = 'rgba(201,168,76,0.08)', size = 500 }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <filter id={`ink-${size}`}>
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <ellipse cx="200" cy="180" rx="160" ry="130" fill={color} filter={`url(#ink-${size})`} />
        <ellipse cx="150" cy="230" rx="100" ry="90" fill={color} filter={`url(#ink-${size})`} />
        <ellipse cx="270" cy="200" rx="80" ry="100" fill={color} filter={`url(#ink-${size})`} />
      </svg>
    </div>
  );
}

/* ── Peach watercolor wash — big, warm, visible ── */
export function PeachWash({ className = '', size = 600, opacity = 0.12 }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size * 0.7 }}>
      <svg viewBox="0 0 600 420" className="w-full h-full" style={{ opacity }}>
        <defs>
          <filter id={`peach-${size}`}>
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>
        <ellipse cx="300" cy="200" rx="260" ry="170" fill="rgba(230,185,140,0.5)" filter={`url(#peach-${size})`} />
        <ellipse cx="200" cy="250" rx="180" ry="120" fill="rgba(240,200,160,0.4)" filter={`url(#peach-${size})`} />
        <ellipse cx="400" cy="180" rx="150" ry="130" fill="rgba(220,175,130,0.3)" filter={`url(#peach-${size})`} />
      </svg>
    </div>
  );
}

/* ── Gold star constellation — larger, more visible ── */
export function StarConstellation({ className = '', opacity = 0.25 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.3 }}
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" style={{ opacity }}>
        {[
          { x: 20, y: 30, s: 6 }, { x: 60, y: 15, s: 5 }, { x: 120, y: 40, s: 8 },
          { x: 170, y: 20, s: 4 }, { x: 40, y: 80, s: 5 }, { x: 100, y: 70, s: 7 },
          { x: 160, y: 85, s: 5 }, { x: 30, y: 140, s: 6 }, { x: 80, y: 130, s: 4 },
          { x: 140, y: 150, s: 6 }, { x: 180, y: 130, s: 5 }, { x: 60, y: 170, s: 4 },
          { x: 130, y: 180, s: 5 },
        ].map((st, i) => (
          <g key={i} transform={`translate(${st.x},${st.y})`}>
            <path d={`M0,${-st.s} L${st.s*0.35},${-st.s*0.35} L${st.s},0 L${st.s*0.35},${st.s*0.35} L0,${st.s} L${-st.s*0.35},${st.s*0.35} L${-st.s},0 L${-st.s*0.35},${-st.s*0.35} Z`} fill="#c9a84c" />
          </g>
        ))}
        {/* Connecting gold lines between some stars */}
        <line x1="60" y1="15" x2="120" y2="40" stroke="#c9a84c" strokeWidth="0.3" opacity="0.4" />
        <line x1="120" y1="40" x2="100" y2="70" stroke="#c9a84c" strokeWidth="0.3" opacity="0.4" />
        <line x1="100" y1="70" x2="140" y2="150" stroke="#c9a84c" strokeWidth="0.3" opacity="0.3" />
        <line x1="40" y1="80" x2="80" y2="130" stroke="#c9a84c" strokeWidth="0.3" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

/* ── Decorative wave band — wide, elegant separator ── */
export function WaveBand({ className = '', opacity = 0.15, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none left-0 right-0 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <svg viewBox="0 0 1200 60" fill="none" className="w-full" style={{ opacity }} preserveAspectRatio="none">
        <path d="M0,30 C100,10 200,50 300,30 C400,10 500,50 600,30 C700,10 800,50 900,30 C1000,10 1100,50 1200,30" stroke={color} strokeWidth="1" fill="none" />
        <path d="M0,35 C150,15 300,55 450,35 C600,15 750,55 900,35 C1050,15 1150,45 1200,35" stroke={color} strokeWidth="0.5" fill="none" opacity="0.5" />
      </svg>
    </motion.div>
  );
}

/* ── Gold dot grid — structured, visible ── */
export function GoldDotGrid({ className = '', rows = 5, cols = 8, opacity = 0.2 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <svg viewBox={`0 0 ${cols * 16} ${rows * 16}`} fill="none" className="w-full h-full" style={{ opacity }}>
        {Array.from({ length: rows * cols }, (_, i) => {
          const x = (i % cols) * 16 + 8;
          const y = Math.floor(i / cols) * 16 + 8;
          return <circle key={i} cx={x} cy={y} r="1.5" fill="#c9a84c" />;
        })}
      </svg>
    </motion.div>
  );
}

/* ── Paper texture — now more visible (opacity 0.06) ── */
export function PaperTexture({ id = 'pt' }) {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
      <svg width="100%" height="100%">
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}