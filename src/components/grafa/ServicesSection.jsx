import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoldLine from './GoldLine';
import { FullFeather, HalfFeather, DiagonalFeather, FeatherTip, FeatherFragment, PyramidOutline, SmallPyramid, WatercolorStain, GoldCurve, ScatteredDots, StarConstellation, GoldDotGrid, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

const cardPaths = ["/pakalpojumi/gramatvediba", "/pakalpojumi/finanses", "/pakalpojumi/apmacibas"];
const cardIcons = [
  <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12"><rect x="10" y="6" width="30" height="38" rx="3" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M18,16 L36,16 M18,24 L36,24 M18,32 L28,32" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/><path d="M34,34 L40,40 L46,30" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12"><polyline points="8,44 18,30 28,36 40,18 48,12" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="48" cy="12" r="3" stroke="#c9a84c" strokeWidth="1.2" fill="none"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12"><path d="M10,20 L28,10 L46,20 L28,30 Z" stroke="#c9a84c" strokeWidth="1.3" fill="none"/><path d="M16,24 L16,38 C16,43 22,48 28,48 C34,48 40,43 40,38 L40,24" stroke="#c9a84c" strokeWidth="1.3" fill="none"/></svg>,
];

function ServiceCard({ card, icon, path, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.12, duration: 0.7 }}>
      <Link to={path} className="block relative bg-white rounded-xl p-8 md:p-10 cursor-pointer border border-[#e8e0d4]/60 group h-full overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,58,95,0.10),0_0_0_1px_rgba(201,168,76,0.15)]">
        <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
        <svg className="absolute top-3 right-3 w-8 h-8 opacity-[0.18] group-hover:opacity-[0.35] transition-opacity duration-500" viewBox="0 0 30 30" fill="none"><path d="M28,2 L28,12 M28,2 L18,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/><circle cx="28" cy="2" r="1.5" fill="#c9a84c" opacity="0.5"/></svg>
        <svg className="absolute bottom-3 left-3 w-8 h-8 opacity-[0.18] group-hover:opacity-[0.35] transition-opacity duration-500" viewBox="0 0 30 30" fill="none"><path d="M2,28 L2,18 M2,28 L12,28" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/></svg>
        <div className="mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">{icon}</div>
        <h3 className="font-heading text-[20px] md:text-[22px] font-semibold text-[#1e3a5f] mb-3">{card.title}</h3>
        <p className="text-[#1e3a5f]/45 font-body text-[13px] md:text-[14px] leading-[1.85] mb-6">{card.desc}</p>
        <div className="flex items-center gap-2">
          <div className="w-8 group-hover:w-20 h-[2px] transition-all duration-700" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)' }} />
          <svg className="w-4 h-4 text-[#c9a84c] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" viewBox="0 0 20 20" fill="none"><path d="M4,10 L16,10 M12,6 L16,10 L12,14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
    <section id="pakalpojumi" className="relative py-28 md:py-40 overflow-hidden" style={{ background: '#faf7f2' }}>
      <PaperTexture id="svcP" />

      {/* COMPOSITION: gold feather right, rose half-feather left, rose fragment, gold pyramid, mixed watercolor */}
      <FullFeather className="w-[260px] md:w-[380px] h-[650px] md:h-[950px] right-[-40px] md:right-[-10px] top-0" opacity={0.3} />
      <HalfFeather className="w-[130px] md:w-[190px] h-[210px] md:h-[310px] left-0 md:left-4 top-[8%]" opacity={0.22} />
      <DiagonalFeather className="w-[120px] md:w-[180px] h-[300px] md:h-[450px] left-[2%] bottom-[15%]" opacity={0.18} angle={-25} />
      <FeatherTip className="w-[60px] md:w-[90px] h-[100px] md:h-[150px] right-[20%] bottom-8" opacity={0.2} rotate={15} />
      <FeatherFragment className="w-[80px] md:w-[110px] h-[70px] md:h-[95px] right-[10%] top-[45%]" opacity={0.16} rotate={12} />
      
      <PyramidOutline className="w-[350px] md:w-[500px] h-[340px] md:h-[480px] left-[15%] md:left-[20%] top-[-20px]" opacity={0.12} />
      <SmallPyramid className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] right-[25%] top-[60%]" opacity={0.15} />
      
      <WatercolorStain className="right-[-100px] top-[10%]" color="#e8c89a" opacity={0.16} size={600} id="svc1" />
      <WatercolorStain className="left-[-150px] bottom-[-50px]" color="#e0b5b0" opacity={0.1} size={400} id="svc2" />
      
      <GoldCurve className="w-[280px] md:w-[400px] h-[60px] md:h-[80px] left-[5%] top-[48%]" opacity={0.22} />
      <ScatteredDots className="w-[140px] h-[140px] right-[8%] top-[30%]" opacity={0.28} count={18} />
      <StarConstellation className="w-[180px] h-[180px] left-4 top-16" opacity={0.3} />
      <GoldDotGrid className="w-[150px] h-[90px] right-4 bottom-16" rows={5} cols={8} opacity={0.28} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.p className="font-script text-[18px] md:text-[22px] text-[#c9a84c]/70 leading-[1.9] italic mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>{t('services.introScript')}</motion.p>
          <GoldLine width="w-24" className="mb-8" />
          <motion.h2 className="font-heading text-[38px] md:text-[52px] lg:text-[60px] font-semibold text-[#1e3a5f] mb-8 leading-[1.1]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>{t('services.heading')}</motion.h2>
          <div className="space-y-3">
            {bullets.map((item, i) => (
              <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}>
                <svg className="w-3 h-3 mt-1.5 flex-shrink-0 text-[#c9a84c]" viewBox="0 0 12 12" fill="currentColor"><path d="M6,0 L7.5,4.5 L12,6 L7.5,7.5 L6,12 L4.5,7.5 L0,6 L4.5,4.5 Z"/></svg>
                <p className="font-body text-[13px] md:text-[15px] text-[#1e3a5f]/60 leading-[1.8]">{item.text}{' '}{item.bold && <strong className="text-[#1e3a5f] font-semibold">{item.bold}</strong>}{item.after && <> {item.after}</>}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cards.map((card, i) => <ServiceCard key={i} card={card} icon={cardIcons[i]} path={cardPaths[i]} index={i} />)}
        </div>
        <motion.div className="flex items-start gap-4 max-w-3xl" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
          <div className="w-[3px] bg-gradient-to-b from-[#c9a84c] to-transparent rounded-full flex-shrink-0 self-stretch" />
          <p className="font-body text-[14px] md:text-[15px] text-[#1e3a5f]/50 leading-[1.85]"><strong className="text-[#1e3a5f]/75 font-semibold">{t('services.goalLabel')}</strong> — {t('services.goalText')}</p>
        </motion.div>
      </div>
    </section>
  );
}