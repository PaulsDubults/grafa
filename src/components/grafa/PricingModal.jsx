import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function PricingModal({ open, onClose }) {
  const { t } = useI18n();
  const principles = t('whyChoose.pricingPrinciples');

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[#08233E]/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative bg-[#FBF7F0] rounded-2xl max-w-[640px] w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="absolute top-0 left-8 right-8 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />

            <div className="p-8 md:p-10">
              <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors border border-[#e8e0d4]/50">
                <X className="w-4 h-4 text-[#08233E]/60" />
              </button>

              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#C89B3C] mb-3 font-medium">{t('whyChoose.pricingSubtitle')}</p>
              <h3 className="font-heading text-[24px] md:text-[30px] font-semibold text-[#08233E] mb-2 leading-tight">{t('whyChoose.pricingHeading')}</h3>
              <div className="w-16 h-[2px] mb-8" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0)' }} />

              <p className="text-[#08233E]/55 font-body text-[14px] md:text-[15px] leading-[1.9] mb-8">{t('whyChoose.pricingIntro')}</p>

              <div className="space-y-5">
                {principles.map((p, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#e8e0d4]/40">
                    <div className="w-8 h-8 rounded-full bg-[#C89B3C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-heading text-[12px] font-bold text-[#C89B3C]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-[15px] md:text-[16px] font-semibold text-[#08233E] mb-1">{p.title}</h4>
                      <p className="text-[#08233E]/50 font-body text-[13px] md:text-[14px] leading-[1.8]">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#08233E]/35 font-body text-[13px] mt-8 italic text-center">{t('whyChoose.pricingFootnote')}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}