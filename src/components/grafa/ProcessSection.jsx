import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import PaperTexture from './PaperTexture';
import GoldLine from './GoldLine';
import { GoldStars, GoldLineDecorative, WaveLine, FeatherFragment, WatercolorPatch } from './Decorations';
import { useI18n } from '@/lib/i18n';

const stepIcons = [
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><path d="M8,30 C8,18 14,12 22,12 C30,12 36,18 36,30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/><circle cx="15" cy="24" r="1.5" fill="currentColor" opacity="0.4"/><circle cx="22" cy="24" r="1.5" fill="currentColor" opacity="0.4"/><circle cx="29" cy="24" r="1.5" fill="currentColor" opacity="0.4"/></svg>,
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><rect x="9" y="6" width="26" height="32" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M15,14 L29,14 M15,20 L29,20 M15,26 L23,26" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/></svg>,
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><path d="M12,6 L32,6 L32,38 L12,38 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M17,30 C20,26 24,32 27,28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>,
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><rect x="6" y="8" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/><rect x="18" y="12" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.1" fill="none"/></svg>,
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><polyline points="7,36 15,24 23,28 32,16 38,12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="38" cy="12" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/></svg>,
  <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9"><circle cx="22" cy="22" r="15" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M22,12 L22,22 L30,26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>,
];

const stepNums = ["01", "02", "03", "04", "05", "06"];

export default function ProcessSection() {
  const { t } = useI18n();
  const steps = t('process.steps');

  return (
    <motion.section
      id="process"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <PaperTexture id="processPaper" />
      <WatercolorBackground variant="process" />

      {/* Decorative: gold stars, wave lines, feather fragments */}
      <GoldStars className="w-[100px] h-[70px] right-10 top-16" opacity={0.1} />
      <GoldStars className="w-[80px] h-[60px] left-6 bottom-32" opacity={0.08} />
      <GoldLineDecorative className="w-[180px] h-[10px] left-10 top-[30%]" opacity={0.1} />
      <GoldLineDecorative className="w-[150px] h-[10px] right-8 top-[60%]" opacity={0.08} />
      <FeatherFragment className="w-[50px] h-[75px] right-4 md:right-20 top-40" opacity={0.08} rotate={25} />
      <WaveLine className="w-[200px] h-[16px] left-0 bottom-16" opacity={0.07} />
      <WatercolorPatch className="left-[-60px] top-[50%]" color="rgba(230,185,140,0.04)" size={280} />

      <div className="relative z-10 max-w-[900px] mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            {t('process.subtitle')}
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-[#1e3a5f]">
            {t('process.heading')}
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />
        </motion.div>

        <div className="relative">
          {/* Gold timeline line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, #c9a84c, #e8d5a3, #c9a84c50)' }}
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  {/* Timeline dot — gold with glow */}
                  <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-[#c9a84c] border-[3px] border-[#faf7f2] shadow-[0_0_8px_rgba(201,168,76,0.3)]" />
                  </div>

                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-32px)] ${isLeft ? 'md:pr-4 md:text-right' : 'md:pl-4'}`}>
                    <div className="bg-white/70 backdrop-blur-sm p-6 border border-[#e8e0d4]/40 hover:border-[#c9a84c]/25 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(30,58,95,0.06)] rounded-lg group relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="text-[#c9a84c] group-hover:text-[#1e3a5f] transition-colors duration-500">
                          {stepIcons[i]}
                        </div>
                        <span className="text-[24px] md:text-[28px] font-heading font-bold text-[#c9a84c]/20">
                          {stepNums[i]}
                        </span>
                      </div>
                      <h3 className="font-heading text-[16px] md:text-[17px] font-semibold text-[#1e3a5f] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#1e3a5f]/50 font-body text-[13px] md:text-[14px] leading-[1.75]">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-32px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}