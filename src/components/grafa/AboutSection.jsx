import React from 'react';
import { motion } from 'framer-motion';
import { FullFeather, HalfFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function AboutSection() {
  const { t } = useI18n();
  const missionValues = [t('about.mission'), t('about.vision')];
  const coreValues = t('about.values');

  return (
    <section id="par-mums" className="relative py-16 md:py-24 overflow-hidden">
      <PaperTexture id="aboutP" />
      <HalfFeather className="w-[260px] md:w-[420px] h-[360px] md:h-[600px] right-[-70px] md:right-[-25px] top-[8%]" opacity={0.5} flip />
      <WatercolorStain className="right-[-120px] top-[18%]" color="#e0b5b0" opacity={0.1} size={500} id="abt1" />
      <WatercolorStain className="left-[-100px] bottom-[-40px]" color="#e8c89a" opacity={0.08} size={400} id="abt2" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Subtitle + Heading + gold divider */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#C89B3C] mb-4 font-medium">{t('about.subtitle')}</p>
          <h2 className="font-heading text-[38px] md:text-[52px] lg:text-[60px] font-semibold text-[#08233E] mb-4 leading-[1.1]">{t('about.heading')}</h2>
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C89B3C]/60 via-[#E8D1A0]/40 to-transparent" />
        </motion.div>

        {/* Company description */}
        <motion.div
          className="max-w-3xl mb-14 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <p className="font-heading text-[20px] md:text-[24px] font-semibold text-[#08233E] mb-4">{t('about.companyName')}</p>
          <p className="text-[#08233E]/80 font-body text-[15px] md:text-[16px] leading-[2] mb-3">
            {t('about.description1_start')}
            <strong className="text-[#08233E] font-semibold">{t('about.description1_bold')}</strong>
            {t('about.description1_end')}
          </p>
          <p className="text-[#08233E]/55 font-body text-[14px] md:text-[15px] leading-[2]">{t('about.description2')}</p>
        </motion.div>

        {/* Mission + Vision cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-14 md:mb-16">
          {missionValues.map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-xl p-7 md:p-9 border border-[#e8e0d4]/50 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <div className="absolute top-0 left-5 right-5 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <p className="text-[10px] font-body text-[#C89B3C] tracking-[0.25em] uppercase mb-3 font-medium">{item.label}</p>
              <p className="text-[#08233E]/80 font-body text-[15px] md:text-[16px] leading-[2]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Values label */}
        <motion.p
          className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#C89B3C] mb-8 font-medium text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('about.valuesLabel')}
        </motion.p>

        {/* 4 core values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              className="text-center py-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#C89B3C]/[0.1] flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#C89B3C]" viewBox="0 0 20 20" fill="currentColor"><path d="M10,0 L12,7 L20,8 L14,13 L16,20 L10,16 L4,20 L6,13 L0,8 L8,7 Z" opacity="0.6"/></svg>
              </div>
              <h4 className="font-heading text-[16px] md:text-[17px] font-semibold text-[#08233E] mb-1.5">{val.title}</h4>
              <p className="text-[#08233E]/45 font-body text-[13px] md:text-[14px] leading-[1.7]">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}