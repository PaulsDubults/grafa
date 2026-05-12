import React from 'react';
import { motion } from 'framer-motion';
import FeatherSVG from './FeatherSVG';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-200/30 via-teal-100/20 to-transparent blur-3xl float-gradient" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-amber-100/25 via-green-100/15 to-transparent blur-3xl float-gradient" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-purple-100/10 via-blue-100/10 to-teal-100/10 blur-3xl" />
      </div>

      {/* Feather decoration */}
      <div className="absolute right-0 top-0 h-full w-1/3 md:w-2/5 pointer-events-none opacity-[0.15] md:opacity-[0.12]">
        <FeatherSVG className="h-full w-full feather-sway" />
      </div>

      {/* Pyramid triangle subtle background */}
      <div className="absolute right-20 top-1/4 pointer-events-none opacity-[0.06]">
        <svg width="300" height="300" viewBox="0 0 300 300">
          <polygon 
            points="150,20 280,260 20,260" 
            fill="none" 
            stroke="url(#pyramidGrad)" 
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="pyramidGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7B4FA2" />
              <stop offset="50%" stopColor="#2BA8A4" />
              <stop offset="100%" stopColor="#F0C040" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-20 w-full">
        <div className="max-w-2xl">
          {/* Small label */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rainbow-line w-12 rounded-full" />
            <span className="text-sm font-body tracking-widest uppercase text-muted-foreground">
              SIA firma GRĀFA
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-foreground">Grāmatvedība</span>
            <br />
            <span className="text-foreground">ar </span>
            <span className="gradient-text italic">individuālu</span>
            <br />
            <span className="gradient-text italic">pieeju</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed max-w-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Katrs klients mums ir sadarbības partneris, nevis tikai skaitlis. 
            Profesionāla grāmatvedība ar cilvēcīgu attieksmi.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#kontakti"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 via-teal-500 to-amber-400 text-white font-medium text-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Pieteikt konsultāciju
            </a>
            <a
              href="#par-mums"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border bg-white/50 backdrop-blur text-foreground font-medium text-sm hover:bg-white/80 transition-all duration-300"
            >
              Uzzināt vairāk
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex items-center gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-teal-400" />
              <span>Grāmatvedība</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-green-400" />
              <span>Finanses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
              <span>Apmācības</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved bottom separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1380,55 1440,50 L1440,80 L0,80 Z" fill="hsl(30, 20%, 98%)" />
        </svg>
      </div>
    </section>
  );
}