import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import GoldLine from './GoldLine';
import { FullFeather, FeatherFragment, FeatherTip, SmallFeather, MediumPyramid, SmallPyramid, PyramidSilhouette, WatercolorStain, GoldFlourish, StarConstellation, ScatteredDots, GoldDotGrid, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function KnowledgeSection() {
  const { t } = useI18n();
  const articles = t('knowledge.articles');

  return (
    <section id="zinasanu-telpa" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="knowP" />

      {/* COMPOSITION: diagonal quill right, upright feather flipped left, fragment accent */}
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-50px] md:right-[-20px] top-[5%]" opacity={0.2} flip />
      <FeatherFragment className="w-[160px] md:w-[240px] h-[200px] md:h-[300px] left-[-30px] md:left-0 top-[10%]" opacity={0.16} rotate={-10} />
      <FeatherTip className="w-[90px] md:w-[130px] h-[110px] md:h-[160px] left-[18%] bottom-[15%]" opacity={0.14} rotate={20} />
      <SmallFeather className="w-[70px] md:w-[100px] h-[85px] md:h-[120px] right-[12%] bottom-8" opacity={0.12} rotate={-5} />
      
      <MediumPyramid className="w-[200px] md:w-[280px] h-[200px] md:h-[280px] right-[5%] bottom-[10%]" opacity={0.14} />
      <SmallPyramid className="w-[55px] md:w-[75px] h-[55px] md:h-[75px] left-[8%] top-[55%]" opacity={0.14} />
      <PyramidSilhouette className="w-[280px] md:w-[400px] h-[250px] md:h-[350px] right-[-60px] top-[40%]" opacity={0.04} />
      
      <WatercolorStain className="left-[-100px] top-[20%]" color="#d4b878" opacity={0.14} size={550} id="know1" />
      <WatercolorStain className="right-[-80px] bottom-[-30px]" color="#e0b5b0" opacity={0.1} size={350} id="know2" />
      
      <GoldFlourish className="w-[260px] md:w-[380px] h-[100px] md:h-[150px] left-[10%] top-[38%]" opacity={0.2} />
      <StarConstellation className="w-[190px] h-[190px] left-2 top-8" opacity={0.32} />
      <ScatteredDots className="w-[130px] h-[130px] right-[8%] top-[25%]" opacity={0.25} count={16} />
      <GoldDotGrid className="w-[140px] h-[90px] left-4 bottom-16" rows={5} cols={8} opacity={0.28} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14 md:mb-18">
          <motion.p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#C89B3C] mb-5 font-medium" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>{t('knowledge.subtitle')}</motion.p>
          <motion.h2 className="font-heading text-[38px] md:text-[54px] lg:text-[64px] font-semibold text-[#08233E] mb-6 leading-[1.1]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>{t('knowledge.heading')}</motion.h2>
          <GoldLine width="w-28" className="mb-8" />
          <motion.p className="text-[#08233E]/50 font-body text-[17px] md:text-[19px] leading-[1.9]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>{t('knowledge.description')}</motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, i) => (
            <motion.div key={i} className={`group relative bg-white rounded-xl border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,58,95,0.08),0_0_0_1px_rgba(201,168,76,0.12)] ${i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-16' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}>
              <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 10%, #C89B3C 30%, #E8D1A0 50%, #C89B3C 70%, transparent 90%)' }} />
              <div className="p-8 md:p-10">
                <svg className="absolute top-5 right-5 w-7 h-7 opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-500" viewBox="0 0 30 30" fill="none"><path d="M28,2 L28,12 M28,2 L18,2" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <div className="flex items-center gap-3 mb-5"><BookOpen className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} /><span className="text-[10px] font-body text-[#C89B3C] tracking-[0.25em] uppercase font-medium">{article.category}</span></div>
                <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-[#08233E] mb-4 leading-snug">{article.title}</h3>
                <p className="text-[#08233E]/45 font-body text-[15px] md:text-[17px] leading-[1.85] mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 group-hover:w-14 h-[2px] transition-all duration-700" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0)' }} />
                  <span className="text-[11px] font-body text-[#C89B3C]/50 group-hover:text-[#C89B3C] transition-colors duration-500 tracking-wider uppercase">{t('knowledge.comingSoon')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p className="text-center text-[#08233E]/30 font-body text-[13px] mt-16 italic" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>{t('knowledge.comingNote')}</motion.p>
      </div>
    </section>
  );
}