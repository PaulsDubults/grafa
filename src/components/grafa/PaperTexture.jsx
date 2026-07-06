import React from 'react';

export default function PaperTexture({ id = 'paperTex' }) {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
      <svg width="100%" height="100%">
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}