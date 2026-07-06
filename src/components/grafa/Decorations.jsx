import React from 'react';
import { motion } from 'framer-motion';

const GOLD = '#c9a84c';
const ROSE = '#c4868a';

/* ═══════════════════════════════════════════════════════════════
   FEATHER ILLUSTRATIONS — 9 unique variants, gold + rose palette
   ═══════════════════════════════════════════════════════════════ */

/* 1. Full feather — elegant quill with fine barbs, flowing calligraphy style */
export function FullFeather({ className = '', flip = false, opacity = 0.3, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.8 }}>
      <svg viewBox="0 0 200 500" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Central shaft — tapered, organic line */}
        <path d="M100,8 Q96,60 97,140 Q99,250 100,360 Q100.5,420 100,492" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        {/* Left barbs — sweeping curves */}
        <path d="M100,45 Q55,72 35,115 Q22,155 40,178 Q62,192 96,162" stroke={color} strokeWidth="1.4" fill="none" />
        <path d="M99,95 Q58,118 42,158 Q33,192 54,208 Q75,214 97,190" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M99,155 Q62,178 52,215 Q46,246 65,256 Q82,254 98,235" stroke={color} strokeWidth="1" fill="none" />
        <path d="M100,218 Q72,240 64,270 Q60,296 76,304 Q88,302 99,285" stroke={color} strokeWidth="0.85" fill="none" />
        {/* Right barbs — mirrored */}
        <path d="M100,45 Q145,68 163,110 Q175,148 156,172 Q136,186 104,160" stroke={color} strokeWidth="1.4" fill="none" />
        <path d="M101,95 Q142,115 156,152 Q164,188 144,204 Q126,212 103,188" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M101,155 Q138,175 148,210 Q154,240 137,253 Q120,257 102,234" stroke={color} strokeWidth="1" fill="none" />
        <path d="M100,218 Q128,238 136,266 Q140,290 126,300 Q114,300 101,284" stroke={color} strokeWidth="0.85" fill="none" />
        {/* Wispy tip barbs */}
        <path d="M100,276 Q82,295 77,320 Q74,340 86,346 Q95,344 100,330" stroke={color} strokeWidth="0.65" fill="none" />
        <path d="M100,276 Q118,293 123,316 Q126,336 114,343 Q106,342 101,328" stroke={color} strokeWidth="0.65" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 2. Half feather — cropped bottom, impressionist brush-like strokes */
export function HalfFeather({ className = '', flip = false, opacity = 0.28, color = ROSE }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 180 280" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M90,5 Q86,35 88,95 Q89,155 90,215 Q90,248 90,275" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Broad impressionist left strokes */}
        <path d="M90,28 Q48,50 30,88 Q18,122 36,144 Q56,155 88,128" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M89,78 Q52,98 40,135 Q32,165 50,180 Q68,186 88,162" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        {/* Broad impressionist right strokes */}
        <path d="M90,28 Q132,48 148,84 Q158,118 140,140 Q122,152 92,126" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M91,78 Q128,96 140,130 Q148,162 130,176 Q114,183 92,160" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        {/* Lower wisps */}
        <path d="M90,138 Q66,156 60,182 Q56,204 68,212 Q80,210 89,195" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M90,138 Q114,154 120,178 Q124,198 112,208 Q102,207 91,192" stroke={color} strokeWidth="0.9" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 3. Feather outline — delicate dashed lines, architectural feel */
export function FeatherOutline({ className = '', flip = false, opacity = 0.22, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.8 }}>
      <svg viewBox="0 0 160 400" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M80,8 Q76,55 78,135 Q79,215 80,305 Q80,355 80,392" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="8 4" />
        <path d="M80,38 Q48,58 32,96 Q24,126 40,144 Q56,152 78,128" stroke={color} strokeWidth="0.7" fill="none" strokeDasharray="5 3" />
        <path d="M80,38 Q112,54 126,92 Q134,122 118,140 Q104,148 82,126" stroke={color} strokeWidth="0.7" fill="none" strokeDasharray="5 3" />
        <path d="M80,98 Q52,116 44,148 Q40,172 54,182 Q66,180 79,164" stroke={color} strokeWidth="0.6" fill="none" strokeDasharray="4 3" />
        <path d="M80,98 Q108,114 116,144 Q120,166 106,178 Q96,178 81,162" stroke={color} strokeWidth="0.6" fill="none" strokeDasharray="4 3" />
        <path d="M80,168 Q60,186 54,212 Q51,232 64,240 Q74,238 80,224" stroke={color} strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
        <path d="M80,168 Q100,184 106,208 Q110,228 98,236 Q88,235 81,222" stroke={color} strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
      </svg>
    </motion.div>
  );
}

/* 4. Small feather — compact, watercolor dot accents */
export function SmallFeather({ className = '', opacity = 0.26, rotate = 0, color = ROSE }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 80 200" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M40,5 Q38,38 39,78 Q40,128 40,182" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <path d="M40,18 Q25,30 19,48 Q15,62 23,70 Q34,68 39,55" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M40,18 Q55,28 61,46 Q65,58 58,66 Q48,65 41,54" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M40,52 Q28,64 25,78 Q23,90 30,95 Q38,93 40,84" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M40,52 Q52,62 55,76 Q57,88 50,93 Q43,92 41,82" stroke={color} strokeWidth="0.7" fill="none" />
        {/* Watercolor dot accents */}
        <circle cx="18" cy="48" r="4" fill={color} opacity="0.12" />
        <circle cx="62" cy="46" r="3.5" fill={color} opacity="0.1" />
        <circle cx="24" cy="80" r="3" fill={color} opacity="0.08" />
      </svg>
    </motion.div>
  );
}

/* 5. Diagonal feather — dynamic angle, bold ink strokes */
export function DiagonalFeather({ className = '', opacity = 0.25, color = GOLD, angle = -30 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${angle}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 140 350" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M70,5 Q67,48 68,118 Q69,198 70,275 Q70,318 70,345" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Bold ink-style left barbs */}
        <path d="M70,28 Q42,48 30,78 Q20,108 38,122 Q54,128 68,105" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <path d="M70,78 Q44,96 36,128 Q30,155 46,165 Q60,168 69,146" stroke={color} strokeWidth="1.1" fill="none" strokeLinecap="round" />
        {/* Bold ink-style right barbs */}
        <path d="M70,28 Q98,44 108,74 Q116,102 102,118 Q86,125 72,104" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <path d="M70,78 Q96,94 104,124 Q110,150 94,162 Q80,166 71,145" stroke={color} strokeWidth="1.1" fill="none" strokeLinecap="round" />
        {/* Tip */}
        <path d="M70,136 Q52,154 47,178 Q44,198 56,204 Q66,202 70,188" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M70,136 Q88,152 93,174 Q96,194 84,201 Q74,200 71,186" stroke={color} strokeWidth="0.8" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 6. Horizontal feather — landscape, loose gestural lines */
export function HorizontalFeather({ className = '', opacity = 0.22, color = ROSE, flip = false }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleY(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 400 120" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M8,60 Q75,56 175,58 Q275,60 355,60 Q388,60 395,60" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* Gestural upper barbs */}
        <path d="M38,60 Q56,38 88,28 Q118,20 130,34 Q136,48 116,58" stroke={color} strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M96,60 Q114,40 144,32 Q170,26 180,40 Q184,52 164,59" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M165,60 Q182,42 208,35 Q232,30 240,42 Q244,54 226,59" stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round" />
        {/* Gestural lower barbs */}
        <path d="M38,60 Q54,80 84,90 Q112,96 124,84 Q130,72 114,62" stroke={color} strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M96,60 Q112,78 140,86 Q164,90 174,80 Q180,68 162,61" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M165,60 Q180,76 206,83 Q228,86 236,76 Q240,66 222,61" stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round" />
        {/* Rose wash accent */}
        <ellipse cx="120" cy="55" rx="50" ry="25" fill={color} opacity="0.06" />
      </svg>
    </motion.div>
  );
}

/* 7. Feather tip — just the top quill point, sharp pen-nib style */
export function FeatherTip({ className = '', opacity = 0.24, color = GOLD, rotate = 0 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 100 160" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M50,3 Q48,28 49,62 Q50,98 50,152" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M50,14 Q32,26 24,44 Q19,60 28,68 Q39,67 49,52" stroke={color} strokeWidth="1.1" fill="none" />
        <path d="M50,14 Q68,24 75,42 Q80,56 72,65 Q62,64 51,51" stroke={color} strokeWidth="1.1" fill="none" />
        <path d="M50,52 Q38,62 34,78 Q32,92 40,97 Q47,95 50,86" stroke={color} strokeWidth="0.75" fill="none" />
        <path d="M50,52 Q62,61 66,76 Q68,90 60,96 Q53,94 51,84" stroke={color} strokeWidth="0.75" fill="none" />
        {/* Sharp nib accent */}
        <path d="M50,3 L48,0 M50,3 L52,0" stroke={color} strokeWidth="0.6" opacity="0.5" />
      </svg>
    </motion.div>
  );
}

/* 8. Overlapping feathers — two crossed, layered with blended tones */
export function OverlappingFeathers({ className = '', opacity = 0.2 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
      <svg viewBox="0 0 280 400" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Feather 1 — gold, slightly left-leaning */}
        <g transform="rotate(-8, 120, 200)">
          <path d="M120,10 Q116,58 117,138 Q119,218 120,308 Q120,358 120,392" stroke={GOLD} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M120,38 Q82,58 67,96 Q56,128 74,146 Q92,154 118,128" stroke={GOLD} strokeWidth="1.1" fill="none" />
          <path d="M120,98 Q88,115 78,148 Q70,176 90,188 Q106,192 118,168" stroke={GOLD} strokeWidth="0.9" fill="none" />
          <path d="M120,38 Q156,54 168,90 Q176,118 162,136 Q144,145 122,124" stroke={GOLD} strokeWidth="1.1" fill="none" />
          <path d="M120,98 Q152,112 162,144 Q168,170 150,182 Q136,186 122,166" stroke={GOLD} strokeWidth="0.9" fill="none" />
        </g>
        {/* Feather 2 — rose, right-leaning, behind */}
        <g transform="rotate(12, 160, 200)" opacity="0.7">
          <path d="M160,28 Q157,68 158,138 Q159,208 160,288 Q160,338 160,372" stroke={ROSE} strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M160,52 Q128,68 114,104 Q106,132 122,148 Q138,154 158,130" stroke={ROSE} strokeWidth="1" fill="none" />
          <path d="M160,52 Q190,66 202,98 Q208,124 194,138 Q178,145 162,126" stroke={ROSE} strokeWidth="1" fill="none" />
          <path d="M160,118 Q136,136 130,162 Q126,182 140,190 Q152,188 159,172" stroke={ROSE} strokeWidth="0.75" fill="none" />
          <path d="M160,118 Q184,134 190,158 Q194,178 180,187 Q168,186 161,170" stroke={ROSE} strokeWidth="0.75" fill="none" />
        </g>
      </svg>
    </motion.div>
  );
}

/* 9. Feather fragment — abstract barbs only, loose watercolor wisps */
export function FeatherFragment({ className = '', opacity = 0.2, color = ROSE, rotate = 0 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M60,92 Q42,72 28,52 Q18,36 24,26 Q34,18 46,32 Q56,44 60,62" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M60,92 Q44,68 32,45 Q24,30 32,22 Q42,16 52,30 Q58,42 60,58" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M60,92 Q78,70 90,50 Q100,34 94,24 Q85,18 74,30 Q65,42 60,60" stroke={color} strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M60,92 Q76,64 86,42 Q94,28 86,20 Q78,16 70,28 Q62,40 60,54" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.7" />
        {/* Watercolor bloom */}
        <circle cx="60" cy="50" r="18" fill={color} opacity="0.06" />
        <circle cx="40" cy="40" r="10" fill={color} opacity="0.05" />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PYRAMID ILLUSTRATIONS — 4 variants
   ═══════════════════════════════════════════════════════════════ */

export function PyramidOutline({ className = '', opacity = 0.2, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
      <svg viewBox="0 0 400 380" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M200,15 L375,355 L25,355 Z" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M200,15 L200,355" stroke={color} strokeWidth="0.7" opacity="0.5" />
        <path d="M200,75 L325,305 L75,305 Z" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M200,135 L275,265 L125,265 Z" stroke={color} strokeWidth="0.5" fill="none" opacity="0.35" />
        <circle cx="200" cy="150" r="12" stroke={color} strokeWidth="0.7" fill="none" opacity="0.3" />
        <circle cx="200" cy="150" r="4" fill={color} opacity="0.3" />
        <line x1="188" y1="150" x2="168" y2="150" stroke={color} strokeWidth="0.4" opacity="0.2" />
        <line x1="212" y1="150" x2="232" y2="150" stroke={color} strokeWidth="0.4" opacity="0.2" />
        <line x1="200" y1="138" x2="200" y2="118" stroke={color} strokeWidth="0.4" opacity="0.2" />
        <circle cx="25" cy="355" r="3" fill={color} opacity="0.25" />
        <circle cx="375" cy="355" r="3" fill={color} opacity="0.25" />
        <circle cx="200" cy="15" r="3" fill={color} opacity="0.25" />
      </svg>
    </motion.div>
  );
}

export function MediumPyramid({ className = '', opacity = 0.18, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M100,10 L185,185 L15,185 Z" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M100,10 L100,185" stroke={color} strokeWidth="0.5" opacity="0.4" />
        <path d="M100,55 L155,155 L45,155 Z" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4" />
        <circle cx="100" cy="80" r="3" fill={color} opacity="0.3" />
      </svg>
    </motion.div>
  );
}

export function SmallPyramid({ className = '', opacity = 0.15, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M40,5 L75,72 L5,72 Z" stroke={color} strokeWidth="1" fill="none" />
        <circle cx="40" cy="35" r="2" fill={color} opacity="0.35" />
      </svg>
    </motion.div>
  );
}

export function PyramidSilhouette({ className = '', opacity = 0.06, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
      <svg viewBox="0 0 400 350" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M200,10 L380,340 L20,340 Z" fill={color} />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GOLD + ROSE DECORATIVE — stars, dots, curves, flourishes
   ═══════════════════════════════════════════════════════════════ */

export function StarConstellation({ className = '', opacity = 0.4 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" style={{ opacity }}>
        {[{x:20,y:30,s:7,c:GOLD},{x:60,y:15,s:6,c:ROSE},{x:120,y:40,s:9,c:GOLD},{x:170,y:20,s:5,c:ROSE},{x:40,y:80,s:6,c:GOLD},{x:100,y:70,s:8,c:ROSE},{x:160,y:85,s:6,c:GOLD},{x:30,y:140,s:7,c:ROSE},{x:80,y:130,s:5,c:GOLD},{x:140,y:150,s:7,c:ROSE},{x:180,y:130,s:6,c:GOLD},{x:60,y:170,s:5,c:ROSE},{x:130,y:180,s:6,c:GOLD}].map((st,i)=>(
          <g key={i} transform={`translate(${st.x},${st.y})`}><path d={`M0,${-st.s} L${st.s*.35},${-st.s*.35} L${st.s},0 L${st.s*.35},${st.s*.35} L0,${st.s} L${-st.s*.35},${st.s*.35} L${-st.s},0 L${-st.s*.35},${-st.s*.35} Z`} fill={st.c}/></g>
        ))}
        <line x1="60" y1="15" x2="120" y2="40" stroke={GOLD} strokeWidth="0.5" opacity="0.5"/>
        <line x1="120" y1="40" x2="100" y2="70" stroke={ROSE} strokeWidth="0.5" opacity="0.4"/>
        <line x1="100" y1="70" x2="140" y2="150" stroke={GOLD} strokeWidth="0.4" opacity="0.4"/>
        <line x1="40" y1="80" x2="80" y2="130" stroke={ROSE} strokeWidth="0.4" opacity="0.35"/>
      </svg>
    </motion.div>
  );
}

export function GoldDotGrid({ className = '', rows = 6, cols = 10, opacity = 0.35 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
      <svg viewBox={`0 0 ${cols*16} ${rows*16}`} fill="none" className="w-full h-full" style={{ opacity }}>
        {Array.from({length:rows*cols},(_,i)=>{const x=(i%cols)*16+8;const y=Math.floor(i/cols)*16+8;const c=(i+Math.floor(i/cols))%3===0?ROSE:GOLD;return <circle key={i} cx={x} cy={y} r="2" fill={c}/>;
        })}
      </svg>
    </motion.div>
  );
}

export function ScatteredDots({ className = '', opacity = 0.3, count = 20 }) {
  const pts = Array.from({length:count},(_,i)=>({x:5+(i*41+i*i*7)%90, y:5+(i*29+i*i*11)%90, r:1.5+(i%4)*0.5, c:i%3===0?ROSE:GOLD}));
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" style={{ opacity }}>
        {pts.map((d,i)=><circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.c}/>)}
      </svg>
    </motion.div>
  );
}

export function GoldCurve({ className = '', opacity = 0.25, flip = false }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip?{transform:'scaleX(-1)'}:undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 300 80" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M10,60 Q60,10 150,40 Q240,70 290,20" stroke={GOLD} strokeWidth="1.3" fill="none" strokeLinecap="round"/>
        <path d="M20,65 Q70,18 155,46 Q238,72 285,28" stroke={ROSE} strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.5"/>
        <circle cx="10" cy="60" r="2.5" fill={GOLD} opacity="0.5"/>
        <circle cx="290" cy="20" r="2.5" fill={ROSE} opacity="0.4"/>
        <circle cx="150" cy="40" r="2" fill={GOLD} opacity="0.3"/>
      </svg>
    </motion.div>
  );
}

export function GoldFlourish({ className = '', opacity = 0.22, flip = false }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip?{transform:'scaleX(-1)'}:undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 250 100" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M10,80 Q10,20 55,20 Q90,20 90,45 Q90,70 65,70 Q42,70 42,50 Q42,32 60,32" stroke={GOLD} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M90,45 Q120,10 160,25 Q190,38 185,65 Q180,85 155,85 Q135,85 135,68 Q135,52 155,50" stroke={ROSE} strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path d="M185,65 Q210,30 240,45" stroke={GOLD} strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <circle cx="10" cy="80" r="2" fill={GOLD} opacity="0.4"/>
        <circle cx="240" cy="45" r="2" fill={ROSE} opacity="0.4"/>
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WATERCOLOR — supporting, gold + rose washes
   ═══════════════════════════════════════════════════════════════ */

export function WatercolorStain({ className = '', color = '#e8c89a', opacity = 0.2, size = 500, id = 'ws' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size * 0.7 }}>
      <svg viewBox="0 0 600 420" className="w-full h-full" style={{ opacity }}>
        <defs>
          <filter id={`wc-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" seed={42} result="n"/>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="45" xChannelSelector="R" yChannelSelector="G" result="d"/>
            <feGaussianBlur in="d" stdDeviation="12"/>
          </filter>
        </defs>
        <ellipse cx="300" cy="210" rx="250" ry="160" fill={color} filter={`url(#wc-${id})`}/>
        <ellipse cx="220" cy="260" rx="150" ry="100" fill={color} filter={`url(#wc-${id})`} opacity="0.6"/>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAPER TEXTURE
   ═══════════════════════════════════════════════════════════════ */

export function PaperTexture({ id = 'pt' }) {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.12] z-0">
      <svg width="100%" height="100%">
        <filter id={id}><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
        <rect width="100%" height="100%" filter={`url(#${id})`}/>
      </svg>
    </div>
  );
}