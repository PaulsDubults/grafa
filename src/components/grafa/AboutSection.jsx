import React from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import { LargePyramid, LargeFeather, FeatherOutline, PeachWash, RosyWash, StarConstellation, GoldDotGrid, GoldCurl, GoldInkSplash, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function AboutSection() {
  const { t } = useI18n();
  const missionValues = [t('about.mission'), t('about.vision')];
  const coreValues = t('about.values');

  return (
    <section id="par-mums" className="relative py-28 md:py-44 overflow-hidden" style={{ background: '#faf7f2' }}>
      <PaperTexture id="aboutP" />

      {/* Large centered pyramid */}
      <LargePyramid className="w-[500px] md:w-[750px] h-[500px] md:h-[750px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.12} />

      {/* Large feather — left */}
      <LargeFeather className="w-[220px] md:w-[320px] h-[550px] md:h-[800px] left-[-30px] md:left-0 top-[5%]" opacity={0.26} />
      {/* Feather outline — right */}
      <FeatherOutline className="w-[180px] md:w-[260px] h-[440px] md:h-[650px] right-[-10px] md:right-4 bottom-[3%]" opacity={0.2} flip />

      {/* Peach wash — right */}
      <PeachWash className="right-[-180px] top-[15%]" size={800} opacity={0.3} id="abtPw" />
      {/* Rosy — left bottom */}
      <RosyWash className="left-[-120px] bottom-[-60px]" size={600} opacity={0.22} id="abtRw" />
      {/* Gold ink — top left */}
      <GoldInkSplash className="left-[15%] top-[-30px]" size={350} opacity={0.18} id="abtGi" />

      {/* Stars */}
      <StarConstellation className="w-[220px] h-[220px] right-4 top-16" opacity={0.35} />
      {/* Dots */}
      <GoldDotGrid className="w-[160px] h-[90px] left-8 bottom-24" rows={5} cols={9} opacity={0.28} />
      {/* Curls — both sides */}
      <GoldCurl className="w-[180px] h-[100px] left-[5%] top-[35%]" opacity={0.2} />
      <GoldCurl className="w-[150px] h-[85px] right-[8%] bottom-[20%]" opacity={0.18} flip />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        <motion.div className="text-center mb-20 md:mb-24" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5 font-medium">{t('about.subtitle')}</p>
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-6 leading-[1.1]">{t('about.heading')}</h2>
          <GoldLine width="w-28" className="mx-auto" />
        </motion.div>

        <motion.div className="max-w-3xl mx-auto text-center mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>
          <p className="font-heading text-[20px] md:text-[24px] font-semibold text-[#1e3a5f] mb-5">{t('about.companyName')}</p>
          <p className="text-[#1e3a5f]/55 font-body text-[15px] md:text-[17px] leading-[2] mb-4">
            {t('about.description1_start')}<strong className="text-[#1e3a5f] font-semibold">{t('about.description1_bold')}</strong>{t('about.description1_end')}
          </p>
          <p className="text-[#1e3a5f]/45 font-body text-[14px] md:text-[16px] leading-[2]">{t('about.description2')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-20">
          {missionValues.map((item, i) => (
            <motion.div key={i} className="group relative bg-white rounded-xl p-10 md:p-12 border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:shadow-[0_16px_48px_rgba(30,58,95,0.08)]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.12, duration: 0.7 }}>
              <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
              <svg className="absolute top-4 right-4 w-8 h-8 opacity-[0.15]" viewBox="0 0 30 30" fill="none"><path d="M28,2 L28,12 M28,2 L18,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" /></svg>
              <svg className="absolute bottom-4 left-4 w-8 h-8 opacity-[0.15]" viewBox="0 0 30 30" fill="none"><path d="M2,28 L2,18 M2,28 L12,28" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" /></svg>
              <p className="text-[11px] font-body text-[#c9a84c] tracking-[0.3em] uppercase mb-4 font-medium">{item.label}</p>
              <p className="text-[#1e3a5f]/60 font-body text-[15px] md:text-[16px] leading-[2]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center font-body text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] mb-10 font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {t('about.valuesLabel')}
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {coreValues.map((val, i) => (
            <motion.div key={i} className="text-center py-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}>
              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/[0.12] flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-[#c9a84c]" viewBox="0 0 20 20" fill="currentColor"><path d="M10,0 L12,7 L20,8 L14,13 L16,20 L10,16 L4,20 L6,13 L0,8 L8,7 Z" opacity="0.6" /></svg>
              </div>
              <h4 className="font-heading text-[15px] md:text-[17px] font-semibold text-[#1e3a5f] mb-2">{val.title}</h4>
              <p className="text-[#1e3a5f]/40 font-body text-[12px] md:text-[14px] leading-[1.7]">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}