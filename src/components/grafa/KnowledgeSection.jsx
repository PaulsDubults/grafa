import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import GoldLine from './GoldLine';
import { LargePyramid, PyramidSilhouette, StarConstellation, GoldInkSplash, WatercolorBrush, GoldDotGrid, SmallFeather, GoldCurl, LargeFeather, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function KnowledgeSection() {
  const { t } = useI18n();
  const articles = t('knowledge.articles');

  return (
    <section id="zinasanu-telpa" className="relative py-28 md:py-44 overflow-hidden" style={{ background: '#f5f0e8' }}>
      <PaperTexture id="knowP" />

      {/* Large pyramid — right */}
      <LargePyramid className="w-[400px] md:w-[580px] h-[400px] md:h-[580px] right-[-80px] md:right-[-30px] top-[10%]" opacity={0.16} />
      {/* Pyramid silhouette fill — left bg */}
      <PyramidSilhouette className="w-[300px] md:w-[420px] h-[260px] md:h-[370px] left-[-50px] bottom-[-30px]" opacity={0.04} />

      {/* Watercolor brush — top left, warm beige */}
      <WatercolorBrush className="left-[-220px] top-[-80px]" color="#d4b878" opacity={0.3} size={800} id="knowWc" />
      {/* Gold ink splash — right, center */}
      <GoldInkSplash className="right-[-40px] top-[40%]" size={400} opacity={0.22} id="knowGi" />

      {/* Stars */}
      <StarConstellation className="w-[220px] h-[220px] left-4 top-24" opacity={0.35} />
      {/* Dots */}
      <GoldDotGrid className="w-[170px] h-[100px] left-2 bottom-16" rows={5} cols={9} opacity={0.3} />
      {/* Feather — left, small */}
      <SmallFeather className="w-[80px] md:w-[110px] h-[200px] md:h-[280px] left-2 top-[25%]" opacity={0.24} rotate={-8} />
      {/* Feather — bottom right, large */}
      <LargeFeather className="w-[160px] md:w-[240px] h-[400px] md:h-[600px] right-[-10px] bottom-0" opacity={0.2} flip />
      {/* Curl */}
      <GoldCurl className="w-[170px] h-[95px] left-[25%] bottom-12" opacity={0.2} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-20 md:mb-24">
          <motion.p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5 font-medium" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            {t('knowledge.subtitle')}
          </motion.p>
          <motion.h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-6 leading-[1.1]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>
            {t('knowledge.heading')}
          </motion.h2>
          <GoldLine width="w-28" className="mb-8" />
          <motion.p className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[17px] leading-[1.9]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            {t('knowledge.description')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, i) => (
            <motion.div key={i} className={`group relative bg-white rounded-xl border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,58,95,0.08),0_0_0_1px_rgba(201,168,76,0.12)] ${i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-16' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}>
              <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 10%, #c9a84c 30%, #e8d5a3 50%, #c9a84c 70%, transparent 90%)' }} />
              <div className="p-8 md:p-10">
                <svg className="absolute top-5 right-5 w-7 h-7 opacity-[0.15] group-hover:opacity-[0.3] transition-opacity duration-500" viewBox="0 0 30 30" fill="none">
                  <path d="M28,2 L28,12 M28,2 L18,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen className="w-5 h-5 text-[#c9a84c]" strokeWidth={1.5} />
                  <span className="text-[10px] font-body text-[#c9a84c] tracking-[0.25em] uppercase font-medium">{article.category}</span>
                </div>
                <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#1e3a5f] mb-4 leading-snug">{article.title}</h3>
                <p className="text-[#1e3a5f]/45 font-body text-[13px] md:text-[15px] leading-[1.85] mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 group-hover:w-14 h-[2px] transition-all duration-700" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)' }} />
                  <span className="text-[11px] font-body text-[#c9a84c]/50 group-hover:text-[#c9a84c] transition-colors duration-500 tracking-wider uppercase">{t('knowledge.comingSoon')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center text-[#1e3a5f]/30 font-body text-[13px] mt-16 italic" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>
          {t('knowledge.comingNote')}
        </motion.p>
      </div>
    </section>
  );
}