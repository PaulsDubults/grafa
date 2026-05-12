import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#f8f5f0' }}>
      {/* Subtle watercolor texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(ellipse at 20% 30%, #c9b896 0%, transparent 55%),
                          radial-gradient(ellipse at 80% 70%, #bfae94 0%, transparent 50%),
                          radial-gradient(ellipse at 50% 10%, #d4c4a8 0%, transparent 40%)`
      }} />

      {/* Main content area */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-24 md:pt-16 pb-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-4 items-center w-full">
          
          {/* LEFT — Text */}
          <div className="order-2 md:order-1 pb-8 md:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <p className="font-heading text-xl md:text-2xl text-foreground/75 mb-0 leading-snug">SIA firma</p>
              <h1 className="font-heading text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-[0.02em] leading-[0.9] mb-4">
                GRĀFA
              </h1>
              <p className="text-foreground/45 font-body text-[13px] tracking-[0.08em] mb-8">
                Grāmatvedība. Finanses. Apmācības.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-foreground/55 font-body text-[14px] leading-[1.75] mb-10 max-w-[340px]">
                Grāmatvedība ar individuālu pieeju.<br />
                Katrs klients mums ir sadarbības partneris,<br />
                nevis tikai skaitlis.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#kontakti"
                  className="px-7 py-2.5 rounded-full bg-foreground text-[#f8f5f0] font-body text-[13px] font-medium hover:bg-foreground/85 transition-all duration-300">
                  Sazināties
                </a>
                <a href="#kontakti"
                  className="px-7 py-2.5 rounded-full border border-foreground/25 text-foreground/70 font-body text-[13px] font-medium hover:border-foreground/45 transition-all duration-300">
                  Pieteikt konsultāciju
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Pyramid + Feather */}
          <motion.div
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15 }}
          >
            <img 
              src="https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/56b7b9db3_ChatGPTImageMay12202612_01_06PM.png" 
              alt="SIA firma GRĀFA — spalva un piramīda"
              className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Ink flowing line with script words */}
      <motion.div
        className="relative z-10 w-full px-4 md:px-8 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        <div className="max-w-[1200px] mx-auto relative">
          <svg viewBox="0 0 1000 90" className="w-full h-[70px] md:h-[80px]" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Main flowing ink line */}
            <path
              d="M-10,60 C40,62 70,50 120,42 C180,32 200,55 260,48 C340,38 370,28 430,35 C500,42 530,55 590,42 C660,28 700,38 760,45 C830,52 870,35 940,38 C970,39 1000,45 1010,44"
              stroke="#1a1a1a"
              strokeWidth="1"
              opacity="0.18"
              strokeLinecap="round"
              className="ink-draw"
            />
            {/* Thinner parallel line for depth */}
            <path
              d="M0,64 C50,66 80,54 130,46 C190,36 210,58 270,52 C350,42 380,32 440,38 C510,45 540,58 600,46 C670,32 710,42 770,48 C840,55 880,38 950,42"
              stroke="#1a1a1a"
              strokeWidth="0.4"
              opacity="0.07"
              strokeLinecap="round"
            />
            {/* Ink dots along line */}
            <circle cx="70" cy="52" r="2" fill="#1a1a1a" opacity="0.1" />
            <circle cx="72" cy="56" r="1" fill="#1a1a1a" opacity="0.06" />
            <circle cx="500" cy="40" r="1.2" fill="#1a1a1a" opacity="0.06" />
            <circle cx="890" cy="40" r="1.5" fill="#1a1a1a" opacity="0.08" />
            <circle cx="893" cy="44" r="0.8" fill="#1a1a1a" opacity="0.05" />
          </svg>

          {/* Script words positioned along the curve */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full flex justify-between px-[8%] md:px-[10%]">
              <span className="font-script text-[14px] md:text-[18px] text-foreground/25 -rotate-6 translate-y-[-2px]">uzticēšanās</span>
              <span className="font-script text-[14px] md:text-[18px] text-foreground/28 rotate-3 translate-y-[-8px]">pieredze</span>
              <span className="font-script text-[14px] md:text-[18px] text-foreground/25 -rotate-2 translate-y-[-4px]">attīstība</span>
              <span className="font-script text-[14px] md:text-[18px] text-foreground/28 rotate-4 translate-y-[-6px]">izaugsme</span>
            </div>
          </div>
        </div>

        {/* Down arrow */}
        <div className="flex justify-center mt-3">
          <a href="#pieeja" className="text-foreground/20 hover:text-foreground/40 transition-colors">
            <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}