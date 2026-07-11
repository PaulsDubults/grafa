import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/c3f1ec4a1_ChatGPTImageJul11202602_25_21PM.png";

/* Each location with its % position on the map image (x%, y%) matching the green dots.
   Coordinates are estimated from Latvian geography. */
const locations = [
  { name: "Ventspils",       clients: 1,  x: 13,   y: 27.5 },
  { name: "Liepāja",         clients: 6,  x: 4.5,  y: 64 },
  { name: "Dobele",          clients: 1,  x: 28,   y: 54 },
  { name: "Jūrmala",         clients: 1,  x: 42,   y: 36 },
  { name: "Rīga",            clients: 16, x: 46.5, y: 32 },
  { name: "Mārupes novads",  clients: 1,  x: 44,   y: 42 },
  { name: "Olaine",          clients: 1,  x: 41.5, y: 49 },
  { name: "Jelgava",         clients: 39, x: 39,   y: 53 },
  { name: "Baldone",         clients: 1,  x: 44.5, y: 58 },
  { name: "Bauskas novads",  clients: 1,  x: 46.5, y: 64 },
  { name: "Ogres novads",    clients: 2,  x: 56,   y: 44 },
  { name: "Ropažu novads",   clients: 1,  x: 55,   y: 26 },
];

const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);

function DotOverlay({ loc, isActive, onToggle }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
    >
      <button
        className="relative w-6 h-6 md:w-7 md:h-7 cursor-pointer group"
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        title={loc.name}
      >
        {/* Invisible hit area over the green dot */}
        <span className="absolute inset-[-4px] rounded-full bg-[#C89B3C]/0 group-hover:bg-[#C89B3C]/20 transition-colors duration-300" />
        {/* Debug red dot — remove after calibration */}
        <span className="absolute inset-[6px] md:inset-[7px] rounded-full bg-red-500/70" />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute z-30 bg-white rounded-sm shadow-xl border border-[#e8e0d4]/50 px-3.5 py-2.5 whitespace-nowrap"
            style={{
              left: loc.x > 55 ? 'auto' : '100%',
              right: loc.x > 55 ? '100%' : 'auto',
              top: '50%',
              transform: 'translateY(-50%)',
              marginLeft: loc.x > 55 ? 0 : 8,
              marginRight: loc.x > 55 ? 8 : 0,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E8B2E] flex-shrink-0" />
              <span className="font-body text-[12px] md:text-[13px] text-[#08233E]/80 font-medium">{loc.name}</span>
              <span className="font-heading text-[13px] md:text-[14px] font-bold text-[#08233E]">{loc.clients}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MapModal({ isOpen, onClose }) {
  const { t } = useI18n();
  const [activeIdx, setActiveIdx] = useState(null);

  useEffect(() => {
    if (!isOpen) { setActiveIdx(null); return; }
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[#08233E]/40 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative bg-[#FBF7F0] rounded-sm shadow-2xl border border-[#e8e0d4]/50 w-full max-w-[900px] max-h-[90vh] overflow-auto"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={() => setActiveIdx(null)}
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

            <div className="px-4">
              <div className="relative">
                <img
                  src={MAP_IMAGE}
                  alt="Latvijas karte ar klientu atrašanās vietām"
                  className="w-full h-auto"
                />
                {locations.map((loc, i) => (
                  <DotOverlay
                    key={loc.name}
                    loc={loc}
                    isActive={activeIdx === i}
                    onToggle={() => setActiveIdx(prev => prev === i ? null : i)}
                  />
                ))}
              </div>
            </div>

            {/* Legend chips */}
            <div className="px-6 pt-4 pb-6">
              <div className="flex flex-wrap justify-center gap-2.5">
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#e8e0d4]/40"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B2E] flex-shrink-0" />
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