import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/deb4b449d_ChatGPTImageJul12202612_58_56PM.png";

// Exact % positions matching the dots already in the image
const locations = [
  { name: "Ventspils",      clients: 1,  color: "#DC2626", x: 9.5,  y: 27.5 },
  { name: "Liepāja",        clients: 6,  color: "#2563EB", x: 4.5,  y: 62 },
  { name: "Rīga",           clients: 16, color: "#3B82F6", x: 46,   y: 28 },
  { name: "Salaspils",      clients: 1,  color: "#16A34A", x: 44.5, y: 34 },
  { name: "Jūrmala",        clients: 1,  color: "#7C3AED", x: 43,   y: 40.5 },
  { name: "Jelgava",        clients: 39, color: "#EAB308", x: 48,   y: 48 },
  { name: "Dobele",         clients: 1,  color: "#06B6D4", x: 30,   y: 55 },
  { name: "Bauskas novads", clients: 1,  color: "#92400E", x: 45.5, y: 65.5 },
  { name: "Ropažu novads",  clients: 1,  color: "#15803D", x: 60,   y: 17 },
  { name: "Ogres novads",   clients: 2,  color: "#F97316", x: 76,   y: 21 },
  { name: "Olaine",         clients: 1,  color: "#38BDF8", x: 66,   y: 52 },
  { name: "Mārupes novads", clients: 1,  color: "#7C3AED", x: 84,   y: 62 },
  { name: "Baldone",        clients: 1,  color: "#EC4899", x: 78,   y: 78 },
];

const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);

function MapDot({ loc, hovered, tapped, onHover, onLeave, onTap }) {
  const showTooltip = hovered || tapped;
  const dotRef = useRef(null);

  // Determine if tooltip should open below instead of above
  const openBelow = loc.y < 18;
  const openLeft = loc.x > 75;

  return (
    <div
      ref={dotRef}
      className="absolute"
      style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      {/* Invisible hit area — larger than the dot for easy interaction */}
      <button
        className="relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center cursor-pointer"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onTap}
        style={{ transition: 'transform 180ms ease' }}
      >
        {/* Invisible circle that scales on hover, positioned over the existing dot in the image */}
        <span
          className="block w-5 h-5 rounded-full"
          style={{
            transition: 'transform 180ms ease, box-shadow 180ms ease',
            transform: showTooltip ? 'scale(1.15)' : 'scale(1)',
            boxShadow: showTooltip ? '0 2px 12px rgba(0,0,0,0.18)' : 'none',
            background: 'transparent',
          }}
        />
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute z-50 bg-white rounded-lg shadow-xl border border-[#e8e0d4]/60 px-4 py-3 min-w-[150px] pointer-events-none whitespace-nowrap"
            style={{
              left: '50%',
              ...(openBelow
                ? { top: '100%', marginTop: 6 }
                : { bottom: '100%', marginBottom: 6 }
              ),
              transform: openLeft ? 'translateX(-85%)' : 'translateX(-50%)',
            }}
            initial={{ opacity: 0, y: openBelow ? -4 : 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: openBelow ? -4 : 4 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[14px]">📍</span>
              <span className="font-heading text-[14px] font-bold text-[#08233E]">{loc.name}</span>
            </div>
            <p className="font-body text-[12px] text-[#08233E]/55">
              {loc.clients} {loc.clients === 1 ? 'klients' : 'klienti'}
            </p>
            {/* Arrow */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-[#e8e0d4]/60 rotate-45"
              style={openBelow
                ? { top: -5, borderTop: '1px solid', borderLeft: '1px solid', borderColor: 'rgba(232, 224, 212, 0.6)' }
                : { bottom: -5, borderBottom: '1px solid', borderRight: '1px solid', borderColor: 'rgba(232, 224, 212, 0.6)' }
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MapModal({ isOpen, onClose }) {
  const { t } = useI18n();
  const [hoveredName, setHoveredName] = useState(null);
  const [tappedName, setTappedName] = useState(null);

  useEffect(() => {
    if (!isOpen) { setHoveredName(null); setTappedName(null); return; }
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[#08233E]/60 backdrop-blur-md" onClick={onClose} />

          <motion.div
            className="relative bg-[#FBF7F0] rounded-sm shadow-2xl border border-[#e8e0d4]/50 w-full max-w-[900px] max-h-[90vh] overflow-auto"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <button
              className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors"
              onClick={onClose}
            >
              <X size={16} className="text-[#08233E]/60" />
            </button>

            <div className="text-center pt-6 pb-2 px-6">
              <p className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#C89B3C] mb-2 font-medium">
                {t('mapModal.subtitle')}
              </p>
              <h3 className="font-heading text-[22px] md:text-[28px] font-semibold text-[#08233E]">
                {t('mapModal.title')}
              </h3>
              <p className="font-body text-[13px] text-[#08233E]/45 mt-1">
                {totalClients} klienti visā Latvijā
              </p>
            </div>

            {/* Map with invisible interactive hotspots over existing dots */}
            <div className="relative px-4">
              <img
                src={MAP_IMAGE}
                alt="Latvijas karte ar klientu atrašanās vietām"
                className="w-full h-auto"
              />

              {locations.map((loc) => (
                <MapDot
                  key={loc.name}
                  loc={loc}
                  hovered={hoveredName === loc.name}
                  tapped={tappedName === loc.name}
                  onHover={() => setHoveredName(loc.name)}
                  onLeave={() => setHoveredName(null)}
                  onTap={() => setTappedName(tappedName === loc.name ? null : loc.name)}
                />
              ))}
            </div>

            {/* Legend chips */}
            <div className="px-6 pt-4 pb-6">
              <div className="flex flex-wrap justify-center gap-2.5">
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#e8e0d4]/40"
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: loc.color }} />
                    <span className="font-body text-[12px] md:text-[13px] text-[#08233E]/70">{loc.name}</span>
                    <span className="font-heading text-[13px] md:text-[14px] font-bold text-[#08233E]">{loc.clients}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}