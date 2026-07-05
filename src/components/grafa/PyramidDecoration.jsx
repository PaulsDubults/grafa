import React from 'react';

export default function PyramidDecoration({ className = '', opacity = 0.06 }) {
  return (
    <svg
      viewBox="0 0 300 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      <path
        d="M150,20 L260,300 L40,300 Z"
        stroke="#c9a84c"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M150,20 L150,300"
        stroke="#c9a84c"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <path
        d="M95,160 L205,160"
        stroke="#c9a84c"
        strokeWidth="0.3"
        opacity="0.4"
      />
      <path
        d="M70,230 L230,230"
        stroke="#c9a84c"
        strokeWidth="0.3"
        opacity="0.4"
      />
    </svg>
  );
}