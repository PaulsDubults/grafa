import React from 'react';

export default function LightFeather({ className = '', flip = false }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <svg viewBox="0 0 120 40" fill="none" className="w-full h-full">
        {/* Horizontal light feather */}
        <path d="M8,20 Q40,18 80,20 Q100,21 112,20" stroke="#c9a84c" strokeWidth="0.5" opacity="0.2" fill="none"/>
        {/* Top barbs */}
        <path d="M20,20 Q24,14 30,15" stroke="#c9a84c" strokeWidth="0.3" opacity="0.15" fill="none"/>
        <path d="M40,20 Q44,12 52,14" stroke="#c9a84c" strokeWidth="0.3" opacity="0.15" fill="none"/>
        <path d="M60,20 Q64,13 72,15" stroke="#c9a84c" strokeWidth="0.3" opacity="0.12" fill="none"/>
        <path d="M80,20 Q84,14 90,16" stroke="#c9a84c" strokeWidth="0.3" opacity="0.1" fill="none"/>
        {/* Bottom barbs */}
        <path d="M25,20 Q28,26 34,24" stroke="#c9a84c" strokeWidth="0.3" opacity="0.15" fill="none"/>
        <path d="M50,20 Q52,27 58,25" stroke="#c9a84c" strokeWidth="0.3" opacity="0.12" fill="none"/>
        <path d="M70,20 Q72,26 78,24" stroke="#c9a84c" strokeWidth="0.3" opacity="0.1" fill="none"/>
      </svg>
    </div>
  );
}