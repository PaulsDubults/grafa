import React from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import { OverlappingFeathers, DiagonalFeather, FeatherTip, SmallFeather, PyramidOutline, MediumPyramid, PyramidSilhouette, WatercolorStain, StarConstellation, GoldDotGrid, ScatteredDots, GoldFlourish, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const valueIcons = [
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><path d="M28,6 L34,20 L50,22 L38,32 L41,48 L28,40 L15,48 L18,32 L6,22 L22,20 Z" stroke="#c9a84c" strokeWidth="1.3" strokeLinejoin="round" fill="none"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><path d="M28,4 L48,14 L48,30 C48,40 38,48 28,52 C18,48 8,40 8,30 L8,14 Z" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M20,28 L25,33 L36,22" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><circle cx="28" cy="28" r="18" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M28,14 L28,42 M22,19 L34,19 C36.5,19 38,22 36.5,25 C35,28 22,28 22,28 C22,28 35,28 36.5,31 C38,34 36.5,37 34,37 L22,37" stroke="#c9a84c" strokeWidth="1.1"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><circle cx="28" cy="18" r="9" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M12,48 C12,38 19,32 28,32 C37,32 44,38 44,48" stroke="#c9a84c" strokeWidth="1.3" fill="none"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><rect x="8" y="12" width="34" height="28" rx="3" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M23,24 L26,27 L33,20" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><path d="M8,40 Q8,22 28,22 Q48,22 48,40" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" fill="none"/><circle cx="20" cy="32" r="2" fill="#c9a84c" opacity="0.5"/><circle cx="28" cy="32" r="2" fill="#c9a84c" opacity="0.5"/><circle cx="36" cy="32" r="2" fill="#c9a84c" opacity="0.5"/></svg>,
];

export default function WhyGrafaSection() {
  const { t } = useI18n();
  const values = t('whyGrafa.values');

  return (
    <section id="kapec-grafu" className="relative py-28 md:py-44 overflow-hidden" style={{ background: '#f5f0e8' }}>
      <PaperTexture id="whyP" />

      {/* COMPOSITION: crossed feathers right, diagonal quill left bottom, upright accent top */}
      <OverlappingFeathers className="w-[240px] md:w-[360px] h-[280px] md:h-[420px] right-[-40px] md:right-[-10px] top-[8%]" opacity={0.18} />
      <DiagonalFeather className="w-[200px] md:w-[300px] h-[250px] md:h-[380px] left-[-40px] md:left-[-10px] bottom-[5%]" opacity={0.16} angle={-20} />
      <FeatherTip className="w-[90px] md:w-[130px] h-[110px] md:h-[160px] left-[5%] top-[3%]" opacity={0.14} rotate={5} />
      <SmallFeather className="w-[70px] md:w-[100px] h-[85px] md:h-[120px] right-[20%] bottom-8" opacity={0.12} rotate={-8} />
      
      <PyramidOutline className="w-[400px] md:w-[580px] h-[380px] md:h-[560px] right-[-60px] md:right-[-20px] top-[25%]" opacity={0.1} />
      <MediumPyramid className="w-[140px] md:w-[200px] h-[140px] md:h-[200px] left-[5%] bottom-[10%]" opacity={0.14} />
      <PyramidSilhouette className="w-[250px] md:w-[350px] h-[220px] md:h-[310px] left-[-50px] top-[55%]" opacity={0.04} />

      <WatercolorStain className="right-[-80px] top-[15%]" color="#e0b5b0" opacity={0.12} size={500} id="why1" />
      <WatercolorStain className="left-[-120px] bottom-[-30px]" color="#e8c89a" opacity={0.1} size={380} id="why2" />
      
      <StarConstellation className="w-[220px] h-[220px] right-4 top-[5%]" opacity={0.35} />
      <GoldDotGrid className="w-[160px] h-[100px] left-6 top-[65%]" rows={5} cols={9} opacity={0.3} />
      <ScatteredDots className="w-[120px] h-[120px] right-[10%] bottom-8" opacity={0.25} count={15} />
      <GoldFlourish className="w-[220px] md:w-[320px] h-[90px] md:h-[130px] left-[15%] top-[42%]" opacity={0.2} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-end text-right mb-20 md:mb-24 max-w-2xl ml-auto">
          <motion.p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5 font-medium" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>{t('whyGrafa.subtitle')}</motion.p>
          <motion.h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-6 leading-[1.1]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>{t('whyGrafa.heading')}</motion.h2>
          <GoldLine width="w-28" className="mb-8" />
          <motion.p className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[17px] leading-[1.9]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>{t('whyGrafa.description')}</motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {values.map((item, i) => (
            <motion.div key={i} className={`group relative bg-white rounded-xl p-8 md:p-10 border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,58,95,0.08),0_0_0_1px_rgba(201,168,76,0.12)] ${i % 2 === 1 ? 'md:mt-12' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}>
              <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
              <svg className="absolute top-3 right-3 w-8 h-8 opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-500" viewBox="0 0 30 30" fill="none"><path d="M28,2 L28,12 M28,2 L18,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/></svg>
              <div className="flex items-start gap-5">
                <div className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-500 flex-shrink-0 mt-1">{valueIcons[i]}</div>
                <div>
                  <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#1e3a5f] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-[#1e3a5f]/50 font-body text-[13px] md:text-[15px] leading-[1.85]">{item.desc}</p>
                  <div className="w-0 group-hover:w-16 h-[2px] mt-5 transition-all duration-700" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3, transparent)' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}