import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';

const values = [
  {
    title: "Vairāk kā 20 gadu pieredze",
    desc: "Ilggadēja pieredze grāmatveža un finanšu analītiķa profesijā.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <path d="M22,6 L26,16 L38,17 L29,25 L31,37 L22,31 L13,37 L15,25 L6,17 L18,16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Pilna atbildība",
    desc: "Uzņemamies pilnu risku par grāmatvedības procesu organizāciju un izpildi.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <path d="M22,4 L38,12 L38,24 C38,32 30,38 22,42 C14,38 6,32 6,24 L6,12 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M16,22 L20,26 L28,18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Konkurētspējīgas cenas",
    desc: "Uz darba procesu optimizāciju balstītas konkurētspējīgas pakalpojumu cenas.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <circle cx="22" cy="22" r="15" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M22,12 L22,32 M17,16 L27,16 C29,16 30,18 29,20 C28,22 17,22 17,22 C17,22 28,22 29,24 C30,26 29,28 27,28 L17,28" stroke="currentColor" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    title: "Individuāla pieeja",
    desc: "Katram klientam piemērots risinājums un personīga komunikācija.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <circle cx="22" cy="16" r="7" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M10,38 C10,30 15,26 22,26 C29,26 34,30 34,38" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Licencēta programmatūra",
    desc: "Datu apstrāde un uzglabāšana licencētā grāmatvedības programmā.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <rect x="8" y="10" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <line x1="8" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
        <path d="M19,20 L21,22 L25,18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Komunikācija divās valodās",
    desc: "Komunikācija latviešu un krievu valodā — gan sarunā, gan rakstiski.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <path d="M6,32 Q6,18 22,18 Q38,18 38,32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <circle cx="15" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="22" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="29" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
];

export default function WhyGrafaSection() {
  return (
    <motion.section
      id="kapec-grafu"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#f5f0e8' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="approach" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            Priekšrocības
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-[#1e3a5f]">
            Kāpēc izvēlas GRĀFU
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />
          <p className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[17px] leading-[1.8] max-w-3xl mx-auto">
            Mēs piedāvājam ne tikai grāmatvedības pakalpojumus, bet arī uzticamu partnerību, 
            kas balstīta uz pieredzi, precizitāti un individuālu pieeju.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              className="group bg-white/60 backdrop-blur-sm p-7 md:p-8 border border-[#e8e0d4]/40 hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(30,58,95,0.08)] rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="text-[#c9a84c] mb-5 group-hover:text-[#1e3a5f] transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="font-heading text-[16px] md:text-[17px] font-semibold text-[#1e3a5f] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-[#1e3a5f]/50 font-body text-[13px] md:text-[14px] leading-[1.75]">
                {item.desc}
              </p>
              <div className="w-0 group-hover:w-10 h-[1.5px] mt-5 transition-all duration-700" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}