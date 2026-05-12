import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const HORIZONTAL_FEATHER = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/1d1cf7e68_image.png";

const services = [
  {
    title: "Grāmatvedība SIA",
    desc: "Pilna grāmatvedības uzskaite uzņēmumiem, ikdienas dokumentu apstrāde un atskaišu sagatavošana.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <rect x="7" y="9" width="30" height="26" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        <line x1="13" y1="17" x2="31" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="13" y1="22" x2="31" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="13" y1="27" x2="24" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <rect x="11" y="5" width="22" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Grāmatvedība pašnodarbinātajiem",
    desc: "Saprotams un praktisks atbalsts pašnodarbinātām personām grāmatvedības jautājumos.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <circle cx="22" cy="15" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        <path d="M10,38 C10,28 15,24 22,24 C29,24 34,28 34,38" stroke="currentColor" strokeWidth="1.4" opacity="0.65" />
      </svg>
    ),
  },
  {
    title: "Grāmatvedība biedrībām",
    desc: "Grāmatvedības risinājumi biedrībām, pielāgojoties to darbības specifikai.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="1.3" opacity="0.65" />
        <circle cx="29" cy="15" r="5" stroke="currentColor" strokeWidth="1.3" opacity="0.65" />
        <path d="M5,38 C5,29 9,26 15,26 C18,26 20,27 22,28" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <path d="M39,38 C39,29 35,26 29,26 C26,26 24,27 22,28" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Grāmatvedība individuālajiem komersantiem",
    desc: "Atbalsts individuālajiem komersantiem ikdienas uzskaitē un finanšu sakārtošanā.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <rect x="9" y="12" width="26" height="24" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        <path d="M15,12 L15,7 L29,7 L29,12" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
        <line x1="9" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        <circle cx="22" cy="25" r="2.5" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Grāmatvedība zemnieku saimniecībām",
    desc: "Grāmatvedības pakalpojumi zemnieku saimniecībām ar izpratni par nozares vajadzībām.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <path d="M7,36 L22,12 L37,36 Z" stroke="currentColor" strokeWidth="1.3" opacity="0.65" fill="none" />
        <path d="M15,36 L15,27 L22,22 L29,27 L29,36" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <line x1="22" y1="36" x2="22" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      </svg>
    ),
  },
  {
    title: "Finanšu konsultācijas un analītika",
    desc: "Konsultācijas un finanšu analītika projektu un uzņēmuma attīstības vajadzībām.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <polyline points="7,36 15,24 23,28 32,16 38,12" stroke="currentColor" strokeWidth="1.4" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <line x1="7" y1="40" x2="38" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      </svg>
    ),
  },
  {
    title: "Apmācības",
    desc: "Praktiskas apmācības un skaidrojumi finanšu un grāmatvedības jautājumos.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <path d="M5,20 L22,12 L39,20 L22,28 Z" stroke="currentColor" strokeWidth="1.3" opacity="0.7" />
        <path d="M11,24 L11,33 C11,33 16,37 22,37 C28,37 33,33 33,33 L33,24" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <line x1="39" y1="20" x2="39" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      id="pakalpojumi"
      className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: '#f8f5f0' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      {/* Background feather — large, blended with section */}
      <img
        src={HORIZONTAL_FEATHER}
        alt=""
        className="absolute bottom-[5%] right-[-10%] w-[200%] md:w-[140%] lg:w-[110%] h-auto object-contain opacity-[0.95] pointer-events-none select-none rotate-[45deg] origin-center"
        style={{ mixBlendMode: 'multiply' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[42px] font-semibold mb-4">
            Pakalpojumi
          </h2>
          <div className="w-12 h-[1.5px] bg-[#c9a84c]/50 mb-6" />
          <p className="text-foreground/50 font-body text-[15px] md:text-[16px] leading-[1.8] max-w-2xl">
            Sniedzam grāmatvedības pakalpojumus dažādām uzņēmējdarbības formām, saglabājot 
            individuālu un saprotamu pieeju katram klientam.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>


      </div>
    </motion.section>
  );
}