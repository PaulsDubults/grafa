import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useI18n } from '@/lib/i18n';

export default function VacancyDetail({ open, onClose, vacancy, onApply }) {
  const { t } = useI18n();
  if (!vacancy) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[#08233E]/40 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative bg-white rounded-xl w-full max-w-[640px] max-h-[85vh] overflow-y-auto p-8 md:p-10 border border-[#e8e0d4]/50 shadow-[0_20px_60px_rgba(30,58,95,0.15)]"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
            <button onClick={onClose} className="absolute top-4 right-4 text-[#08233E]/30 hover:text-[#08233E]/60 transition-colors">
              <X size={20} />
            </button>

            <h3 className="font-heading text-[24px] md:text-[28px] font-semibold text-[#08233E] mb-2">{vacancy.title}</h3>
            <div className="w-16 h-[2px] mb-8" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0, transparent)' }} />

            <div className="prose prose-sm max-w-none text-[#08233E]/65 font-body text-[14px] md:text-[15px] leading-[1.9] mb-8">
              <ReactMarkdown>{vacancy.full_description}</ReactMarkdown>
            </div>

            <button
              onClick={() => { onClose(); onApply(); }}
              className="relative bg-[#C89B3C] text-white hover:bg-[#b8973f] text-[13px] font-body tracking-[0.2em] uppercase px-12 py-4 transition-all duration-500 rounded-sm overflow-hidden group"
            >
              <span className="relative z-10">{t('careers.buttonApply')}</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}