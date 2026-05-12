import React from 'react';

export default function FeatherSVG({ className = "", style = {} }) {
  return (
    <svg 
      viewBox="0 0 200 400" 
      className={className} 
      style={style}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M100 10 Q95 50 90 100 Q85 150 82 200 Q80 250 85 300 Q88 350 95 390" 
        stroke="url(#featherGrad)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Left barbs */}
      <path d="M90 60 Q60 45 25 35" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.4" />
      <path d="M88 90 Q55 72 15 58" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.35" />
      <path d="M86 120 Q50 100 10 85" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.3" />
      <path d="M85 150 Q52 135 15 120" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.3" />
      <path d="M84 180 Q55 168 20 155" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.25" />
      <path d="M83 210 Q58 200 28 190" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.25" />
      <path d="M83 240 Q60 232 35 222" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.2" />
      {/* Right barbs */}
      <path d="M105 50 Q135 38 170 30" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.4" />
      <path d="M103 80 Q138 65 178 52" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.35" />
      <path d="M100 110 Q140 95 185 80" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.3" />
      <path d="M98 140 Q138 128 180 115" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.3" />
      <path d="M96 170 Q135 160 175 148" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.25" />
      <path d="M94 200 Q130 192 168 182" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.25" />
      <path d="M92 230 Q125 222 160 214" stroke="url(#featherGrad)" strokeWidth="0.8" opacity="0.2" />
      {/* Secondary detail lines */}
      <path d="M92 70 Q65 58 35 48" stroke="url(#featherGrad)" strokeWidth="0.5" opacity="0.2" />
      <path d="M104 65 Q130 52 162 42" stroke="url(#featherGrad)" strokeWidth="0.5" opacity="0.2" />
      <defs>
        <linearGradient id="featherGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7B4FA2" />
          <stop offset="25%" stopColor="#3B82C4" />
          <stop offset="50%" stopColor="#2BA8A4" />
          <stop offset="75%" stopColor="#5CB85C" />
          <stop offset="100%" stopColor="#F0C040" />
        </linearGradient>
      </defs>
    </svg>
  );
}