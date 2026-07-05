import React from 'react';
import { motion } from 'framer-motion';

export default function GoldLine({ width = 'w-20', className = '' }) {
  return (
    <motion.div
      className={`h-[1.5px] ${width} ${className}`}
      style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    />
  );
}