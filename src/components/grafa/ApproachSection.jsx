import React from 'react';
import { motion } from 'framer-motion';

export default function ApproachSection() {
  return (
    <motion.section
      id="pieeja"
      className="py-20 md:py-28 px-6 md:px-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          {/* Left - Handshake illustration */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <svg viewBox="0 0 200 120" className="w-36 md:w-44 text-foreground" fill="none">
              {/* Two hands reaching toward each other - simplified elegant line art */}
              {/* Left hand */}
              <path d="M10,70 C30,68 45,55 55,50 C60,47 65,44 72,43 C78,42 82,44 85,47" 
                stroke="currentColor" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
              <path d="M55,50 C58,42 62,38 68,36 C72,35 75,37 77,40" 
                stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
              <path d="M62,48 C64,40 68,35 74,33" 
                stroke="currentColor" strokeWidth="0.7" opacity="0.18" strokeLinecap="round" />
              {/* Right hand */}
              <path d="M190,72 C170,70 155,57 145,52 C140,49 135,46 128,45 C122,44 118,46 115,49" 
                stroke="currentColor" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
              <path d="M145,52 C142,44 138,40 132,38 C128,37 125,39 123,42" 
                stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeLinecap="round" />
              <path d="M138,50 C136,42 132,37 126,35" 
                stroke="currentColor" strokeWidth="0.7" opacity="0.18" strokeLinecap="round" />
              {/* Handshake connection */}
              <path d="M85,47 C92,50 98,52 105,52 C110,51 115,49 115,49" 
                stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
              {/* Decorative flowing lines beneath */}
              <path d="M30,85 C60,82 80,90 100,88 C120,86 140,82 170,85" 
                stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
              <path d="M40,95 C70,92 90,98 110,96 C130,94 150,92 160,94" 
                stroke="currentColor" strokeWidth="0.4" opacity="0.06" />
            </svg>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-6">
              <div className="w-[1px] bg-foreground/10 self-stretch flex-shrink-0 hidden md:block" />
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-5">
                  Individuāla pieeja
                </h2>
                <p className="text-foreground/50 font-body text-[15px] leading-[1.8] mb-4 max-w-lg">
                  Mēs esam mazs uzņēmums, tāpēc katrs klients mums ir ne tikai sadarbības 
                  partneris, bet arī cilvēks, ar kuru veidojam uzticamu un ilgtermiņa sadarbību.
                </p>
                <p className="text-foreground/40 font-body text-[14px] leading-relaxed max-w-lg">
                  Tiekamies jums ērtā laikā un vietā.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}