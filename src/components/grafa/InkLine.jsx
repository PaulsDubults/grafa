import React from 'react';
import { motion } from 'framer-motion';

export default function InkLine({ className = "", gradient = true }) {
  return (
    <motion.div 
      className={`w-full overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={gradient ? "rainbow-line" : "bg-border"}
        style={{ height: '1.5px' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </motion.div>
  );
}