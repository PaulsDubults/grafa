import React from 'react';
import { motion } from 'framer-motion';

const HERO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/56b7b9db3_ChatGPTImageMay12202612_01_06PM.png";
const LOGO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/1a453e7fd_Screenshot2026-05-12at120542.png";
const FEATHER_VERTICAL = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/a3648676e_Screenshot2026-05-12at120344.png";
const FEATHER_HORIZONTAL = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/6e88ee240_Screenshot2026-05-12at120402.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden" style={{ background: '#f8f5f0' }}>
      
      {/* Decorative feather — top right, faded */}
      <img
        src={FEATHER_VERTICAL}
        alt=""
        className="absolute top-[-40px] right-[-30px] w-[180px] md:w-[260px] opacity-[0.06] pointer-events-none select-none"
        style={{ transform: 'rotate(15deg)' }}
      />
      
      {/* Decorative feather — bottom left, faded horizontal */}
      <img
        src={FEATHER_HORIZONTAL}
        alt=""
        className="absolute bottom-[40px] left-[-40px] w-[220px] md:w-[320px] opacity-[0.05] pointer-events-none select-none"
        style={{ transform: 'rotate(-5deg)' }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
          
          {/* LEFT — GRĀFA logo image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <img
              src={LOGO_IMG}
              alt="SIA firma GRĀFA — Grāmatvedība. Finanses. Apmācības."
              className="w-[240px] sm:w-[280px] md:w-[320px] h-auto object-contain"
            />
          </motion.div>

          {/* CENTER — Main hero image (pyramid + feather), smaller & centered */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.1 }}
          >
            <img
              src={HERO_IMG}
              alt="Piramīda ar spalvu"
              className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-auto object-contain"
            />
          </motion.div>

          {/* RIGHT — empty space for balance, or could add text later */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}