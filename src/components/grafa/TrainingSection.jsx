import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';

export default function TrainingSection() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-transparent via-amber-50/15 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.span
            className="text-sm tracking-widest uppercase text-muted-foreground font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Apmācības
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Zināšanas, kas{' '}
            <span className="gradient-text italic">dod spēku</span>
          </motion.h2>
          <div className="flex justify-center mb-6">
            <InkLine className="max-w-[120px]" />
          </div>
          <motion.p
            className="text-muted-foreground font-body leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Piedāvājam grāmatvedības un finanšu apmācības, lai Jūs varētu labāk izprast 
            sava biznesa finanšu pusi un pieņemt pārdomātus lēmumus.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Grāmatvedības pamati", desc: "Izpratne par uzskaiti un dokumentiem", icon: "📘" },
            { title: "Nodokļu sistēma", desc: "Kā darbojas nodokļi un kā tos optimizēt", icon: "📗" },
            { title: "Finanšu plānošana", desc: "Budžets, prognozes un naudas plūsma", icon: "📙" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-2xl p-7 text-center hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}