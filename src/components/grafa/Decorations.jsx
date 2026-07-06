import React from 'react';
import { motion } from 'framer-motion';

const GOLD = '#c9a84c';
const ROSE = '#c4868a';

/* ═══════════════════════════════════════════════════════════════
   FEATHER ILLUSTRATIONS — realistic quill style with many fine barbs
   Inspired by: pen-and-ink botanical illustration with thick tapering
   rachis (shaft), dozens of fine parallel barb lines, fluffy downy base
   ═══════════════════════════════════════════════════════════════ */

/* Helper: generates many fine barb lines along a shaft */
function Barbs({ cx, y1, y2, count, spreadL, spreadR, color, side = 'both' }) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const y = y1 + t * (y2 - y1);
    const taper = 1 - Math.abs(t - 0.35) * 0.9;
    const lenL = spreadL * taper * (0.8 + Math.sin(i * 1.7) * 0.2);
    const lenR = spreadR * taper * (0.8 + Math.cos(i * 1.3) * 0.2);
    const curveL = lenL * 0.3;
    const curveR = lenR * 0.3;
    const sw = 0.35 + taper * 0.35;
    if (side !== 'right') lines.push(<path key={`l${i}`} d={`M${cx},${y} Q${cx - lenL * 0.6},${y - curveL} ${cx - lenL},${y - curveL * 1.8}`} stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" />);
    if (side !== 'left') lines.push(<path key={`r${i}`} d={`M${cx},${y} Q${cx + lenR * 0.6},${y - curveR} ${cx + lenR},${y - curveR * 1.8}`} stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" />);
  }
  return <>{lines}</>;
}

/* 1. Full feather — tall realistic quill with dense barbs */
export function FullFeather({ className = '', flip = false, opacity = 0.3, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.8 }}>
      <svg viewBox="0 0 200 520" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Rachis — thick tapering shaft */}
        <path d="M100,6 Q97,50 98,120 Q99,220 100,340 Q100,420 100,510" stroke={color} strokeWidth="2.8" fill="none" strokeLinecap="round" />
        <path d="M100,6 Q97,50 98,120 Q99,220 100,340 Q100,420 100,510" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.3" />
        {/* Dense barbs */}
        <Barbs cx={100} y1={30} y2={360} count={45} spreadL={72} spreadR={72} color={color} />
        {/* Downy base — fluffy short wisps */}
        {[370,378,386,394,402,410,418,426].map((y,i) => {
          const sp = 18 - i * 1.5;
          return <g key={`d${i}`}>
            <path d={`M100,${y} Q${100-sp},${y-4-i} ${100-sp-5},${y-2}`} stroke={color} strokeWidth="0.3" fill="none" strokeLinecap="round" opacity={0.5-i*0.04} />
            <path d={`M100,${y} Q${100+sp},${y-3-i} ${100+sp+5},${y-1}`} stroke={color} strokeWidth="0.3" fill="none" strokeLinecap="round" opacity={0.5-i*0.04} />
            <path d={`M100,${y} Q${100-sp*0.7},${y+3} ${100-sp-3},${y+5}`} stroke={color} strokeWidth="0.25" fill="none" strokeLinecap="round" opacity={0.35-i*0.03} />
            <path d={`M100,${y} Q${100+sp*0.7},${y+3} ${100+sp+3},${y+5}`} stroke={color} strokeWidth="0.25" fill="none" strokeLinecap="round" opacity={0.35-i*0.03} />
          </g>;
        })}
      </svg>
    </motion.div>
  );
}

/* 2. Half feather — top portion only, with fine barbs */
export function HalfFeather({ className = '', flip = false, opacity = 0.28, color = ROSE }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 180 300" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M90,4 Q87,40 88,100 Q89,170 90,240 Q90,270 90,296" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <Barbs cx={90} y1={22} y2={250} count={32} spreadL={60} spreadR={60} color={color} />
        {/* Downy wisps at base */}
        {[255,262,269,276].map((y,i) => <g key={`dh${i}`}>
          <path d={`M90,${y} Q${75-i*2},${y-3} ${70-i*3},${y}`} stroke={color} strokeWidth="0.3" fill="none" strokeLinecap="round" opacity={0.4-i*0.05} />
          <path d={`M90,${y} Q${105+i*2},${y-3} ${110+i*3},${y}`} stroke={color} strokeWidth="0.3" fill="none" strokeLinecap="round" opacity={0.4-i*0.05} />
        </g>)}
      </svg>
    </motion.div>
  );
}

/* 3. Feather outline — lighter, fewer barbs, dashed rachis */
export function FeatherOutline({ className = '', flip = false, opacity = 0.22, color = GOLD }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.8 }}>
      <svg viewBox="0 0 160 420" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M80,6 Q77,50 78,130 Q79,220 80,320 Q80,370 80,414" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="10 5" />
        <Barbs cx={80} y1={28} y2={320} count={28} spreadL={52} spreadR={52} color={color} />
      </svg>
    </motion.div>
  );
}

/* 4. Small feather — compact, dense barbs */
export function SmallFeather({ className = '', opacity = 0.26, rotate = 0, color = ROSE }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 80 210" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M40,4 Q38,30 39,70 Q40,120 40,170 Q40,190 40,206" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <Barbs cx={40} y1={16} y2={170} count={22} spreadL={28} spreadR={28} color={color} />
        {[175,180,185,190].map((y,i) => <g key={`ds${i}`}>
          <path d={`M40,${y} Q${32-i},${y-2} ${28-i*2},${y}`} stroke={color} strokeWidth="0.25" fill="none" strokeLinecap="round" opacity={0.35-i*0.05} />
          <path d={`M40,${y} Q${48+i},${y-2} ${52+i*2},${y}`} stroke={color} strokeWidth="0.25" fill="none" strokeLinecap="round" opacity={0.35-i*0.05} />
        </g>)}
      </svg>
    </motion.div>
  );
}

/* 5. Diagonal feather — angled, with dense barbs */
export function DiagonalFeather({ className = '', opacity = 0.25, color = GOLD, angle = -30 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${angle}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 140 370" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M70,4 Q67,45 68,115 Q69,200 70,290 Q70,335 70,366" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <Barbs cx={70} y1={22} y2={290} count={36} spreadL={48} spreadR={48} color={color} />
        {[295,302,309,316].map((y,i) => <g key={`dd${i}`}>
          <path d={`M70,${y} Q${58-i},${y-2} ${54-i*2},${y+1}`} stroke={color} strokeWidth="0.25" fill="none" strokeLinecap="round" opacity={0.35-i*0.05} />
          <path d={`M70,${y} Q${82+i},${y-2} ${86+i*2},${y+1}`} stroke={color} strokeWidth="0.25" fill="none" strokeLinecap="round" opacity={0.35-i*0.05} />
        </g>)}
      </svg>
    </motion.div>
  );
}

/* 6. Horizontal feather — landscape, rotated 90° feel */
export function HorizontalFeather({ className = '', opacity = 0.22, color = ROSE, flip = false }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={flip ? { transform: 'scaleY(-1)' } : undefined} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
      <svg viewBox="0 0 420 110" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Horizontal rachis */}
        <path d="M6,55 Q60,53 150,54 Q260,55 360,55 Q400,55 416,55" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Barbs radiating up and down */}
        {Array.from({length:30},(_,i)=>{
          const t=i/29;const x=25+t*340;const taper=1-Math.abs(t-0.35)*0.9;
          const len=38*taper*(0.8+Math.sin(i*1.5)*0.2);const sw=0.3+taper*0.3;
          return <g key={`hb${i}`}>
            <path d={`M${x},55 Q${x-len*0.15},${55-len*0.6} ${x-len*0.3},${55-len}`} stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" />
            <path d={`M${x},55 Q${x+len*0.15},${55+len*0.6} ${x+len*0.3},${55+len}`} stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" />
          </g>;
        })}
      </svg>
    </motion.div>
  );
}

/* 7. Feather tip — just the sharp quill point with fine barbs */
export function FeatherTip({ className = '', opacity = 0.24, color = GOLD, rotate = 0 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 100 170" fill="none" className="w-full h-full" style={{ opacity }}>
        <path d="M50,3 Q49,25 49,60 Q50,100 50,165" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <Barbs cx={50} y1={12} y2={130} count={18} spreadL={32} spreadR={32} color={color} />
      </svg>
    </motion.div>
  );
}

/* 8. Overlapping feathers — two realistic quills crossed */
export function OverlappingFeathers({ className = '', opacity = 0.2 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
      <svg viewBox="0 0 300 440" fill="none" className="w-full h-full" style={{ opacity }}>
        <g transform="rotate(-10, 130, 220)">
          <path d="M130,10 Q127,55 128,140 Q129,230 130,330 Q130,380 130,420" stroke={GOLD} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <Barbs cx={130} y1={30} y2={330} count={38} spreadL={58} spreadR={58} color={GOLD} />
        </g>
        <g transform="rotate(14, 170, 220)" opacity="0.65">
          <path d="M170,30 Q168,70 169,150 Q170,240 170,330 Q170,370 170,410" stroke={ROSE} strokeWidth="2" fill="none" strokeLinecap="round" />
          <Barbs cx={170} y1={48} y2={320} count={32} spreadL={50} spreadR={50} color={ROSE} />
        </g>
      </svg>
    </motion.div>
  );
}

/* 9. Feather fragment — just a cluster of barb lines, no shaft visible */
export function FeatherFragment({ className = '', opacity = 0.2, color = ROSE, rotate = 0 }) {
  return (
    <motion.div className={`absolute pointer-events-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
      <svg viewBox="0 0 120 110" fill="none" className="w-full h-full" style={{ opacity }}>
        {/* Radiating barbs from a hidden shaft point at bottom-center */}
        {Array.from({length:16},(_,i)=>{
          const angle = -70 + i * (140/15);
          const rad = angle * Math.PI/180;
          const len = 55 + Math.sin(i*1.4)*15;
          const ex = 60 + Math.sin(rad)*len;
          const ey = 100 - Math.cos(rad)*len;
          const cx1 = 60 + Math.sin(rad)*len*0.4;
          const cy1 = 100 - Math.cos(rad)*len*0.4 - 8;
          const sw = 0.4 + (1-Math.abs(i-8)/8)*0.35;
          return <path key={`fb${i}`} d={`M60,100 Q${cx1},${cy1} ${ex},${ey}`} stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" />;
        })}
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