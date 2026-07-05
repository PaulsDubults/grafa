import React from 'react';

export default function TriangleOutline({ className = '', withLines = false }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 70 80" fill="none" className="w-full h-full">
        <path d="M35,10 L62,70 L8,70 Z" stroke="#c9a84c" strokeWidth="0.6" opacity="0.2" fill="none"/>
        {withLines && (
          <>
            <line x1="20" y1="50" x2="50" y2="50" stroke="#c9a84c" strokeWidth="0.4" opacity="0.15"/>
            <line x1="26" y1="60" x2="44" y2="60" stroke="#c9a84c" strokeWidth="0.4" opacity="0.12"/>
            <line x1="15" y1="40" x2="55" y2="40" stroke="#c9a84c" strokeWidth="0.3" opacity="0.1"/>
          </>
        )}
      </svg>
    </div>
  );
}