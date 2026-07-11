import React from 'react';

const MAP_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/1afe6f516_image.png";

// The image is rendered as a block-level <img> with width:100%.
// Its height is determined by its natural aspect ratio (450×297).
// Because there is NO object-fit:contain, the rendered image
// exactly fills the container width and scales height proportionally.
// Therefore percentage-based markers placed on a sibling overlay
// with `inset-0` map 1:1 to pixel coordinates on the image.

export default function LatviaSvgMap({ className = "", opacity = 0.4, children }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={MAP_IMG}
        alt="Latvijas karte"
        className="block w-full h-auto"
        style={{ opacity }}
        draggable={false}
      />
      {/* Marker overlay — exact same size as the image */}
      {children && (
        <div className="absolute inset-0">{children}</div>
      )}
    </div>
  );
}