import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="bg-[#faf8f4]/70 backdrop-blur-sm border border-foreground/[0.06] rounded-sm p-7 md:p-8 group hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.08 + index * 0.06, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="text-foreground/60 mb-5 group-hover:text-foreground/80 group-hover:scale-110 transition-all duration-300 origin-left">
        {service.icon}
      </div>
      <h3 className="font-heading text-[15px] md:text-[16px] font-semibold mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="text-foreground/40 font-body text-[12px] md:text-[13px] leading-relaxed flex-1">
        {service.desc}
      </p>
      <div className="w-6 h-[1px] bg-[#c9a84c]/30 mt-5 group-hover:w-12 group-hover:bg-[#c9a84c]/60 transition-all duration-500" />
    </motion.div>
  );
}