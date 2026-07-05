import React from 'react';
import { motion } from 'framer-motion';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/58c044609_ChatGPTImageJul5202612_47_42PM.png";

export default function HeroMiniMap() {
  const scrollToMap = () => {
    const el = document.getElementById('karte');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="relative mt-8 lg:mt-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <p className="text-[11px] font-body text-[#1e3a5f]/40 mb-3 italic">
        Apskatiet, kur visā Latvijā mums jau uzticas.
      </p>

      <button
        className="relative w-full max-w-[280px] rounded-sm overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-[0_4px_24px_rgba(201,168,76,0.2)] text-left border border-[#e8e0d4]/40 hover:border-[#c9a84c]/30"
        onClick={scrollToMap}
      >
        <img
          src={MAP_IMAGE}
          alt="Latvijas karte"
          className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#c9a84c]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="bg-white/90 text-[10px] font-body text-[#1e3a5f]/70 tracking-wider uppercase px-3 py-1.5 rounded-sm shadow-sm">
            Apskatīt karti ↓
          </span>
        </div>
      </button>
    </motion.div>
  );
}