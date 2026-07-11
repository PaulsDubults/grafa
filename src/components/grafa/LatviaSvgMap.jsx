import React from 'react';

const MAP_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/1afe6f516_image.png";

export default function LatviaSvgMap({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={MAP_IMG}
        alt="Latvijas karte"
        className="w-full h-full object-contain opacity-40"
        draggable={false}
      />
    </div>
  );
}