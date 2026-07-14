import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import { WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';
import { Building2, Monitor, FileText, FolderUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const stepIcons = [
  <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10"><circle cx="20" cy="20" r="8" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><circle cx="36" cy="20" r="8" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M14,32 C14,28 18,26 28,26 C38,26 42,28 42,32" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinecap="round"/><path d="M20,38 L20,46 M28,36 L28,46 M36,38 L36,46" stroke="#C89B3C" strokeWidth="0.8" opacity="0.4"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10"><rect x="12" y="6" width="26" height="36" rx="3" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M19,16 L33,16 M19,22 L33,22 M19,28 L28,28" stroke="#C89B3C" strokeWidth="0.8" opacity="0.5"/><path d="M36,30 L42,24 L46,28 L40,34 Z" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinejoin="round"/><path d="M36,34 L40,34 L36,38" stroke="#C89B3C" strokeWidth="0.8" fill="#C89B3C" opacity="0.3"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10"><path d="M8,28 L18,20 L28,28 L38,20 L48,28" stroke="#C89B3C" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M18,28 L18,40 M38,28 L38,40" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinecap="round"/><path d="M18,40 C18,40 28,46 38,40" stroke="#C89B3C" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10"><rect x="10" y="12" width="36" height="32" rx="3" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M10,22 L46,22" stroke="#C89B3C" strokeWidth="0.8" opacity="0.4"/><path d="M20,8 L20,16 M36,8 L36,16" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round"/><path d="M18,30 L22,34 L38,28" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
  <svg viewBox="0 0 56 56" fill="none" className="w-10 h-10"><path d="M28,6 L46,16 L46,30 C46,40 38,48 28,52 C18,48 10,40 10,30 L10,16 Z" stroke="#C89B3C" strokeWidth="1.3" fill="none"/><path d="M20,28 L26,34 L36,22" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

const cooperationIcons = [Building2, Monitor, FileText, FolderUp];

export default function WhyChooseSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);
  const checkmarks = t('whyChoose.checkmarks');
  const steps = t('process.steps');
  const points = t('whyChoose.points');
  const stats = t('whyChoose.stats');
  const cooperationModes = t('whyChoose.cooperationModes');



  return (
    <section id="kapec-izvel" className="relative py-16 md:py-24 overflow-x-clip">
      <PaperTexture id="whyChP" />

      <WatercolorStain className="left-[-120px] top-[15%]" color="#e8c89a" opacity={0.1} size={500} id="whyC1" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Script text — typewriter */}
        <div className="mb-6 md:mb-8 min-h-[50px] md:min-h-[60px]">
          <TypewriterText
            text={t('whyChoose.scriptLine')}
            className="font-script text-[18px] md:text-[22px] text-[#08233E]/70 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading with gold divider */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[38px] md:text-[52px] lg:text-[60px] font-semibold text-[#08233E] mb-4 leading-[1.1]">
            {t('whyChoose.heading')}
          </h2>
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C89B3C]/60 via-[#E8D1A0]/40 to-transparent" />
        </motion.div>

        {/* Points — gold dash markers */}
        <div className="space-y-2.5 md:space-y-3 mb-12 md:mb-14 max-w-4xl">
          {points.map((text, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
            >
              <span className="flex-shrink-0 mt-[10px] w-4 h-[1.5px] bg-[#C89B3C]/60" />
              <p className="font-body text-[14px] md:text-[15px] text-[#08233E] leading-[1.85] font-semibold">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience heading */}
        <motion.h3
          className="font-heading text-[22px] md:text-[28px] font-semibold text-[#08233E] mb-6 md:mb-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('whyChoose.experienceHeading')}
        </motion.h3>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl p-5 md:p-6 border border-[#e8e0d4]/50 text-center overflow-hidden"
            >
              <div className="absolute top-0 left-4 right-4 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, transparent)' }} />
              <p className="font-heading text-[28px] md:text-[34px] font-bold text-[#C89B3C] leading-tight mb-1">{stat.number}</p>
              <p className="font-body text-[12px] md:text-[13px] text-[#08233E]/60 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Cooperation modes */}
        <motion.div
          className="mb-12 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-[14px] md:text-[15px] text-[#08233E] leading-[1.85] mb-1 font-semibold">
            {t('whyChoose.cooperationIntro1')}
          </p>
          <p className="font-body text-[14px] md:text-[15px] text-[#08233E] leading-[1.85] mb-5 font-semibold">
            {t('whyChoose.cooperationIntro2')}
          </p>
          <h3 className="font-heading text-[18px] md:text-[22px] font-semibold text-[#08233E] mb-4">
            {t('whyChoose.cooperationTitle')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {cooperationModes.map((mode, i) => {
              const Icon = cooperationIcons[i];
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 md:p-5 border border-[#e8e0d4]/50 flex flex-col items-center gap-2.5 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C89B3C]/[0.1] flex items-center justify-center">
                    <Icon size={20} className="text-[#C89B3C]" strokeWidth={1.5} />
                  </div>
                  <p className="font-body text-[13px] md:text-[14px] text-[#08233E] font-medium">{mode}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* "Mūsu sadarbības process" sub-heading */}
        <motion.h3
          className="font-heading text-[26px] md:text-[34px] lg:text-[40px] font-semibold text-[#08233E] mb-8 md:mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('process.heading')}
        </motion.h3>

        {/* 5 process steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 mb-12 md:mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-xl p-5 md:p-4 border border-[#e8e0d4]/50 overflow-hidden text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="absolute top-0 left-4 right-4 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, transparent)' }} />
              <div className="w-9 h-9 rounded-full bg-[#C89B3C] flex items-center justify-center mx-auto mb-3 shadow-[0_0_12px_rgba(201,168,76,0.2)]">
                <span className="text-white font-heading text-[13px] font-bold">{i + 1}</span>
              </div>
              <div className="text-[#C89B3C] flex justify-center mb-3">{stepIcons[i]}</div>
              <h4 className="font-heading text-[15px] md:text-[16px] font-semibold text-[#08233E] mb-1.5">{step.title}</h4>
              <p className="text-[#08233E] font-body text-[12px] md:text-[13px] leading-[1.7]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Price box with checkmarks */}
        <motion.div
          className="relative bg-white rounded-xl p-7 md:p-9 border border-[#e8e0d4]/50 overflow-hidden mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <div className="absolute top-0 left-5 right-5 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* Left — icon + title + desc */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#C89B3C]/[0.1] flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
                    <circle cx="24" cy="24" r="18" stroke="#C89B3C" strokeWidth="1.3" fill="none"/>
                    <text x="24" y="30" textAnchor="middle" fill="#C89B3C" fontSize="20" fontWeight="bold">€</text>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#08233E] mb-2">{t('whyChoose.priceBoxTitle')}</h3>
                  <p className="text-[#08233E] font-body text-[13px] md:text-[14px] leading-[1.85] font-semibold">{t('whyChoose.priceBoxDesc')}</p>
                </div>
              </div>
            </div>
            {/* Right — checkmarks */}
            <div className="flex-1">
              <div className="space-y-2.5">
                {checkmarks.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <circle cx="10" cy="10" r="9" fill="#C89B3C" opacity="0.12"/>
                      <path d="M6,10 L9,13 L14,7" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="font-body text-[13px] md:text-[14px] text-[#08233E]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* CTA card — bottom right, links to pricing page */}
          <div className="flex justify-end mt-6">
            <Link
              to="/cena"
              className="flex items-center gap-4 bg-[#F5EDE0]/60 border border-[#C89B3C]/30 rounded-xl p-4 md:p-5 group transition-all duration-400 hover:border-[#C89B3C]/60 hover:shadow-[0_4px_20px_rgba(201,168,76,0.12)] max-w-[320px]"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center group-hover:bg-[#C89B3C]/[0.2] transition-colors">
                <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                  <path d="M24,6 L42,16 L42,30 C42,38 34,46 24,50 C14,46 6,38 6,30 L6,16 Z" stroke="#C89B3C" strokeWidth="1.3" fill="none"/>
                  <path d="M18,28 L22,32 L30,22" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-body text-[12px] md:text-[13px] text-[#08233E]/70 leading-[1.6] text-left group-hover:text-[#08233E] transition-colors">
                {t('whyChoose.pricingCta')}
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}