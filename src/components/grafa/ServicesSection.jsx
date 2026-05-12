import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User, Users, Briefcase, Tractor, TrendingUp, GraduationCap } from 'lucide-react';

const services = [
  { icon: BookOpen, label: "Grāmatvedība\nSIA" },
  { icon: User, label: "Grāmatvedība\npašnodarbinātajiem" },
  { icon: Users, label: "Grāmatvedība\nbiedrībām" },
  { icon: Briefcase, label: "Grāmatvedība\nindividuālajiem\nkomersantiem" },
  { icon: Tractor, label: "Grāmatvedība\nzemnieku\nsaimniecībām" },
  { icon: TrendingUp, label: "Finanšu\nkonsultācijas un\nanalītika" },
  { icon: GraduationCap, label: "Apmācības" },
];

export default function ServicesSection() {
  return (
    <motion.section
      id="pakalpojumi"
      className="py-20 md:py-28 px-6 md:px-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with line */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">Pakalpojumi</h2>
          <div className="w-full h-[1px] bg-foreground/10" />
        </div>

        {/* Horizontal service items */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 md:gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-foreground/[0.07] flex items-center justify-center mb-3 group-hover:border-foreground/15 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-foreground/30 group-hover:text-foreground/50 transition-colors duration-300" strokeWidth={1.2} />
              </div>
              <p className="text-[11px] md:text-[12px] font-body text-foreground/45 leading-snug whitespace-pre-line">
                {service.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}