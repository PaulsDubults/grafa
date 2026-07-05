import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WatercolorBackground from './WatercolorBackground';
import PyramidDecoration from './PyramidDecoration';
import GoldLine from './GoldLine';

const mainServices = [
  {
    title: "Grāmatvedība",
    desc: "Pilna grāmatvedības uzskaite un pārskatu sagatavošana uzņēmumiem un pašnodarbinātajiem.",
    path: "/pakalpojumi/gramatvediba",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
        <rect x="10" y="8" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M17,18 L31,18 M17,24 L31,24 M17,30 L25,30" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
        <path d="M30,32 L34,36 L38,28" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6,12 L10,8 M6,12 L6,40 L10,44" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Finanses",
    desc: "Finanšu analīze, plānošana un individuālu metodiku izstrāde biznesa izaugsmei.",
    path: "/pakalpojumi/finanses",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
        <polyline points="8,44 18,30 28,34 38,20 48,14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="48" cy="14" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
        <line x1="8" y1="48" x2="48" y2="48" stroke="currentColor" strokeWidth="0.7" opacity="0.4"/>
        <line x1="8" y1="10" x2="8" y2="48" stroke="currentColor" strokeWidth="0.7" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Apmācības",
    desc: "Praktiskas apmācības un semināri uzņēmumu darbiniekiem un vadītājiem.",
    path: "/pakalpojumi/apmacibas",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
        <path d="M8,20 L28,10 L48,20 L28,30 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M16,24 L16,38 C16,42 22,46 28,46 C34,46 40,42 40,38 L40,24" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <line x1="48" y1="20" x2="48" y2="42" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
        <circle cx="48" cy="44" r="2" stroke="currentColor" strokeWidth="0.7" opacity="0.5" fill="none"/>
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

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
            >
              <Link
                to={service.path}
                className="block bg-white rounded-sm p-8 md:p-10 cursor-pointer shadow-[0_2px_12px_rgba(30,58,95,0.06)] hover:shadow-[0_12px_40px_rgba(30,58,95,0.14)] hover:-translate-y-2 transition-all duration-500 border border-[#e8e0d4]/50 hover:border-[#c9a84c]/30 group h-full"
              >
                <div className="text-[#1e3a5f]/50 mb-6 group-hover:text-[#1e3a5f] transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="font-heading text-[20px] md:text-[22px] font-semibold mb-3 leading-snug text-[#1e3a5f]">
                  {service.title}
                </h3>
                <p className="text-[#1e3a5f]/50 font-body text-[13px] md:text-[14px] leading-[1.85] mb-6">
                  {service.desc}
                </p>
                <div className="w-10 h-[1.5px] transition-all duration-600 group-hover:w-16" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)' }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}