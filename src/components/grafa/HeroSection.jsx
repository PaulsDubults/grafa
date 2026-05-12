import React from 'react';
import { motion } from 'framer-motion';
import FeatherSVG from './FeatherSVG';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Feather — right side, black ink style */}
      <div className="absolute right-0 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/[0.08] md:text-foreground/[0.06]">
        <div className="feather-sway">
          <FeatherSVG className="h-[70vh] md:h-[80vh] w-auto" />
        </div>
      </div>

      {/* Very subtle pyramid mark */}
      <div className="absolute right-32 bottom-32 pointer-events-none opacity-[0.03]">
        <svg width="180" height="180" viewBox="0 0 180 180">
          <polygon 
            points="90,10 170,160 10,160" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-28 md:pt-20 w-full">
        <div className="max-w-xl">
          {/* Brand name */}
          <motion.p
            className="text-[13px] font-body tracking-[0.25em] uppercase text-foreground/35 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SIA firma GRĀFA
          </motion.p>

          {/* Main heading — ink feel */}
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-medium leading-[1.15] mb-8"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Grāmatvedība
            <br />
            <span className="italic text-foreground/70">ar individuālu</span>
            <br />
            <span className="italic text-foreground/70">pieeju</span>
          </motion.h1>

          {/* Thin ink line */}
          <motion.div 
            className="w-16 h-[1px] bg-foreground/20 mb-8"
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-foreground/45 font-body font-light leading-relaxed max-w-md mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Katrs klients mums ir sadarbības partneris, 
            nevis tikai skaitlis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a
              href="#kontakti"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background font-body text-sm font-medium tracking-wide hover:bg-foreground/85 transition-all duration-300"
            >
              Sazināties
            </a>
            <a
              href="#kontakti"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-foreground/15 text-foreground/70 font-body text-sm font-medium tracking-wide hover:border-foreground/30 hover:text-foreground transition-all duration-300"
            >
              Pieteikt konsultāciju
            </a>
          </motion.div>

          {/* Minimal trust line */}
          <motion.p
            className="mt-20 text-[12px] font-body tracking-[0.15em] uppercase text-foreground/25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Grāmatvedība · Finanses · Apmācības
          </motion.p>
        </div>
      </div>
    </section>
  );
}