import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroMiniMap from './HeroMiniMap';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '@/lib/i18n';

const HERO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/07f5642fe_ChatGPTImageMay13202603_52_09PM.png";

const emphasisIndices = [5, 6, 8, 10];
const LINE_INTERVAL = 1400;

const GoldDiamond = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" className="flex-shrink-0">
    <path d="M5,0 L10,5 L5,10 L0,5 Z" fill="#C89B3C" opacity="0.7" />
  </svg>
);

const valueIcons = [
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10"><path d="M24,4 L40,14 L40,28 C40,36 32,42 24,46 C16,42 8,36 8,28 L8,14 Z" stroke="#C89B3C" strokeWidth="1.2" fill="none"/><path d="M18,24 L22,28 L30,20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10"><polyline points="8,38 16,26 24,30 34,16 40,12" stroke="#C89B3C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="40" cy="12" r="2.5" stroke="#C89B3C" strokeWidth="1" fill="none"/><line x1="8" y1="42" x2="40" y2="42" stroke="white" strokeWidth="0.5" opacity="0.3"/></svg>,
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10"><path d="M8,16 L24,8 L40,16 L24,24 Z" stroke="#C89B3C" strokeWidth="1.2" fill="none"/><path d="M14,20 L14,32 C14,36 19,40 24,40 C29,40 34,36 34,32 L34,20" stroke="#C89B3C" strokeWidth="1.2" fill="none"/><line x1="40" y1="16" x2="40" y2="36" stroke="white" strokeWidth="0.8" opacity="0.4"/><circle cx="40" cy="38" r="2" stroke="white" strokeWidth="0.6" opacity="0.4" fill="none"/></svg>,
];

function StoryLine({ text, index, isVisible, boldWords }) {
  const isEmphasis = emphasisIndices.includes(index);
  const hasBold = boldWords.some(w => text.includes(w));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex items-start gap-4 md:gap-6 mb-3 md:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Line number */}
          <span className="flex-shrink-0 w-6 text-right font-body text-[12px] md:text-[13px] text-[#C89B3C]/50 pt-[3px] select-none tabular-nums">
            {index + 1}
          </span>
          <p className={`font-body text-[16px] md:text-[19px] leading-[1.85] ${
            isEmphasis
              ? 'text-[#08233E] font-medium'
              : 'text-[#08233E]/60'
          }`}>
            {hasBold ? (
              <span dangerouslySetInnerHTML={{
                __html: text.replace(
                  new RegExp(`(${boldWords.join('|')})`, 'g'),
                  '<strong class="text-[#08233E] font-semibold">$1</strong>'
                )
              }} />
            ) : text}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HeroSection() {
  const { t } = useI18n();
  const storyLines = t('hero.storyLines');
  const boldWords = t('hero.boldWords');
  const values = t('hero.values');

  const [visibleCount, setVisibleCount] = useState(0);
  const allRevealed = visibleCount >= storyLines.length;

  useEffect(() => {
    setVisibleCount(0);
  }, [storyLines]);

  useEffect(() => {
    if (visibleCount >= storyLines.length) return;
    const timer = setTimeout(() => {
      setVisibleCount(prev => prev + 1);
    }, visibleCount === 0 ? 600 : LINE_INTERVAL);
    return () => clearTimeout(timer);
  }, [visibleCount, storyLines.length]);

  const logoDelay = 0.3;

  return (
    <section id="sakumlapa" className="relative w-full min-h-screen overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <svg width="100%" height="100%">
          <filter id="paperNoise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
          <rect width="100%" height="100%" filter="url(#paperNoise)"/>
        </svg>
      </div>

      {/* Subtle background pyramids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute left-[15%] bottom-[8%] w-[500px] h-[400px] opacity-[0.06]" viewBox="0 0 500 400" fill="none">
          <path d="M250,20 L480,380 L20,380 Z" fill="#C89B3C" />
        </svg>
        <svg className="absolute left-[35%] bottom-[8%] w-[400px] h-[350px] opacity-[0.04]" viewBox="0 0 400 350" fill="none">
          <path d="M200,10 L390,340 L10,340 Z" fill="#C89B3C" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10 pt-6 md:pt-8">
        <div className="grid lg:grid-cols-[50%_50%] gap-4 lg:gap-4 items-start">
          {/* Left side — numbered story lines */}
          <div className="pt-2 md:pt-4 lg:pt-6 lg:pr-6">
            <div className="mb-4">
              <LanguageSwitcher />
            </div>
            {storyLines.map((line, i) => (
              <StoryLine key={`${i}-${line.slice(0,10)}`} text={line} index={i} isVisible={i < visibleCount} boldWords={boldWords} />
            ))}

            {/* Mini map — bottom left under story lines */}
            <motion.div
              className="mt-6 md:mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: allRevealed ? 1 : 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {allRevealed && <HeroMiniMap />}
            </motion.div>
          </div>

          {/* Right side — hero image */}
          <div className="flex flex-col order-first lg:order-last">
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: allRevealed ? 1 : 0,
                scale: allRevealed ? 1 : 0.95,
              }}
              transition={{ delay: logoDelay, duration: 1.2, ease: 'easeOut' }}
            >
              <img
                src={HERO_IMG}
                alt="SIA firma GRĀFA — piramīda, spalva, logotips"
                className="w-full max-w-[700px] lg:max-w-[900px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar — dark blue with values */}
      <motion.div
        className="relative mt-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: allRevealed ? 1 : 0,
          y: allRevealed ? 0 : 20,
        }}
        transition={{ delay: logoDelay + 0.8, duration: 0.8, ease: 'easeOut' }}
      >
        {/* Wave top edge */}
        <svg className="block w-full h-[20px] md:h-[30px]" viewBox="0 0 800 30" preserveAspectRatio="none">
          <path d="M0,30 L0,15 C100,28 200,5 350,12 C500,18 600,4 700,10 C750,14 780,20 800,14 L800,30 Z" fill="#08233E"/>
          <path d="M0,20 C150,30 300,6 450,15 C600,5 700,20 800,12" stroke="#C89B3C" strokeWidth="0.6" opacity="0.25" fill="none"/>
        </svg>

        <div className="bg-[#08233E] py-6 md:py-8 px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 max-w-[1100px] mx-auto">
            {values.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className="hidden md:flex items-center px-6 md:px-8">
                    <GoldDiamond />
                  </div>
                )}
                <motion.div
                  className="flex flex-col items-center text-center px-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: allRevealed ? 1 : 0,
                    y: allRevealed ? 0 : 10,
                  }}
                  transition={{ delay: logoDelay + 1 + i * 0.15, duration: 0.6 }}
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 mb-3">{valueIcons[i]}</div>
                  <h3 className="font-heading text-[13px] md:text-[15px] font-semibold text-white leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-body text-[10px] md:text-[12px] text-white/40 leading-relaxed max-w-[180px]">
                    {item.desc}
                  </p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Gold line bottom */}
        <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0, #C89B3C)' }} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#C89B3C]/40 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: allRevealed ? 1 : 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 animate-bounce">
          <path d="M12,5 L12,19 M7,14 L12,19 L17,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[12px] font-body tracking-wider uppercase">{t('hero.scrollDown')}</span>
      </motion.div>
    </section>
  );
}