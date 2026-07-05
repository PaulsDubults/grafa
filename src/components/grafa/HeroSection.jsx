import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import PyramidDecoration from './PyramidDecoration';

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

const coreValues = [
  {
    title: "Uzticama grāmatvedība",
    desc: "Precizitāte un drošība katru dienu.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24,4 L40,14 L40,28 C40,36 32,42 24,46 C16,42 8,36 8,28 L8,14 Z" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <path d="M18,24 L22,28 L30,20" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Pārdomāti finanšu lēmumi",
    desc: "Analīze un atbalsts izaugsmei.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <polyline points="8,38 16,26 24,30 34,16 40,12" stroke="#1e3a5f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="40" cy="12" r="2.5" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <line x1="8" y1="42" x2="40" y2="42" stroke="#c9a84c" strokeWidth="0.6" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Zināšanas un apmācības",
    desc: "Praktiskas zināšanas Jūsu izaugsmei.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8,16 L24,8 L40,16 L24,24 Z" stroke="#1e3a5f" strokeWidth="1.2" fill="none"/>
        <path d="M14,20 L14,32 C14,36 19,40 24,40 C29,40 34,36 34,32 L34,20" stroke="#1e3a5f" strokeWidth="1.2" fill="none"/>
        <line x1="40" y1="16" x2="40" y2="36" stroke="#c9a84c" strokeWidth="1" />
        <circle cx="40" cy="38" r="2" stroke="#c9a84c" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: '#f5f0e8' }}>
      <WatercolorBackground variant="hero" />

      {/* Decorative pyramid top-right */}
      <PyramidDecoration className="absolute top-10 right-10 w-[200px] h-[240px] hidden lg:block" opacity={0.04} />

      {/* Main hero content */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: Story steps */}
          <motion.div
            className="pt-4 md:pt-8 lg:pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-5 md:space-y-6">
              {heroSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: 'easeOut' }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#c9a84c]/40 flex items-center justify-center text-[10px] font-body text-[#c9a84c] mt-0.5">
                    {i + 1}
                  </span>
                  <p className={`font-body text-[14px] md:text-[15px] leading-[1.8] ${
                    i === 5 || i === 7 || i === 9
                      ? 'text-[#1e3a5f] font-medium'
                      : 'text-[#1e3a5f]/65'
                  }`}>
                    {step.includes('grāmatvedību') ? (
                      <span dangerouslySetInnerHTML={{
                        __html: step.replace(
                          /(grāmatvedību|grāmatvedības|Grāmatvedība)/g,
                          '<strong class="text-[#1e3a5f] font-semibold">$1</strong>'
                        )
                      }} />
                    ) : step}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="flex items-center gap-2 mt-10 text-[#c9a84c]/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12,5 L12,19 M7,14 L12,19 L17,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
          >
            <img
              src={HERO_IMG}
              alt="SIA firma GRĀFA — Grāmatvedība. Finanses. Apmācības."
              className="w-full max-w-[550px] lg:max-w-[600px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Core values bar */}
      <div className="relative z-10 bg-[#1e3a5f] py-10 md:py-14 mt-6">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {coreValues.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.7 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-heading text-[16px] md:text-[17px] font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-[13px] text-white/55 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}