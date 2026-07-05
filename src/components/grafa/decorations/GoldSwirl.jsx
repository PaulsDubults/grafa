import React from 'react';

export default function GoldSwirl({ className = '', variant = 1 }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 200 30" fill="none" className="w-full h-full" preserveAspectRatio="none">
        {variant === 1 ? (
          <path d="M0,15 C30,5 60,25 100,12 C140,0 170,20 200,15" stroke="#c9a84c" strokeWidth="0.8" opacity="0.25" fill="none"/>
        ) : (
          <>
            <path d="M0,20 C50,30 80,5 120,15 C160,25 180,8 200,12" stroke="#c9a84c" strokeWidth="0.7" opacity="0.2" fill="none"/>
            <path d="M10,18 C40,28 90,2 140,16 C170,22 190,10 200,14" stroke="#c9a84c" strokeWidth="0.4" opacity="0.15" fill="none"/>
          </>
        )}
      </svg>
    </div>
  );
}