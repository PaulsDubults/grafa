import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroMiniMap from './HeroMiniMap';

const HERO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/07f5642fe_ChatGPTImageMay13202603_52_09PM.png";

const storyLines = [
  "Gandrīz katram uzņēmējam kādreiz ir radušies jautājumi par grāmatvedību, nodokļiem vai finanšu lēmumiem.",
  "Kas Jums šobrīd sagādā vislielākās grūtības kādā no šīm jomām?",
  "Varbūt vienkārši pietrūkst laika?",
  "Varbūt gribas lielāku skaidrību grāmatvedības, nodokļu vai finanšu jautājumos?",
  "Varbūt vienkārši vēlaties būt pārliecināts, ka viss Jūsu uzņēmuma grāmatvedībā tiek izdarīts pareizi?",
  "Ir lietas, kurām uzņēmējam nevajadzētu prasīt papildu enerģiju.",
  "Grāmatvedība ir viena no tām.",
  "Mēs ticam, ka profesionāls grāmatvedis nav tikai cilvēks, kurš sagatavo atskaites.",
  "Tas ir partneris, kurš palīdz pieņemt pārdomātus lēmumus, laikus pamana riskus un rada pārliecību, ka uzņēmuma finanšu lietas ir drošās rokās.",
  "Tāpēc mūsu darbs sākas nevis ar dokumentiem.",
  "Tas sākas ar uzticēšanos.",
];

/* Lines that should appear slightly stronger */
const emphasisIndices = [5, 6, 8, 10];
const boldWords = ['grāmatvedību', 'grāmatvedības', 'Grāmatvedība'];

const LINE_INTERVAL = 1400; // ms between each line appearing

const coreValues = [
  {
    title: "Uzticama grāmatvedība",
    desc: "Precizitāte un drošība katru dienu.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10">
        <path d="M24,4 L40,14 L40,28 C40,36 32,42 24,46 C16,42 8,36 8,28 L8,14 Z" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <path d="M18,24 L22,28 L30,20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
      </svg>
    ),
  },
  {
    title: "Pārdomāti finanšu lēmumi",
    desc: "Analīze un atbalsts izaugsmei.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10">
        <polyline points="8,38 16,26 24,30 34,16 40,12" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="40" cy="12" r="2.5" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <line x1="8" y1="42" x2="40" y2="42" stroke="white" strokeWidth="0.5" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "Zināšanas un apmācības",
    desc: "Praktiskas zināšanas Jūsu izaugsmei.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10">
        <path d="M8,16 L24,8 L40,16 L24,24 Z" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <path d="M14,20 L14,32 C14,36 19,40 24,40 C29,40 34,36 34,32 L34,20" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <line x1="40" y1="16" x2="40" y2="36" stroke="white" strokeWidth="0.8" opacity="0.4"/>
        <circle cx="40" cy="38" r="2" stroke="white" strokeWidth="0.6" opacity="0.4" fill="none"/>
      </svg>
    ),
  },
];

function StoryLine({ text, index, isVisible }) {
  const isEmphasis = emphasisIndices.includes(index);
  const hasBold = boldWords.some(w => text.includes(w));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.p
          className={`font-body text-[12px] md:text-[13px] leading-[1.8] mb-2.5 ${
            isEmphasis
              ? 'text-[#1e3a5f] font-medium'
              : 'text-[#1e3a5f]/60'
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {hasBold ? (
            <span dangerouslySetInnerHTML={{
              __html: text.replace(
                /(grāmatvedību|grāmatvedības|Grāmatvedība)/g,
                '<strong class="text-[#1e3a5f] font-semibold">$1</strong>'
              )
            }} />
          ) : text}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function HeroSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const allRevealed = visibleCount >= storyLines.length;

  useEffect(() => {
    if (visibleCount >= storyLines.length) return;
    const timer = setTimeout(() => {
      setVisibleCount(prev => prev + 1);
    }, visibleCount === 0 ? 600 : LINE_INTERVAL);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  const logoDelay = 0.3; // after all lines visible

  return (
    <section id="sakumlapa" className="relative w-full min-h-screen overflow-hidden" style={{ background: '#f5f0e8' }}>
      {/* Subtle paper texture / watercolor bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <filter id="paperNoise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
          <rect width="100%" height="100%" filter="url(#paperNoise)"/>
        </svg>
      </div>

      {/* Faint pyramid/feather motif */}
      <div className="absolute right-0 top-0 w-[400px] h-[600px] pointer-events-none opacity-[0.03] hidden lg:block">
        <svg viewBox="0 0 200 300" fill="none" className="w-full h-full">
          <path d="M100,20 L180,260 L20,260 Z" stroke="#1e3a5f" strokeWidth="0.5" fill="none"/>
          <path d="M100,60 L100,280" stroke="#1e3a5f" strokeWidth="0.3"/>
          <path d="M100,40 Q120,140 160,200 Q140,180 100,160 Q60,180 40,200 Q80,140 100,40" stroke="#1e3a5f" strokeWidth="0.4" fill="none"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 pt-24 md:pt-28">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-4 items-start min-h-[calc(100vh-120px)]">

          {/* LEFT COLUMN — Story + Map */}
          <div className="pt-4 md:pt-8 lg:pt-12 lg:pr-10 flex flex-col">
            {/* Story text — lines appear one by one and STAY */}
            <div className="flex-1">
              {storyLines.map((line, i) => (
                <StoryLine key={i} text={line} index={i} isVisible={i < visibleCount} />
              ))}
            </div>

            {/* Mini map — bottom left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: allRevealed ? 1 : 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 mb-6"
            >
              {allRevealed && <HeroMiniMap />}
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Logo composition + Values bar */}
          <div className="flex flex-col order-first lg:order-last">
            {/* Logo: pyramid, feather, company name — appears after story */}
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
                className="w-full max-w-[480px] lg:max-w-[580px] h-auto object-contain"
              />
            </motion.div>

            {/* Dark blue values bar with wave top — right column only */}
            <motion.div
              className="relative mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: allRevealed ? 1 : 0,
                y: allRevealed ? 0 : 20,
              }}
              transition={{ delay: logoDelay + 0.8, duration: 0.8, ease: 'easeOut' }}
            >
              {/* Wave top edge */}
              <svg className="block w-full h-[30px] md:h-[45px]" viewBox="0 0 800 45" preserveAspectRatio="none">
                <path d="M0,45 L0,25 C100,40 200,10 350,18 C500,26 600,8 700,15 C750,20 780,30 800,22 L800,45 Z" fill="#1e3a5f"/>
                <path d="M0,30 C150,42 300,10 450,22 C600,8 700,28 800,18" stroke="#c9a84c" strokeWidth="0.6" opacity="0.25" fill="none"/>
              </svg>

              <div className="bg-[#1e3a5f] py-7 md:py-8 px-5 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
                  {coreValues.map((item, i) => (
                    <motion.div
                      key={item.title}
                      className={`flex items-start gap-3 px-3 md:px-4 ${
                        i < coreValues.length - 1 ? 'md:border-r md:border-white/10' : ''
                      }`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{
                        opacity: allRevealed ? 1 : 0,
                        y: allRevealed ? 0 : 14,
                      }}
                      transition={{ delay: logoDelay + 1 + i * 0.15, duration: 0.6 }}
                    >
                      <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                      <div>
                        <h3 className="font-heading text-[13px] md:text-[14px] font-semibold text-white mb-1 leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-body text-[11px] md:text-[12px] text-white/40 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#c9a84c]/40 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: allRevealed ? 1 : 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 animate-bounce">
          <path d="M12,5 L12,19 M7,14 L12,19 L17,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[10px] font-body tracking-wider uppercase">Ritināt tālāk</span>
      </motion.div>
    </section>
  );
}