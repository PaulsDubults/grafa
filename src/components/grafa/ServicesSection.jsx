import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';
import { useI18n } from '@/lib/i18n';

const cardPaths = [
  "/pakalpojumi/gramatvediba",
  "/pakalpojumi/finanses",
  "/pakalpojumi/apmacibas",
];

const cardIcons = [
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><rect x="9" y="6" width="26" height="32" rx="2" stroke="#c9a84c" strokeWidth="1.2" fill="none"/><path d="M15,14 L29,14 M15,20 L29,20 M15,26 L23,26" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/><path d="M28,28 L32,32 L36,24" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><polyline points="7,36 15,24 23,28 32,16 38,12" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="38" cy="12" r="2.5" stroke="#c9a84c" strokeWidth="1" fill="none"/><line x1="7" y1="40" x2="38" y2="40" stroke="#c9a84c" strokeWidth="0.7" opacity="0.4"/></svg>,
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><path d="M8,16 L22,8 L36,16 L22,24 Z" stroke="#c9a84c" strokeWidth="1.2" fill="none"/><path d="M14,20 L14,32 C14,36 18,40 22,40 C26,40 30,36 30,32 L30,20" stroke="#c9a84c" strokeWidth="1.2" fill="none"/><line x1="36" y1="16" x2="36" y2="36" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/></svg>,
];

function BulletPoint({ item, index }) {
  return (
    <motion.div
      className="flex items-start gap-3 mb-3"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.06, duration: 0.5 }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-[7px] flex-shrink-0" />
      <p className="font-body text-[13px] md:text-[14px] text-[#1e3a5f]/60 leading-[1.75]">
        {item.text}{' '}
        {item.bold && <strong className="text-[#1e3a5f] font-semibold">{item.bold}</strong>}
        {item.after && <> {item.after}</>}
      </p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { t } = useI18n();
  const bullets = t('services.bullets');
  const cards = t('services.cards');

  return (
    <motion.section
      id="pakalpojumi"
      className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="services" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          className="mb-8 md:mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[16px] md:text-[19px] lg:text-[21px] text-[#1e3a5f]/50 leading-[1.9] italic">
            {t('services.introScript')}
          </p>
        </motion.div>

        <GoldLine width="w-20" className="mb-8" />

        <motion.h2
          className="font-heading text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          {t('services.heading')}
        </motion.h2>

        <div className="max-w-2xl mb-14 md:mb-18">
          {bullets.map((item, i) => (
            <BulletPoint key={i} item={item} index={i} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
            >
              <Link
                to={cardPaths[i]}
                className="block bg-white rounded-sm p-6 md:p-7 cursor-pointer shadow-[0_2px_10px_rgba(30,58,95,0.05)] hover:shadow-[0_10px_36px_rgba(30,58,95,0.12)] hover:-translate-y-1.5 transition-all duration-500 border border-[#e8e0d4]/50 hover:border-[#c9a84c]/30 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  {cardIcons[i]}
                  <h3 className="font-heading text-[17px] md:text-[19px] font-semibold text-[#1e3a5f]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[#1e3a5f]/45 font-body text-[12px] md:text-[13px] leading-[1.8]">
                  {card.desc}
                </p>
                <div className="w-8 h-[1.5px] mt-5 transition-all duration-600 group-hover:w-14" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)' }} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-start gap-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">◆</span>
          <p className="font-body text-[13px] md:text-[14px] text-[#1e3a5f]/50 leading-[1.75]">
            <strong className="text-[#1e3a5f]/70 font-semibold">{t('services.goalLabel')}</strong> — {t('services.goalText')}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}