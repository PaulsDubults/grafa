import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import PricingModal from './PricingModal';
import { FullFeather, SmallFeather, FeatherTip, PyramidOutline, SmallPyramid, WatercolorStain, GoldCurve, StarConstellation, GoldDotGrid, ScatteredDots, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const stepIcons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><path d="M8,34 C8,20 14,14 24,14 C34,14 40,20 40,34" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" fill="none"/><circle cx="17" cy="26" r="2" fill="#c9a84c" opacity="0.4"/><circle cx="24" cy="26" r="2" fill="#c9a84c" opacity="0.4"/><circle cx="31" cy="26" r="2" fill="#c9a84c" opacity="0.4"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><rect x="10" y="6" width="28" height="36" rx="2.5" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M17,16 L31,16 M17,23 L31,23 M17,30 L25,30" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><path d="M14,42 L24,6 L34,42" stroke="#c9a84c" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M18,30 L30,30" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><rect x="6" y="10" width="22" height="30" rx="2.5" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><rect x="20" y="14" width="22" height="26" rx="2.5" stroke="#c9a84c" strokeWidth="1.1" fill="none"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><circle cx="24" cy="24" r="17" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M24,12 L24,24 L34,30" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
];

export default function WhyChooseSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const steps = t('whyChoose.steps');

  return (
    <section id="kapec-izvel" className="relative py-28 md:py-44 overflow-hidden" style={{ background: '#f5f0e8' }}>
      <PaperTexture id="whyChP" />

      {/* Decorative feather — right side, leaning left, with gold line & ink drop */}
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-40px] md:right-[-10px] top-[5%]" opacity={0.22} />
      <FeatherTip className="w-[90px] md:w-[130px] h-[110px] md:h-[160px] left-[5%] top-[12%]" opacity={0.14} rotate={-15} />
      <SmallFeather className="w-[80px] md:w-[110px] h-[95px] md:h-[140px] left-[10%] bottom-[12%]" opacity={0.12} rotate={10} />

      <PyramidOutline className="w-[400px] md:w-[580px] h-[380px] md:h-[560px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.06} />
      <SmallPyramid className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] right-[20%] top-[20%]" opacity={0.12} />

      <WatercolorStain className="left-[-120px] top-[15%]" color="#e8c89a" opacity={0.12} size={500} id="whyC1" />
      <WatercolorStain className="right-[-100px] bottom-[-30px]" color="#e0b5b0" opacity={0.08} size={400} id="whyC2" />

      <GoldCurve className="w-[240px] md:w-[360px] h-[55px] md:h-[75px] right-[5%] top-[45%]" opacity={0.18} flip />
      <StarConstellation className="w-[180px] h-[180px] left-4 top-8" opacity={0.28} />
      <GoldDotGrid className="w-[130px] h-[80px] right-8 bottom-16" rows={4} cols={7} opacity={0.22} />
      <ScatteredDots className="w-[110px] h-[110px] left-[35%] bottom-[8%]" opacity={0.2} count={14} />

      {/* Gold line accent beside feather */}
      <motion.div
        className="absolute right-[60px] md:right-[120px] top-[8%] w-[2px] h-[120px] md:h-[200px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #c9a84c, transparent)' }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 1.5 }}
      />
      {/* Ink drop */}
      <motion.div
        className="absolute right-[56px] md:right-[116px] top-[28%] md:top-[32%] pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <path d="M9,1 C9,1 1,10 1,14 C1,18.5 5,21 9,21 C13,21 17,18.5 17,14 C17,10 9,1 9,1 Z" fill="#1e3a5f" opacity="0.6" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
        {/* Typewriter script text */}
        <div className="mb-8 md:mb-10 min-h-[60px] md:min-h-[70px]">
          <TypewriterText
            text={t('whyChoose.scriptLine')}
            className="font-script text-[20px] md:text-[26px] text-[#c9a84c]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-6 leading-[1.1]">
            {t('whyChoose.heading')}
          </h2>
          <GoldLine width="w-28" />
        </motion.div>

        {/* Section subtitle */}
        <motion.p
          className="text-center font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-12 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('whyChoose.processSubtitle')}
        </motion.p>

        {/* 5 process blocks */}
        <div className="space-y-6 md:space-y-8 mb-16 md:mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-xl p-7 md:p-9 border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(30,58,95,0.08)]"
              initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
            >
              <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a84c]/[0.12] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="text-[#c9a84c]">{stepIcons[i]}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-body text-[#c9a84c]/50 tracking-[0.2em] font-medium">{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-6 h-[1px] bg-[#c9a84c]/20" />
                  </div>
                  <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#1e3a5f] mb-2">{step.title}</h3>
                  <p className="text-[#1e3a5f]/50 font-body text-[13px] md:text-[15px] leading-[1.85]">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing block */}
        <motion.div
          className="relative cursor-pointer group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          onClick={() => setPricingOpen(true)}
        >
          <div className="relative bg-white rounded-xl p-8 md:p-10 border border-[#c9a84c]/20 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgba(201,168,76,0.12),0_0_0_1px_rgba(201,168,76,0.2)] hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 5%, #c9a84c 25%, #e8d5a3 50%, #c9a84c 75%, transparent 95%)' }} />
            <svg className="absolute top-4 right-4 w-8 h-8 opacity-[0.2] group-hover:opacity-[0.4] transition-opacity duration-500" viewBox="0 0 30 30" fill="none">
              <path d="M28,2 L28,12 M28,2 L18,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/[0.12] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                  <circle cx="24" cy="24" r="16" stroke="#c9a84c" strokeWidth="1.3" fill="none" />
                  <path d="M24,14 L24,34 M20,18 L28,18 M20,30 L28,30 M21,14 L27,14 M21,34 L27,34" stroke="#c9a84c" strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-[20px] md:text-[22px] font-semibold text-[#1e3a5f] mb-1">{t('whyChoose.pricingBlockTitle')}</h3>
                <p className="text-[#1e3a5f]/45 font-body text-[13px] md:text-[14px] leading-[1.8]">{t('whyChoose.pricingBlockDesc')}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-6 group-hover:w-14 h-[2px] transition-all duration-700" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)' }} />
                <svg className="w-4 h-4 text-[#c9a84c] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" viewBox="0 0 20 20" fill="none">
                  <path d="M4,10 L16,10 M12,6 L16,10 L12,14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
    </section>
  );
}