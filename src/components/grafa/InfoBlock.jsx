import React from 'react';
import { motion } from 'framer-motion';

export default function InfoBlock({ text }) {
  return (
    <motion.div
      className="mt-10 bg-white/50 backdrop-blur-sm border-l-2 border-[#C89B3C] rounded-lg px-6 py-5 md:px-8 md:py-6 shadow-[0_2px_8px_rgba(30,58,95,0.03)]"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <p className="font-body text-[13px] md:text-[14px] text-[#08233E] leading-[1.8] italic font-semibold">
        {text}
      </p>
    </motion.div>
  );
}