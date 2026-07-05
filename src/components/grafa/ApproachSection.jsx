import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import ApproachCard from './ApproachCard';
import FeatherDecoration from './FeatherDecoration';
import GoldLine from './GoldLine';

const points = [
  {
    title: "Kvalitāte un atbilstība",
    desc: "Kvalitatīvi, jaunākajai likumdošanai un grāmatvedības standartiem atbilstoši pakalpojumi.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <path d="M22,6 L26,16 L38,17 L29,25 L31,37 L22,31 L13,37 L15,25 L6,17 L18,16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
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
    title: "Ērta dokumentu iesniegšana",
    desc: "Jums ērtu dokumentu iesniegšanas veidu — esam gatavi tos regulāri saņemt Jūsu birojā vai arī esat laipni gaidīti pie mums.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <rect x="10" y="6" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M16,14 L28,14 M16,20 L28,20 M16,26 L22,26" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: "Papīra un e-dokumenti",
    desc: "Darbs gan ar papīra, gan ar elektroniskajiem dokumentiem.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <rect x="6" y="8" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <rect x="18" y="12" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.1" fill="none"/>
        <path d="M12,16 L20,16 M12,21 L20,21" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
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
  {
    title: "Konsultācijas Jums ērtā laikā",
    desc: "Iespēja konsultēties Jums aktuālos jautājumos gan klātienē, gan attālināti — Jums ērtā laikā un vietā.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <circle cx="22" cy="22" r="15" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M22,12 L22,22 L30,26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
];

export default function ApproachSection() {
  return (
    <motion.section
      id="pieeja"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#f5f0e8' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="approach" />
      
      {/* Decorative feather */}
      <FeatherDecoration className="absolute -right-10 top-20 w-[150px] h-[400px] hidden lg:block" opacity={0.05} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            Par mums
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 leading-tight text-[#1e3a5f]">
            Individuāla pieeja
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />
          <p className="text-[#1e3a5f]/55 font-body text-[15px] md:text-[17px] leading-[1.9] max-w-3xl mx-auto">
            Mēs esam Jelgavā strādājošs grāmatvedības ārpakalpojumu uzņēmums. Mūsu pakalpojumu 
            kvalitāte balstīta uz zināšanām un vairāk kā 20 gadu pieredzi grāmatveža un finanšu 
            analītiķa profesijā.
          </p>
        </motion.div>

        <motion.p
          className="text-[#1e3a5f]/40 font-body text-[14px] md:text-[15px] leading-[1.8] mb-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Piedāvājam:
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {points.map((p, i) => (
            <ApproachCard key={p.title} point={p} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}