import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';

const HERO_IMG = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/07f5642fe_ChatGPTImageMay13202603_52_09PM.png";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden pt-10 md:pt-16 pb-6" style={{ background: '#faf7f2' }}>
      <WatercolorBackground variant="hero" />

      <motion.div
        className="relative z-10 w-full max-w-[1100px] lg:max-w-[1300px] mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <img
          src={HERO_IMG}
          alt="SIA firma GRĀFA — Grāmatvedība. Finanses. Apmācības."
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}