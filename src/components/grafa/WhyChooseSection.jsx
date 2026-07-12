import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const stepIcons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M8,34 C8,20 14,14 24,14 C34,14 40,20 40,34" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" fill="none"/><circle cx="17" cy="26" r="2" fill="#C89B3C" opacity="0.4"/><circle cx="24" cy="26" r="2" fill="#C89B3C" opacity="0.4"/><circle cx="31" cy="26" r="2" fill="#C89B3C" opacity="0.4"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="10" y="6" width="28" height="36" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M17,16 L31,16 M17,23 L31,23 M17,30 L25,30" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M14,30 C18,22 30,22 34,30" stroke="#C89B3C" strokeWidth="1.3" fill="none" strokeLinecap="round"/><path d="M14,30 L24,38 L34,30" stroke="#C89B3C" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="6" y="10" width="22" height="30" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><rect x="20" y="14" width="22" height="26" rx="2.5" stroke="#C89B3C" strokeWidth="1.1" fill="none"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M24,6 L40,14 L40,28 C40,36 32,42 24,46 C16,42 8,36 8,28 L8,14 Z" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M18,24 L22,28 L30,20" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default function WhyChooseSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);
  const points = t('whyChoose.points');
  const stats = t('whyChoose.stats');
  const checkmarks = t('whyChoose.checkmarks');
  const steps = t('process.steps');

  return (
    <section id="kapec-izvel" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="whyChP" />
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-40px] md:right-[-10px] top-[5%]" opacity={0.18} />
      <WatercolorStain className="left-[-120px] top-[15%]" color="#e8c89a" opacity={0.1} size={500} id="whyC1" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Script text */}
        <div className="mb-8 md:mb-10 min-h-[60px] md:min-h-[70px]">
          <TypewriterText
            text={t('whyChoose.scriptLine')}
            className="font-script text-[24px] md:text-[32px] text-[#C89B3C]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[38px] md:text-[54px] lg:text-[68px] font-semibold text-[#08233E] mb-6 leading-[1.1]">
            {t('whyChoose.heading')}
          </h2>
          <GoldLine width="w-28" />
        </motion.div>

        {/* 5 numbered points */}
        <div className="space-y-5 md:space-y-6 mb-16 md:mb-20 max-w-3xl">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C89B3C] flex items-center justify-center shadow-[0_0_16px_rgba(201,168,76,0.25)]">
                <span className="text-white font-heading text-[14px] font-bold">{i + 1}</span>
              </div>
              <p className="text-[#08233E] font-body text-[16px] md:text-[18px] leading-[1.85] pt-2">{point}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience stats — "Pieredze, uz kuras var balstīties" */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-[32px] md:text-[40px] font-bold text-[#08233E] mb-1">{stat.number}</p>
                <p className="font-body text-[13px] text-[#08233E]/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* "Mūsu sadarbības process" sub-section */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-heading text-[28px] md:text-[38px] lg:text-[44px] font-semibold text-[#08233E] mb-4">
            {t('process.heading')}
          </h3>
          <GoldLine width="w-20" className="mx-auto" />
        </motion.div>

        {/* 5 horizontal process steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 mb-16 md:mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-xl p-6 md:p-5 border border-[#e8e0d4]/50 overflow-hidden text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <div className="absolute top-0 left-4 right-4 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, transparent)' }} />
              <div className="w-10 h-10 rounded-full bg-[#C89B3C] flex items-center justify-center mx-auto mb-4 shadow-[0_0_16px_rgba(201,168,76,0.25)]">
                <span className="text-white font-heading text-[14px] font-bold">{i + 1}</span>
              </div>
              <div className="text-[#C89B3C] flex justify-center mb-4">
                {stepIcons[i]}
              </div>
              <h4 className="font-heading text-[16px] md:text-[18px] font-semibold text-[#08233E] mb-2">{step.title}</h4>
              <p className="text-[#08233E]/50 font-body text-[13px] md:text-[14px] leading-[1.7]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Price box with checkmarks */}
        <motion.div
          className="relative bg-white rounded-xl p-8 md:p-10 border border-[#e8e0d4]/50 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 flex-shrink-0">
                  <circle cx="24" cy="24" r="18" stroke="#C89B3C" strokeWidth="1.3" fill="none"/>
                  <text x="24" y="29" textAnchor="middle" fill="#C89B3C" fontSize="18" fontWeight="bold">€</text>
                </svg>
                <div>
                  <h3 className="font-heading text-[22px] md:text-[26px] font-semibold text-[#08233E] mb-2">{t('whyChoose.priceBoxTitle')}</h3>
                  <p className="text-[#08233E]/60 font-body text-[15px] md:text-[16px] leading-[1.8]">{t('whyChoose.priceBoxDesc')}</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="space-y-3">
                {checkmarks.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <circle cx="10" cy="10" r="9" stroke="#C89B3C" strokeWidth="1.2" fill="none"/>
                      <path d="M6,10 L9,13 L14,7" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="font-body text-[14px] md:text-[15px] text-[#08233E]/60">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-6 gap-2 text-[#C89B3C]">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M10,2 L10,18 M6,14 L10,18 L14,14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="font-body text-[12px] tracking-[0.15em] uppercase">{t('whyChoose.trustNote')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}