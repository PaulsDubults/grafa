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
          strokeWidth="0.5"
          opacity="0.3"
          fill="none"
        />
      </svg>
    </div>
  );
}