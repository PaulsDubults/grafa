import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import InteractiveLatviaMap from './InteractiveLatviaMap';

export default function MapModal({ isOpen, onClose }) {
  const { t } = useI18n();

  useEffect(() => {
    if (!isOpen) return;
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
            </div>

            <div className="px-4 md:px-8 pb-6">
              <InteractiveLatviaMap />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}