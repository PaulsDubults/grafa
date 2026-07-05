import React from 'react';

export default function GoldStarburst({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        {/* 8-pointed star */}
        <line x1="20" y1="4" x2="20" y2="36" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
        <line x1="4" y1="20" x2="36" y2="20" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
        <line x1="8" y1="8" x2="32" y2="32" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3"/>
        <line x1="32" y1="8" x2="8" y2="32" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3"/>
        {/* Center dot */}
        <circle cx="20" cy="20" r="1.5" fill="#c9a84c" opacity="0.5"/>
      </svg>
    </div>
  );
}