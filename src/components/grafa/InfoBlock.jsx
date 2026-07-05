import React from 'react';
import { motion } from 'framer-motion';

export default function InfoBlock({ text }) {
  return (
    <motion.div
      className="mt-10 bg-[#1e3a5f]/[0.04] border-l-2 border-[#c9a84c] rounded-sm px-6 py-5 md:px-8 md:py-6"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <p className="font-body text-[13px] md:text-[14px] text-[#1e3a5f]/60 leading-[1.8] italic">
        {text}
      </p>
    </motion.div>
  );
}