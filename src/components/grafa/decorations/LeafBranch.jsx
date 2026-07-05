import React from 'react';

export default function LeafBranch({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 80 24" fill="none" className="w-full h-full">
        {/* Stem */}
        <path d="M10,12 Q40,10 70,12" stroke="#c9a84c" strokeWidth="0.6" opacity="0.3" fill="none"/>
        {/* Leaves */}
        <path d="M20,12 Q22,6 28,8" stroke="#c9a84c" strokeWidth="0.5" opacity="0.25" fill="none"/>
        <path d="M28,12 Q30,6 36,7" stroke="#c9a84c" strokeWidth="0.5" opacity="0.25" fill="none"/>
        <path d="M36,12 Q38,6 44,7" stroke="#c9a84c" strokeWidth="0.5" opacity="0.22" fill="none"/>
        <path d="M44,12 Q46,7 52,8" stroke="#c9a84c" strokeWidth="0.5" opacity="0.22" fill="none"/>
        <path d="M52,12 Q54,7 60,9" stroke="#c9a84c" strokeWidth="0.4" opacity="0.2" fill="none"/>
        {/* Bottom leaves */}
        <path d="M24,12 Q26,18 32,16" stroke="#c9a84c" strokeWidth="0.5" opacity="0.2" fill="none"/>
        <path d="M40,12 Q42,18 48,16" stroke="#c9a84c" strokeWidth="0.5" opacity="0.2" fill="none"/>
        <path d="M56,12 Q58,17 62,15" stroke="#c9a84c" strokeWidth="0.4" opacity="0.18" fill="none"/>
      </svg>
    </div>
  );
}