import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ClientStatsChart from './ClientStatsChart';
import { useI18n } from '@/lib/i18n';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/3fed02e2c_Screenshot2026-07-13at125249.png";

export default function HeroMiniMap() {
  const { t } = useI18n();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [showModal]);

  return (
    <>
      <div>
        <p className="text-[11px] font-body text-[#08233E]/40 mb-3 italic font-semibold">
          {t('miniMap.subtitle')}
        </p>
        <button
          className="relative rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] p-3 w-full max-w-[280px] text-left border-2 border-[#C89B3C]/60 hover:border-[#C89B3C]"
          onClick={() => setShowModal(true)}
        >
          <img
            src={MAP_IMAGE}
            alt="Latvijas karte"
            className="w-full h-auto opacity-35 group-hover:opacity-60 transition-all duration-700 group-hover:scale-[1.02]"
            draggable={false}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-2">
            <span className="bg-white/90 text-[10px] font-body text-[#08233E]/70 tracking-wider uppercase px-3 py-1.5 rounded-sm shadow-sm">
              {t('miniMap.viewMap')}
            </span>
          </div>
        </button>
      </div>

      {showModal && createPortal(
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[#08233E]/80 backdrop-blur-xl" onClick={() => setShowModal(false)} />

            <motion.div
              className="relative bg-[#FBF7F0] rounded-xl shadow-2xl border border-[#e8e0d4]/50 w-full max-w-[700px] max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <button
                className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors"
                onClick={() => setShowModal(false)}
              >
                <X size={16} className="text-[#08233E]/60" />
              </button>

              <div className="px-6 pt-6">
                <img
                  src={MAP_IMAGE}
                  alt="Latvijas karte ar klientu atrašanās vietām"
                  className="w-full h-auto"
                />
              </div>

              <div className="px-6 pb-6 pt-4">
                <ClientStatsChart />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}