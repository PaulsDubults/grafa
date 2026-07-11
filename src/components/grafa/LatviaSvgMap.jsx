import React from 'react';

export default function LatviaSvgMap() {
  return (
    <svg
      viewBox="0 0 1000 620"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mapFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e0d4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ddd5c8" stopOpacity="0.6" />
        </linearGradient>
        <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#08233E" floodOpacity="0.08" />
        </filter>
      </defs>
      
      {/* Latvia outline - simplified but recognizable shape */}
      <path
        d="
          M 105,250
          C 100,240 95,220 100,200
          C 105,180 108,160 115,145
          L 130,130
          C 140,120 155,115 170,110
          L 200,105
          C 220,100 240,95 260,92
          L 300,88
          C 320,85 340,82 360,80
          L 400,78
          C 420,76 440,75 460,74
          L 500,72
          C 520,70 540,68 560,65
          L 600,60
          C 620,56 640,52 660,48
          L 700,42
          C 720,38 740,35 760,32
          L 800,28
          C 820,26 840,28 855,35
          C 870,42 880,55 885,70
          L 890,90
          C 892,105 895,120 900,135
          C 905,150 910,165 912,180
          L 915,200
          C 916,215 915,230 912,245
          C 910,260 905,272 898,285
          L 888,300
          C 880,312 870,322 858,330
          C 846,338 832,345 820,352
          L 800,362
          C 785,370 770,378 755,385
          C 740,392 725,398 710,405
          L 690,415
          C 675,422 660,430 645,438
          C 630,446 618,455 608,462
          L 590,475
          C 578,482 565,488 550,492
          C 535,496 520,498 505,498
          L 480,497
          C 465,495 450,492 435,488
          C 420,484 405,478 392,472
          L 375,462
          C 362,455 350,447 338,440
          C 326,433 315,425 305,418
          L 285,405
          C 275,398 265,390 255,382
          C 245,374 235,365 226,358
          L 210,345
          C 200,338 190,330 180,322
          C 170,314 160,308 148,302
          L 132,295
          C 122,290 114,284 110,275
          C 106,266 105,258 105,250
          Z
        "
        fill="url(#mapFill)"
        stroke="#C89B3C"
        strokeWidth="1.5"
        strokeOpacity="0.35"
        filter="url(#mapShadow)"
      />
      
      {/* Subtle internal borders / texture lines */}
      <path
        d="M 300,88 L 310,200 L 280,350 M 500,72 L 490,250 L 510,420 M 700,42 L 680,200 L 700,380"
        fill="none"
        stroke="#C89B3C"
        strokeWidth="0.5"
        strokeOpacity="0.12"
        strokeDasharray="8 12"
      />

      {/* Gulf of Riga indicator */}
      <text x="380" y="170" fontSize="11" fontFamily="var(--font-body)" fill="#08233E" fillOpacity="0.12" letterSpacing="4" textAnchor="middle">
        RĪGAS JŪRAS LĪCIS
      </text>
    </svg>
  );
}