import React from 'react';
import { motion } from 'framer-motion';

export default function ApproachCard({ point, index }) {
  return (
    <motion.div
      className="bg-white/60 backdrop-blur-sm border border-foreground/[0.06] rounded-sm p-8 md:p-10 group hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.6 }}
    >
      <div className="text-foreground/55 mb-4 group-hover:text-foreground/75 transition-colors duration-300">
        {point.icon}
      </div>
      <h3 className="font-heading text-[16px] md:text-[17px] font-semibold mb-3 leading-snug">
        {point.title}
      </h3>
      <p className="text-foreground/45 font-body text-[13px] md:text-[14px] leading-[1.8]">
        {point.desc}
      </p>
      <div className="w-6 h-[1px] bg-[#c9a84c]/30 mt-5 group-hover:w-12 group-hover:bg-[#c9a84c]/60 transition-all duration-500" />
    </motion.div>
  );
}