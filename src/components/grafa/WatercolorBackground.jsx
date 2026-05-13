import React from 'react';

export default function WatercolorBackground({ variant = 'default', className = '' }) {
  const configs = {
    hero: [
      { cx: '15%', cy: '25%', r: '18%', color: 'rgba(147,112,219,0.12)' },
      { cx: '75%', cy: '15%', r: '22%', color: 'rgba(72,166,167,0.10)' },
      { cx: '85%', cy: '65%', r: '16%', color: 'rgba(100,149,237,0.09)' },
      { cx: '25%', cy: '80%', r: '20%', color: 'rgba(255,193,37,0.08)' },
      { cx: '50%', cy: '50%', r: '25%', color: 'rgba(72,209,204,0.06)' },
    ],
    approach: [
      { cx: '80%', cy: '20%', r: '22%', color: 'rgba(147,112,219,0.10)' },
      { cx: '10%', cy: '60%', r: '18%', color: 'rgba(72,209,204,0.09)' },
      { cx: '60%', cy: '80%', r: '20%', color: 'rgba(100,149,237,0.08)' },
      { cx: '30%', cy: '30%', r: '15%', color: 'rgba(144,190,109,0.07)' },
      { cx: '90%', cy: '70%', r: '14%', color: 'rgba(255,165,0,0.06)' },
    ],
    services: [
      { cx: '20%', cy: '15%', r: '20%', color: 'rgba(72,166,167,0.11)' },
      { cx: '70%', cy: '30%', r: '18%', color: 'rgba(147,112,219,0.09)' },
      { cx: '40%', cy: '75%', r: '22%', color: 'rgba(100,149,237,0.10)' },
      { cx: '85%', cy: '85%', r: '16%', color: 'rgba(255,193,37,0.07)' },
      { cx: '5%', cy: '40%', r: '14%', color: 'rgba(144,190,109,0.08)' },
    ],
    contact: [
      { cx: '75%', cy: '25%', r: '20%', color: 'rgba(147,112,219,0.10)' },
      { cx: '15%', cy: '70%', r: '18%', color: 'rgba(72,209,204,0.09)' },
      { cx: '50%', cy: '40%', r: '22%', color: 'rgba(100,149,237,0.07)' },
      { cx: '30%', cy: '15%', r: '16%', color: 'rgba(255,193,37,0.08)' },
      { cx: '85%', cy: '75%', r: '14%', color: 'rgba(255,165,0,0.06)' },
    ],
    default: [
      { cx: '50%', cy: '50%', r: '20%', color: 'rgba(147,112,219,0.08)' },
      { cx: '20%', cy: '30%', r: '16%', color: 'rgba(72,209,204,0.07)' },
      { cx: '80%', cy: '70%', r: '18%', color: 'rgba(100,149,237,0.06)' },
    ],
  };

  const blobs = configs[variant] || configs.default;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`wc-blur-${variant}`}>
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>
        {blobs.map((blob, i) => (
          <ellipse
            key={i}
            cx={blob.cx}
            cy={blob.cy}
            rx={blob.r}
            ry={blob.r}
            fill={blob.color}
            filter={`url(#wc-blur-${variant})`}
          />
        ))}
      </svg>
    </div>
  );
}