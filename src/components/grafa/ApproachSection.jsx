import React from 'react';
import { motion } from 'framer-motion';

const points = [
  {
    title: "Uzticama sadarbība",
    desc: "Veidojam ilgtermiņa attiecības, kas balstītas uz caurspīdīgumu un profesionalitāti.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <path d="M8,30 C13,26 17,24 22,24 C27,24 31,26 36,30" stroke="currentColor" strokeWidth="1.3" opacity="0.65" strokeLinecap="round"/>
        <circle cx="22" cy="14" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.7"/>
        <path d="M15,35 L29,35" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
      </svg>
    ),
  },
  {
    title: "Cilvēcīga komunikācija",
    desc: "Katrs klients ir cilvēks, nevis numurs. Komunikācija vienmēr ir personīga un saprotama.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <path d="M6,32 Q6,18 22,18 Q38,18 38,32" stroke="currentColor" strokeWidth="1.3" opacity="0.65" strokeLinecap="round"/>
        <circle cx="15" cy="26" r="1.5" fill="currentColor" opacity="0.5"/>
        <circle cx="22" cy="26" r="1.5" fill="currentColor" opacity="0.5"/>
        <circle cx="29" cy="26" r="1.5" fill="currentColor" opacity="0.5"/>
        <path d="M10,12 Q22,5 34,12" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
      </svg>
    ),
  },
  {
    title: "Elastīga pieeja",
    desc: "Pielāgojamies katra klienta grafikam, vajadzībām un uzņēmējdarbības formai.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <path d="M10,34 Q22,10 34,34" stroke="currentColor" strokeWidth="1.3" opacity="0.65" strokeLinecap="round"/>
        <path d="M16,32 Q22,16 28,32" stroke="currentColor" strokeWidth="1.2" opacity="0.5" strokeLinecap="round"/>
        <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
      </svg>
    ),
  },
];

export default function ApproachSection() {
  return (
    <motion.section
      id="pieeja"
      className="relative min-h-[70vh] md:min-h-[80vh] py-20 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: '#f5f1eb' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[42px] font-semibold mb-4 leading-tight">
            Individuāla pieeja
          </h2>
          <div className="w-20 h-[2px] bg-[#c9a84c] mb-8" />
          <p className="text-foreground/55 font-body text-[15px] md:text-[16px] leading-[1.9] mb-4 max-w-2xl">
            Mēs esam mazs uzņēmums, tāpēc katrs klients mums ir ne tikai sadarbības 
            partneris, bet arī cilvēks, ar kuru veidojam uzticamu un ilgtermiņa sadarbību.
          </p>
          <p className="text-foreground/45 font-body text-[14px] md:text-[15px] leading-[1.8] max-w-2xl">
            Tiekamies Jums ērtā laikā un vietā, pielāgojoties katra klienta vajadzībām.
          </p>
        </motion.div>

        {/* 3 elegant cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-[#faf8f4] border border-foreground/[0.06] rounded-sm p-7 md:p-8 group hover:shadow-lg transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="text-foreground/60 mb-5 group-hover:text-foreground/80 group-hover:scale-110 transition-all duration-300 origin-left">
                {p.icon}
              </div>
              <h3 className="font-heading text-[15px] md:text-[16px] font-semibold mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-foreground/40 font-body text-[12px] md:text-[13px] leading-relaxed">
                {p.desc}
              </p>
              <div className="w-6 h-[1px] bg-[#c9a84c]/30 mt-5 group-hover:w-12 group-hover:bg-[#c9a84c]/60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}