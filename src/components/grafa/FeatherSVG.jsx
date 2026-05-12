import React from 'react';

export default function FeatherSVG({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 220 450" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main quill shaft */}
      <path 
        d="M112 8 Q108 55 104 110 Q100 170 97 230 Q95 290 98 350 Q100 390 106 440" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round"
        className="ink-draw"
        opacity="0.7"
      />
      {/* Left barbs - flowing, elegant */}
      <path d="M106 45 Q72 28 30 18" stroke="currentColor" strokeWidth="0.7" opacity="0.35" className="ink-draw" style={{animationDelay: '0.3s'}} />
      <path d="M104 75 Q65 55 18 40" stroke="currentColor" strokeWidth="0.7" opacity="0.3" className="ink-draw" style={{animationDelay: '0.5s'}} />
      <path d="M102 105 Q58 82 8 65" stroke="currentColor" strokeWidth="0.7" opacity="0.28" className="ink-draw" style={{animationDelay: '0.7s'}} />
      <path d="M100 135 Q55 115 12 98" stroke="currentColor" strokeWidth="0.7" opacity="0.25" className="ink-draw" style={{animationDelay: '0.9s'}} />
      <path d="M99 165 Q58 148 18 132" stroke="currentColor" strokeWidth="0.6" opacity="0.22" className="ink-draw" style={{animationDelay: '1.1s'}} />
      <path d="M98 195 Q60 180 25 165" stroke="currentColor" strokeWidth="0.6" opacity="0.2" className="ink-draw" style={{animationDelay: '1.3s'}} />
      <path d="M97 225 Q64 212 32 198" stroke="currentColor" strokeWidth="0.6" opacity="0.18" className="ink-draw" style={{animationDelay: '1.5s'}} />
      <path d="M97 255 Q68 244 40 232" stroke="currentColor" strokeWidth="0.5" opacity="0.15" className="ink-draw" style={{animationDelay: '1.7s'}} />
      {/* Right barbs */}
      <path d="M116 38 Q148 22 188 14" stroke="currentColor" strokeWidth="0.7" opacity="0.35" className="ink-draw" style={{animationDelay: '0.4s'}} />
      <path d="M114 68 Q152 50 198 36" stroke="currentColor" strokeWidth="0.7" opacity="0.3" className="ink-draw" style={{animationDelay: '0.6s'}} />
      <path d="M112 98 Q155 78 205 62" stroke="currentColor" strokeWidth="0.7" opacity="0.28" className="ink-draw" style={{animationDelay: '0.8s'}} />
      <path d="M110 128 Q152 112 200 96" stroke="currentColor" strokeWidth="0.7" opacity="0.25" className="ink-draw" style={{animationDelay: '1.0s'}} />
      <path d="M108 158 Q148 144 194 130" stroke="currentColor" strokeWidth="0.6" opacity="0.22" className="ink-draw" style={{animationDelay: '1.2s'}} />
      <path d="M106 188 Q142 176 185 162" stroke="currentColor" strokeWidth="0.6" opacity="0.2" className="ink-draw" style={{animationDelay: '1.4s'}} />
      <path d="M104 218 Q138 207 175 195" stroke="currentColor" strokeWidth="0.6" opacity="0.18" className="ink-draw" style={{animationDelay: '1.6s'}} />
      <path d="M103 248 Q132 238 165 227" stroke="currentColor" strokeWidth="0.5" opacity="0.15" className="ink-draw" style={{animationDelay: '1.8s'}} />
      {/* Fine secondary detail barbs */}
      <path d="M105 58 Q78 45 45 36" stroke="currentColor" strokeWidth="0.4" opacity="0.15" className="ink-draw" style={{animationDelay: '0.6s'}} />
      <path d="M115 52 Q140 38 175 28" stroke="currentColor" strokeWidth="0.4" opacity="0.15" className="ink-draw" style={{animationDelay: '0.7s'}} />
      <path d="M101 148 Q70 136 38 124" stroke="currentColor" strokeWidth="0.4" opacity="0.12" className="ink-draw" style={{animationDelay: '1.2s'}} />
      <path d="M109 142 Q142 130 180 118" stroke="currentColor" strokeWidth="0.4" opacity="0.12" className="ink-draw" style={{animationDelay: '1.3s'}} />
    </svg>
  );
}