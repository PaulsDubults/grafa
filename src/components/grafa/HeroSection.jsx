import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import HeroMiniMap from './HeroMiniMap';

const HERO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/07f5642fe_ChatGPTImageMay13202603_52_09PM.png";

const heroSteps = [
  "Gandrīz katram uzņēmējam kādreiz ir radušies jautājumi par grāmatvedību, nodokļiem vai finanšu lēmumiem.",
  "Kas Jums šobrīd sagādā vislielākās grūtības kādā no šīm jomām?",
  "Varbūt vienkārši pietrūkst laika?",
  "Varbūt gribas lielāku skaidrību grāmatvedības, nodokļu vai finanšu jautājumos?",
  "Varbūt vienkārši vēlaties būt pārliecināts, ka viss Jūsu uzņēmuma grāmatvedībā tiek izdarīts pareizi?",
  "Ir lietas, kurām uzņēmējam nevajadzētu prasīt papildu enerģiju. Grāmatvedība ir viena no tām.",
  "Mēs ticam, ka profesionāls grāmatvedis nav tikai cilvēks, kurš sagatavo atskaites.",
  "Tas ir partneris, kurš palīdz pieņemt pārdomātus lēmumus, laikus pamana riskus un rada pārliecību, ka uzņēmuma finanšu lietas ir drošās rokās.",
  "Tāpēc mūsu darbs sākas nevis ar dokumentiem.",
  "Tas sākas ar uzticēšanos.",
];

const emphasisIndices = [5, 7, 9];
const boldWords = ['grāmatvedību', 'grāmatvedības', 'Grāmatvedība'];

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

function StoryStep({ step, index }) {
  const isEmphasis = emphasisIndices.includes(index);
  const hasBold = boldWords.some(w => step.includes(w));

  return (
    <motion.div
      className="flex items-start gap-3 relative"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex flex-col items-center flex-shrink-0 w-5">
        <span className={`text-[10px] font-body leading-none mt-1 ${
          isEmphasis ? 'text-[#c9a84c] font-semibold' : 'text-[#c9a84c]/50'
        }`}>
          {index + 1}
        </span>
      </div>

      <p className={`font-body text-[13px] md:text-[14px] leading-[1.75] pb-4 ${
        isEmphasis ? 'text-[#1e3a5f] font-medium' : 'text-[#1e3a5f]/60'
      }`}>
        {hasBold ? (
          <span dangerouslySetInnerHTML={{
            __html: step.replace(
              /(grāmatvedību|grāmatvedības|Grāmatvedība)/g,
              '<strong class="text-[#1e3a5f] font-semibold">$1</strong>'
            )
          }} />
        ) : step}
      </p>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="sakumlapa" className="relative w-full overflow-hidden" style={{ background: '#f5f0e8' }}>
      <WatercolorBackground variant="hero" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 pt-24 md:pt-28">
        <div className="grid lg:grid-cols-[42%_58%] gap-6 lg:gap-0 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            className="pt-2 md:pt-6 lg:pt-10 lg:pr-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative pl-2">
              <motion.div
                className="absolute left-[9px] top-3 bottom-0 w-[1px]"
                style={{ background: 'linear-gradient(180deg, #c9a84c, #c9a84c20)' }}
                initial={{ scaleY: 0, transformOrigin: 'top' }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.4, duration: 1.5, ease: 'easeOut' }}
              />
              <div className="flex flex-col">
                {heroSteps.map((step, i) => (
                  <StoryStep key={i} step={step} index={i} />
                ))}
              </div>
            </div>

            <HeroMiniMap />

            <motion.div
              className="flex items-center gap-2 mt-6 mb-4 text-[#c9a84c]/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 animate-bounce">
                <path d="M12,5 L12,19 M7,14 L12,19 L17,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] font-body tracking-wider">RITINĀT TĀLĀK</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col order-first lg:order-last">
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            >
              <img
                src={HERO_IMG}
                alt="SIA firma GRĀFA — Grāmatvedība. Finanses. Apmācības."
                className="w-full max-w-[500px] lg:max-w-[620px] h-auto object-contain"
              />
            </motion.div>

            <motion.div
              className="bg-[#1e3a5f] py-8 md:py-10 px-6 md:px-10 mt-2 lg:-mx-10 lg:mr-[-40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
                {coreValues.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className={`flex flex-col items-center text-center px-4 md:px-6 ${
                      i < coreValues.length - 1 ? 'md:border-r md:border-white/10' : ''
                    }`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.6 }}
                  >
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="font-heading text-[14px] md:text-[15px] font-semibold text-white mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-[11px] md:text-[12px] text-white/45 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-6 lg:h-10" />
    </section>
  );
}