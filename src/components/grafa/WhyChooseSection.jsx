import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function WhyChooseSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);
  const points = t('whyChoose.points');
  const checkmarks = t('whyChoose.checkmarks');

  return (
    <section id="kapec-izvel" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="whyChP" />
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-40px] md:right-[-10px] top-[5%]" opacity={0.18} />
      <WatercolorStain className="left-[-120px] top-[15%]" color="#e8c89a" opacity={0.1} size={500} id="whyC1" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Typewriter script text */}
        <div className="mb-8 md:mb-10 min-h-[60px] md:min-h-[70px]">
          <TypewriterText
            text={t('whyChoose.scriptLine')}
            className="font-script text-[24px] md:text-[32px] text-[#C89B3C]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading — wider */}
        <motion.div
          className="mb-12 md:mb-16 max-w-4xl"
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

        {/* Experience stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('whyChoose.stats').map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-heading text-[32px] md:text-[40px] font-bold text-[#08233E] mb-1">{stat.number}</p>
              <p className="font-body text-[13px] text-[#08233E]/45">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Why choose box with checkmarks */}
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