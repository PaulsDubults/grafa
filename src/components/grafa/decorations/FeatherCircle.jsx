import React from 'react';

export default function FeatherCircle({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
        {/* Gold circle */}
        <circle cx="30" cy="30" r="24" stroke="#c9a84c" strokeWidth="0.6" opacity="0.25" fill="none"/>
        {/* Mini feather inside */}
        <path d="M30,16 Q31,24 30,38" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.2" fill="none"/>
        <path d="M30,20 Q25,22 22,20" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.15" fill="none"/>
        <path d="M30,26 Q25,28 21,26" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.12" fill="none"/>
        <path d="M30,20 Q35,22 38,20" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.15" fill="none"/>
        <path d="M30,26 Q35,28 39,26" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.12" fill="none"/>
        {/* Ink drop */}
        <ellipse cx="30" cy="41" rx="2" ry="2.5" fill="#1e3a5f" opacity="0.15"/>
      </svg>
    </div>
  );
}