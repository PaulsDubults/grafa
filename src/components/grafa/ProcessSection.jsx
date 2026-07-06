import React from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import { FullFeather, FeatherFragment, FeatherTip, HorizontalFeather, PyramidOutline, SmallPyramid, WatercolorStain, GoldCurve, StarConstellation, GoldDotGrid, ScatteredDots, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const stepIcons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M8,34 C8,20 14,14 24,14 C34,14 40,20 40,34" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" fill="none"/><circle cx="17" cy="26" r="2" fill="#c9a84c" opacity="0.4"/><circle cx="24" cy="26" r="2" fill="#c9a84c" opacity="0.4"/><circle cx="31" cy="26" r="2" fill="#c9a84c" opacity="0.4"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="10" y="6" width="28" height="36" rx="2.5" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M17,16 L31,16 M17,23 L31,23 M17,30 L25,30" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M14,6 L34,6 L34,42 L14,42 Z" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M19,34 C22,29 26,36 29,31" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="6" y="10" width="22" height="30" rx="2.5" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><rect x="20" y="14" width="22" height="26" rx="2.5" stroke="#c9a84c" strokeWidth="1.1" fill="none"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><polyline points="6,40 16,26 26,32 36,18 42,12" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="42" cy="12" r="3" stroke="#c9a84c" strokeWidth="1.1" fill="none"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><circle cx="24" cy="24" r="17" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M24,12 L24,24 L34,30" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
];

export default function ProcessSection() {
  const { t } = useI18n();
  const steps = t('process.steps');

  return (
    <section id="process" className="relative py-28 md:py-44 overflow-hidden" style={{ background: '#faf7f2' }}>
      <PaperTexture id="procP" />

      {/* COMPOSITION: pyramid outline behind timeline, feather fragment, feather tip, horizontal feather, gold curve */}
      <PyramidOutline className="w-[450px] md:w-[650px] h-[430px] md:h-[625px] left-1/2 -translate-x-1/2 top-[8%]" opacity={0.08} />
      <SmallPyramid className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] left-[8%] top-[25%]" opacity={0.15} />
      <SmallPyramid className="w-[40px] md:w-[55px] h-[40px] md:h-[55px] right-[12%] bottom-[30%]" opacity={0.12} />

      <FullFeather className="w-[180px] md:w-[260px] h-[450px] md:h-[650px] left-[-30px] md:left-0 top-[10%]" opacity={0.22} />
      <FeatherFragment className="w-[90px] md:w-[130px] h-[80px] md:h-[110px] right-4 md:right-12 top-[20%]" opacity={0.2} rotate={10} />
      <FeatherTip className="w-[50px] md:w-[75px] h-[85px] md:h-[125px] right-[5%] bottom-[15%]" opacity={0.2} rotate={-20} />
      <HorizontalFeather className="w-[250px] md:w-[380px] h-[50px] md:h-[75px] left-[5%] bottom-8" opacity={0.15} />
      
      <WatercolorStain className="right-[-100px] top-[30%]" color="#deb87a" opacity={0.14} size={450} id="proc1" />
      
      <GoldCurve className="w-[240px] md:w-[350px] h-[55px] md:h-[75px] right-[3%] top-[55%]" opacity={0.2} flip />
      <StarConstellation className="w-[200px] h-[200px] right-2 top-8" opacity={0.3} />
      <GoldDotGrid className="w-[130px] h-[85px] left-4 bottom-20" rows={4} cols={7} opacity={0.25} />
      <ScatteredDots className="w-[100px] h-[100px] left-[12%] top-[40%]" opacity={0.22} count={12} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
        <motion.div className="text-center mb-20 md:mb-24" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5 font-medium">{t('process.subtitle')}</p>
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-6 leading-[1.1]">{t('process.heading')}</h2>
          <GoldLine width="w-28" className="mx-auto" />
        </motion.div>

        <div className="relative">
          <motion.div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" initial={{ scaleY: 0, transformOrigin: 'top' }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: 'easeOut' }}>
            <div className="w-full h-full" style={{ background: 'linear-gradient(180deg, #c9a84c, #e8d5a3 50%, #c9a84c)' }} />
          </motion.div>
          <div className="flex flex-col gap-16 md:gap-20">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i} className={`relative flex items-start gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}>
                  <div className="absolute left-8 md:left-1/2 top-4 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                      <span className="text-white font-heading text-[13px] font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="relative bg-white rounded-xl p-7 md:p-9 border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(30,58,95,0.08)] group">
                      <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-500">{stepIcons[i]}</div>
                      </div>
                      <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#1e3a5f] mb-3">{step.title}</h3>
                      <p className="text-[#1e3a5f]/50 font-body text-[13px] md:text-[15px] leading-[1.85]">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}