import React from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   REALISTIC WATERCOLOR BRUSH STROKES
   Uses feTurbulence + feDisplacementMap for organic, hand-painted edges
   ═══════════════════════════════════════════════════════════════ */

/* ── Watercolor Brush Stroke — organic shape with rough edges ── */
export function WatercolorBrush({ className = '', color = '#e6c88c', opacity = 0.35, size = 700, id = 'wcb' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size * 0.65 }}>
      <svg viewBox="0 0 800 520" className="w-full h-full" style={{ opacity }}>
        <defs>
          <filter id={`wc-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" seed={42} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="12" result="blurred" />
          </filter>
        </defs>
        {/* Main wash — large organic blob */}
        <ellipse cx="400" cy="260" rx="340" ry="200" fill={color} filter={`url(#wc-${id})`} />
        {/* Secondary bloom */}
        <ellipse cx="280" cy="300" rx="200" ry="150" fill={color} filter={`url(#wc-${id})`} opacity="0.7" />
        {/* Third layer — adds depth variation */}
        <ellipse cx="520" cy="230" rx="180" ry="130" fill={color} filter={`url(#wc-${id})`} opacity="0.5" />
      </svg>
    </div>
  );
}

/* ── Peach/Gold Wash — warm tones, organic edges ── */
export function PeachWash({ className = '', size = 800, opacity = 0.32, id = 'pw' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size * 0.7 }}>
      <svg viewBox="0 0 900 630" className="w-full h-full" style={{ opacity }}>
        <defs>
          <filter id={`peach-${id}`} x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="5" seed={17} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="55" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="15" />
          </filter>
        </defs>
        <ellipse cx="450" cy="310" rx="380" ry="240" fill="#e8c89a" filter={`url(#peach-${id})`} />
        <ellipse cx="300" cy="360" rx="250" ry="170" fill="#ecd4ad" filter={`url(#peach-${id})`} opacity="0.6" />
        <ellipse cx="600" cy="270" rx="220" ry="180" fill="#deb87a" filter={`url(#peach-${id})`} opacity="0.4" />
        <ellipse cx="450" cy="200" rx="160" ry="100" fill="#f0dbb8" filter={`url(#peach-${id})`} opacity="0.3" />
      </svg>
    </div>
  );
}

/* ── Rosy Blush Wash — subtle pink ── */
export function RosyWash({ className = '', size = 600, opacity = 0.25, id = 'rw' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size * 0.6 }}>
      <svg viewBox="0 0 700 420" className="w-full h-full" style={{ opacity }}>
        <defs>
          <filter id={`rosy-${id}`} x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" seed={29} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <ellipse cx="350" cy="210" rx="300" ry="170" fill="#e8c0b0" filter={`url(#rosy-${id})`} />
        <ellipse cx="250" cy="260" rx="180" ry="120" fill="#dbb5a8" filter={`url(#rosy-${id})`} opacity="0.6" />
        <ellipse cx="480" cy="190" rx="150" ry="120" fill="#e5c8bc" filter={`url(#rosy-${id})`} opacity="0.4" />
      </svg>
    </div>
  );
}

/* ── Gold Ink Splash — concentrated ink drops ── */
export function GoldInkSplash({ className = '', size = 500, opacity = 0.3, id = 'gi' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 500 500" className="w-full h-full" style={{ opacity }}>
        <defs>
          <filter id={`ink-${id}`} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="5" seed={53} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <circle cx="250" cy="250" r="130" fill="#c9a84c" filter={`url(#ink-${id})`} />
        <circle cx="180" cy="280" r="80" fill="#d4b65e" filter={`url(#ink-${id})`} opacity="0.6" />
        <circle cx="320" cy="200" r="70" fill="#c9a84c" filter={`url(#ink-${id})`} opacity="0.5" />
        <circle cx="260" cy="340" r="50" fill="#b89640" filter={`url(#ink-${id})`} opacity="0.4" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATHERS — Multiple variants for variety
   ═══════════════════════════════════════════════════════════════ */

/* ── Large feather — full elegant quill ── */
export function LargeFeather({ className = '', flip = false, opacity = 0.3, color = '#c9a84c' }) {
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
        <path d="M100,10 Q90,80 95,180 Q98,280 100,380 Q101,440 100,490" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M100,50 Q50,80 30,130 Q20,170 40,190 Q65,200 95,170" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M100,100 Q55,125 40,165 Q32,200 55,215 Q78,218 97,195" stroke={color} strokeWidth="1.3" fill="none" />
        <path d="M100,160 Q60,185 50,220 Q45,250 65,260 Q82,258 98,240" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M100,220 Q70,245 62,275 Q58,300 75,308 Q88,305 99,288" stroke={color} strokeWidth="1" fill="none" />
        <path d="M100,50 Q150,75 168,125 Q178,165 158,185 Q135,195 105,170" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M100,100 Q145,122 158,160 Q165,195 145,210 Q125,215 103,195" stroke={color} strokeWidth="1.3" fill="none" />
        <path d="M100,160 Q140,180 150,215 Q155,245 138,258 Q120,260 102,240" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M100,220 Q130,240 138,270 Q142,295 128,305 Q115,305 101,288" stroke={color} strokeWidth="1" fill="none" />
        <path d="M100,280 Q80,300 75,325 Q72,345 85,350 Q95,348 100,335" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M100,280 Q120,298 125,322 Q128,342 115,348 Q105,347 101,335" stroke={color} strokeWidth="0.8" fill="none" />
      </svg>
    </motion.div>
  );
}

/* ── Small feather — delicate, for variety ── */
export function SmallFeather({ className = '', opacity = 0.28, rotate = 0, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 100 250" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M50,5 Q48,50 49,100 Q50,160 50,220" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <path d="M50,25 Q30,40 22,60 Q18,75 28,82 Q40,80 49,68" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M50,25 Q70,38 76,56 Q80,70 72,78 Q62,77 51,66" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M50,65 Q34,78 28,95 Q25,108 34,114 Q44,112 50,100" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M50,65 Q66,76 72,92 Q75,104 68,110 Q58,109 51,98" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M50,110 Q38,122 35,138 Q34,148 40,152 Q48,150 50,140" stroke={color} strokeWidth="0.6" fill="none" />
        <path d="M50,110 Q62,120 65,136 Q66,146 60,150 Q53,149 51,140" stroke={color} strokeWidth="0.6" fill="none" />
      </svg>
    </motion.div>
  );
}

/* ── Feather outline — lighter stroke, ghostly ── */
export function FeatherOutline({ className = '', opacity = 0.2, flip = false, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 160 400" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M80,8 Q75,60 78,140 Q79,220 80,310 Q80,360 80,390" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="6 3" />
        <path d="M80,40 Q45,60 30,100 Q22,130 38,148 Q55,155 77,130" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M80,40 Q115,55 128,95 Q136,125 120,142 Q105,150 82,128" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M80,100 Q50,120 42,150 Q38,175 52,185 Q66,183 79,165" stroke={color} strokeWidth="0.6" fill="none" />
        <path d="M80,100 Q110,118 118,145 Q122,168 108,180 Q96,180 81,162" stroke={color} strokeWidth="0.6" fill="none" />
        <path d="M80,170 Q58,188 52,215 Q49,235 62,242 Q73,240 80,225" stroke={color} strokeWidth="0.5" fill="none" />
        <path d="M80,170 Q102,186 108,210 Q112,230 100,238 Q90,237 81,222" stroke={color} strokeWidth="0.5" fill="none" />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PYRAMIDS
   ═══════════════════════════════════════════════════════════════ */

export function LargePyramid({ className = '', opacity = 0.18, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 400 400" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M200,20 L370,350 L30,350 Z" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M200,20 L200,350" stroke={color} strokeWidth="0.8" opacity="0.5" />
        <path d="M200,80 L320,300 L80,300 Z" stroke="#1e3a5f" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M200,140 L270,260 L130,260 Z" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4" />
        <circle cx="200" cy="180" r="5" fill={color} opacity="0.4" />
        <circle cx="200" cy="350" r="4" fill={color} opacity="0.3" />
        <circle cx="30" cy="350" r="4" fill={color} opacity="0.3" />
        <circle cx="370" cy="350" r="4" fill={color} opacity="0.3" />
        <circle cx="200" cy="140" r="14" stroke={color} strokeWidth="0.8" fill="none" opacity="0.25" />
        {/* Rays from eye */}
        <line x1="186" y1="140" x2="170" y2="140" stroke={color} strokeWidth="0.4" opacity="0.2" />
        <line x1="214" y1="140" x2="230" y2="140" stroke={color} strokeWidth="0.4" opacity="0.2" />
        <line x1="200" y1="126" x2="200" y2="110" stroke={color} strokeWidth="0.4" opacity="0.2" />
      </svg>
    </motion.div>
  );
}

/* ── Pyramid silhouette — filled, ghostly ── */
export function PyramidSilhouette({ className = '', opacity = 0.06, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <svg viewBox="0 0 400 350" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M200,10 L380,340 L20,340 Z" fill={color} />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GOLD DECORATIVE ELEMENTS
   ═══════════════════════════════════════════════════════════════ */

export function StarConstellation({ className = '', opacity = 0.4 }) {
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
          { x: 20, y: 30, s: 7 }, { x: 60, y: 15, s: 6 }, { x: 120, y: 40, s: 9 },
          { x: 170, y: 20, s: 5 }, { x: 40, y: 80, s: 6 }, { x: 100, y: 70, s: 8 },
          { x: 160, y: 85, s: 6 }, { x: 30, y: 140, s: 7 }, { x: 80, y: 130, s: 5 },
          { x: 140, y: 150, s: 7 }, { x: 180, y: 130, s: 6 }, { x: 60, y: 170, s: 5 },
          { x: 130, y: 180, s: 6 },
        ].map((st, i) => (
          <g key={i} transform={`translate(${st.x},${st.y})`}>
            <path d={`M0,${-st.s} L${st.s*0.35},${-st.s*0.35} L${st.s},0 L${st.s*0.35},${st.s*0.35} L0,${st.s} L${-st.s*0.35},${st.s*0.35} L${-st.s},0 L${-st.s*0.35},${-st.s*0.35} Z`} fill="#c9a84c" />
          </g>
        ))}
        <line x1="60" y1="15" x2="120" y2="40" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
        <line x1="120" y1="40" x2="100" y2="70" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
        <line x1="100" y1="70" x2="140" y2="150" stroke="#c9a84c" strokeWidth="0.4" opacity="0.4" />
        <line x1="40" y1="80" x2="80" y2="130" stroke="#c9a84c" strokeWidth="0.4" opacity="0.4" />
        <line x1="30" y1="140" x2="60" y2="170" stroke="#c9a84c" strokeWidth="0.3" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

export function GoldDotGrid({ className = '', rows = 6, cols = 10, opacity = 0.35 }) {
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
          return <circle key={i} cx={x} cy={y} r="2" fill="#c9a84c" />;
        })}
      </svg>
    </motion.div>
  );
}

export function WaveBand({ className = '', opacity = 0.25, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none left-0 right-0 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <svg viewBox="0 0 1200 60" fill="none" className="w-full" style={{ opacity }} preserveAspectRatio="none">
        <path d="M0,30 C100,10 200,50 300,30 C400,10 500,50 600,30 C700,10 800,50 900,30 C1000,10 1100,50 1200,30" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M0,35 C150,15 300,55 450,35 C600,15 750,55 900,35 C1050,15 1150,45 1200,35" stroke={color} strokeWidth="0.7" fill="none" opacity="0.6" />
      </svg>
    </motion.div>
  );
}

/* ── Decorative curly arc — golden scrollwork ── */
export function GoldCurl({ className = '', opacity = 0.25, flip = false }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <svg viewBox="0 0 200 120" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M10,100 Q10,20 60,20 Q100,20 100,50 Q100,80 70,80 Q45,80 45,55 Q45,35 65,35" stroke="#c9a84c" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <path d="M100,50 Q130,15 170,30 Q195,40 190,70 Q185,95 160,95 Q140,95 140,75 Q140,58 158,55" stroke="#c9a84c" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <circle cx="10" cy="100" r="2.5" fill="#c9a84c" opacity="0.5" />
        <circle cx="65" cy="35" r="2" fill="#c9a84c" opacity="0.4" />
        <circle cx="158" cy="55" r="2" fill="#c9a84c" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAPER TEXTURE — more visible
   ═══════════════════════════════════════════════════════════════ */

export function PaperTexture({ id = 'pt' }) {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.12] z-0">
      <svg width="100%" height="100%">
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}