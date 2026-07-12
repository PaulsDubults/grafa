import React from 'react';

const BG_TEXTURE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/47e9ea892_image.png";

export default function WatercolorBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ background: '#FAF5EF' }}>
      {/* Base warm cream */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(160deg, #FAF5EF 0%, #F8EDE4 25%, #FAF0EA 50%, #F6EDE6 75%, #F8F0E8 100%)'
      }} />

      {/* Watercolor texture image overlay — see-through on top of existing background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${BG_TEXTURE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.4,
        mixBlendMode: 'multiply',
      }} />

      {/* Soft peach/salmon wash — top right corner */}
      <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[55%]" style={{
        background: 'radial-gradient(ellipse at 75% 25%, rgba(235, 170, 145, 0.35) 0%, rgba(235, 170, 145, 0.20) 30%, rgba(235, 170, 145, 0.08) 50%, transparent 70%)',
      }} />

      {/* Warm rose/pink wash — center */}
      <div className="absolute top-[20%] right-[5%] w-[65%] h-[50%]" style={{
        background: 'radial-gradient(ellipse at 60% 45%, rgba(220, 140, 140, 0.28) 0%, rgba(220, 140, 140, 0.14) 30%, rgba(220, 140, 140, 0.05) 50%, transparent 70%)',
      }} />

      {/* Orange/peach glow — top center-left */}
      <div className="absolute top-[-8%] left-[20%] w-[55%] h-[45%]" style={{
        background: 'radial-gradient(ellipse at 45% 35%, rgba(242, 185, 135, 0.30) 0%, rgba(242, 185, 135, 0.15) 30%, rgba(242, 185, 135, 0.05) 50%, transparent 65%)',
      }} />

      {/* Lavender/mauve wash — bottom right */}
      <div className="absolute bottom-[-5%] right-[5%] w-[60%] h-[45%]" style={{
        background: 'radial-gradient(ellipse at 65% 75%, rgba(170, 140, 185, 0.25) 0%, rgba(170, 140, 185, 0.12) 30%, rgba(170, 140, 185, 0.04) 50%, transparent 65%)',
      }} />

      {/* Rose blush — bottom left */}
      <div className="absolute bottom-[5%] left-[-5%] w-[55%] h-[50%]" style={{
        background: 'radial-gradient(ellipse at 25% 70%, rgba(215, 150, 160, 0.26) 0%, rgba(215, 150, 160, 0.12) 30%, rgba(215, 150, 160, 0.04) 45%, transparent 65%)',
      }} />

      {/* Soft coral/salmon mid-left */}
      <div className="absolute top-[35%] left-[-8%] w-[50%] h-[40%]" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(230, 160, 145, 0.22) 0%, rgba(230, 160, 145, 0.09) 35%, transparent 60%)',
      }} />

      {/* Faint purple accent — bottom center */}
      <div className="absolute bottom-[-10%] left-[30%] w-[45%] h-[35%]" style={{
        background: 'radial-gradient(ellipse at 50% 85%, rgba(160, 130, 175, 0.20) 0%, rgba(160, 130, 175, 0.08) 30%, transparent 55%)',
      }} />
    </div>
  );
}