import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';
import { BookOpen, TrendingUp, BarChart3, GraduationCap, FileText, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: "Grāmatvedība",
    description: "Pilna spektra grāmatvedības uzskaite — no primāriem dokumentiem līdz gada pārskatam.",
    gradient: "from-purple-500/10 to-purple-500/5",
    iconColor: "text-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Finanšu konsultācijas",
    description: "Individuālas konsultācijas par Jūsu uzņēmuma finanšu jautājumiem un iespējām.",
    gradient: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: BarChart3,
    title: "Finanšu analītika",
    description: "Detalizēta finanšu analīze, kas palīdz pieņemt gudrus biznesa lēmumus.",
    gradient: "from-teal-500/10 to-teal-500/5",
    iconColor: "text-teal-500",
  },
  {
    icon: GraduationCap,
    title: "Apmācības",
    description: "Grāmatvedības un finanšu apmācības, lai Jūs saprastu savus skaitļus.",
    gradient: "from-green-500/10 to-green-500/5",
    iconColor: "text-green-500",
  },
  {
    icon: FileText,
    title: "Dokumentu sagatavošana",
    description: "Profesionāla dokumentu noformēšana un sagatavošana iestādēm.",
    gradient: "from-amber-500/10 to-amber-500/5",
    iconColor: "text-amber-500",
  },
  {
    icon: HeartHandshake,
    title: "Atbalsts uzņēmumiem",
    description: "Nepārtraukts atbalsts un padoms — esam klāt, kad Jums tas ir vajadzīgs.",
    gradient: "from-orange-500/10 to-orange-500/5",
    iconColor: "text-orange-500",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="pakalpojumi" className="bg-gradient-to-b from-transparent via-purple-50/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            className="text-sm tracking-widest uppercase text-muted-foreground font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pakalpojumi
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ko mēs <span className="gradient-text italic">piedāvājam</span>
          </motion.h2>
          <div className="flex justify-center">
            <InkLine className="max-w-[120px]" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl p-8 glass-card hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}