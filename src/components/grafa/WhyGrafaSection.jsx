import React from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import { FullFeather, HalfFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const valueIcons = [
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><path d="M28,6 L34,20 L50,22 L38,32 L41,48 L28,40 L15,48 L18,32 L6,22 L22,20 Z" stroke="#C89B3C" strokeWidth="1.3" strokeLinejoin="round" fill="none"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><path d="M28,4 L48,14 L48,30 C48,40 38,48 28,52 C18,48 8,40 8,30 L8,14 Z" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M20,28 L25,33 L36,22" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><circle cx="28" cy="28" r="18" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M28,14 L28,42 M22,19 L34,19 C36.5,19 38,22 36.5,25 C35,28 22,28 22,28 C22,28 35,28 36.5,31 C38,34 36.5,37 34,37 L22,37" stroke="#C89B3C" strokeWidth="1.1"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><circle cx="28" cy="18" r="9" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M12,48 C12,38 19,32 28,32 C37,32 44,38 44,48" stroke="#C89B3C" strokeWidth="1.3" fill="none"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><rect x="8" y="12" width="34" height="28" rx="3" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M23,24 L26,27 L33,20" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><path d="M8,40 Q8,22 28,22 Q48,22 48,40" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" fill="none"/><circle cx="20" cy="32" r="2" fill="#C89B3C" opacity="0.5"/><circle cx="28" cy="32" r="2" fill="#C89B3C" opacity="0.5"/><circle cx="36" cy="32" r="2" fill="#C89B3C" opacity="0.5"/></svg>,
];

export default function WhyGrafaSection() {
  const { t } = useI18n();
  const values = t('whyGrafa.values');

  return (
    <section id="kapec-grafu" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="whyP" />
      <FullFeather className="w-[300px] md:w-[480px] h-[400px] md:h-[680px] right-[-60px] md:right-[-15px] top-[0%]" opacity={0.65} flip />
      <HalfFeather className="w-[250px] md:w-[400px] h-[340px] md:h-[580px] left-[-50px] md:left-[-15px] bottom-[3%]" opacity={0.5} />
      <WatercolorStain className="right-[-80px] top-[15%]" color="#e0b5b0" opacity={0.1} size={500} id="why1" />
      <WatercolorStain className="left-[-120px] bottom-[-30px]" color="#e8c89a" opacity={0.08} size={380} id="why2" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-end text-right mb-14 md:mb-18 max-w-2xl ml-auto">
          <motion.p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#C89B3C] mb-5 font-medium" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>{t('whyGrafa.subtitle')}</motion.p>
          <motion.h2 className="font-heading text-[38px] md:text-[54px] lg:text-[64px] font-semibold text-[#08233E] mb-6 leading-[1.1]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>{t('whyGrafa.heading')}</motion.h2>
          <GoldLine width="w-28" className="mb-8" />
          <motion.p className="text-[#08233E]/60 font-body text-[17px] md:text-[19px] leading-[1.9]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>{t('whyGrafa.description')}</motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {values.map((item, i) => (
            <motion.div key={i} className={`group relative bg-white rounded-xl p-8 md:p-10 border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,58,95,0.08)] ${i % 2 === 1 ? 'md:mt-12' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}>
              <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <div className="flex items-start gap-5">
                <div className="text-[#C89B3C] flex-shrink-0 mt-1">{valueIcons[i]}</div>
                <div>
                  <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-[#08233E] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-[#08233E]/60 font-body text-[15px] md:text-[17px] leading-[1.85]">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}