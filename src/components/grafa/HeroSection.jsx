import React from 'react';
import { motion } from 'framer-motion';

const HERO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/56b7b9db3_ChatGPTImageMay12202612_01_06PM.png";
const LOGO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/1a453e7fd_Screenshot2026-05-12at120542.png";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden pt-10 md:pt-16 pb-6" style={{ background: '#f8f5f0' }}>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {/* GRĀFA logo — overlapping onto the pyramid image below */}
        <img
          src={LOGO_IMG}
          alt="SIA firma GRĀFA — Grāmatvedība. Finanses. Apmācības."
          className="relative z-10 w-[240px] sm:w-[300px] md:w-[360px] h-auto object-contain mb-[-10px] sm:mb-[-15px] md:mb-[-20px] mr-8 sm:mr-12 md:mr-16 self-center"
        />

        {/* Pyramid + feather image, large, centered */}
        <img
          src={HERO_IMG}
          alt="Piramīda ar spalvu"
          className="w-full max-w-[1100px] lg:max-w-[1300px] h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}