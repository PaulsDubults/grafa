import React from 'react';

export default function InkFeather({ className = '', flip = false }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <svg viewBox="0 0 60 140" fill="none" className="w-full h-full">
        {/* Feather shaft */}
        <path d="M30,8 Q32,40 31,90 Q30,110 28,130" stroke="#1e3a5f" strokeWidth="0.6" opacity="0.35" fill="none"/>
        {/* Left barbs */}
        <path d="M30,15 Q20,20 12,18" stroke="#1e3a5f" strokeWidth="0.4" opacity="0.2" fill="none"/>
        <path d="M30,25 Q18,30 8,26" stroke="#1e3a5f" strokeWidth="0.4" opacity="0.2" fill="none"/>
        <path d="M31,38 Q19,44 6,38" stroke="#1e3a5f" strokeWidth="0.4" opacity="0.18" fill="none"/>
        <path d="M31,52 Q20,58 10,52" stroke="#1e3a5f" strokeWidth="0.35" opacity="0.15" fill="none"/>
        <path d="M31,66 Q22,72 14,66" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.12" fill="none"/>
        {/* Right barbs */}
        <path d="M30,15 Q40,18 48,14" stroke="#1e3a5f" strokeWidth="0.4" opacity="0.2" fill="none"/>
        <path d="M30,25 Q42,28 52,22" stroke="#1e3a5f" strokeWidth="0.4" opacity="0.2" fill="none"/>
        <path d="M31,38 Q44,42 54,35" stroke="#1e3a5f" strokeWidth="0.4" opacity="0.18" fill="none"/>
        <path d="M31,52 Q42,56 50,50" stroke="#1e3a5f" strokeWidth="0.35" opacity="0.15" fill="none"/>
        <path d="M31,66 Q40,70 46,64" stroke="#1e3a5f" strokeWidth="0.3" opacity="0.12" fill="none"/>
        {/* Ink drop */}
        <ellipse cx="28" cy="134" rx="3.5" ry="4" fill="#1e3a5f" opacity="0.25"/>
        <path d="M28,126 Q30,130 28,134 Q26,130 28,126" fill="#1e3a5f" opacity="0.3"/>
      </svg>
    </div>
  );
}