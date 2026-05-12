import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src="https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/56b7b9db3_ChatGPTImageMay12202612_01_06PM.png"
        alt="SIA firma GRĀFA — Grāmatvedība. Finanses. Apmācības."
        className="w-full h-auto block"
      />
    </motion.section>
  );
}