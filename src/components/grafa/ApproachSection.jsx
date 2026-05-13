import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import ApproachCard from './ApproachCard';

const points = [
  {
    title: "Kvalitāte un atbilstība",
    desc: "Kvalitatīvi, jaunākajai likumdošanai un grāmatvedības standartiem atbilstoši pakalpojumi.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <path d="M22,6 L26,16 L38,17 L29,25 L31,37 L22,31 L13,37 L15,25 L6,17 L18,16 Z" stroke="currentColor" strokeWidth="1.3" opacity="0.65" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Konkurētspējīgas cenas",
    desc: "Uz darba procesu optimizāciju balstītas konkurētspējīgas pakalpojumu cenas.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.3" opacity="0.65"/>
        <path d="M22,12 L22,32 M18,16 L26,16 C28,16 29,18 28,20 C27,22 18,22 18,22 C18,22 27,22 28,24 C29,26 28,28 26,28 L18,28" stroke="currentColor" strokeWidth="1.2" opacity="0.55"/>
      </svg>
    ),
  },
  {
    title: "Ērta dokumentu iesniegšana",
    desc: "Jums ērtu dokumentu iesniegšanas veidu — esam gatavi tos regulāri saņemt Jūsu birojā vai arī esat laipni gaidīti pie mums.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <rect x="8" y="6" width="28" height="32" rx="2" stroke="currentColor" strokeWidth="1.3" opacity="0.65"/>
        <path d="M14,14 L30,14 M14,20 L30,20 M14,26 L24,26" stroke="currentColor" strokeWidth="1" opacity="0.45"/>
        <path d="M26,30 L32,24 L38,30" stroke="currentColor" strokeWidth="1.2" opacity="0.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Papīra un e-dokumenti",
    desc: "Darbs gan ar papīra, gan ar elektroniskajiem dokumentiem.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <rect x="6" y="8" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="1.3" opacity="0.65"/>
        <rect x="18" y="12" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <path d="M12,16 L20,16 M12,21 L20,21 M12,26 L18,26" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Komunikācija divās valodās",
    desc: "Komunikācija latviešu un krievu valodā — gan sarunā, gan rakstiski.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <path d="M6,32 Q6,18 22,18 Q38,18 38,32" stroke="currentColor" strokeWidth="1.3" opacity="0.65" strokeLinecap="round"/>
        <circle cx="15" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="22" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="29" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
        <path d="M10,12 Q22,5 34,12" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Konsultācijas Jums ērtā laikā",
    desc: "Iespēja konsultēties Jums aktuālos jautājumos gan klātienē, gan attālināti — Jums ērtā laikā un vietā.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.3" opacity="0.65"/>
        <path d="M22,12 L22,22 L30,26" stroke="currentColor" strokeWidth="1.3" opacity="0.55" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ApproachSection() {
  return (
    <motion.section
      id="pieeja"
      className="relative min-h-[70vh] md:min-h-[80vh] py-20 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="approach" />

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
          <p className="text-foreground/60 font-body text-[15px] md:text-[17px] leading-[1.9] max-w-3xl">
            Mēs esam Jelgavā strādājošs grāmatvedības ārpakalpojumu uzņēmums. Mūsu pakalpojumu 
            kvalitāte balstīta uz zināšanām un vairāk kā 20 gadu pieredzi grāmatveža un finanšu 
            analītiķa profesijā.
          </p>
        </motion.div>

        <motion.p
          className="text-foreground/45 font-body text-[14px] md:text-[15px] leading-[1.8] mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Piedāvājam:
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {points.map((p, i) => (
            <ApproachCard key={p.title} point={p} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}