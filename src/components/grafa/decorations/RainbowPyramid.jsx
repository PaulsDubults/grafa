import React from 'react';

export default function RainbowPyramid({ className = '', small = false }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 100 110" fill="none" className="w-full h-full">
        {/* Pyramid layers — watercolor rainbow gradient */}
        <path d="M50,8 L58,28 L42,28 Z" fill="#e8726a" opacity="0.35"/>
        <path d="M42,28 L58,28 L64,42 L36,42 Z" fill="#e8a56a" opacity="0.3"/>
        <path d="M36,42 L64,42 L70,56 L30,56 Z" fill="#e8d56a" opacity="0.28"/>
        <path d="M30,56 L70,56 L76,70 L24,70 Z" fill="#7ec87e" opacity="0.25"/>
        <path d="M24,70 L76,70 L82,84 L18,84 Z" fill="#6aa8d0" opacity="0.25"/>
        <path d="M18,84 L82,84 L88,98 L12,98 Z" fill="#9178b8" opacity="0.22"/>
        {/* Gold outline accent */}
        <path d="M50,8 L88,98 L12,98 Z" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" fill="none"/>
        {/* Gold sparkles */}
        <circle cx="44" cy="5" r="0.8" fill="#c9a84c" opacity="0.5"/>
        <circle cx="58" cy="12" r="0.6" fill="#c9a84c" opacity="0.4"/>
        <circle cx="90" cy="96" r="0.7" fill="#c9a84c" opacity="0.35"/>
        {/* Gold orbit ring */}
        {!small && <ellipse cx="50" cy="60" rx="48" ry="12" stroke="#c9a84c" strokeWidth="0.4" opacity="0.2" fill="none"/>}
      </svg>
    </div>
  );
}