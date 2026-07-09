import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import { FullFeather, SmallFeather, FeatherTip, PyramidOutline, SmallPyramid, WatercolorStain, GoldCurve, StarConstellation, GoldDotGrid, ScatteredDots, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const stepIcons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><path d="M8,34 C8,20 14,14 24,14 C34,14 40,20 40,34" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" fill="none"/><circle cx="17" cy="26" r="2" fill="#C89B3C" opacity="0.4"/><circle cx="24" cy="26" r="2" fill="#C89B3C" opacity="0.4"/><circle cx="31" cy="26" r="2" fill="#C89B3C" opacity="0.4"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><rect x="10" y="6" width="28" height="36" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M17,16 L31,16 M17,23 L31,23 M17,30 L25,30" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><path d="M14,42 L24,6 L34,42" stroke="#C89B3C" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M18,30 L30,30" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><rect x="6" y="10" width="22" height="30" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><rect x="20" y="14" width="22" height="26" rx="2.5" stroke="#C89B3C" strokeWidth="1.1" fill="none"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><circle cx="24" cy="24" r="17" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M24,12 L24,24 L34,30" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
];

export default function WhyChooseSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);
  const steps = t('whyChoose.steps');

  return (
    <section id="kapec-izvel" className="relative py-28 md:py-44 overflow-hidden" style={{ background: '#F8F2EA' }}>
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
        <div className="mb-8 md:mb-10 min-h-[60px] md:min-h-[70px]">
          <TypewriterText
            text={t('whyChoose.scriptLine')}
            className="font-script text-[20px] md:text-[26px] text-[#C89B3C]/80 leading-[1.6] italic"
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
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#08233E] mb-6 leading-[1.1]">
            {t('whyChoose.heading')}
          </h2>
          <GoldLine width="w-28" />
        </motion.div>

        {/* Section subtitle */}
        <motion.p
          className="text-center font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#C89B3C] mb-12 font-medium"
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
              <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="text-[#C89B3C]">{stepIcons[i]}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-body text-[#C89B3C]/50 tracking-[0.2em] font-medium">{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-6 h-[1px] bg-[#C89B3C]/20" />
                  </div>
                  <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#08233E] mb-2">{step.title}</h3>
                  <p className="text-[#08233E]/50 font-body text-[13px] md:text-[15px] leading-[1.85]">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}