import React from 'react';

export default function WatercolorBackground({ variant = 'default', className = '' }) {
  const configs = {
    hero: [
      { cx: '10%', cy: '15%', r: '20%', color: 'rgba(201,168,76,0.08)' },
      { cx: '85%', cy: '10%', r: '25%', color: 'rgba(201,168,76,0.06)' },
      { cx: '70%', cy: '70%', r: '18%', color: 'rgba(30,58,95,0.05)' },
      { cx: '20%', cy: '85%', r: '22%', color: 'rgba(201,168,76,0.05)' },
    ],
    approach: [
      { cx: '85%', cy: '15%', r: '22%', color: 'rgba(201,168,76,0.07)' },
      { cx: '5%', cy: '50%', r: '18%', color: 'rgba(30,58,95,0.04)' },
      { cx: '70%', cy: '80%', r: '20%', color: 'rgba(201,168,76,0.05)' },
      { cx: '30%', cy: '25%', r: '15%', color: 'rgba(201,168,76,0.06)' },
    ],
    services: [
      { cx: '15%', cy: '10%', r: '20%', color: 'rgba(30,58,95,0.05)' },
      { cx: '80%', cy: '25%', r: '18%', color: 'rgba(201,168,76,0.07)' },
      { cx: '40%', cy: '80%', r: '22%', color: 'rgba(201,168,76,0.05)' },
      { cx: '90%', cy: '85%', r: '16%', color: 'rgba(30,58,95,0.04)' },
    ],
    contact: [
      { cx: '80%', cy: '20%', r: '20%', color: 'rgba(201,168,76,0.06)' },
      { cx: '10%', cy: '70%', r: '18%', color: 'rgba(30,58,95,0.04)' },
      { cx: '50%', cy: '40%', r: '22%', color: 'rgba(201,168,76,0.05)' },
    ],
    map: [
      { cx: '20%', cy: '20%', r: '20%', color: 'rgba(30,58,95,0.05)' },
      { cx: '80%', cy: '70%', r: '22%', color: 'rgba(201,168,76,0.06)' },
      { cx: '50%', cy: '50%', r: '18%', color: 'rgba(201,168,76,0.04)' },
    ],
    default: [
      { cx: '50%', cy: '50%', r: '20%', color: 'rgba(201,168,76,0.06)' },
      { cx: '20%', cy: '30%', r: '16%', color: 'rgba(30,58,95,0.04)' },
      { cx: '80%', cy: '70%', r: '18%', color: 'rgba(201,168,76,0.05)' },
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
            <feGaussianBlur stdDeviation="90" />
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