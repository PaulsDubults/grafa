import React from 'react';

export default function WatercolorBlob({ className = '', color = 'blue' }) {
  const fills = {
    blue: { main: '#a8c4d8', secondary: '#c4d8e8' },
    pink: { main: '#d8b8c4', secondary: '#e8d0d8' },
    gold: { main: '#d8c898', secondary: '#e8dab8' },
  };
  const c = fills[color] || fills.blue;

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 80 70" fill="none" className="w-full h-full">
        <defs>
          <filter id={`blobBlur-${color}`}>
            <feGaussianBlur stdDeviation="6"/>
          </filter>
        </defs>
        <ellipse cx="40" cy="35" rx="32" ry="26" fill={c.main} opacity="0.2" filter={`url(#blobBlur-${color})`}/>
        <ellipse cx="45" cy="30" rx="22" ry="18" fill={c.secondary} opacity="0.15" filter={`url(#blobBlur-${color})`}/>
        {/* Gold outline */}
        <path d="M20,35 Q30,15 50,20 Q70,25 65,40 Q60,58 40,55 Q18,52 20,35" stroke="#c9a84c" strokeWidth="0.4" opacity="0.2" fill="none"/>
      </svg>
    </div>
  );
}