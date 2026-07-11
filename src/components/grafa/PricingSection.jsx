import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import { FullFeather, SmallFeather, FeatherTip, PyramidOutline, SmallPyramid, WatercolorStain, GoldCurve, StarConstellation, GoldDotGrid, ScatteredDots, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const factorIcons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M6,20 L42,20" stroke="#C89B3C" strokeWidth="0.8" opacity="0.4"/><circle cx="14" cy="15" r="2" fill="#C89B3C" opacity="0.3"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><rect x="10" y="6" width="28" height="36" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M17,16 L31,16 M17,22 L31,22 M17,28 L31,28 M17,34 L25,34" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><circle cx="18" cy="20" r="8" stroke="#C89B3C" strokeWidth="1.2" fill="none"/><circle cx="30" cy="28" r="8" stroke="#C89B3C" strokeWidth="1.2" fill="none"/><circle cx="24" cy="16" r="6" stroke="#C89B3C" strokeWidth="0.8" fill="none" opacity="0.4"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><polyline points="8,40 16,28 24,32 34,16 42,12" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M8,42 L42,42" stroke="#C89B3C" strokeWidth="0.8" opacity="0.3"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><circle cx="24" cy="24" r="16" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M16,24 L24,24 L24,14" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round" fill="none"/><path d="M12,36 L36,36" stroke="#C89B3C" strokeWidth="0.6" opacity="0.3"/></svg>,
];

export default function PricingSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);
  const factors = t('pricing.factors');

  return (
    <section id="cena" className="relative py-28 md:py-44 overflow-hidden">
      <PaperTexture id="prcP" />

      {/* Decorative feather — right side, leaning left */}
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-40px] md:right-[-10px] top-[5%]" opacity={0.22} />
      <FeatherTip className="w-[90px] md:w-[130px] h-[110px] md:h-[160px] left-[3%] top-[10%]" opacity={0.14} rotate={-12} />
      <SmallFeather className="w-[80px] md:w-[110px] h-[95px] md:h-[140px] left-[8%] bottom-[10%]" opacity={0.12} rotate={8} />

      <PyramidOutline className="w-[380px] md:w-[540px] h-[360px] md:h-[520px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.06} />
      <SmallPyramid className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] left-[18%] top-[22%]" opacity={0.12} />

      <WatercolorStain className="left-[-120px] top-[20%]" color="#e8c89a" opacity={0.12} size={480} id="prc1" />
      <WatercolorStain className="right-[-100px] bottom-[-30px]" color="#e0b5b0" opacity={0.08} size={380} id="prc2" />

      <GoldCurve className="w-[240px] md:w-[360px] h-[55px] md:h-[75px] left-[5%] bottom-[25%]" opacity={0.18} />
      <StarConstellation className="w-[180px] h-[180px] right-4 top-8" opacity={0.28} />
      <GoldDotGrid className="w-[130px] h-[80px] left-8 bottom-16" rows={4} cols={7} opacity={0.22} />
      <ScatteredDots className="w-[110px] h-[110px] right-[30%] bottom-[6%]" opacity={0.2} count={14} />

      {/* Gold line accent beside feather */}
      <motion.div
        className="absolute right-[60px] md:right-[120px] top-[8%] w-[2px] h-[120px] md:h-[200px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #C89B3C, transparent)' }}
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
          <path d="M9,1 C9,1 1,10 1,14 C1,18.5 5,21 9,21 C13,21 17,18.5 17,14 C17,10 9,1 9,1 Z" fill="#08233E" opacity="0.6" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
        {/* Typewriter script text */}
        <div className="mb-8 md:mb-10 min-h-[60px] md:min-h-[80px]">
          <TypewriterText
            text={t('pricing.scriptLine')}
            className="font-script text-[20px] md:text-[26px] text-[#C89B3C]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#08233E] mb-6 leading-[1.1]">
            {t('pricing.heading')}
          </h2>
          <GoldLine width="w-28" />
        </motion.div>

        {/* Intro text */}
        <motion.p
          className="text-[#08233E]/55 font-body text-[15px] md:text-[17px] leading-[2] mb-14 md:mb-18 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('pricing.intro')}
        </motion.p>

        {/* "Cena atkarīga no" subtitle */}
        <motion.p
          className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#C89B3C] mb-10 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('pricing.factorsSubtitle')}
        </motion.p>

        {/* Factor points */}
        <div className="space-y-5 md:space-y-6 mb-16 md:mb-20">
          {factors.map((factor, i) => (
            <motion.div
              key={i}
              className="group flex items-start gap-5 bg-white rounded-xl p-6 md:p-8 border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,58,95,0.06)]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
            >
              <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-[#C89B3C]">{factorIcons[i]}</div>
              </div>
              <p className="text-[#08233E]/65 font-body text-[14px] md:text-[16px] leading-[1.85] pt-2">{factor}</p>
            </motion.div>
          ))}
        </div>

        {/* Long-term clients block */}
        <motion.div
          className="relative bg-[#08233E] rounded-xl p-8 md:p-10 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 5%, #C89B3C 25%, #E8D1A0 50%, #C89B3C 75%, transparent 95%)' }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg width="100%" height="100%">
              <filter id="prcLtP"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
              <rect width="100%" height="100%" filter="url(#prcLtP)" />
            </svg>
          </div>
          <svg className="absolute top-4 right-4 w-8 h-8 opacity-[0.15]" viewBox="0 0 30 30" fill="none">
            <path d="M28,2 L28,12 M28,2 L18,2" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <svg className="absolute bottom-4 left-4 w-8 h-8 opacity-[0.15]" viewBox="0 0 30 30" fill="none">
            <path d="M2,28 L2,18 M2,28 L12,28" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <div className="relative z-10 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
                <path d="M24,6 L30,18 L44,20 L34,30 L36,44 L24,38 L12,44 L14,30 L4,20 L18,18 Z" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-[#C89B3C] mb-3 font-medium">{t('pricing.longTermLabel')}</p>
              <p className="text-white/70 font-body text-[15px] md:text-[17px] leading-[1.9]">{t('pricing.longTermText')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}