import React from 'react';
import { motion } from 'framer-motion';

const HORIZONTAL_FEATHER = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/1d1cf7e68_image.png";

const points = [
  {
    title: "Uzticama sadarbība",
    desc: "Veidojam ilgtermiņa attiecības, kas balstītas uz caurspīdīgumu un profesionalitāti.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M8,28 C12,24 16,22 20,22 C24,22 28,24 32,28" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeLinecap="round"/>
        <circle cx="20" cy="14" r="5" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
        <path d="M14,32 L26,32" stroke="currentColor" strokeWidth="0.6" opacity="0.25"/>
      </svg>
    ),
  },
  {
    title: "Cilvēcīga komunikācija",
    desc: "Katrs klients ir cilvēks, nevis numurs. Komunikācija vienmēr ir personīga un saprotama.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M6,30 Q6,18 20,18 Q34,18 34,30" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeLinecap="round"/>
        <circle cx="14" cy="24" r="1" fill="currentColor" opacity="0.3"/>
        <circle cx="20" cy="24" r="1" fill="currentColor" opacity="0.3"/>
        <circle cx="26" cy="24" r="1" fill="currentColor" opacity="0.3"/>
        <path d="M10,12 Q20,6 30,12" stroke="currentColor" strokeWidth="0.6" opacity="0.25"/>
      </svg>
    ),
  },
  {
    title: "Elastīga pieeja",
    desc: "Pielāgojamies katra klienta grafikam, vajadzībām un uzņēmējdarbības formai.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M10,30 Q20,10 30,30" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeLinecap="round"/>
        <path d="M15,28 Q20,16 25,28" stroke="currentColor" strokeWidth="0.6" opacity="0.25" strokeLinecap="round"/>
        <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
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
      {/* Background feather — large, blended with section */}
      <img
        src={HORIZONTAL_FEATHER}
        alt=""
        className="absolute bottom-[5%] right-[-5%] w-[70%] md:w-[50%] lg:w-[40%] h-auto object-contain opacity-[0.3] pointer-events-none select-none"
        style={{ mixBlendMode: 'multiply' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[42px] font-semibold mb-4 leading-tight">
                Individuāla pieeja
              </h2>
              <div className="w-12 h-[1.5px] bg-[#c9a84c]/50 mb-8" />
              <p className="text-foreground/55 font-body text-[15px] md:text-[16px] leading-[1.9] mb-4 max-w-xl">
                Mēs esam mazs uzņēmums, tāpēc katrs klients mums ir ne tikai sadarbības 
                partneris, bet arī cilvēks, ar kuru veidojam uzticamu un ilgtermiņa sadarbību.
              </p>
              <p className="text-foreground/45 font-body text-[14px] md:text-[15px] leading-[1.8] max-w-xl mb-12">
                Tiekamies Jums ērtā laikā un vietā, pielāgojoties katra klienta vajadzībām.
              </p>
            </motion.div>

            {/* 3 elegant cards */}
            <div className="grid sm:grid-cols-3 gap-5">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="bg-[#faf8f4] border border-foreground/[0.06] rounded-sm p-6 group hover:shadow-md hover:-translate-y-0.5 transition-all duration-500"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
                >
                  <div className="text-foreground/40 mb-4 group-hover:text-foreground/60 transition-colors duration-300">
                    {p.icon}
                  </div>
                  <h3 className="font-heading text-[14px] md:text-[15px] font-semibold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-foreground/40 font-body text-[12px] leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="w-6 h-[1px] bg-[#c9a84c]/30 mt-4" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>


      </div>
    </motion.section>
  );
}