import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10">
      {/* Subtle watercolor/paper texture bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(ellipse at 30% 20%, #c4a882 0%, transparent 50%), 
                          radial-gradient(ellipse at 70% 80%, #b8a080 0%, transparent 50%)`
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="font-heading text-lg md:text-xl text-foreground/70 mb-1">SIA firma</p>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide mb-4 leading-none">
                GRĀFA
              </h1>
              <p className="text-foreground/50 font-body text-sm tracking-wider mb-8">
                Grāmatvedība. Finanses. Apmācības.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-foreground/55 font-body text-[15px] leading-relaxed mb-10 max-w-sm">
                Grāmatvedība ar individuālu pieeju.<br />
                Katrs klients mums ir sadarbības partneris, nevis tikai skaitlis.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#kontakti"
                  className="px-7 py-2.5 rounded-full bg-foreground text-background font-body text-sm hover:bg-foreground/85 transition-all duration-300"
                >
                  Sazināties
                </a>
                <a
                  href="#kontakti"
                  className="px-7 py-2.5 rounded-full border border-foreground/20 text-foreground/70 font-body text-sm hover:border-foreground/40 transition-all duration-300"
                >
                  Pieteikt konsultāciju
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right - Pyramid + Feather illustration */}
          <motion.div
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] md:w-[380px] md:h-[420px]">
              {/* Pyramid with gradient */}
              <svg viewBox="0 0 400 440" className="absolute inset-0 w-full h-full" fill="none">
                <defs>
                  <linearGradient id="pyramidGradHero" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#3B3B6D" stopOpacity="0.85" />
                    <stop offset="35%" stopColor="#5B8BA0" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#C4A86E" stopOpacity="0.5" />
                    <stop offset="85%" stopColor="#E8D5A8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#F0E6D0" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <polygon 
                  points="200,40 350,360 50,360" 
                  fill="url(#pyramidGradHero)"
                />
                <polygon 
                  points="200,40 350,360 50,360" 
                  fill="none" 
                  stroke="rgba(60,60,60,0.08)" 
                  strokeWidth="1"
                />
                {/* Center line */}
                <line x1="200" y1="40" x2="200" y2="360" stroke="rgba(60,60,60,0.06)" strokeWidth="0.5" />
              </svg>

              {/* Feather overlaying pyramid */}
              <div className="absolute inset-0 flex items-center justify-center feather-sway">
                <svg viewBox="0 0 300 500" className="w-[75%] h-[85%] text-foreground" fill="none">
                  {/* Quill shaft */}
                  <path d="M155 20 Q150 80 147 150 Q144 220 142 290 Q140 360 148 430 Q150 460 155 490" 
                    stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" className="ink-draw" />
                  {/* Left barbs */}
                  <path d="M150 55 Q110 35 60 20" stroke="currentColor" strokeWidth="0.7" opacity="0.3" className="ink-draw" style={{animationDelay:'0.3s'}} />
                  <path d="M148 90 Q100 65 40 48" stroke="currentColor" strokeWidth="0.7" opacity="0.28" className="ink-draw" style={{animationDelay:'0.5s'}} />
                  <path d="M146 125 Q92 98 30 78" stroke="currentColor" strokeWidth="0.7" opacity="0.25" className="ink-draw" style={{animationDelay:'0.7s'}} />
                  <path d="M145 160 Q90 135 28 115" stroke="currentColor" strokeWidth="0.6" opacity="0.22" className="ink-draw" style={{animationDelay:'0.9s'}} />
                  <path d="M144 195 Q92 172 35 152" stroke="currentColor" strokeWidth="0.6" opacity="0.2" className="ink-draw" style={{animationDelay:'1.1s'}} />
                  <path d="M143 230 Q95 210 42 192" stroke="currentColor" strokeWidth="0.5" opacity="0.18" className="ink-draw" style={{animationDelay:'1.3s'}} />
                  <path d="M142 265 Q98 248 50 232" stroke="currentColor" strokeWidth="0.5" opacity="0.15" className="ink-draw" style={{animationDelay:'1.5s'}} />
                  {/* Right barbs */}
                  <path d="M160 50 Q200 30 248 18" stroke="currentColor" strokeWidth="0.7" opacity="0.3" className="ink-draw" style={{animationDelay:'0.4s'}} />
                  <path d="M158 85 Q205 62 260 45" stroke="currentColor" strokeWidth="0.7" opacity="0.28" className="ink-draw" style={{animationDelay:'0.6s'}} />
                  <path d="M156 120 Q208 95 270 76" stroke="currentColor" strokeWidth="0.7" opacity="0.25" className="ink-draw" style={{animationDelay:'0.8s'}} />
                  <path d="M155 155 Q205 132 268 112" stroke="currentColor" strokeWidth="0.6" opacity="0.22" className="ink-draw" style={{animationDelay:'1.0s'}} />
                  <path d="M154 190 Q202 170 262 150" stroke="currentColor" strokeWidth="0.6" opacity="0.2" className="ink-draw" style={{animationDelay:'1.2s'}} />
                  <path d="M153 225 Q198 208 255 190" stroke="currentColor" strokeWidth="0.5" opacity="0.18" className="ink-draw" style={{animationDelay:'1.4s'}} />
                  <path d="M152 260 Q195 245 248 228" stroke="currentColor" strokeWidth="0.5" opacity="0.15" className="ink-draw" style={{animationDelay:'1.6s'}} />
                  {/* Fine secondary */}
                  <path d="M149 70 Q115 52 72 38" stroke="currentColor" strokeWidth="0.35" opacity="0.15" className="ink-draw" style={{animationDelay:'0.5s'}} />
                  <path d="M159 65 Q195 48 240 35" stroke="currentColor" strokeWidth="0.35" opacity="0.15" className="ink-draw" style={{animationDelay:'0.6s'}} />
                </svg>
              </div>

              {/* Ink splatter dots */}
              <div className="absolute bottom-8 right-8">
                <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-[0.08]">
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                  <circle cx="25" cy="15" r="1.5" fill="currentColor" />
                  <circle cx="18" cy="28" r="1" fill="currentColor" />
                  <circle cx="35" cy="8" r="1" fill="currentColor" />
                  <circle cx="40" cy="25" r="0.8" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ink line with script words + arrow */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-10 mt-10 md:mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="relative">
          {/* Flowing ink line SVG */}
          <svg viewBox="0 0 900 80" className="w-full h-16 md:h-20" fill="none" preserveAspectRatio="xMidYMid meet">
            <path 
              d="M0,55 C100,55 120,20 200,30 C280,40 300,50 400,40 C500,30 520,55 620,45 C720,35 750,50 850,40 C880,38 900,42 900,42" 
              stroke="currentColor" 
              strokeWidth="0.8" 
              opacity="0.15"
              className="ink-draw"
            />
            {/* Ink dots along the line */}
            <circle cx="50" cy="52" r="1.5" fill="currentColor" opacity="0.08" />
            <circle cx="450" cy="38" r="1.2" fill="currentColor" opacity="0.06" />
            <circle cx="820" cy="42" r="1" fill="currentColor" opacity="0.06" />
          </svg>
          {/* Script words positioned along the curve */}
          <div className="absolute inset-0 flex items-center justify-around px-4 md:px-16">
            <span className="font-script text-sm md:text-lg text-foreground/30 -rotate-3">uzticēšanās</span>
            <span className="font-script text-sm md:text-lg text-foreground/30 rotate-2">pieredze</span>
            <span className="font-script text-sm md:text-lg text-foreground/30 -rotate-1">attīstība</span>
            <span className="font-script text-sm md:text-lg text-foreground/30 rotate-3">izaugsme</span>
          </div>
        </div>
        {/* Arrow down */}
        <div className="flex justify-center mt-2">
          <a href="#pieeja">
            <ChevronDown className="w-5 h-5 text-foreground/25" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}