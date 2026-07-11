import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import LatviaSvgMap from './LatviaSvgMap';
import MapMarker from './MapMarker';
import { locations, totalClients } from './mapData';
import { useI18n } from '@/lib/i18n';

function LocationDetail({ location, onClose }) {
  return (
    <motion.div
      className="absolute z-30 bg-white rounded-lg shadow-2xl border border-[#e8e0d4]/50 p-4 w-[200px] md:w-[230px]"
      style={{
        left: `${location.x}%`,
        top: `${location.y}%`,
        transform: location.x > 55 ? 'translate(-110%, -50%)' : 'translate(15px, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="absolute top-2 right-2 text-[#08233E]/30 hover:text-[#08233E]/60 transition-colors" onClick={onClose}>
        <X size={14} />
      </button>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-[#2E5D50] flex items-center justify-center flex-shrink-0">
          <MapPin className="w-3 h-3 text-white" />
        </div>
        <h4 className="font-heading text-[14px] md:text-[15px] font-semibold text-[#08233E]">{location.name}</h4>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-heading text-[24px] font-bold text-[#2E5D50]">{location.clients}</span>
        <span className="font-body text-[12px] text-[#08233E]/50">{location.clients === 1 ? 'klients' : 'klienti'}</span>
      </div>
      {location.isOffice && (
        <p className="font-body text-[10px] text-[#C89B3C] mt-1.5 italic">Biroja atrašanās vieta</p>
      )}
    </motion.div>
  );
}

export default function MapModal({ isOpen, onClose }) {
  const { t } = useI18n();
  const [activeLocation, setActiveLocation] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveLocation(null);
      return;
    }
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
          <div className="absolute inset-0 bg-[#08233E]/50 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative bg-[#FBF7F0] rounded-lg shadow-2xl border border-[#e8e0d4]/50 w-full max-w-[950px] max-h-[90vh] overflow-auto"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={() => setActiveLocation(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-40 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105"
              onClick={onClose}
            >
              <X size={16} className="text-[#08233E]/60" />
            </button>

            {/* Header */}
            <div className="text-center pt-8 pb-4 px-6">
              <p className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#C89B3C] mb-2 font-medium">
                {t('mapModal.subtitle')}
              </p>
              <h3 className="font-heading text-[24px] md:text-[32px] font-semibold text-[#08233E] mb-2">
                {t('mapModal.title')}
              </h3>
              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="h-[1px] w-12" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C)' }} />
                <span className="font-body text-[12px] md:text-[13px] text-[#2E5D50] font-semibold">
                  {totalClients} {t('mapModal.totalLabel') || 'klienti visā Latvijā'}
                </span>
                <div className="h-[1px] w-12" style={{ background: 'linear-gradient(90deg, #C89B3C, transparent)' }} />
              </div>
            </div>

            {/* Map area */}
            <div className="relative px-4 md:px-8 pb-6">
              <div className="relative bg-white/40 rounded-lg border border-[#e8e0d4]/30 p-4 md:p-8">
                <LatviaSvgMap className="w-full h-auto" />

                {/* Markers overlay */}
                <div className="absolute inset-0 p-4 md:p-8">
                  {locations.map((loc) => (
                    <MapMarker
                      key={loc.name}
                      location={loc}
                      isActive={activeLocation?.name === loc.name}
                      onClick={(l) => setActiveLocation(prev => prev?.name === l.name ? null : l)}
                    />
                  ))}

                  <AnimatePresence>
                    {activeLocation && (
                      <LocationDetail
                        location={activeLocation}
                        onClose={() => setActiveLocation(null)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Bottom stats bar */}
            <div className="px-6 md:px-10 pb-6">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {locations.filter(l => l.clients >= 5).map((loc) => (
                  <div key={loc.name} className="flex items-center gap-2 bg-white/60 rounded-md px-3 py-2 border border-[#e8e0d4]/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2E5D50]" />
                    <span className="font-body text-[11px] md:text-[12px] text-[#08233E]/70">{loc.name}</span>
                    <span className="font-heading text-[12px] md:text-[13px] font-bold text-[#2E5D50]">{loc.clients}</span>
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