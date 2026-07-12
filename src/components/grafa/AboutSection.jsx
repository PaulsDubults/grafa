import React from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function AboutSection() {
  const { t } = useI18n();
  const missionValues = [t('about.mission'), t('about.vision')];
  const coreValues = t('about.values');

  return (
    <section id="par-mums" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="aboutP" />
      <FullFeather className="w-[280px] md:w-[420px] h-[320px] md:h-[480px] left-[-50px] md:left-[-20px] top-[8%]" opacity={0.16} />
      <WatercolorStain className="right-[-120px] top-[18%]" color="#e0b5b0" opacity={0.1} size={500} id="abt1" />
      <WatercolorStain className="left-[-100px] bottom-[-40px]" color="#e8c89a" opacity={0.08} size={400} id="abt2" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        <motion.div className="text-center mb-14 md:mb-18" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#C89B3C] mb-5 font-medium">{t('about.subtitle')}</p>
          <h2 className="font-heading text-[38px] md:text-[54px] lg:text-[64px] font-semibold text-[#08233E] mb-6 leading-[1.1]">{t('about.heading')}</h2>
          <GoldLine width="w-28" className="mx-auto" />
        </motion.div>

        <motion.div className="max-w-3xl mx-auto text-center mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>
          <p className="font-heading text-[24px] md:text-[28px] font-semibold text-[#08233E] mb-5">{t('about.companyName')}</p>
          <p className="text-[#08233E] font-body text-[17px] md:text-[19px] leading-[2] mb-4">{t('about.description1_start')}<strong className="text-[#08233E] font-semibold">{t('about.description1_bold')}</strong>{t('about.description1_end')}</p>
          <p className="text-[#08233E]/60 font-body text-[16px] md:text-[18px] leading-[2]">{t('about.description2')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-20">
          {missionValues.map((item, i) => (
            <motion.div key={i} className="relative bg-white rounded-xl p-10 md:p-12 border border-[#e8e0d4]/50 overflow-hidden" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.12, duration: 0.7 }}>
              <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <p className="text-[11px] font-body text-[#C89B3C] tracking-[0.3em] uppercase mb-4 font-medium">{item.label}</p>
              <p className="text-[#08233E] font-body text-[17px] md:text-[18px] leading-[2]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center font-body text-[11px] tracking-[0.3em] uppercase text-[#C89B3C] mb-10 font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>{t('about.valuesLabel')}</motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {coreValues.map((val, i) => (
            <motion.div key={i} className="text-center py-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}>
              <div className="w-14 h-14 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-[#C89B3C]" viewBox="0 0 20 20" fill="currentColor"><path d="M10,0 L12,7 L20,8 L14,13 L16,20 L10,16 L4,20 L6,13 L0,8 L8,7 Z" opacity="0.6"/></svg>
              </div>
              <h4 className="font-heading text-[17px] md:text-[19px] font-semibold text-[#08233E] mb-2">{val.title}</h4>
              <p className="text-[#08233E]/50 font-body text-[14px] md:text-[16px] leading-[1.7]">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}