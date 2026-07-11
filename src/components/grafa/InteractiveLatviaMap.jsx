import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/253847698_ChatGPTImageJul11202601_33_39PM.png";

// Hotspot positions as % of image dimensions, placed directly over each green dot
const hotspots = [
  { id: 1, x: 10.5, y: 24, name: "Ventspils", count: 1 },
  { id: 2, x: 4.8, y: 56, name: "Liepāja", count: 6 },
  { id: 3, x: 44.5, y: 29, name: "Rīga", count: 16 },
  { id: 4, x: 37, y: 41, name: "Jelgava", count: 30 },
  { id: 5, x: 29.5, y: 49, name: "Jelgavas novads", count: 9 },
  { id: 6, x: 36, y: 49, name: "Dobele", count: 1 },
  { id: 7, x: 38, y: 33.5, name: "Jūrmala", count: 1 },
  { id: 8, x: 43.5, y: 37, name: "Mārupes novads", count: 1 },
  { id: 9, x: 40, y: 37, name: "Olaine", count: 1 },
  { id: 10, x: 42, y: 62, name: "Baldone", count: 1 },
  { id: 11, x: 46, y: 72, name: "Bauskas novads", count: 1 },
  { id: 12, x: 48.5, y: 35, name: "Ogres novads", count: 2 },
  { id: 13, x: 53.5, y: 19, name: "Ropažu novads", count: 1 },
];

function MapTooltip({ hotspot, containerRect }) {
  const label = hotspot.count === 1 ? "klients" : "klienti";
  const tooltipRef = useRef(null);
  const [adjust, setAdjust] = useState({ flipY: false, flipX: 0 });

  useEffect(() => {
    if (!tooltipRef.current || !containerRect) return;
    const tt = tooltipRef.current.getBoundingClientRect();
    const newAdjust = { flipY: false, flipX: 0 };

    // If tooltip goes above container, flip below
    if (tt.top < containerRect.top) {
      newAdjust.flipY = true;
    }
    // If tooltip goes left of container
    if (tt.left < containerRect.left) {
      newAdjust.flipX = containerRect.left - tt.left + 8;
    }
    // If tooltip goes right of container
    if (tt.right > containerRect.right) {
      newAdjust.flipX = containerRect.right - tt.right - 8;
    }

    setAdjust(newAdjust);
  }, [containerRect, hotspot.id]);

  const positionStyle = adjust.flipY
    ? { left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: `translate(calc(-50% + ${adjust.flipX}px), 80%)` }
    : { left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: `translate(calc(-50% + ${adjust.flipX}px), calc(-100% - 12px))` };

  return (
    <motion.div
      ref={tooltipRef}
      className="absolute z-30 pointer-events-none"
      style={positionStyle}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {adjust.flipY && (
        <div className="flex justify-center mb-[-1px]">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white"
            style={{ filter: 'drop-shadow(0 -1px 1px rgba(0,0,0,0.04))' }}
          />
        </div>
      )}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] px-4 py-2.5 whitespace-nowrap">
        <p className="font-heading text-[13px] md:text-[14px] font-semibold text-[#333] leading-tight">
          {hotspot.name}
        </p>
        <p className="font-body text-[11px] md:text-[12px] text-[#666] mt-0.5">
          {hotspot.count} {label}
        </p>
      </div>
      {!adjust.flipY && (
        <div className="flex justify-center -mt-[1px]">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"
            style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.06))' }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function InteractiveLatviaMap() {
  const [activeId, setActiveId] = useState(null);
  const containerRef = useRef(null);
  const [containerRect, setContainerRect] = useState(null);
  const activeHotspot = hotspots.find(h => h.id === activeId);

  const updateRect = useCallback(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, [updateRect]);

  const handleEnter = useCallback((id) => {
    updateRect();
    setActiveId(id);
  }, [updateRect]);

  const handleLeave = useCallback(() => setActiveId(null), []);

  return (
    <div ref={containerRef} className="relative w-full select-none" style={{ maxWidth: 700, margin: '0 auto' }}>
      <img
        src={MAP_IMAGE}
        alt="Latvijas karte ar klientu atrašanās vietām"
        className="w-full h-auto block"
        draggable={false}
      />

      {hotspots.map((spot) => (
        <button
          key={spot.id}
          className="absolute cursor-pointer bg-transparent border-none p-0 outline-none"
          style={{
            left: `${spot.x}%`,
            top: `${spot.y}%`,
            width: 'clamp(20px, 3vw, 30px)',
            height: 'clamp(20px, 3vw, 30px)',
            transform: `translate(-50%, -50%) ${activeId === spot.id ? 'scale(1.15)' : 'scale(1)'}`,
            transition: 'transform 200ms ease-out',
          }}
          onMouseEnter={() => handleEnter(spot.id)}
          onMouseLeave={handleLeave}
          onTouchStart={(e) => {
            e.preventDefault();
            updateRect();
            setActiveId(prev => prev === spot.id ? null : spot.id);
          }}
          aria-label={`${spot.name}: ${spot.count} ${spot.count === 1 ? 'klients' : 'klienti'}`}
        />
      ))}

      <AnimatePresence>
        {activeHotspot && (
          <MapTooltip
            key={activeHotspot.id}
            hotspot={activeHotspot}
            containerRect={containerRect}
          />
        )}
      </AnimatePresence>
    </div>
  );
}