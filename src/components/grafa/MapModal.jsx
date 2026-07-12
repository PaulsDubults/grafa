import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/deb4b449d_ChatGPTImageJul12202612_58_56PM.png";

const locations = [
  { name: "Ventspils",      clients: 1,  color: "#DC2626", x: 10.5, y: 28 },
  { name: "Liepāja",        clients: 6,  color: "#2563EB", x: 5,    y: 62 },
  { name: "Rīga",           clients: 16, color: "#3B82F6", x: 46,   y: 30 },
  { name: "Salaspils",      clients: 1,  color: "#16A34A", x: 43,   y: 35 },
  { name: "Jūrmala",        clients: 1,  color: "#7C3AED", x: 44,   y: 40 },
  { name: "Jelgava",        clients: 39, color: "#EAB308", x: 40,   y: 47 },
  { name: "Dobele",         clients: 1,  color: "#06B6D4", x: 30,   y: 53 },
  { name: "Bauskas novads", clients: 1,  color: "#92400E", x: 43,   y: 63 },
  { name: "Ropažu novads",  clients: 1,  color: "#15803D", x: 57,   y: 22 },
  { name: "Ogres novads",   clients: 2,  color: "#F97316", x: 73,   y: 25 },
  { name: "Olaine",         clients: 1,  color: "#38BDF8", x: 62,   y: 50 },
  { name: "Mārupes novads", clients: 1,  color: "#7C3AED", x: 82,   y: 60 },
  { name: "Baldone",        clients: 1,  color: "#EC4899", x: 75,   y: 75 },
];

const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return mobile;
}

function Tooltip({ loc, containerRef }) {
  const tipRef = useRef(null);
  const [pos, setPos] = useState({ left: 0, top: 0, ready: false });

  useEffect(() => {
    if (!tipRef.current || !containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const tip = tipRef.current.getBoundingClientRect();
    const dotX = container.left + (loc.x / 100) * container.width;
    const dotY = container.top + (loc.y / 100) * container.height;

    let left = dotX - container.left + 14;
    let top = dotY - container.top - tip.height - 10;

    if (left + tip.width > container.width - 8) left = dotX - container.left - tip.width - 14;
    if (top < 8) top = dotY - container.top + 20;
    if (left < 8) left = 8;

    setPos({ left, top, ready: true });
  }, [loc, containerRef]);

  return (
    <motion.div
      ref={tipRef}
      className="absolute z-50 pointer-events-none"
      style={{ left: pos.left, top: pos.top, opacity: pos.ready ? 1 : 0 }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: pos.ready ? 1 : 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <div className="bg-white rounded-[14px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-4 py-3 min-w-[140px]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[14px]">📍</span>
          <span className="font-heading text-[14px] font-bold text-[#08233E]">{loc.name}</span>
        </div>
        <p className="font-body text-[12px] text-[#08233E]/55">
          {loc.clients} {loc.clients === 1 ? 'klients' : 'klienti'}
        </p>
      </div>
    </motion.div>
  );
}

export default function MapModal({ isOpen, onClose }) {
  const { t } = useI18n();
  const [hoveredName, setHoveredName] = useState(null);
  const [tappedName, setTappedName] = useState(null);
  const mapRef = useRef(null);
  const isMobile = useIsMobile();

  const activeName = isMobile ? tappedName : hoveredName;
  const activeLoc = locations.find(l => l.name === activeName) || null;

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

  const handleDotInteraction = useCallback((name) => {
    if (isMobile) {
      setTappedName(prev => prev === name ? null : name);
    }
  }, [isMobile]);

  const handleLegendInteraction = useCallback((name) => {
    if (isMobile) {
      setTappedName(prev => prev === name ? null : name);
    }
  }, [isMobile]);

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

            {/* Map with invisible hotspots over existing dots */}
            <div ref={mapRef} className="relative px-4">
              <img
                src={MAP_IMAGE}
                alt="Latvijas karte ar klientu atrašanās vietām"
                className="w-full h-auto"
              />

              {/* Invisible interactive hotspots */}
              {locations.map((loc) => {
                const isActive = activeName === loc.name;
                return (
                  <button
                    key={loc.name}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${loc.x}%`,
                      top: `${loc.y}%`,
                      transform: 'translate(-50%, -50%)',
                      width: 48,
                      height: 48,
                    }}
                    aria-label={`${loc.name} - ${loc.clients} ${loc.clients === 1 ? 'klients' : 'klienti'}`}
                    onMouseEnter={() => !isMobile && setHoveredName(loc.name)}
                    onMouseLeave={() => !isMobile && setHoveredName(null)}
                    onClick={() => handleDotInteraction(loc.name)}
                  >
                    {/* Visual feedback overlay — transparent by default, shows glow on hover/active */}
                    <span
                      className="absolute inset-0 rounded-full transition-all"
                      style={{
                        transitionDuration: '180ms',
                        transitionTimingFunction: 'ease',
                        transform: isActive ? 'scale(1.2)' : 'scale(1)',
                        boxShadow: isActive ? `0 0 16px ${loc.color}40` : 'none',
                        background: isActive ? `${loc.color}15` : 'transparent',
                      }}
                    />
                  </button>
                );
              })}

              {/* Tooltip */}
              <AnimatePresence>
                {activeLoc && (
                  <Tooltip key={activeLoc.name} loc={activeLoc} containerRef={mapRef} />
                )}
              </AnimatePresence>
            </div>

            {/* Interactive legend */}
            <div className="px-6 pt-4 pb-6">
              <div className="flex flex-wrap justify-center gap-2.5">
                {locations.map((loc) => {
                  const isActive = activeName === loc.name;
                  return (
                    <button
                      key={loc.name}
                      onMouseEnter={() => !isMobile && setHoveredName(loc.name)}
                      onMouseLeave={() => !isMobile && setHoveredName(null)}
                      onClick={() => handleLegendInteraction(loc.name)}
                      className="flex items-center gap-2.5 rounded-full px-4 py-2 border bg-white transition-all"
                      style={{
                        transitionDuration: '180ms',
                        transitionTimingFunction: 'ease',
                        transform: isActive ? 'scale(1.08)' : 'scale(1)',
                        borderColor: isActive ? loc.color : 'rgba(232, 224, 212, 0.4)',
                        boxShadow: isActive ? `0 4px 16px ${loc.color}25` : '0 1px 4px rgba(0,0,0,0.06)',
                      }}
                    >
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: loc.color }} />
                      <span className="font-body text-[12px] md:text-[13px] text-[#08233E]/70">{loc.name}</span>
                      <span className="font-heading text-[13px] md:text-[14px] font-bold text-[#08233E]">{loc.clients}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}