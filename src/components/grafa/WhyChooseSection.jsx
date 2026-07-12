import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

/* Per mockup 3lapa: Script text → heading (crossed out style) → "Mūsu sadarbības process" with 5 steps → price box with checkmarks. NO numbered points, NO stats. */

const stepIcons = [
  /* 1: Sazināmies — people/chat */
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><circle cx="20" cy="20" r="8" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><circle cx="36" cy="20" r="8" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M14,32 C14,28 18,26 28,26 C38,26 42,28 42,32" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinecap="round"/><path d="M20,38 L20,46 M28,36 L28,46 M36,38 L36,46" stroke="#C89B3C" strokeWidth="0.8" opacity="0.4"/></svg>,
  /* 2: Piedāvājums — document with pen */
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><rect x="12" y="6" width="26" height="36" rx="3" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M19,16 L33,16 M19,22 L33,22 M19,28 L28,28" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/><path d="M36,30 L42,24 L46,28 L40,34 Z" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinejoin="round"/><path d="M36,34 L40,34 L36,38" stroke="#C89B3C" strokeWidth="0.8" fill="#C89B3C" opacity="0.3"/></svg>,
  /* 3: Sadarbības uzsākšana — handshake */
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><path d="M8,28 L18,20 L28,28 L38,20 L48,28" stroke="#C89B3C" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M18,28 L18,40 M38,28 L38,40" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinecap="round"/><path d="M18,40 C18,40 28,46 38,40" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>,
  /* 4: Ikdienas darbs — calendar/clipboard */
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><rect x="10" y="12" width="36" height="32" rx="3" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M10,22 L46,22" stroke="#C89B3C" strokeWidth="0.8" opacity="0.4"/><path d="M20,8 L20,16 M36,8 L36,16" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round"/><path d="M18,30 L22,34 L38,28" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
  /* 5: Atbalsts un konsultācijas — shield with check */
  <svg viewBox="0 0 56 56" fill="none" className="w-11 h-11"><path d="M28,6 L46,16 L46,30 C46,40 38,48 28,52 C18,48 10,40 10,30 L10,16 Z" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M20,28 L26,34 L36,22" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default function WhyChooseSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);
  const checkmarks = t('whyChoose.checkmarks');
  const steps = t('process.steps');

  return (
    <section id="kapec-izvel" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="whyChP" />
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-40px] md:right-[-10px] top-[2%]" opacity={0.18} />
      <WatercolorStain className="left-[-120px] top-[15%]" color="#e8c89a" opacity={0.1} size={500} id="whyC1" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Script text — typewriter */}
        <div className="mb-6 md:mb-8 min-h-[60px] md:min-h-[70px]">
          <TypewriterText
            text={t('whyChoose.scriptLine')}
            className="font-script text-[24px] md:text-[32px] text-[#C89B3C]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading — per mockup: large text */}
        <motion.div
          className="mb-14 md:mb-18"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[38px] md:text-[54px] lg:text-[68px] font-semibold text-[#08233E] mb-6 leading-[1.1]">
            {t('whyChoose.heading')}
          </h2>
          <GoldLine width="w-28" />
        </motion.div>

        {/* "Mūsu sadarbības process" — directly after heading per mockup */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-heading text-[28px] md:text-[38px] lg:text-[44px] font-semibold text-[#08233E]">
            {t('process.heading')}
          </h3>
        </motion.div>

        {/* 5 horizontal process steps — per mockup: gold numbered circles on top, icon below, title, description in white cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 mb-14 md:mb-18">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-xl p-6 md:p-5 border border-[#e8e0d4]/50 overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              <div className="absolute top-0 left-4 right-4 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, transparent)' }} />
              {/* Gold number circle */}
              <div className="w-10 h-10 rounded-full bg-[#C89B3C] flex items-center justify-center mx-auto mb-4 shadow-[0_0_16px_rgba(201,168,76,0.25)]">
                <span className="text-white font-heading text-[14px] font-bold">{i + 1}</span>
              </div>
              {/* Icon */}
              <div className="text-[#C89B3C] flex justify-center mb-4">
                {stepIcons[i]}
              </div>
              <h4 className="font-heading text-[16px] md:text-[18px] font-semibold text-[#08233E] mb-2">{step.title}</h4>
              <p className="text-[#08233E]/50 font-body text-[13px] md:text-[14px] leading-[1.7]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Price box with checkmarks — per mockup: left side has € icon + title + description, right side has green checkmarks, bottom right "Uzticieties" link */}
        <motion.div
          className="relative bg-white rounded-xl p-8 md:p-10 border border-[#e8e0d4]/50 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left — icon + title + desc */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                    <circle cx="24" cy="24" r="18" stroke="#C89B3C" strokeWidth="1.3" fill="none"/>
                    <text x="24" y="30" textAnchor="middle" fill="#C89B3C" fontSize="20" fontWeight="bold">€</text>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-[#08233E] mb-2">{t('whyChoose.priceBoxTitle')}</h3>
                  <p className="text-[#08233E]/60 font-body text-[14px] md:text-[16px] leading-[1.8]">{t('whyChoose.priceBoxDesc')}</p>
                </div>
              </div>
            </div>
            {/* Right — checkmarks */}
            <div className="flex-1">
              <div className="space-y-3">
                {checkmarks.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <circle cx="10" cy="10" r="9" fill="#C89B3C" opacity="0.15"/>
                      <path d="M6,10 L9,13 L14,7" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="font-body text-[14px] md:text-[15px] text-[#08233E]/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Far right — "Uzticieties" text with arrow */}
            <div className="hidden md:flex flex-col items-center justify-center text-center max-w-[140px]">
              <p className="font-body text-[12px] text-[#08233E]/50 leading-[1.6] mb-3">{t('whyChoose.trustNote')}</p>
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#C89B3C]">
                <path d="M12,5 L12,19 M7,14 L12,19 L17,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}