import React from 'react';
import { motion } from 'framer-motion';

/* ── Feather outline (elegant, thin stroke) ── */
export function FeatherOutline({ className = '', style = {}, opacity = 0.08, color = '#c9a84c', flip = false }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ ...style, transform: flip ? 'scaleX(-1)' : undefined }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 120 300" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M60,10 Q50,60 55,120 Q58,180 60,240 Q61,270 60,290" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M60,40 Q30,60 20,90 Q15,110 25,120 Q40,125 55,110" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M60,70 Q35,85 28,105 Q25,120 35,128 Q48,130 58,118" stroke={color} strokeWidth="0.6" fill="none" />
        <path d="M60,100 Q40,115 35,135 Q33,148 42,152 Q52,150 58,140" stroke={color} strokeWidth="0.5" fill="none" />
        <path d="M60,40 Q90,55 98,85 Q102,105 92,115 Q78,118 62,105" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M60,70 Q85,82 92,100 Q96,115 88,122 Q76,125 63,115" stroke={color} strokeWidth="0.6" fill="none" />
        <path d="M60,100 Q82,112 86,130 Q88,142 80,148 Q70,148 62,138" stroke={color} strokeWidth="0.5" fill="none" />
        <path d="M60,130 Q45,145 42,162 Q40,175 48,178 Q56,176 60,165" stroke={color} strokeWidth="0.4" fill="none" />
        <path d="M60,130 Q75,142 78,158 Q80,170 73,175 Q66,174 62,163" stroke={color} strokeWidth="0.4" fill="none" />
      </svg>
    </motion.div>
  );
}

/* ── Small feather fragment (partial, decorative) ── */
export function FeatherFragment({ className = '', style = {}, opacity = 0.1, rotate = 0 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ ...style, transform: `rotate(${rotate}deg)` }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 80 120" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M40,5 Q38,30 39,55 Q40,80 40,100" stroke="#c9a84c" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M40,15 Q25,25 20,40 Q18,50 25,54 Q34,52 39,42" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
        <path d="M40,15 Q55,24 58,38 Q60,48 54,52 Q46,51 41,42" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
        <path d="M40,40 Q28,48 26,60 Q25,68 30,70 Q37,68 40,60" stroke="#c9a84c" strokeWidth="0.4" fill="none" />
        <path d="M40,40 Q52,47 54,58 Q55,66 50,69 Q44,68 41,60" stroke="#c9a84c" strokeWidth="0.4" fill="none" />
      </svg>
    </motion.div>
  );
}

/* ── Pyramid outline (thin, geometric) ── */
export function PyramidOutline({ className = '', style = {}, opacity = 0.06, size = 200 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ ...style, width: size, height: size }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M100,15 L175,170 L25,170 Z" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
        <path d="M100,15 L100,170" stroke="#c9a84c" strokeWidth="0.4" opacity="0.5" />
        <path d="M100,50 L145,145 L55,145 Z" stroke="#1e3a5f" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="100" cy="95" r="2" fill="#c9a84c" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

/* ── Gold stars cluster ── */
export function GoldStars({ className = '', style = {}, opacity = 0.15 }) {
  const stars = [
    { x: 10, y: 20, s: 4 }, { x: 45, y: 8, s: 3 }, { x: 75, y: 30, s: 5 },
    { x: 25, y: 55, s: 3 }, { x: 60, y: 50, s: 4 }, { x: 90, y: 15, s: 3 },
    { x: 40, y: 75, s: 3 }, { x: 80, y: 65, s: 4 },
  ];
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.3 }}
    >
      <svg viewBox="0 0 100 80" fill="none" className="w-full h-full" style={{ opacity }}>
        {stars.map((st, i) => (
          <g key={i} transform={`translate(${st.x},${st.y})`}>
            <path
              d={`M0,${-st.s} L${st.s * 0.3},${-st.s * 0.3} L${st.s},0 L${st.s * 0.3},${st.s * 0.3} L0,${st.s} L${-st.s * 0.3},${st.s * 0.3} L${-st.s},0 L${-st.s * 0.3},${-st.s * 0.3} Z`}
              fill="#c9a84c"
            />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

/* ── Gold dots scattered ── */
export function GoldDots({ className = '', style = {}, opacity = 0.12, count = 12 }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    x: 5 + (i * 37 + i * i * 7) % 90,
    y: 8 + (i * 23 + i * i * 11) % 84,
    r: 1.2 + (i % 3) * 0.6,
  }));
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" style={{ opacity }}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#c9a84c" />
        ))}
      </svg>
    </motion.div>
  );
}

/* ── Decorative wave line ── */
export function WaveLine({ className = '', style = {}, opacity = 0.1, color = '#c9a84c' }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={style}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 400 30" fill="none" className="w-full h-full" style={{ opacity }} preserveAspectRatio="none">
        <path d="M0,15 C50,5 100,25 150,15 C200,5 250,25 300,15 C350,5 380,20 400,15" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

/* ── Decorative gold horizontal line with dots at ends ── */
export function GoldLineDecorative({ className = '', style = {}, opacity = 0.15 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={style}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 200 10" fill="none" className="w-full h-full" style={{ opacity }}>
        <circle cx="4" cy="5" r="2" fill="#c9a84c" />
        <line x1="8" y1="5" x2="192" y2="5" stroke="#c9a84c" strokeWidth="0.6" />
        <circle cx="196" cy="5" r="2" fill="#c9a84c" />
      </svg>
    </motion.div>
  );
}

/* ── Watercolor peach / warm blush patch ── */
export function WatercolorPatch({ className = '', style = {}, color = 'rgba(230,180,140,0.06)', size = 300 }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ ...style, width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <filter id={`wcPatch-${size}`}>
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>
        <ellipse cx="100" cy="100" rx="80" ry="70" fill={color} filter={`url(#wcPatch-${size})`} />
        <ellipse cx="80" cy="110" rx="50" ry="45" fill={color} filter={`url(#wcPatch-${size})`} />
      </svg>
    </div>
  );
}