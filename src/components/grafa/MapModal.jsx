import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/deb4b449d_ChatGPTImageJul12202612_58_56PM.png";

// Positions as % of image dimensions, colors matching the user's spec
const locations = [
  { name: "Ventspils",      clients: 1,  color: "#DC2626", x: 10.5, y: 28 },
  { name: "Liepāja",        clients: 6,  color: "#2563EB", x: 5,    y: 62 },
  { name: "Rīga",           clients: 16, color: "#3B82F6", x: 46,   y: 30 },
  { name: "Jūrmala",        clients: 1,  color: "#16A34A", x: 43,   y: 35 },
  { name: "Salaspils",      clients: 1,  color: "#7C3AED", x: 44,   y: 40 },
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

export default function MapModal({ isOpen, onClose }) {
  const { t } = useI18n();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!isOpen) { setSelected(null); return; }
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

            {/* Map image — dots are already in the image */}
            <div className="px-4">
              <img
                src={MAP_IMAGE}
                alt="Latvijas karte ar klientu atrašanās vietām"
                className="w-full h-auto"
              />
            </div>

            {/* Legend chips */}
            <div className="px-6 pt-4 pb-6">
              <div className="flex flex-wrap justify-center gap-2.5">
                {locations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => setSelected(selected?.name === loc.name ? null : loc)}
                    className={`flex items-center gap-2.5 rounded-full px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border transition-all duration-200
                      ${selected?.name === loc.name
                        ? 'bg-[#08233E] border-[#08233E]'
                        : 'bg-white border-[#e8e0d4]/40 hover:border-[#C89B3C]/30'
                      }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: loc.color }} />
                    <span className={`font-body text-[12px] md:text-[13px] ${selected?.name === loc.name ? 'text-white/80' : 'text-[#08233E]/70'}`}>{loc.name}</span>
                    <span className={`font-heading text-[13px] md:text-[14px] font-bold ${selected?.name === loc.name ? 'text-white' : 'text-[#08233E]'}`}>{loc.clients}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}