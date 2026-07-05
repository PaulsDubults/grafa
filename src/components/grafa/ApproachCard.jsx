import React from 'react';
import { motion } from 'framer-motion';

export default function ApproachCard({ point, index }) {
  return (
    <motion.div
      className="bg-white rounded-sm p-8 md:p-10 group cursor-default shadow-[0_2px_12px_rgba(30,58,95,0.06)] hover:shadow-[0_8px_30px_rgba(30,58,95,0.12)] hover:-translate-y-2 transition-all duration-600 border border-[#e8e0d4]/50"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.7, ease: 'easeOut' }}
    >
      <div className="text-[#1e3a5f]/60 mb-5 group-hover:text-[#1e3a5f] transition-colors duration-500">
        {point.icon}
      </div>
      <h3 className="font-heading text-[17px] md:text-[18px] font-semibold mb-3 leading-snug text-[#1e3a5f]">
        {point.title}
      </h3>
      <p className="text-[#1e3a5f]/50 font-body text-[13px] md:text-[14px] leading-[1.85]">
        {point.desc}
      </p>
      <div className="w-8 h-[1.5px] mt-6 transition-all duration-600 group-hover:w-14" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)' }} />
    </motion.div>
  );
}