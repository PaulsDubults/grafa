import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import GoldLine from './GoldLine';
import { LargePyramid, StarConstellation, InkSplash, GoldDotGrid, LargeFeather, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function KnowledgeSection() {
  const { t } = useI18n();
  const articles = t('knowledge.articles');

  return (
    <section
      id="zinasanu-telpa"
      className="relative py-28 md:py-44 overflow-hidden"
      style={{ background: '#f5f0e8' }}
    >
      <PaperTexture id="knowP" />
      
      {/* Pyramid — right, big */}
      <LargePyramid className="w-[300px] md:w-[420px] h-[300px] md:h-[420px] right-[-60px] md:right-[-20px] top-[15%]" opacity={0.08} />
      
      {/* Stars & dots — left side */}
      <StarConstellation className="w-[160px] h-[160px] left-6 top-32" opacity={0.2} />
      <GoldDotGrid className="w-[120px] h-[80px] left-4 bottom-20" rows={5} cols={7} opacity={0.18} />
      
      {/* Ink wash — bottom left */}
      <InkSplash className="left-[-80px] bottom-[-60px]" color="rgba(230,185,140,0.09)" size={450} />
      
      {/* Feather fragment — top left */}
      <LargeFeather className="w-[100px] md:w-[140px] h-[250px] md:h-[360px] left-0 top-8" opacity={0.08} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header — LEFT aligned */}
        <div className="max-w-2xl mb-20 md:mb-24">
          <motion.p
            className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5 font-medium"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('knowledge.subtitle')}
          </motion.p>
          <motion.h2
            className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            {t('knowledge.heading')}
          </motion.h2>
          <GoldLine width="w-28" className="mb-8" />
          <motion.p
            className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[17px] leading-[1.9]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('knowledge.description')}
          </motion.p>
        </div>

        {/* Article cards — shifted grid for variety */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              className={`group relative bg-white rounded-xl border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,58,95,0.08),0_0_0_1px_rgba(201,168,76,0.12)] ${
                i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-16' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              {/* Gold accent bar */}
              <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 10%, #c9a84c 30%, #e8d5a3 50%, #c9a84c 70%, transparent 90%)' }} />
              
              <div className="p-8 md:p-10">
                {/* Corner ornament */}
                <svg className="absolute top-5 right-5 w-7 h-7 opacity-[0.1] group-hover:opacity-[0.22] transition-opacity duration-500" viewBox="0 0 30 30" fill="none">
                  <path d="M28,2 L28,12 M28,2 L18,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
                </svg>

                <div className="flex items-center gap-3 mb-5">
                  <BookOpen className="w-5 h-5 text-[#c9a84c]" strokeWidth={1.5} />
                  <span className="text-[10px] font-body text-[#c9a84c] tracking-[0.25em] uppercase font-medium">
                    {article.category}
                  </span>
                </div>

                <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#1e3a5f] mb-4 leading-snug">
                  {article.title}
                </h3>

                <p className="text-[#1e3a5f]/45 font-body text-[13px] md:text-[15px] leading-[1.85] mb-6">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-6 group-hover:w-14 h-[2px] transition-all duration-700" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)' }} />
                  <span className="text-[11px] font-body text-[#c9a84c]/50 group-hover:text-[#c9a84c] transition-colors duration-500 tracking-wider uppercase">
                    {t('knowledge.comingSoon')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-[#1e3a5f]/30 font-body text-[13px] mt-16 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t('knowledge.comingNote')}
        </motion.p>
      </div>
    </section>
  );
}