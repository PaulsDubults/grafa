import React from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import PaperTexture from './PaperTexture';
import { FeatherOutline, GoldStars, WaveLine, GoldDots, WatercolorPatch } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function JoinSection() {
  const { t } = useI18n();

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('kontakti');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="pievienojies"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#1e3a5f' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      {/* Paper noise texture — subtle on dark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <svg width="100%" height="100%">
          <filter id="joinPaper">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#joinPaper)" />
        </svg>
      </div>

      {/* Decorative elements — gold on dark */}
      <FeatherOutline className="w-[80px] md:w-[110px] h-[220px] md:h-[280px] left-4 md:left-12 top-8" opacity={0.06} color="#c9a84c" />
      <FeatherOutline className="w-[60px] md:w-[80px] h-[160px] md:h-[200px] right-6 md:right-16 bottom-12" opacity={0.05} color="#c9a84c" flip />
      <GoldStars className="w-[100px] h-[70px] right-8 top-12" opacity={0.08} />
      <GoldStars className="w-[80px] h-[50px] left-10 bottom-16" opacity={0.06} />
      <GoldDots className="w-[70px] h-[70px] left-[30%] top-8" opacity={0.06} count={8} />
      <WaveLine className="w-[250px] h-[16px] right-0 bottom-20" opacity={0.05} color="#c9a84c" />

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            {t('join.subtitle')}
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-white leading-tight">
            {t('join.heading')}
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />

          <p className="text-white/50 font-body text-[15px] md:text-[17px] leading-[1.9] mb-6 max-w-2xl mx-auto">
            {t('join.description')}
          </p>

          <p className="font-script text-[20px] md:text-[24px] text-[#c9a84c] mb-10 italic">
            {t('join.tagline')}
          </p>

          <motion.button
            className="bg-[#c9a84c] text-white hover:bg-[#b8973f] text-[13px] font-body tracking-wider uppercase px-12 py-4 transition-all duration-400 rounded-sm hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)] active:scale-[0.98]"
            whileHover={{ y: -2 }}
            onClick={scrollToContact}
          >
            {t('join.button')}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}