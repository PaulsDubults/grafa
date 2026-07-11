import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientMarker({ location, language, isActive, onToggle, index, clientSuffix }) {
  const [isHovered, setIsHovered] = useState(false);
  const showTooltip = isActive || isHovered;
  const name = location.name[language] || location.name.lv;
  const size = location.count >= 20 ? 'lg' : location.count >= 5 ? 'md' : 'sm';

  const sizeClasses = {
    lg: 'w-9 h-9 md:w-12 md:h-12 text-[10px] md:text-[13px]',
    md: 'w-7 h-7 md:w-10 md:h-10 text-[9px] md:text-[12px]',
    sm: 'w-5 h-5 md:w-7 md:h-7 text-[8px] md:text-[11px]',
  };

  const pulseSize = {
    lg: 'w-12 h-12 md:w-16 md:h-16',
    md: 'w-10 h-10 md:w-13 md:h-13',
    sm: 'w-7 h-7 md:w-10 md:h-10',
  };

  const tooltipLeft = location.x > 65;
  const tooltipAbove = location.y > 70;

  return (
    <div
      className="absolute z-10"
      style={{ left: `${location.x}%`, top: `${location.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      {/* Pulse ring */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${pulseSize[size]} rounded-full pointer-events-none`}>
        <span className="absolute inset-0 rounded-full bg-[#2E5D50]/20 animate-ping" style={{ animationDuration: `${2.5 + index * 0.3}s` }} />
        <span className="absolute inset-0 rounded-full bg-[#2E5D50]/10" />
      </div>

      {/* Marker dot */}
      <motion.button
        className={`relative ${sizeClasses[size]} rounded-full bg-[#2E5D50] text-white font-body font-semibold flex items-center justify-center shadow-lg cursor-pointer border-2 border-white/80 ${location.isHQ ? 'ring-2 ring-[#C89B3C]/40' : ''}`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.06, type: 'spring', stiffness: 300, damping: 20 }}
      >
        {location.count}
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className={`absolute z-20 whitespace-nowrap pointer-events-none ${
              tooltipAbove ? 'bottom-full mb-2' : 'top-full mt-2'
            } ${tooltipLeft ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`}
            initial={{ opacity: 0, y: tooltipAbove ? 6 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: tooltipAbove ? 6 : -6 }}
            transition={{ duration: 0.15 }}
          >
            <div className="bg-white rounded-lg shadow-xl border border-[#e8e0d4]/60 px-4 py-2.5 text-center">
              <p className="font-heading text-[13px] md:text-[14px] font-semibold text-[#08233E] leading-tight">
                {name}
              </p>
              <p className="font-body text-[11px] md:text-[12px] text-[#2E5D50] font-medium mt-0.5">
                {location.count} {clientSuffix}
              </p>
              {location.isHQ && (
                <p className="font-body text-[9px] md:text-[10px] text-[#C89B3C] mt-0.5 tracking-wide uppercase">
                  ★ HQ
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}