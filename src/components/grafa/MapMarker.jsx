import React from 'react';
import { motion } from 'framer-motion';

export default function MapMarker({ location, isActive, onClick, size = "normal" }) {
  const isSmall = size === "small";
  const markerSize = isSmall ? "w-5 h-5" : (location.clients >= 10 ? "w-9 h-9 md:w-10 md:h-10" : "w-7 h-7 md:w-8 md:h-8");
  const fontSize = isSmall ? "text-[7px]" : (location.clients >= 10 ? "text-[10px] md:text-[11px]" : "text-[9px] md:text-[10px]");

  return (
    <motion.button
      className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer"
      style={{ left: `${location.x}%`, top: `${location.y}%` }}
      onClick={(e) => { e.stopPropagation(); onClick?.(location); }}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Pulse ring — subtle, only for larger markers */}
      {location.clients >= 5 && (
        <span className="absolute inset-[-2px] rounded-full bg-[#2E5D50]/20 animate-ping" style={{ animationDuration: '3s' }} />
      )}
      
      {/* Marker circle */}
      <div className={`relative ${markerSize} rounded-full bg-[#2E5D50] shadow-lg flex items-center justify-center border-2 border-white/80 transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(46,93,80,0.4)]`}>
        <span className={`text-white font-body font-semibold ${fontSize} leading-none`}>
          {location.clients}
        </span>
      </div>

      {/* Tooltip on hover (desktop only) */}
      {!isSmall && (
        <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
          <div className="bg-white rounded-md shadow-xl border border-[#e8e0d4]/60 px-3 py-1.5 text-center">
            <p className="font-heading text-[12px] font-semibold text-[#08233E] leading-tight">{location.name}</p>
            <p className="font-body text-[10px] text-[#2E5D50] font-medium">{location.clients} {location.clients === 1 ? 'klients' : 'klienti'}</p>
          </div>
          <div className="w-2 h-2 bg-white border-r border-b border-[#e8e0d4]/60 rotate-45 mx-auto -mt-1" />
        </div>
      )}
    </motion.button>
  );
}