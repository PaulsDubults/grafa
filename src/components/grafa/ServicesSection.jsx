import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    label: "Grāmatvedība\nSIA",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <line x1="12" y1="15" x2="28" y2="15" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
        <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
        <line x1="12" y1="25" x2="22" y2="25" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
        <rect x="10" y="4" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "Grāmatvedība\npašnodarbinātajiem",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <path d="M8,34 C8,26 13,22 20,22 C27,22 32,26 32,34" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "Grāmatvedība\nbiedrībām",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="0.9" opacity="0.3" />
        <circle cx="26" cy="14" r="5" stroke="currentColor" strokeWidth="0.9" opacity="0.3" />
        <path d="M4,34 C4,27 8,24 14,24 C17,24 19,25 20,26" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
        <path d="M36,34 C36,27 32,24 26,24 C23,24 21,25 20,26" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
      </svg>
    ),
  },
  {
    label: "Grāmatvedība\nindividuālajiem\nkomersantiem",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="10" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <path d="M14,10 L14,6 L26,6 L26,10" stroke="currentColor" strokeWidth="0.9" opacity="0.3" />
        <line x1="8" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="0.7" opacity="0.2" />
        <circle cx="20" cy="22" r="2" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
      </svg>
    ),
  },
  {
    label: "Grāmatvedība\nzemnieku\nsaimniecībām",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M6,32 L20,10 L34,32 Z" stroke="currentColor" strokeWidth="0.9" opacity="0.3" fill="none" />
        <path d="M14,32 L14,24 L20,20 L26,24 L26,32" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
        <line x1="20" y1="32" x2="20" y2="24" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      </svg>
    ),
  },
  {
    label: "Finanšu\nkonsultācijas un\nanalītika",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <polyline points="6,32 14,22 22,26 30,14 36,10" stroke="currentColor" strokeWidth="1" opacity="0.35" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="10" r="2" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
        <line x1="6" y1="36" x2="36" y2="36" stroke="currentColor" strokeWidth="0.6" opacity="0.15" />
      </svg>
    ),
  },
  {
    label: "Apmācības",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M4,18 L20,10 L36,18 L20,26 Z" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
        <path d="M10,22 L10,30 C10,30 15,34 20,34 C25,34 30,30 30,30 L30,22" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
        <line x1="36" y1="18" x2="36" y2="32" stroke="currentColor" strokeWidth="0.7" opacity="0.2" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      id="pakalpojumi"
      className="py-16 md:py-24 px-6 md:px-10"
      style={{ background: '#f8f5f0' }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h2 className="font-heading text-[22px] md:text-[26px] font-semibold mb-2">Pakalpojumi</h2>
          <div className="w-full h-[1px] bg-foreground/10" />
        </div>

        {/* Services row */}
        <div className="flex flex-wrap justify-between gap-y-8">
          {services.map((service, i) => (
            <React.Fragment key={service.label}>
              <motion.div
                className="flex flex-col items-center text-center w-[calc(33%-12px)] sm:w-[calc(25%-12px)] md:w-auto md:flex-1 group"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="mb-3 text-foreground/40 group-hover:text-foreground/60 transition-colors duration-300">
                  {service.icon}
                </div>
                <p className="text-[11px] md:text-[12px] font-body text-foreground/45 leading-snug whitespace-pre-line">
                  {service.label}
                </p>
              </motion.div>
              {/* Vertical separator — not after last */}
              {i < services.length - 1 && (
                <div className="hidden md:block w-[1px] bg-foreground/[0.06] self-stretch mx-1" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
}