import React from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import { FullFeather, HalfFeather, FeatherOutline, SmallFeather, FeatherFragment, PyramidOutline, MediumPyramid, PyramidSilhouette, WatercolorStain, GoldCurve, GoldFlourish, StarConstellation, GoldDotGrid, ScatteredDots, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function AboutSection() {
  const { t } = useI18n();
  const missionValues = [t('about.mission'), t('about.vision')];
  const coreValues = t('about.values');

  return (
    <section id="par-mums" className="relative py-28 md:py-44 overflow-hidden" style={{ background: '#faf7f2' }}>
      <PaperTexture id="aboutP" />

      {/* COMPOSITION: gold feather left, rose outline right, rose half top, gold fragment bottom */}
      <FullFeather className="w-[240px] md:w-[350px] h-[600px] md:h-[880px] left-[-30px] md:left-0 top-[3%]" opacity={0.28} />
      <FeatherOutline className="w-[180px] md:w-[270px] h-[450px] md:h-[680px] right-[-15px] md:right-4 bottom-[3%]" opacity={0.2} flip />
      <HalfFeather className="w-[110px] md:w-[160px] h-[180px] md:h-[260px] right-[18%] top-8" opacity={0.18} />
      <SmallFeather className="w-[50px] md:w-[70px] h-[130px] md:h-[180px] left-[12%] bottom-[12%]" opacity={0.18} rotate={-8} />
      <FeatherFragment className="w-[75px] md:w-[100px] h-[65px] md:h-[85px] left-[25%] top-[65%]" opacity={0.15} rotate={20} />
      
      <PyramidOutline className="w-[500px] md:w-[700px] h-[480px] md:h-[670px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.08} />
      <MediumPyramid className="w-[130px] md:w-[180px] h-[130px] md:h-[180px] left-[5%] top-[20%]" opacity={0.12} />
      <PyramidSilhouette className="w-[300px] md:w-[420px] h-[260px] md:h-[370px] right-[-50px] bottom-[-20px]" opacity={0.04} />

      <WatercolorStain className="right-[-120px] top-[18%]" color="#e0b5b0" opacity={0.12} size={500} id="abt1" />
      <WatercolorStain className="left-[-100px] bottom-[-40px]" color="#e8c89a" opacity={0.1} size={400} id="abt2" />

      <GoldCurve className="w-[260px] md:w-[380px] h-[55px] md:h-[75px] left-[8%] top-[48%]" opacity={0.22} />
      <GoldFlourish className="w-[200px] md:w-[300px] h-[80px] md:h-[120px] right-[5%] bottom-[18%]" opacity={0.18} flip />
      <StarConstellation className="w-[200px] h-[200px] right-4 top-12" opacity={0.32} />
      <GoldDotGrid className="w-[150px] h-[85px] left-8 bottom-20" rows={4} cols={8} opacity={0.28} />
      <ScatteredDots className="w-[110px] h-[110px] left-[30%] top-[70%]" opacity={0.22} count={14} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        <motion.div className="text-center mb-20 md:mb-24" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5 font-medium">{t('about.subtitle')}</p>
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-6 leading-[1.1]">{t('about.heading')}</h2>
          <GoldLine width="w-28" className="mx-auto" />
        </motion.div>

        <motion.div className="max-w-3xl mx-auto text-center mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>
          <p className="font-heading text-[20px] md:text-[24px] font-semibold text-[#1e3a5f] mb-5">{t('about.companyName')}</p>
          <p className="text-[#1e3a5f]/55 font-body text-[15px] md:text-[17px] leading-[2] mb-4">{t('about.description1_start')}<strong className="text-[#1e3a5f] font-semibold">{t('about.description1_bold')}</strong>{t('about.description1_end')}</p>
          <p className="text-[#1e3a5f]/45 font-body text-[14px] md:text-[16px] leading-[2]">{t('about.description2')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-20">
          {missionValues.map((item, i) => (
            <motion.div key={i} className="group relative bg-white rounded-xl p-10 md:p-12 border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:shadow-[0_16px_48px_rgba(30,58,95,0.08)]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.12, duration: 0.7 }}>
              <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
              <svg className="absolute top-4 right-4 w-8 h-8 opacity-[0.15]" viewBox="0 0 30 30" fill="none"><path d="M28,2 L28,12 M28,2 L18,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/></svg>
              <svg className="absolute bottom-4 left-4 w-8 h-8 opacity-[0.15]" viewBox="0 0 30 30" fill="none"><path d="M2,28 L2,18 M2,28 L12,28" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/></svg>
              <p className="text-[11px] font-body text-[#c9a84c] tracking-[0.3em] uppercase mb-4 font-medium">{item.label}</p>
              <p className="text-[#1e3a5f]/60 font-body text-[15px] md:text-[16px] leading-[2]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center font-body text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] mb-10 font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>{t('about.valuesLabel')}</motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {coreValues.map((val, i) => (
            <motion.div key={i} className="text-center py-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}>
              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/[0.12] flex items-center justify-center mx-auto mb-5">
                <svg className="w-5 h-5 text-[#c9a84c]" viewBox="0 0 20 20" fill="currentColor"><path d="M10,0 L12,7 L20,8 L14,13 L16,20 L10,16 L4,20 L6,13 L0,8 L8,7 Z" opacity="0.6"/></svg>
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