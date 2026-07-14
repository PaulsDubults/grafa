import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WatercolorStain, PaperTexture } from './Decorations';
import TypewriterText from './TypewriterText';
import { useI18n } from '@/lib/i18n';

const cardPaths = ["/pakalpojumi/gramatvediba", "/pakalpojumi/finanses", "/pakalpojumi/apmacibas"];

const cardIcons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><rect x="8" y="4" width="26" height="34" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M15,14 L29,14 M15,20 L29,20 M15,26 L23,26" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/><path d="M30,28 L36,34 L42,24" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><rect x="4" y="10" width="40" height="28" rx="2.5" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><polyline points="10,32 18,22 26,28 36,16" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="36" cy="16" r="2" fill="#C89B3C" opacity="0.4"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9"><path d="M8,20 L24,10 L40,20 L24,30 Z" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M14,24 L14,36 C14,40 19,44 24,44 C29,44 34,40 34,36 L34,24" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><line x1="40" y1="20" x2="40" y2="38" stroke="#C89B3C" strokeWidth="1" opacity="0.4"/><circle cx="40" cy="40" r="2" stroke="#C89B3C" strokeWidth="0.8" fill="none" opacity="0.4"/></svg>,
];

export default function ServicesSection() {
  const { t } = useI18n();
  const bullets = t('services.bullets');
  const cards = t('services.cards');

  return (
    <section id="pakalpojumi" className="relative py-16 md:py-24 overflow-hidden">
      <PaperTexture id="svcP" />
      <img
        src="https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/4ed940b7b_Screenshot_2026-07-13_at_200426-removebg-preview1.png"
        alt=""
        className="absolute w-[200px] md:w-[300px] lg:w-[380px] right-[0px] md:right-[10px] top-[8%] pointer-events-none select-none opacity-[0.55]"
        style={{ mixBlendMode: 'multiply' }}
        draggable={false}
      />
      <WatercolorStain className="right-[-100px] top-[10%]" color="#e8c89a" opacity={0.1} size={550} id="svc1" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Script intro text — typewriter effect */}
        <div className="mb-8 md:mb-10 min-h-[80px] md:min-h-[100px] max-w-4xl">
          <TypewriterText
            text={t('services.introScript')}
            className="font-script text-[18px] md:text-[22px] text-[#08233E]/70 leading-[1.9] italic"
          />
        </div>

        {/* "Pakalpojumi" heading with gold underline */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h2 className="font-heading text-[38px] md:text-[52px] lg:text-[60px] font-semibold text-[#08233E] mb-4 leading-[1.1]">
            {t('services.heading')}
          </h2>
          {/* Gold divider line matching mockup */}
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C89B3C]/60 via-[#E8D1A0]/40 to-transparent" />
        </motion.div>

        {/* Bullet points — gold dash markers per mockup */}
        <div className="space-y-2.5 md:space-y-3 mb-12 md:mb-14 max-w-4xl">
          {bullets.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
            >
              <span className="flex-shrink-0 mt-[10px] w-4 h-[1.5px] bg-[#C89B3C]/60" />
              <p className="font-body text-[14px] md:text-[15px] text-[#08233E] leading-[1.85]">
                {item.text}{' '}
                {item.bold && <strong className="text-[#08233E] font-bold">{item.bold}</strong>}
                {item.after && <> {item.after}</>}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 service cards — matching mockup: white card, icon in rounded bg, title, description */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-14">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
            >
              <Link
                to={cardPaths[i]}
                className="block relative bg-white rounded-xl p-6 md:p-7 cursor-pointer border border-[#e8e0d4]/50 group h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,58,95,0.06),0_0_0_1px_rgba(201,168,76,0.1)]"
              >
                {/* Top gold line */}
                <div className="absolute top-0 left-5 right-5 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />

                {/* Icon */}
                <div className="w-11 h-11 rounded-lg bg-[#C89B3C]/[0.1] flex items-center justify-center mb-4 group-hover:bg-[#C89B3C]/[0.16] transition-colors duration-400">
                  {cardIcons[i]}
                </div>

                {/* Title */}
                <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#08233E] mb-3">{card.title}</h3>

                {/* Description */}
                <p className="text-[#08233E] font-body text-[13px] md:text-[14px] leading-[1.85]">{card.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* "Mūsu mērķis" closing line — centered, bold label + em-dash + text */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="font-body text-[14px] md:text-[15px] text-[#08233E] leading-[1.85]">
            <strong className="text-[#08233E] font-bold">{t('services.goalLabel')}</strong>
            {' – '}
            {t('services.goalText')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}