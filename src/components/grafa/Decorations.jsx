import React from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   FEATHER ILLUSTRATIONS — 9 unique variants
   ═══════════════════════════════════════════════════════════════ */

/* 1. Full feather — large elegant quill, vertical */
export function FullFeather({ className = '', flip = false, opacity = 0.3, color = '#c9a84c' }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.8 }}>
      <svg viewBox="0 0 200 500" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M100,10 Q90,80 95,180 Q98,280 100,380 Q101,440 100,490" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M100,50 Q50,80 30,130 Q20,170 40,190 Q65,200 95,170" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M100,100 Q55,125 40,165 Q32,200 55,215 Q78,218 97,195" stroke={color} strokeWidth="1.3" fill="none" />
        <path d="M100,160 Q60,185 50,220 Q45,250 65,260 Q82,258 98,240" stroke={color} strokeWidth="1.1" fill="none" />
        <path d="M100,220 Q70,245 62,275 Q58,300 75,308 Q88,305 99,288" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M100,50 Q150,75 168,125 Q178,165 158,185 Q135,195 105,170" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M100,100 Q145,122 158,160 Q165,195 145,210 Q125,215 103,195" stroke={color} strokeWidth="1.3" fill="none" />
        <path d="M100,160 Q140,180 150,215 Q155,245 138,258 Q120,260 102,240" stroke={color} strokeWidth="1.1" fill="none" />
        <path d="M100,220 Q130,240 138,270 Q142,295 128,305 Q115,305 101,288" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M100,280 Q80,300 75,325 Q72,345 85,350 Q95,348 100,335" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M100,280 Q120,298 125,322 Q128,342 115,348 Q105,347 101,335" stroke={color} strokeWidth="0.7" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 2. Half feather — top half only, cropped feel */
export function HalfFeather({ className = '', flip = false, opacity = 0.28, color = '#c9a84c' }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 180 280" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M90,5 Q85,40 87,100 Q89,160 90,220 Q90,250 90,275" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M90,30 Q45,55 28,95 Q18,130 38,150 Q60,158 88,130" stroke={color} strokeWidth="1.4" fill="none" />
        <path d="M90,80 Q50,100 38,140 Q30,170 50,185 Q70,188 88,165" stroke={color} strokeWidth="1.1" fill="none" />
        <path d="M90,30 Q135,50 150,88 Q160,122 142,142 Q122,150 92,128" stroke={color} strokeWidth="1.4" fill="none" />
        <path d="M90,80 Q130,98 142,135 Q148,165 130,178 Q112,182 92,162" stroke={color} strokeWidth="1.1" fill="none" />
        <path d="M90,140 Q65,160 58,188 Q54,210 68,218 Q80,216 89,200" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M90,140 Q115,158 122,182 Q126,205 114,214 Q102,213 91,198" stroke={color} strokeWidth="0.8" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 3. Feather outline — dashed, ghostly */
export function FeatherOutline({ className = '', flip = false, opacity = 0.22, color = '#c9a84c' }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.8 }}>
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

/* 4. Small feather — compact, decorative */
export function SmallFeather({ className = '', opacity = 0.26, rotate = 0, color = '#c9a84c' }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 80 200" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M40,5 Q38,40 39,80 Q40,130 40,180" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M40,20 Q24,32 18,50 Q14,65 22,72 Q34,70 39,58" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M40,20 Q56,30 62,48 Q66,62 58,68 Q48,67 41,56" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M40,55 Q28,66 24,82 Q22,94 30,98 Q38,96 40,86" stroke={color} strokeWidth="0.6" fill="none" />
        <path d="M40,55 Q52,64 56,80 Q58,90 52,95 Q44,94 41,84" stroke={color} strokeWidth="0.6" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 5. Diagonal feather — angled 30-45°, dynamic */
export function DiagonalFeather({ className = '', opacity = 0.25, color = '#c9a84c', angle = -30 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${angle}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 140 350" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M70,5 Q66,50 68,120 Q69,200 70,280 Q70,320 70,345" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M70,30 Q40,50 28,82 Q20,110 36,125 Q52,130 68,108" stroke={color} strokeWidth="1.1" fill="none" />
        <path d="M70,80 Q42,100 34,130 Q28,155 45,165 Q60,168 69,148" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M70,30 Q100,48 110,78 Q118,105 104,120 Q88,126 72,106" stroke={color} strokeWidth="1.1" fill="none" />
        <path d="M70,80 Q98,96 106,125 Q112,150 96,162 Q82,166 71,146" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M70,140 Q50,158 45,182 Q42,200 54,206 Q64,204 70,190" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M70,140 Q90,156 95,178 Q98,196 86,203 Q76,202 71,188" stroke={color} strokeWidth="0.7" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 6. Horizontal feather — landscape orientation */
export function HorizontalFeather({ className = '', opacity = 0.22, color = '#c9a84c', flip = false }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleY(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 400 120" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M10,60 Q80,55 180,58 Q280,60 360,60 Q390,60 395,60" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M40,60 Q60,35 95,25 Q125,18 138,32 Q145,48 120,58" stroke={color} strokeWidth="1" fill="none" />
        <path d="M100,60 Q120,38 150,30 Q178,24 188,38 Q192,52 170,59" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M170,60 Q188,40 215,34 Q240,30 248,42 Q252,54 232,59" stroke={color} strokeWidth="0.8" fill="none" />
        <path d="M40,60 Q58,82 90,92 Q118,98 130,86 Q138,74 118,62" stroke={color} strokeWidth="1" fill="none" />
        <path d="M100,60 Q118,80 148,88 Q172,92 182,82 Q188,70 168,61" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M170,60 Q186,78 212,85 Q234,88 242,78 Q246,68 228,61" stroke={color} strokeWidth="0.8" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 7. Feather tip — just the top of a quill, peeks in from edge */
export function FeatherTip({ className = '', opacity = 0.24, color = '#c9a84c', rotate = 0 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 100 160" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M50,5 Q48,30 49,65 Q50,100 50,150" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M50,15 Q30,28 22,48 Q18,65 28,72 Q40,70 49,55" stroke={color} strokeWidth="1" fill="none" />
        <path d="M50,15 Q70,26 76,45 Q80,60 72,68 Q62,67 51,54" stroke={color} strokeWidth="1" fill="none" />
        <path d="M50,55 Q36,66 32,82 Q30,95 38,100 Q46,98 50,88" stroke={color} strokeWidth="0.7" fill="none" />
        <path d="M50,55 Q64,64 68,80 Q70,92 62,97 Q54,96 51,86" stroke={color} strokeWidth="0.7" fill="none" />
      </svg>
    </motion.div>
  );
}

/* 8. Overlapping feathers — two feathers crossing */
export function OverlappingFeathers({ className = '', opacity = 0.2, color = '#c9a84c' }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
      <svg viewBox="0 0 280 400" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Feather 1 — slightly left-leaning */}
        <g transform="rotate(-8, 120, 200)">
          <path d="M120,10 Q115,60 117,140 Q119,220 120,310 Q120,360 120,390" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M120,40 Q80,60 65,100 Q55,130 72,148 Q90,155 118,130" stroke={color} strokeWidth="1" fill="none" />
          <path d="M120,100 Q85,118 75,150 Q68,178 88,190 Q105,192 118,170" stroke={color} strokeWidth="0.8" fill="none" />
          <path d="M120,40 Q158,55 170,92 Q178,120 162,138 Q145,146 122,125" stroke={color} strokeWidth="1" fill="none" />
          <path d="M120,100 Q155,115 165,145 Q170,172 152,184 Q138,188 122,168" stroke={color} strokeWidth="0.8" fill="none" />
        </g>
        {/* Feather 2 — slightly right-leaning, behind */}
        <g transform="rotate(12, 160, 200)" opacity="0.6">
          <path d="M160,30 Q156,70 158,140 Q159,210 160,290 Q160,340 160,370" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M160,55 Q125,72 112,108 Q105,135 120,150 Q136,155 158,132" stroke={color} strokeWidth="0.9" fill="none" />
          <path d="M160,55 Q192,68 204,100 Q210,125 196,140 Q180,146 162,128" stroke={color} strokeWidth="0.9" fill="none" />
          <path d="M160,120 Q135,138 128,165 Q124,185 138,192 Q150,190 159,175" stroke={color} strokeWidth="0.7" fill="none" />
          <path d="M160,120 Q185,135 192,160 Q196,180 182,188 Q170,187 161,172" stroke={color} strokeWidth="0.7" fill="none" />
        </g>
      </svg>
    </motion.div>
  );
}

/* 9. Feather fragment — just barbs, no shaft, abstract */
export function FeatherFragment({ className = '', opacity = 0.2, color = '#c9a84c', rotate = 0 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M60,90 Q40,70 25,50 Q15,35 22,25 Q32,18 45,30 Q55,42 60,60" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M60,90 Q42,65 30,42 Q22,28 30,20 Q40,15 50,28 Q58,40 60,55" stroke={color} strokeWidth="0.7" fill="none" opacity="0.7" />
        <path d="M60,90 Q80,68 92,48 Q102,32 95,22 Q86,16 74,28 Q65,40 60,58" stroke={color} strokeWidth="0.9" fill="none" />
        <path d="M60,90 Q78,62 88,40 Q96,25 88,18 Q80,14 70,26 Q62,38 60,52" stroke={color} strokeWidth="0.7" fill="none" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PYRAMID ILLUSTRATIONS — 4 variants
   ═══════════════════════════════════════════════════════════════ */

/* Large line-art pyramid with inner structure */
export function PyramidOutline({ className = '', opacity = 0.2, color = '#c9a84c' }) {
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

/* Medium pyramid — simpler, elegant */
export function MediumPyramid({ className = '', opacity = 0.18, color = '#c9a84c' }) {
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

/* Small decorative pyramid */
export function SmallPyramid({ className = '', opacity = 0.15, color = '#c9a84c' }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M40,5 L75,72 L5,72 Z" stroke={color} strokeWidth="1" fill="none" />
        <circle cx="40" cy="35" r="2" fill={color} opacity="0.35" />
      </svg>
    </motion.div>
  );
}

/* Pyramid silhouette — filled ghost */
export function PyramidSilhouette({ className = '', opacity = 0.06, color = '#c9a84c' }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
      <svg viewBox="0 0 400 350" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M200,10 L380,340 L20,340 Z" fill={color} />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GOLD DECORATIVE — stars, dots, curves, flourishes
   ═══════════════════════════════════════════════════════════════ */

export function StarConstellation({ className = '', opacity = 0.4 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" style={{ opacity }}>
        {[{x:20,y:30,s:7},{x:60,y:15,s:6},{x:120,y:40,s:9},{x:170,y:20,s:5},{x:40,y:80,s:6},{x:100,y:70,s:8},{x:160,y:85,s:6},{x:30,y:140,s:7},{x:80,y:130,s:5},{x:140,y:150,s:7},{x:180,y:130,s:6},{x:60,y:170,s:5},{x:130,y:180,s:6}].map((st,i)=>(
          <g key={i} transform={`translate(${st.x},${st.y})`}><path d={`M0,${-st.s} L${st.s*.35},${-st.s*.35} L${st.s},0 L${st.s*.35},${st.s*.35} L0,${st.s} L${-st.s*.35},${st.s*.35} L${-st.s},0 L${-st.s*.35},${-st.s*.35} Z`} fill="#c9a84c"/></g>
        ))}
        <line x1="60" y1="15" x2="120" y2="40" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5"/>
        <line x1="120" y1="40" x2="100" y2="70" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5"/>
        <line x1="100" y1="70" x2="140" y2="150" stroke="#c9a84c" strokeWidth="0.4" opacity="0.4"/>
        <line x1="40" y1="80" x2="80" y2="130" stroke="#c9a84c" strokeWidth="0.4" opacity="0.4"/>
      </svg>
    </motion.div>
  );
}

export function GoldDotGrid({ className = '', rows = 6, cols = 10, opacity = 0.35 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
      <svg viewBox={`0 0 ${cols*16} ${rows*16}`} fill="none" className="w-full h-full" style={{ opacity }}>
        {Array.from({length:rows*cols},(_,i)=>{const x=(i%cols)*16+8;const y=Math.floor(i/cols)*16+8;return <circle key={i} cx={x} cy={y} r="2" fill="#c9a84c"/>;
        })}
      </svg>
    </motion.div>
  );
}

/* Scattered gold dots — organic placement, not grid */
export function ScatteredDots({ className = '', opacity = 0.3, count = 20 }) {
  const pts = Array.from({length:count},(_,i)=>({x:5+(i*41+i*i*7)%90, y:5+(i*29+i*i*11)%90, r:1.5+(i%4)*0.5}));
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" style={{ opacity }}>
        {pts.map((d,i)=><circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#c9a84c"/>)}
      </svg>
    </motion.div>
  );
}

/* Elegant gold S-curve */
export function GoldCurve({ className = '', opacity = 0.25, flip = false }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip?{transform:'scaleX(-1)'}:undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 300 80" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M10,60 Q60,10 150,40 Q240,70 290,20" stroke="#c9a84c" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
        <circle cx="10" cy="60" r="2.5" fill="#c9a84c" opacity="0.5"/>
        <circle cx="290" cy="20" r="2.5" fill="#c9a84c" opacity="0.5"/>
        <circle cx="150" cy="40" r="2" fill="#c9a84c" opacity="0.3"/>
      </svg>
    </motion.div>
  );
}

/* Gold flourish — ornamental scrollwork */
export function GoldFlourish({ className = '', opacity = 0.22, flip = false }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip?{transform:'scaleX(-1)'}:undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 250 100" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M10,80 Q10,20 55,20 Q90,20 90,45 Q90,70 65,70 Q42,70 42,50 Q42,32 60,32" stroke="#c9a84c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M90,45 Q120,10 160,25 Q190,38 185,65 Q180,85 155,85 Q135,85 135,68 Q135,52 155,50" stroke="#c9a84c" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path d="M185,65 Q210,30 240,45" stroke="#c9a84c" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
        <circle cx="10" cy="80" r="2" fill="#c9a84c" opacity="0.4"/>
        <circle cx="240" cy="45" r="2" fill="#c9a84c" opacity="0.4"/>
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WATERCOLOR — supporting role behind illustrations
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