import React from 'react';
import { motion } from 'framer-motion';

const GOLD = '#c9a84c';
const ROSE = '#c4868a';

/* ═══════════════════════════════════════════════════════════════
   FEATHER ILLUSTRATIONS — image-based from uploaded artwork
   3 source illustrations: diagonal quill, upright feather, crossed feathers
   ═══════════════════════════════════════════════════════════════ */

const FEATHER_IMG_1 = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/7c18a0883_ChatGPTImageJul6202612_16_23PM.png";
const FEATHER_IMG_2 = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/f83bc8fe0_ChatGPTImageJul6202612_24_17PM.png";

/* Base feather image component — uses object-fit:cover + object-position to isolate individual feathers from the composite sheet */
function FeatherImage({ className = '', opacity = 0.3, rotate = 0, flip = false, src = FEATHER_IMG_1, objectPosition = 'center' }) {
  const transforms = [];
  if (flip) transforms.push('scaleX(-1)');
  if (rotate) transforms.push(`rotate(${rotate}deg)`);
  return (
    <motion.div
      className={`absolute pointer-events-none overflow-hidden ${className}`}
      style={{ transform: transforms.length ? transforms.join(' ') : undefined }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <img src={src} alt="" className="w-full h-full object-cover" style={{ opacity, objectPosition }} draggable={false} />
    </motion.div>
  );
}

/* 1. FullFeather — diagonal quill (left third of image) */
export function FullFeather({ className = '', flip = false, opacity = 0.3 }) {
  return <FeatherImage className={className} opacity={opacity} flip={flip} src={FEATHER_IMG_1} objectPosition="10% 55%" />;
}

/* 2. HalfFeather — upright feather (center of image) */
export function HalfFeather({ className = '', flip = false, opacity = 0.28 }) {
  return <FeatherImage className={className} opacity={opacity} flip={flip} src={FEATHER_IMG_1} objectPosition="48% 45%" />;
}

/* 3. FeatherOutline — diagonal quill from second image */
export function FeatherOutline({ className = '', flip = false, opacity = 0.22 }) {
  return <FeatherImage className={className} opacity={opacity} flip={flip} src={FEATHER_IMG_2} objectPosition="12% 55%" />;
}

/* 4. SmallFeather — upright feather, compact */
export function SmallFeather({ className = '', opacity = 0.26, rotate = 0 }) {
  return <FeatherImage className={className} opacity={opacity} rotate={rotate} src={FEATHER_IMG_2} objectPosition="48% 42%" />;
}

/* 5. DiagonalFeather — diagonal quill with custom rotation */
export function DiagonalFeather({ className = '', opacity = 0.25, angle = -30 }) {
  return <FeatherImage className={className} opacity={opacity} rotate={angle} src={FEATHER_IMG_1} objectPosition="12% 58%" />;
}

/* 6. HorizontalFeather — diagonal quill rotated to landscape orientation */
export function HorizontalFeather({ className = '', opacity = 0.22, flip = false }) {
  return <FeatherImage className={className} opacity={opacity} rotate={-75} flip={flip} src={FEATHER_IMG_1} objectPosition="10% 55%" />;
}

/* 7. FeatherTip — upright feather, showing top half */
export function FeatherTip({ className = '', opacity = 0.24, rotate = 0 }) {
  return <FeatherImage className={className} opacity={opacity} rotate={rotate} src={FEATHER_IMG_1} objectPosition="48% 25%" />;
}

/* 8. OverlappingFeathers — crossed feathers with triangle (right third) */
export function OverlappingFeathers({ className = '', opacity = 0.2 }) {
  return <FeatherImage className={className} opacity={opacity} src={FEATHER_IMG_1} objectPosition="88% 50%" />;
}

/* 9. FeatherFragment — upright feather, mirrored */
export function FeatherFragment({ className = '', opacity = 0.2, rotate = 0 }) {
  return <FeatherImage className={className} opacity={opacity} rotate={rotate} flip src={FEATHER_IMG_2} objectPosition="48% 45%" />;
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