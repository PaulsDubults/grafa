import React from 'react';
import { motion } from 'framer-motion';
import GoldLine from './GoldLine';
import { LargeFeather, StarConstellation, GoldDotGrid } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function JoinSection() {
  const { t } = useI18n();

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('kontakti');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pievienojies"
      className="relative py-32 md:py-44 px-6 md:px-10 overflow-hidden"
      style={{ background: '#1e3a5f' }}
    >
      {/* Paper texture — dark variant */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg width="100%" height="100%">
          <filter id="joinP"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#joinP)" />
        </svg>
      </div>

      {/* Large decorations — gold on dark = dramatic */}
      <LargeFeather className="w-[160px] md:w-[240px] h-[400px] md:h-[600px] left-0 md:left-8 top-0" opacity={0.1} color="#c9a84c" />
      <LargeFeather className="w-[130px] md:w-[200px] h-[340px] md:h-[500px] right-0 md:right-8 bottom-0" opacity={0.08} color="#c9a84c" flip />
      <StarConstellation className="w-[180px] h-[180px] right-[15%] top-8" opacity={0.12} />
      <StarConstellation className="w-[140px] h-[140px] left-[20%] bottom-8" opacity={0.08} />
      <GoldDotGrid className="w-[100px] h-[55px] left-[10%] top-[30%]" rows={3} cols={6} opacity={0.08} />
      <GoldDotGrid className="w-[80px] h-[45px] right-[12%] bottom-[25%]" rows={3} cols={5} opacity={0.06} />

      {/* Wave decoration at top */}
      <svg className="absolute top-0 left-0 right-0 w-full h-[40px] pointer-events-none" viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none">
        <path d="M0,40 L0,20 C200,35 400,5 600,20 C800,35 1000,5 1200,20 L1200,40 Z" fill="#1e3a5f" />
        <path d="M0,25 C200,40 400,8 600,25 C800,40 1000,8 1200,25" stroke="#c9a84c" strokeWidth="0.8" opacity="0.2" />
      </svg>

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5 font-medium">
            {t('join.subtitle')}
          </p>
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold mb-6 text-white leading-[1.1]">
            {t('join.heading')}
          </h2>
          <GoldLine width="w-28" className="mx-auto mb-10" />

          <p className="text-white/45 font-body text-[16px] md:text-[18px] leading-[2] mb-8 max-w-2xl mx-auto">
            {t('join.description')}
          </p>

          <p className="font-script text-[22px] md:text-[28px] text-[#c9a84c] mb-12 italic">
            {t('join.tagline')}
          </p>

          <motion.button
            className="relative bg-[#c9a84c] text-white hover:bg-[#b8973f] text-[13px] font-body tracking-[0.2em] uppercase px-14 py-5 transition-all duration-500 rounded-sm overflow-hidden group"
            whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(201,168,76,0.35)' }}
            onClick={scrollToContact}
          >
            <span className="relative z-10">{t('join.button')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}