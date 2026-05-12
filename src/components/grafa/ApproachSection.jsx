import React from 'react';
import { motion } from 'framer-motion';

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 180 110" className="w-32 md:w-40" fill="none">
      {/* Left arm */}
      <path d="M5,62 C18,60 32,56 44,52 C52,48 58,44 66,42 C72,40 78,39 84,42"
        stroke="#1a1a1a" strokeWidth="0.9" opacity="0.22" strokeLinecap="round" />
      <path d="M52,50 C56,42 62,36 70,34 C76,33 80,36 82,40"
        stroke="#1a1a1a" strokeWidth="0.7" opacity="0.18" strokeLinecap="round" />
      <path d="M60,48 C63,41 68,36 74,34"
        stroke="#1a1a1a" strokeWidth="0.6" opacity="0.15" strokeLinecap="round" />
      {/* Right arm */}
      <path d="M175,64 C162,62 148,58 136,54 C128,50 122,46 114,44 C108,42 102,41 96,44"
        stroke="#1a1a1a" strokeWidth="0.9" opacity="0.22" strokeLinecap="round" />
      <path d="M128,52 C124,44 118,38 110,36 C104,35 100,38 98,42"
        stroke="#1a1a1a" strokeWidth="0.7" opacity="0.18" strokeLinecap="round" />
      <path d="M120,50 C117,43 112,38 106,36"
        stroke="#1a1a1a" strokeWidth="0.6" opacity="0.15" strokeLinecap="round" />
      {/* Handshake clasp */}
      <path d="M84,42 C88,45 92,47 96,47 C100,46 104,44 96,44"
        stroke="#1a1a1a" strokeWidth="1.1" opacity="0.28" strokeLinecap="round" />
      <path d="M82,46 C88,50 94,52 100,50"
        stroke="#1a1a1a" strokeWidth="0.6" opacity="0.12" strokeLinecap="round" />
      {/* Decorative curves below */}
      <path d="M25,80 C55,76 75,84 95,82 C115,80 135,76 155,80"
        stroke="#1a1a1a" strokeWidth="0.4" opacity="0.06" />
      <path d="M35,90 C60,87 80,93 100,91 C120,89 140,86 158,89"
        stroke="#1a1a1a" strokeWidth="0.3" opacity="0.04" />
    </svg>
  );
}



export default function ApproachSection() {
  return (
    <motion.section
      id="pieeja"
      className="py-16 md:py-24 px-6 md:px-10"
      style={{ background: '#f5f1eb' }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          {/* Left — handshake */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <HandshakeIcon />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="border-l border-foreground/10 pl-8 md:pl-10">
              <h2 className="font-heading text-[22px] md:text-[26px] font-semibold mb-3">
                Individuāla pieeja
              </h2>
              {/* Gold accent line */}
              <div className="w-10 h-[1.5px] bg-[#c9a84c]/50 mb-5" />
              <p className="text-foreground/50 font-body text-[14px] leading-[1.8] mb-3 max-w-lg">
                Mēs esam mazs uzņēmums, tāpēc katrs klients mums ir ne tikai sadarbības 
                partneris, bet arī cilvēks, ar kuru veidojam uzticamu un ilgtermiņa sadarbību.
              </p>
              <p className="text-foreground/40 font-body text-[13px] leading-relaxed">
                Tiekamies jums ērtā laikā un vietā.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}