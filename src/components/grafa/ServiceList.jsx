import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceList({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {items.map((item, i) => (
        <motion.div
          key={item}
          className="bg-white/70 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-[#e8e0d4]/40 shadow-[0_2px_8px_rgba(30,58,95,0.03)] hover:shadow-[0_6px_24px_rgba(30,58,95,0.07)] hover:-translate-y-0.5 transition-all duration-400 relative overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.04, duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
            <p className="font-body text-[13px] md:text-[14px] text-[#1e3a5f]/70 leading-[1.7]">{item}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}