import React from 'react';

// Latvia country outline — stylized but recognizable shape
// Key features: Gulf of Riga indent, wider east-west orientation, 
// irregular coastline in the west, land borders east/south
export default function LatviaSvgMap({ className = "" }) {
  return (
    <svg
      viewBox="0 0 800 440"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="latviaFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E0D4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#DDD5C8" stopOpacity="0.4" />
        </linearGradient>
        <filter id="mapShadow" x="-2%" y="-2%" width="104%" height="104%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#08233E" floodOpacity="0.06" />
        </filter>
      </defs>

      {/* Country outline */}
      <path
        d="M72,155 C78,148 88,140 100,132 C112,124 122,118 135,112 
           L155,102 C165,96 178,88 192,82 L210,75 C222,70 232,65 245,60 
           L262,54 C272,50 285,46 300,42 
           C312,38 322,36 335,35 
           L355,38 C362,42 368,50 372,58 
           C378,68 385,78 394,86 
           C405,95 418,100 432,102 
           C445,104 458,100 468,92 
           C475,86 480,78 484,68 
           C486,62 490,56 496,52 
           C502,48 510,45 520,44 
           C535,42 548,44 560,48 
           C575,52 588,58 600,65 
           C615,74 628,84 640,95 
           C650,105 660,116 668,128 
           C676,140 682,152 688,165 
           C692,175 695,186 696,198 
           L695,215 C692,228 688,240 682,252 
           L672,268 C664,278 654,288 642,296 
           C630,305 618,312 604,318 
           L585,325 C572,330 558,334 544,338 
           L525,342 C510,345 495,347 480,348 
           L460,350 C445,351 430,352 415,352 
           L395,353 C378,354 362,354 345,352 
           C328,350 312,346 296,342 
           L275,336 C260,332 245,326 232,320 
           L215,312 C200,304 186,296 174,286 
           L158,275 C148,266 138,256 130,244 
           C122,232 114,220 108,208 
           L98,192 C90,180 82,168 76,158 Z"
        fill="url(#latviaFill)"
        stroke="#C89B3C"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        strokeLinejoin="round"
        filter="url(#mapShadow)"
      />

      {/* Gulf of Riga indent */}
      <path
        d="M300,42 C310,62 322,80 340,92 C355,102 372,108 390,106 
           C405,102 415,92 418,78 C418,65 412,54 400,46 
           C388,40 374,38 360,38 L345,35"
        fill="#F8F2EA"
        fillOpacity="0.7"
        stroke="#C89B3C"
        strokeWidth="1"
        strokeOpacity="0.2"
      />

      {/* Subtle internal detail lines */}
      <path
        d="M180,140 C260,132 340,128 420,130 C500,132 560,140 630,155"
        stroke="#C89B3C" strokeWidth="0.4" strokeOpacity="0.1" strokeDasharray="6 8" fill="none"
      />
      <path
        d="M150,220 C230,212 320,208 400,210 C480,214 560,225 640,240"
        stroke="#C89B3C" strokeWidth="0.4" strokeOpacity="0.08" strokeDasharray="6 8" fill="none"
      />
    </svg>
  );
}