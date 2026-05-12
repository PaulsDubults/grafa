import React from 'react';
import { motion } from 'framer-motion';

export default function InkLine({ className = "" }) {
  return (
    <motion.div 
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="bg-foreground/15"
        style={{ height: '1px' }}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}