import React from 'react';
import { motion } from 'framer-motion';

const HERO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/56b7b9db3_ChatGPTImageMay12202612_01_06PM.png";
const LOGO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/1a453e7fd_Screenshot2026-05-12at120542.png";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden pt-12 md:pt-20 pb-6" style={{ background: '#f8f5f0' }}>
      {/* GRĀFA logo image on top */}
      <motion.div
        className="flex justify-center mb-6 md:mb-8"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        <img
          src={LOGO_IMG}
          alt="SIA firma GRĀFA — Grāmatvedība. Finanses. Apmācības."
          className="w-[260px] sm:w-[320px] md:w-[380px] h-auto object-contain"
        />
      </motion.div>

      {/* Pyramid + feather image below, 2x bigger, centered */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.25 }}
      >
        <img
          src={HERO_IMG}
          alt="Piramīda ar spalvu"
          className="w-[90%] sm:w-[80%] md:w-[700px] lg:w-[800px] h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}