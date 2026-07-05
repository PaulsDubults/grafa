import React from 'react';

// Individual decorative assets from brand kit
const ASSETS = {
  featherCircle: "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/c17caa8a7_Screenshot2026-07-05at134356.png",
  featherLarge: "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/dc2e8938e_Screenshot2026-07-05at132449.png",
  featherMedium: "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/bde83f3be_Screenshot2026-07-05at134224.png",
  pyramid: "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/92fbae975_Screenshot2026-07-05at134244.png",
  pyramidFeather: "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/27526f54c_Screenshot2026-07-05at134308.png",
  featherCircle2: "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/1f801993a_Screenshot2026-07-05at134324.png",
  featherGoldSwirl: "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/def825907_Screenshot2026-07-05at134340.png",
};

export default function DecorativeAsset({ asset, className = "", style = {}, opacity = 0.12 }) {
  const src = ASSETS[asset];
  if (!src) return null;

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none absolute ${className}`}
      style={{ opacity, ...style }}
      draggable={false}
    />
  );
}

export { ASSETS };