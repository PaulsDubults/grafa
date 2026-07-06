import React from 'react';

export default function WatercolorBackground({ variant = 'default', className = '' }) {
  const configs = {
    hero: [
      { cx: '10%', cy: '15%', r: '20%', color: 'rgba(201,168,76,0.08)' },
      { cx: '85%', cy: '10%', r: '25%', color: 'rgba(230,185,140,0.07)' },
      { cx: '70%', cy: '70%', r: '18%', color: 'rgba(30,58,95,0.04)' },
      { cx: '20%', cy: '85%', r: '22%', color: 'rgba(230,190,150,0.06)' },
    ],
    services: [
      { cx: '15%', cy: '10%', r: '22%', color: 'rgba(230,185,140,0.06)' },
      { cx: '80%', cy: '25%', r: '20%', color: 'rgba(201,168,76,0.07)' },
      { cx: '40%', cy: '80%', r: '24%', color: 'rgba(230,190,150,0.05)' },
      { cx: '92%', cy: '75%', r: '18%', color: 'rgba(201,168,76,0.04)' },
      { cx: '5%', cy: '55%', r: '16%', color: 'rgba(30,58,95,0.03)' },
    ],
    approach: [
      { cx: '85%', cy: '15%', r: '22%', color: 'rgba(201,168,76,0.07)' },
      { cx: '5%', cy: '50%', r: '20%', color: 'rgba(230,185,140,0.06)' },
      { cx: '70%', cy: '80%', r: '20%', color: 'rgba(230,190,150,0.05)' },
      { cx: '30%', cy: '25%', r: '16%', color: 'rgba(201,168,76,0.06)' },
      { cx: '50%', cy: '60%', r: '14%', color: 'rgba(30,58,95,0.03)' },
    ],
    contact: [
      { cx: '80%', cy: '20%', r: '22%', color: 'rgba(201,168,76,0.06)' },
      { cx: '10%', cy: '70%', r: '18%', color: 'rgba(230,185,140,0.05)' },
      { cx: '50%', cy: '40%', r: '24%', color: 'rgba(230,190,150,0.04)' },
      { cx: '25%', cy: '15%', r: '16%', color: 'rgba(201,168,76,0.05)' },
    ],
    knowledge: [
      { cx: '20%', cy: '15%', r: '20%', color: 'rgba(201,168,76,0.07)' },
      { cx: '75%', cy: '30%', r: '18%', color: 'rgba(230,185,140,0.06)' },
      { cx: '45%', cy: '75%', r: '22%', color: 'rgba(230,190,150,0.05)' },
      { cx: '90%', cy: '80%', r: '16%', color: 'rgba(201,168,76,0.04)' },
    ],
    process: [
      { cx: '10%', cy: '20%', r: '20%', color: 'rgba(230,185,140,0.06)' },
      { cx: '85%', cy: '40%', r: '22%', color: 'rgba(201,168,76,0.06)' },
      { cx: '30%', cy: '70%', r: '18%', color: 'rgba(230,190,150,0.05)' },
      { cx: '65%', cy: '10%', r: '16%', color: 'rgba(201,168,76,0.05)' },
    ],
    about: [
      { cx: '75%', cy: '15%', r: '22%', color: 'rgba(201,168,76,0.06)' },
      { cx: '15%', cy: '45%', r: '20%', color: 'rgba(230,185,140,0.05)' },
      { cx: '55%', cy: '75%', r: '24%', color: 'rgba(230,190,150,0.04)' },
      { cx: '90%', cy: '60%', r: '16%', color: 'rgba(30,58,95,0.03)' },
    ],
    map: [
      { cx: '20%', cy: '20%', r: '20%', color: 'rgba(30,58,95,0.04)' },
      { cx: '80%', cy: '70%', r: '22%', color: 'rgba(201,168,76,0.06)' },
      { cx: '50%', cy: '50%', r: '18%', color: 'rgba(230,190,150,0.04)' },
    ],
    default: [
      { cx: '50%', cy: '50%', r: '20%', color: 'rgba(201,168,76,0.06)' },
      { cx: '20%', cy: '30%', r: '16%', color: 'rgba(230,185,140,0.05)' },
      { cx: '80%', cy: '70%', r: '18%', color: 'rgba(230,190,150,0.04)' },
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