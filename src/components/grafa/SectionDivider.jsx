import React from 'react';

export default function SectionDivider({ flip = false, color = '#f5f0e8' }) {
  return (
    <div className={`relative w-full overflow-hidden ${flip ? 'rotate-180' : ''}`} style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
        <path
          d="M0,50 C360,70 720,20 1080,50 C1260,65 1380,45 1440,50"
          stroke="#c9a84c"
          strokeWidth="0.6"
          opacity="0.25"
          fill="none"
        />
        {/* Extra subtle peach wave */}
        <path
          d="M0,55 C200,65 500,30 800,55 C1000,68 1200,40 1440,55"
          stroke="#e6b98c"
          strokeWidth="0.4"
          opacity="0.15"
          fill="none"
        />
      </svg>
    </div>
  );
}