import React from 'react';
import { motion } from 'framer-motion';

export default function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <motion.section
      id={id}
      className={`relative py-24 md:py-32 px-6 md:px-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}