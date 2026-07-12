import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOCATIONS = [
  { id: 'ventspils',  name: 'Ventspils',      clients: 1,  color: '#DC2626', cx: 130, cy: 155 },
  { id: 'liepaja',   name: 'Liepāja',        clients: 6,  color: '#2563EB', cx: 62,  cy: 345 },
  { id: 'riga',      name: 'Rīga',           clients: 16, color: '#3B82F6', cx: 465, cy: 165 },
  { id: 'jurmala',   name: 'Jūrmala',        clients: 1,  color: '#16A34A', cx: 430, cy: 195 },
  { id: 'salaspils', name: 'Salaspils',       clients: 1,  color: '#7C3AED', cx: 445, cy: 230 },
  { id: 'jelgava',   name: 'Jelgava',        clients: 39, color: '#EAB308', cx: 405, cy: 275 },
  { id: 'dobele',    name: 'Dobele',          clients: 1,  color: '#06B6D4', cx: 305, cy: 305 },
  { id: 'bauskas',   name: 'Bauskas novads',  clients: 1,  color: '#92400E', cx: 440, cy: 365 },
  { id: 'ropazi',    name: 'Ropažu novads',   clients: 1,  color: '#15803D', cx: 570, cy: 125 },
  { id: 'ogre',      name: 'Ogres novads',    clients: 2,  color: '#F97316', cx: 735, cy: 145 },
  { id: 'olaine',    name: 'Olaine',          clients: 1,  color: '#38BDF8', cx: 630, cy: 290 },
  { id: 'marupe',    name: 'Mārupes novads',  clients: 1,  color: '#7C3AED', cx: 830, cy: 345 },
  { id: 'baldone',   name: 'Baldone',         clients: 1,  color: '#EC4899', cx: 760, cy: 430 },
];

// Latvia outline – accurate contour matching the reference image
// The shape follows: Gulf of Riga indent at top-center, Kurzeme peninsula on left,
// straight southern border, and the eastern Latgale region
const LATVIA_PATH = `
M 52,335
C 48,325 40,305 42,285
C 44,265 48,250 42,230
C 36,210 30,195 28,175
C 26,158 30,145 40,132
C 52,118 68,108 88,100
C 110,92 135,86 160,82
C 185,78 210,75 235,72
C 255,68 270,64 290,58
C 308,52 320,48 340,42
C 355,38 365,34 380,28
C 392,23 400,20 415,18
C 430,16 442,20 455,28
C 462,32 468,38 475,45
L 490,55
C 498,58 505,55 515,50
C 528,44 540,38 555,32
C 572,26 588,22 608,18
C 630,14 650,15 670,20
C 690,25 708,32 725,42
C 740,50 752,58 768,68
C 782,78 795,88 808,100
C 820,112 830,125 838,140
C 846,155 852,170 858,188
C 862,205 865,222 866,240
C 866,258 864,275 860,292
C 855,310 848,325 840,340
C 832,355 822,365 810,378
C 798,390 785,400 770,412
C 755,422 742,430 728,438
C 712,445 698,450 682,455
C 662,460 642,464 620,466
C 598,468 578,468 558,466
C 538,464 520,460 502,456
C 485,452 470,448 455,444
C 438,440 425,436 410,430
C 395,424 382,418 370,410
C 358,402 348,395 335,388
C 320,380 308,374 295,368
C 278,362 265,358 250,354
C 232,350 218,348 200,346
C 180,344 162,344 142,346
C 122,348 108,350 92,352
C 78,354 66,352 58,345
C 54,340 52,338 52,335 Z
`;

const DOT_RADIUS = 10;

export default function LatviaSvgMap({ onLocationSelect, selectedLocation, hoveredLocation, onHoverLocation }) {
  const [tooltip, setTooltip] = useState(null);

  const handleEnter = useCallback((loc) => {
    setTooltip(loc);
    onHoverLocation?.(loc.id);
  }, [onHoverLocation]);

  const handleLeave = useCallback(() => {
    setTooltip(null);
    onHoverLocation?.(null);
  }, [onHoverLocation]);

  const handleClick = useCallback((loc) => {
    onLocationSelect?.(loc);
  }, [onLocationSelect]);

  const handleKeyDown = useCallback((e, loc) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(loc);
    }
  }, [handleClick]);

  const activeId = hoveredLocation || selectedLocation;

  return (
    <svg
      viewBox="0 0 960 500"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: 'auto' }}
      className="select-none"
    >
      <defs>
        {/* Glow filter for hovered dots */}
        {LOCATIONS.map((loc) => (
          <filter key={loc.id} id={`glow-${loc.id}`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor={loc.color} floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>

      {/* Latvia outline */}
      <path
        d={LATVIA_PATH}
        fill="none"
        stroke="#08233E"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Location dots */}
      {LOCATIONS.map((loc) => {
        const isActive = activeId === loc.id;
        return (
          <g key={loc.id}>
            <circle
              id={loc.id}
              cx={loc.cx}
              cy={loc.cy}
              r={DOT_RADIUS}
              fill={loc.color}
              stroke="white"
              strokeWidth="2"
              style={{
                cursor: 'pointer',
                transition: 'transform 200ms ease, filter 200ms ease',
                transform: isActive ? `scale(1.18)` : 'scale(1)',
                transformOrigin: `${loc.cx}px ${loc.cy}px`,
                filter: isActive ? `url(#glow-${loc.id})` : 'none',
              }}
              role="button"
              aria-label={`${loc.name}: ${loc.clients} ${loc.clients === 1 ? 'klients' : 'klienti'}`}
              tabIndex={0}
              onMouseEnter={() => handleEnter(loc)}
              onMouseLeave={handleLeave}
              onFocus={() => handleEnter(loc)}
              onBlur={handleLeave}
              onClick={() => handleClick(loc)}
              onKeyDown={(e) => handleKeyDown(e, loc)}
            />
          </g>
        );
      })}

      {/* SVG tooltip */}
      {tooltip && (
        <g style={{ pointerEvents: 'none' }}>
          {(() => {
            const boxW = 160;
            const boxH = 52;
            const gap = 16;
            // Position tooltip above the dot; flip if near top
            let tx = tooltip.cx - boxW / 2;
            let ty = tooltip.cy - DOT_RADIUS - gap - boxH;
            if (ty < 5) ty = tooltip.cy + DOT_RADIUS + gap;
            if (tx < 5) tx = 5;
            if (tx + boxW > 955) tx = 955 - boxW;

            return (
              <>
                <rect
                  x={tx}
                  y={ty}
                  width={boxW}
                  height={boxH}
                  rx="8"
                  fill="white"
                  stroke="#e8e0d4"
                  strokeWidth="1"
                  filter="url(#tooltip-shadow)"
                  opacity="0.97"
                />
                <text
                  x={tx + 14}
                  y={ty + 22}
                  fontFamily="'Playfair Display', serif"
                  fontSize="14"
                  fontWeight="700"
                  fill="#08233E"
                >
                  📍 {tooltip.name}
                </text>
                <text
                  x={tx + 14}
                  y={ty + 42}
                  fontFamily="'Inter', sans-serif"
                  fontSize="12"
                  fill="rgba(8,35,62,0.5)"
                >
                  {tooltip.clients} {tooltip.clients === 1 ? 'klients' : 'klienti'}
                </text>
              </>
            );
          })()}
        </g>
      )}

      {/* Tooltip shadow filter */}
      <defs>
        <filter id="tooltip-shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>
    </svg>
  );
}