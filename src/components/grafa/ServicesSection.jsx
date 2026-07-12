import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoldLine from './GoldLine';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

/* Per mockup 2lapa: Script intro text at top, "Pakalpojumi" heading, bullet points with gold stars, 3 service cards with icons, closing "Mūsu mērķis" line with gold diamonds */

const cardPaths = ["/pakalpojumi/gramatvediba", "/pakalpojumi/finanses", "/pakalpojumi/apmacibas"];

/* Icons matching mockup exactly: document+checkmark, chart, graduation cap */
const cardIcons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="8" y="4" width="26" height="34" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M15,14 L29,14 M15,20 L29,20 M15,26 L23,26" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/><path d="M30,28 L36,34 L42,24" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="4" y="10" width="40" height="28" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><polyline points="10,32 18,22 26,28 36,16" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="36" cy="16" r="2" fill="#C89B3C" opacity="0.4"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M8,20 L24,10 L40,20 L24,30 Z" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M14,24 L14,36 C14,40 19,44 24,44 C29,44 34,40 34,36 L34,24" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><line x1="40" y1="20" x2="40" y2="38" stroke="#C89B3C" strokeWidth="1" opacity="0.4"/><circle cx="40" cy="40" r="2" stroke="#C89B3C" strokeWidth="0.8" fill="none" opacity="0.4"/></svg>,
];

function ServiceCard({ card, icon, path, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.12, duration: 0.7 }}>
      <Link to={path} className="block relative bg-white rounded-xl p-7 md:p-9 cursor-pointer border border-[#e8e0d4]/50 group h-full overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,58,95,0.08),0_0_0_1px_rgba(201,168,76,0.12)]">
        <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-lg bg-[#C89B3C]/[0.12] flex items-center justify-center group-hover:bg-[#C89B3C]/[0.18] transition-colors duration-500">
            {icon}
          </div>
          <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-[#08233E]">{card.title}</h3>
        </div>
        <p className="text-[#08233E]/50 font-body text-[14px] md:text-[15px] leading-[1.85] mb-5">{card.desc}</p>
        <div className="flex items-center gap-2">
          <div className="w-6 group-hover:w-16 h-[1.5px] transition-all duration-700" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0)' }} />
          <svg className="w-3.5 h-3.5 text-[#C89B3C] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" viewBox="0 0 20 20" fill="none"><path d="M4,10 L16,10 M12,6 L16,10 L12,14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </Link>
    </motion.div>
  );
}

const GoldDiamond = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" className="flex-shrink-0 text-[#C89B3C]">
    <path d="M4,0 L8,4 L4,8 L0,4 Z" fill="currentColor" opacity="0.6" />
  </svg>
);

export default function ServicesSection() {
  const { t } = useI18n();
  const bullets = t('services.bullets');
  const cards = t('services.cards');

  return (
    <section id="pakalpojumi" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="svcP" />
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-50px] md:right-[-20px] top-[-10px]" opacity={0.18} />
      <WatercolorStain className="right-[-100px] top-[10%]" color="#e8c89a" opacity={0.1} size={550} id="svc1" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Script intro text */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <motion.p
            className="font-script text-[20px] md:text-[26px] text-[#C89B3C]/70 leading-[1.9] italic mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('services.introScript')}
          </motion.p>

          {/* "Pakalpojumi" heading */}
          <motion.h2
            className="font-heading text-[42px] md:text-[58px] lg:text-[72px] font-semibold text-[#08233E] mb-8 leading-[1.05]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            {t('services.heading')}
          </motion.h2>

          {/* Bullet points with gold stars */}
          <div className="space-y-3">
            {bullets.map((item, i) => (
              <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}>
                <svg className="w-3 h-3 mt-2 flex-shrink-0 text-[#C89B3C]" viewBox="0 0 12 12" fill="currentColor"><path d="M6,0 L7.5,4.5 L12,6 L7.5,7.5 L6,12 L4.5,7.5 L0,6 L4.5,4.5 Z"/></svg>
                <p className="font-body text-[15px] md:text-[16px] text-[#08233E]/80 leading-[1.85]">
                  {item.text}{' '}{item.bold && <strong className="text-[#08233E] font-semibold">{item.bold}</strong>}{item.after && <> {item.after}</>}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 service cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-14">
          {cards.map((card, i) => <ServiceCard key={i} card={card} icon={cardIcons[i]} path={cardPaths[i]} index={i} />)}
        </div>

        {/* "Mūsu mērķis" closing line with diamonds */}
        <motion.div
          className="flex items-center justify-center gap-3 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <GoldDiamond />
          <p className="font-body text-[14px] md:text-[16px] text-[#08233E]/60 leading-[1.85]">
            <strong className="text-[#08233E]/80 font-semibold">{t('services.goalLabel')}</strong> — {t('services.goalText')}
          </p>
          <GoldDiamond />
        </motion.div>
      </div>
    </section>
  );
}