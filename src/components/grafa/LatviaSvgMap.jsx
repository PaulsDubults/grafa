import React from 'react';

// Latvia country outline — traced from reference map image via AI vision
export default function LatviaSvgMap({ className = "" }) {
  return (
    <svg
      viewBox="0 0 500 280"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="latviaFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E0D4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#DDD5C8" stopOpacity="0.35" />
        </linearGradient>
        <filter id="mapShadow" x="-2%" y="-2%" width="104%" height="104%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#08233E" floodOpacity="0.06" />
        </filter>
      </defs>

      <path
        d="M 30,180 L 28,165 L 32,150 L 30,135 L 35,120 L 38,105 L 42,95 L 45,85 L 48,75 L 52,68 L 55,62 L 58,58 L 62,55 L 65,52 L 70,50 L 75,48 L 80,47 L 85,48 L 88,50 L 90,53 L 92,58 L 93,65 L 92,72 L 90,78 L 88,83 L 87,88 L 88,93 L 92,96 L 98,98 L 105,99 L 112,99 L 118,98 L 122,96 L 125,93 L 127,88 L 128,82 L 128,75 L 127,68 L 126,60 L 126,52 L 128,45 L 132,40 L 137,36 L 143,33 L 150,31 L 157,30 L 163,30 L 168,31 L 172,33 L 175,36 L 177,40 L 178,45 L 178,50 L 177,55 L 175,58 L 172,60 L 170,62 L 169,65 L 170,68 L 173,70 L 178,72 L 185,73 L 192,73 L 200,72 L 208,70 L 215,68 L 222,66 L 228,64 L 235,62 L 242,60 L 250,58 L 258,56 L 265,54 L 272,52 L 278,50 L 285,48 L 292,47 L 300,46 L 308,46 L 315,47 L 322,48 L 328,50 L 333,52 L 337,55 L 340,58 L 342,62 L 343,67 L 342,72 L 340,77 L 337,80 L 338,83 L 342,85 L 348,87 L 355,88 L 362,88 L 368,87 L 373,85 L 377,82 L 380,78 L 382,73 L 383,68 L 385,65 L 388,63 L 392,62 L 396,62 L 400,63 L 403,65 L 405,68 L 406,72 L 407,77 L 408,82 L 410,88 L 413,93 L 416,98 L 418,103 L 420,108 L 421,113 L 420,118 L 418,123 L 415,128 L 413,133 L 412,138 L 413,143 L 416,147 L 420,150 L 422,154 L 420,158 L 416,162 L 412,166 L 408,170 L 405,175 L 402,180 L 398,183 L 393,185 L 387,186 L 380,186 L 373,185 L 365,183 L 357,181 L 348,180 L 338,180 L 328,181 L 318,183 L 308,185 L 298,186 L 288,187 L 278,186 L 268,184 L 258,182 L 248,181 L 238,181 L 228,182 L 218,183 L 208,184 L 198,184 L 188,183 L 178,182 L 168,182 L 158,183 L 148,184 L 138,184 L 128,183 L 118,181 L 108,179 L 98,178 L 88,178 L 78,179 L 68,180 L 58,181 L 48,181 L 38,180 Z"
        fill="url(#latviaFill)"
        stroke="#C89B3C"
        strokeWidth="1.2"
        strokeOpacity="0.35"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#mapShadow)"
      />
    </svg>
  );
}