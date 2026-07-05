import React from 'react';

export default function FeatherDecoration({ className = '', opacity = 0.08 }) {
  return (
    <svg
      viewBox="0 0 200 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      <path
        d="M100,10 Q95,60 90,120 Q85,180 80,240 Q75,300 85,360 Q90,400 100,490"
        stroke="#1e3a5f"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M100,10 Q130,40 140,80 Q150,120 145,160 Q140,200 130,240 Q120,280 105,320 Q95,360 90,400 Q88,430 100,490"
        stroke="#1e3a5f"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M100,10 Q70,40 60,80 Q50,120 55,160 Q60,200 70,240 Q80,280 95,320 Q105,360 110,400 Q112,430 100,490"
        stroke="#1e3a5f"
        strokeWidth="0.5"
        fill="none"
      />
      {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420].map((y, i) => (
        <g key={i}>
          <path
            d={`M100,${y} Q${130 + i * 2},${y - 10} ${140 + i},${y - 5}`}
            stroke="#1e3a5f"
            strokeWidth="0.3"
            fill="none"
          />
          <path
            d={`M100,${y} Q${70 - i * 2},${y - 10} ${60 - i},${y - 5}`}
            stroke="#1e3a5f"
            strokeWidth="0.3"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}