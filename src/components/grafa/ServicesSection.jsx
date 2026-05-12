import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';

const services = [
  { title: "Grāmatvedība SIA", desc: "Pilna apjoma grāmatvedības uzskaite sabiedrībām ar ierobežotu atbildību." },
  { title: "Pašnodarbinātajiem", desc: "Grāmatvedības pakalpojumi pašnodarbinātām personām." },
  { title: "Biedrībām", desc: "Grāmatvedības kārtošana biedrībām un nodibinājumiem." },
  { title: "Individuālajiem komersantiem", desc: "Uzskaite un atskaites individuālajiem komersantiem." },
  { title: "Zemnieku saimniecībām", desc: "Grāmatvedības pakalpojumi lauksaimniecības uzņēmumiem." },
  { title: "Finanšu konsultācijas", desc: "Individuālas konsultācijas un finanšu analītika." },
  { title: "Apmācības", desc: "Grāmatvedības un finanšu pamatu apmācības." },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="pakalpojumi" className="bg-foreground/[0.015]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.p
            className="text-[12px] tracking-[0.2em] uppercase text-foreground/30 font-body mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pakalpojumi
          </motion.p>
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-medium leading-tight mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ko mēs <span className="italic text-foreground/60">piedāvājam</span>
          </motion.h2>
          <InkLine className="w-12" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-7 rounded-2xl border border-foreground/[0.06] bg-card hover:border-foreground/[0.12] transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <h3 className="font-heading text-base font-semibold mb-2.5 group-hover:text-foreground/90 transition-colors">
                {service.title}
              </h3>
              <p className="text-[13px] text-foreground/40 leading-relaxed font-body">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}