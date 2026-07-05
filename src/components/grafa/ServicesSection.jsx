import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import WatercolorBackground from './WatercolorBackground';
import PyramidDecoration from './PyramidDecoration';
import GoldLine from './GoldLine';

const services = [
  {
    title: "Finanšu rādītāju analīze",
    desc: "Regulāra Jūsu uzņēmuma finanšu rādītāju analīze.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <polyline points="7,36 15,24 23,28 32,16 38,12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="38" cy="12" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <line x1="7" y1="40" x2="38" y2="40" stroke="currentColor" strokeWidth="0.7" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Licencēta grāmatvedības programma",
    desc: "Datu apstrāde un uzglabāšana licencētā grāmatvedības programmā, kas nodrošina aizsargātu datu glabāšanu un regulāru rezerves kopiju veidošanu, kā arī Jums kā klientam iespēju pieslēgties un sekot procesu norisei.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <rect x="8" y="10" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <line x1="8" y1="28" x2="36" y2="28" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
        <rect x="18" y="32" width="8" height="3" rx="1" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        <path d="M19,20 L21,22 L25,18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Pārskatu iesniegšana",
    desc: "Savlaicīga pārskatu iesniegšana VID un vajadzības gadījumā dažādās citās institūcijās — investoriem, bankām un tml.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <rect x="9" y="6" width="26" height="32" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M15,14 L29,14 M15,20 L29,20 M15,26 L23,26" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
        <path d="M28,28 L32,32 L36,24" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Dokumentu izstrāde",
    desc: "Grāmatvedībai saistošo dokumentu izstrāde un savlaicīga aktualizācija.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <path d="M12,6 L32,6 L32,38 L12,38 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M17,14 L27,14 M17,20 L27,20 M17,26 L22,26" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
        <path d="M8,10 L12,6 M8,10 L8,34 L12,38" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Pilna atbildība",
    desc: "Uzņemamies pilnu risku par grāmatvedības procesu organizāciju un izpildi atbilstoši Jūsu uzņēmuma saistošajai likumdošanai.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <path d="M22,4 L38,12 L38,24 C38,32 30,38 22,42 C14,38 6,32 6,24 L6,12 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M16,22 L20,26 L28,18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Bezmaksas konsultācijas",
    desc: "Slēdzot beztermiņa līgumu, tiek nodrošinātas bezmaksas konsultācijas visā sadarbības laikā.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <path d="M8,30 C8,18 14,12 22,12 C30,12 36,18 36,30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <circle cx="15" cy="24" r="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="22" cy="24" r="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="29" cy="24" r="1.5" fill="currentColor" opacity="0.4"/>
        <path d="M18,36 L26,36" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      id="pakalpojumi"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="services" />
      
      {/* Decorative pyramid */}
      <PyramidDecoration className="absolute -left-10 bottom-20 w-[180px] h-[220px] hidden lg:block" opacity={0.04} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            Ko mēs piedāvājam
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-[#1e3a5f]">
            Pakalpojumi
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />
          <p className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[17px] leading-[1.8] max-w-3xl mx-auto">
            Sniedzam grāmatvedības pakalpojumus dažādām uzņēmējdarbības formām, saglabājot 
            individuālu un saprotamu pieeju katram klientam.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}