import React from 'react';

export default function GoldDiamondDivider({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 120 20" fill="none" className="w-full h-full">
        <line x1="0" y1="10" x2="48" y2="10" stroke="#c9a84c" strokeWidth="0.5" opacity="0.25"/>
        <path d="M55,10 L60,4 L65,10 L60,16 Z" fill="#c9a84c" opacity="0.3"/>
        <line x1="72" y1="10" x2="120" y2="10" stroke="#c9a84c" strokeWidth="0.5" opacity="0.25"/>
        {/* Small dots */}
        <circle cx="50" cy="10" r="1" fill="#c9a84c" opacity="0.2"/>
        <circle cx="70" cy="10" r="1" fill="#c9a84c" opacity="0.2"/>
      </svg>
    </div>
  );
}