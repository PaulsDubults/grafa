import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import LatviaSvgMap from './LatviaSvgMap';

const LOCATIONS = [
  { id: 'ventspils',  name: 'Ventspils',      clients: 1,  color: '#DC2626' },
  { id: 'liepaja',   name: 'Liepāja',        clients: 6,  color: '#2563EB' },
  { id: 'riga',      name: 'Rīga',           clients: 16, color: '#3B82F6' },
  { id: 'jurmala',   name: 'Jūrmala',        clients: 1,  color: '#16A34A' },
  { id: 'salaspils', name: 'Salaspils',       clients: 1,  color: '#7C3AED' },
  { id: 'jelgava',   name: 'Jelgava',        clients: 39, color: '#EAB308' },
  { id: 'dobele',    name: 'Dobele',          clients: 1,  color: '#06B6D4' },
  { id: 'bauskas',   name: 'Bauskas novads',  clients: 1,  color: '#92400E' },
  { id: 'ropazi',    name: 'Ropažu novads',   clients: 1,  color: '#15803D' },
  { id: 'ogre',      name: 'Ogres novads',    clients: 2,  color: '#F97316' },
  { id: 'olaine',    name: 'Olaine',          clients: 1,  color: '#38BDF8' },
  { id: 'marupe',    name: 'Mārupes novads',  clients: 1,  color: '#7C3AED' },
  { id: 'baldone',   name: 'Baldone',         clients: 1,  color: '#EC4899' },
];

const totalClients = LOCATIONS.reduce((sum, l) => sum + l.clients, 0);

export default function MapModal({ isOpen, onClose }) {
  const { t } = useI18n();
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    if (!isOpen) { setSelectedId(null); setHoveredId(null); return; }
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleLocationSelect = useCallback((loc) => {
    setSelectedId((prev) => prev === loc.id ? null : loc.id);
  }, []);

  const handleHover = useCallback((id) => {
    setHoveredId(id);
  }, []);

  const activeId = hoveredId || selectedId;

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

            {/* SVG Map */}
            <div className="px-4 md:px-6 py-2">
              <LatviaSvgMap
                onLocationSelect={handleLocationSelect}
                selectedLocation={selectedId}
                hoveredLocation={hoveredId}
                onHoverLocation={handleHover}
              />
            </div>

            {/* Interactive legend */}
            <div className="px-6 pt-2 pb-6">
              <div className="flex flex-wrap justify-center gap-2.5">
                {LOCATIONS.map((loc) => {
                  const isActive = activeId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => handleLocationSelect(loc)}
                      onMouseEnter={() => handleHover(loc.id)}
                      onMouseLeave={() => handleHover(null)}
                      className={`flex items-center gap-2.5 rounded-full px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border transition-all duration-200
                        ${isActive
                          ? 'bg-[#08233E] border-[#08233E] scale-105'
                          : 'bg-white border-[#e8e0d4]/40 hover:border-[#C89B3C]/30'
                        }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: loc.color }} />
                      <span className={`font-body text-[12px] md:text-[13px] ${isActive ? 'text-white/80' : 'text-[#08233E]/70'}`}>{loc.name}</span>
                      <span className={`font-heading text-[13px] md:text-[14px] font-bold ${isActive ? 'text-white' : 'text-[#08233E]'}`}>{loc.clients}</span>
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