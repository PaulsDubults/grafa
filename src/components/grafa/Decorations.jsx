import React from 'react';
import { motion } from 'framer-motion';

const GOLD = '#c9a84c';
const ROSE = '#c4868a';

/* ═══════════════════════════════════════════════════════════════
   FEATHER ILLUSTRATIONS — 3 hand-drawn ink styles
   Style A: Long flowing diagonal quill (like a writing feather)
   Style B: Shorter upright feather with ink drip at tip
   Style C: Crossed feathers with triangle behind
   ═══════════════════════════════════════════════════════════════ */

/*
  InkQuillBarbs: generates curved barb strokes along a curved shaft path.
  Each barb curves upward and outward like a real feather vane.
*/
function QuillBarbs({ points, count, spread, color, side = 'both' }) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count;
    // shape factor — widest at 30%, tapers at tip and base
    const shape = Math.sin(t * Math.PI) * (t < 0.35 ? t / 0.35 : 1);
    const idx = Math.min(Math.floor(t * (points.length - 1)), points.length - 2);
    const lt = t * (points.length - 1) - idx;
    const px = points[idx][0] + (points[idx + 1][0] - points[idx][0]) * lt;
    const py = points[idx][1] + (points[idx + 1][1] - points[idx][1]) * lt;
    // tangent direction
    const dx = points[Math.min(idx + 1, points.length - 1)][0] - points[idx][0];
    const dy = points[Math.min(idx + 1, points.length - 1)][1] - points[idx][1];
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = -dy / len; // normal left
    const ny = dx / len;
    const barbLen = spread * shape * (0.85 + Math.sin(i * 2.1) * 0.15);
    const sw = 0.25 + shape * 0.45;
    // barbs curve upward (against shaft direction)
    const curveFactor = barbLen * 0.35;
    if (side !== 'right') {
      const ex = px + nx * barbLen;
      const ey = py + ny * barbLen;
      const cpx = px + nx * barbLen * 0.55 - dx / len * curveFactor;
      const cpy = py + ny * barbLen * 0.55 - dy / len * curveFactor;
      lines.push(<path key={`l${i}`} d={`M${px.toFixed(1)},${py.toFixed(1)} Q${cpx.toFixed(1)},${cpy.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}`} stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" />);
    }
    if (side !== 'left') {
      const ex = px - nx * barbLen;
      const ey = py - ny * barbLen;
      const cpx = px - nx * barbLen * 0.55 - dx / len * curveFactor;
      const cpy = py - ny * barbLen * 0.55 - dy / len * curveFactor;
      lines.push(<path key={`r${i}`} d={`M${px.toFixed(1)},${py.toFixed(1)} Q${cpx.toFixed(1)},${cpy.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}`} stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" />);
    }
  }
  return <>{lines}</>;
}

/* Ink drip drop at the tip of a feather */
function InkDrip({ x, y, color }) {
  return (
    <g>
      <ellipse cx={x} cy={y + 2} rx="2.5" ry="3.5" fill={color} opacity="0.7" />
      <path d={`M${x},${y - 2} Q${x - 1.5},${y} ${x},${y + 4}`} stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
      <circle cx={x + 3} cy={y + 8} r="1.2" fill={color} opacity="0.4" />
      <circle cx={x - 2} cy={y + 11} r="0.8" fill={color} opacity="0.3" />
    </g>
  );
}

/* ── STYLE A: Long flowing diagonal quill ── */
const QUILL_A_POINTS = [[85,8],[80,40],[72,90],[62,155],[55,220],[52,280],[54,330],[60,380],[70,420],[82,455],[95,480],[105,498]];

/* 1. FullFeather — long diagonal quill (Style A) */
export function FullFeather({ className = '', flip = false, opacity = 0.3, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.8 }}>
      <svg viewBox="0 0 180 510" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Shaft — thick, tapering, slightly curved */}
        <path d="M85,8 Q80,40 72,90 Q62,155 55,220 Q52,280 54,330 Q60,380 70,420 Q82,455 95,480 L105,498" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M85,8 Q80,40 72,90 Q62,155 55,220 Q52,280 54,330 Q60,380 70,420 Q82,455 95,480 L105,498" stroke={color} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.3" />
        {/* Dense barbs along the curve */}
        <QuillBarbs points={QUILL_A_POINTS} count={52} spread={65} color={color} />
        {/* Ink splash at nib */}
        <circle cx="107" cy="500" r="3" fill={color} opacity="0.35" />
        <circle cx="112" cy="504" r="1.5" fill={color} opacity="0.25" />
        <circle cx="103" cy="505" r="1" fill={color} opacity="0.2" />
      </svg>
    </motion.div>
  );
}

/* 5. DiagonalFeather — same quill shape, for angled placement */
export function DiagonalFeather({ className = '', opacity = 0.25, color = GOLD, angle = -30 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${angle}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 160 400" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M75,6 Q70,35 64,80 Q56,140 50,200 Q48,255 52,300 Q58,345 68,375 Q76,392 82,398" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <QuillBarbs points={[[75,6],[70,35],[64,80],[56,140],[50,200],[48,255],[52,300],[58,345],[68,375],[82,398]]} count={42} spread={52} color={color} />
        <circle cx="84" cy="400" r="2.5" fill={color} opacity="0.3" />
        <circle cx="88" cy="404" r="1.2" fill={color} opacity="0.2" />
      </svg>
    </motion.div>
  );
}

/* 6. HorizontalFeather — Style A rotated for horizontal placement */
export function HorizontalFeather({ className = '', opacity = 0.22, color = ROSE, flip = false }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleY(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 420 100" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M8,55 Q40,50 90,42 Q160,32 230,30 Q300,32 350,40 Q385,48 408,55" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <QuillBarbs points={[[8,55],[40,50],[90,42],[160,32],[230,30],[300,32],[350,40],[385,48],[408,55]]} count={38} spread={32} color={color} />
        <InkDrip x={410} y={56} color={color} />
      </svg>
    </motion.div>
  );
}

/* ── STYLE B: Shorter upright feather with ink drip ── */
const QUILL_B_POINTS = [[70,8],[68,30],[65,65],[62,105],[60,150],[60,195],[63,235],[68,270],[75,298]];

/* 2. HalfFeather — shorter upright feather (Style B) */
export function HalfFeather({ className = '', flip = false, opacity = 0.28, color = ROSE }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 140 320" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Shaft — slightly curved, narrower */}
        <path d="M70,8 Q68,30 65,65 Q62,105 60,150 Q60,195 63,235 Q68,270 75,298" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Barbs — denser near top, sparser toward tip */}
        <QuillBarbs points={QUILL_B_POINTS} count={38} spread={48} color={color} />
        {/* Ink drip at tip */}
        <InkDrip x={76} y={300} color={color} />
        {/* Watercolor haze behind */}
        <ellipse cx="65" cy="160" rx="40" ry="70" fill={color} opacity="0.04" />
      </svg>
    </motion.div>
  );
}

/* 4. SmallFeather — compact version of Style B */
export function SmallFeather({ className = '', opacity = 0.26, rotate = 0, color = ROSE }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 80 200" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M40,6 Q38,22 36,48 Q34,80 34,115 Q36,150 40,178 Q43,192 45,198" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <QuillBarbs points={[[40,6],[38,22],[36,48],[34,80],[34,115],[36,150],[40,178],[45,198]]} count={26} spread={28} color={color} />
        <InkDrip x={46} y={199} color={color} />
      </svg>
    </motion.div>
  );
}

/* 7. FeatherTip — just the top portion of Style B */
export function FeatherTip({ className = '', opacity = 0.24, color = GOLD, rotate = 0 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 90 160" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M48,4 Q46,18 44,40 Q42,65 42,95 Q44,125 48,150" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <QuillBarbs points={[[48,4],[46,18],[44,40],[42,65],[42,95],[44,125],[48,150]]} count={20} spread={30} color={color} />
        <InkDrip x={49} y={152} color={color} />
      </svg>
    </motion.div>
  );
}

/* 3. FeatherOutline — lighter dashed version of Style B */
export function FeatherOutline({ className = '', flip = false, opacity = 0.22, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.8 }}>
      <svg viewBox="0 0 140 390" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M68,6 Q65,35 62,75 Q58,130 56,185 Q56,240 60,290 Q65,335 72,370 Q76,385 78,390" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeDasharray="8 4" />
        <QuillBarbs points={[[68,6],[65,35],[62,75],[58,130],[56,185],[56,240],[60,290],[65,335],[72,370],[78,390]]} count={30} spread={44} color={color} />
      </svg>
    </motion.div>
  );
}

/* ── STYLE C: Crossed feathers with triangle ── */

/* 8. OverlappingFeathers — two crossed quills with triangle behind */
export function OverlappingFeathers({ className = '', opacity = 0.2 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
      <svg viewBox="0 0 300 380" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Triangle behind */}
        <path d="M150,50 L260,320 L40,320 Z" stroke={GOLD} strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* Left feather — leaning left */}
        <g transform="rotate(-25, 150, 200)">
          <path d="M150,20 Q146,50 142,90 Q138,140 136,195 Q136,245 140,285 Q146,320 155,348" stroke={GOLD} strokeWidth="2" fill="none" strokeLinecap="round" />
          <QuillBarbs points={[[150,20],[146,50],[142,90],[138,140],[136,195],[136,245],[140,285],[146,320],[155,348]]} count={36} spread={48} color={GOLD} />
          <InkDrip x={156} y={350} color={GOLD} />
        </g>
        {/* Right feather — leaning right */}
        <g transform="rotate(25, 150, 200)">
          <path d="M150,20 Q154,50 158,90 Q162,140 164,195 Q164,245 160,285 Q154,320 145,348" stroke={ROSE} strokeWidth="2" fill="none" strokeLinecap="round" />
          <QuillBarbs points={[[150,20],[154,50],[158,90],[162,140],[164,195],[164,245],[160,285],[154,320],[145,348]]} count={36} spread={48} color={ROSE} />
          <InkDrip x={144} y={350} color={ROSE} />
        </g>
        {/* Small ink dots at crossing */}
        <circle cx="150" cy="200" r="2" fill={GOLD} opacity="0.2" />
        <circle cx="145" cy="210" r="1.2" fill={ROSE} opacity="0.15" />
      </svg>
    </motion.div>
  );
}

/* 9. FeatherFragment — just radiating barbs, suggesting part of a feather */
export function FeatherFragment({ className = '', opacity = 0.2, color = ROSE, rotate = 0 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 120 110" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Short shaft hint */}
        <path d="M60,95 Q58,70 56,50 Q55,35 56,20" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Barbs fanning out from shaft */}
        <QuillBarbs points={[[56,20],[55,35],[56,50],[58,70],[60,95]]} count={14} spread={38} color={color} />
        <InkDrip x={61} y={96} color={color} />
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