import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';

export default function ApproachSection() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-transparent via-teal-50/15 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="text-sm tracking-widest uppercase text-muted-foreground font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Mūsu pieeja
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Klients ir <span className="gradient-text italic">cilvēks</span>,<br />
            nevis skaitlis sistēmā
          </motion.h2>
          <div className="flex justify-center mb-10">
            <InkLine className="max-w-[120px]" />
          </div>
          <motion.p
            className="text-lg text-muted-foreground font-body leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Mēs ticam, ka laba grāmatvedība sākas ar labām attiecībām. 
            Tāpēc katru sadarbību veidojam kā partnerību — ar atklātu komunikāciju, 
            savstarpēju cieņu un rūpēm par Jūsu biznesa izaugsmi.
          </motion.p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              emoji: "🤝",
              title: "Sadarbība",
              text: "Katrs klients ir partneris un draugs — ne tikai numurs datubāzē.",
            },
            {
              emoji: "💜",
              title: "Harmonija",
              text: "Mēs radām līdzsvaru starp precizitāti un cilvēcīgu pieeju.",
            },
            {
              emoji: "✨",
              title: "Izaugsme",
              text: "Jūsu panākumi ir mūsu panākumi. Augam kopā.",
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="text-center p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <span className="text-4xl mb-4 block">{pillar.emoji}</span>
              <h3 className="font-heading text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}