import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoldLine from './GoldLine';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const cardPaths = ["/pakalpojumi/gramatvediba", "/pakalpojumi/finanses", "/pakalpojumi/apmacibas"];
const cardIcons = [
  <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12"><rect x="10" y="6" width="30" height="38" rx="3" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M18,16 L36,16 M18,24 L36,24 M18,32 L28,32" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/><path d="M34,34 L40,40 L46,30" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12"><polyline points="8,44 18,30 28,36 40,18 48,12" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="48" cy="12" r="3" stroke="#C89B3C" strokeWidth="1.2" fill="none"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12"><path d="M10,20 L28,10 L46,20 L28,30 Z" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M16,24 L16,38 C16,43 22,48 28,48 C34,48 40,43 40,38 L40,24" stroke="#C89B3C" strokeWidth="1.3" fill="none"/></svg>,
];

function ServiceCard({ card, icon, path, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.12, duration: 0.7 }}>
      <Link to={path} className="block relative bg-white rounded-xl p-8 md:p-10 cursor-pointer border border-[#e8e0d4]/60 group h-full overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,58,95,0.10),0_0_0_1px_rgba(201,168,76,0.15)]">
        <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
        <div className="mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">{icon}</div>
        <h3 className="font-heading text-[22px] md:text-[26px] font-semibold text-[#08233E] mb-3">{card.title}</h3>
        <p className="text-[#08233E]/45 font-body text-[15px] md:text-[17px] leading-[1.85] mb-6">{card.desc}</p>
        <div className="flex items-center gap-2">
          <div className="w-8 group-hover:w-20 h-[2px] transition-all duration-700" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0)' }} />
          <svg className="w-4 h-4 text-[#C89B3C] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" viewBox="0 0 20 20" fill="none"><path d="M4,10 L16,10 M12,6 L16,10 L12,14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { t } = useI18n();
  const bullets = t('services.bullets');
  const cards = t('services.cards');

  return (
    <section id="pakalpojumi" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="svcP" />
      <FullFeather className="w-[280px] md:w-[420px] h-[350px] md:h-[520px] right-[-60px] md:right-[-30px] top-[-20px]" opacity={0.18} />
      <WatercolorStain className="right-[-100px] top-[10%]" color="#e8c89a" opacity={0.12} size={600} id="svc1" />
      <WatercolorStain className="left-[-150px] bottom-[-50px]" color="#e0b5b0" opacity={0.08} size={400} id="svc2" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.p className="font-script text-[22px] md:text-[28px] text-[#C89B3C]/70 leading-[1.9] italic mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>{t('services.introScript')}</motion.p>
          <GoldLine width="w-24" className="mb-8" />
          <motion.h2 className="font-heading text-[42px] md:text-[58px] lg:text-[68px] font-semibold text-[#08233E] mb-8 leading-[1.1]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>{t('services.heading')}</motion.h2>
          <div className="space-y-3">
            {bullets.map((item, i) => (
              <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}>
                <svg className="w-3 h-3 mt-1.5 flex-shrink-0 text-[#C89B3C]" viewBox="0 0 12 12" fill="currentColor"><path d="M6,0 L7.5,4.5 L12,6 L7.5,7.5 L6,12 L4.5,7.5 L0,6 L4.5,4.5 Z"/></svg>
                <p className="font-body text-[15px] md:text-[17px] text-[#08233E] leading-[1.8]">{item.text}{' '}{item.bold && <strong className="text-[#08233E] font-semibold">{item.bold}</strong>}{item.after && <> {item.after}</>}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cards.map((card, i) => <ServiceCard key={i} card={card} icon={cardIcons[i]} path={cardPaths[i]} index={i} />)}
        </div>
        <motion.div className="flex items-start gap-4 max-w-3xl" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
          <div className="w-[3px] bg-gradient-to-b from-[#C89B3C] to-transparent rounded-full flex-shrink-0 self-stretch" />
          <p className="font-body text-[16px] md:text-[18px] text-[#08233E]/50 leading-[1.85]"><strong className="text-[#08233E]/75 font-semibold">{t('services.goalLabel')}</strong> — {t('services.goalText')}</p>
        </motion.div>
      </div>
    </section>
  );
}