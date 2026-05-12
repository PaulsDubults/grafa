import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';

const testimonials = [
  {
    quote: "Liene ir ne tikai lieliska grāmatvede, bet arī cilvēks, kuram var uzticēties. Vienmēr pretimnākoša un profesionāla.",
    author: "Inga K.",
    role: "SIA īpašniece",
  },
  {
    quote: "Beidzot atradu grāmatvedi, kas runā saprotamā valodā un vienmēr ir sasniedzama. Iesaku visiem!",
    author: "Māris B.",
    role: "Individuālais komersants",
  },
  {
    quote: "Personiska pieeja un elastīgs darba laiks — tieši tas, kas mazam uzņēmumam ir vajadzīgs.",
    author: "Anita L.",
    role: "Biedrības vadītāja",
  },
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper id="atsauksmes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            className="text-sm tracking-widest uppercase text-muted-foreground font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Atsauksmes
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ko saka mūsu{' '}
            <span className="gradient-text italic">klienti</span>
          </motion.h2>
          <div className="flex justify-center">
            <InkLine className="max-w-[120px]" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="relative glass-card rounded-2xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-500"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              {/* Quote mark */}
              <div className="absolute -top-3 left-6">
                <span className="font-heading text-5xl gradient-text opacity-30">"</span>
              </div>
              <p className="text-foreground/80 font-body leading-relaxed italic mb-6 pt-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-300/40 to-teal-300/40 flex items-center justify-center">
                  <span className="font-heading font-semibold text-sm text-foreground/70">
                    {t.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}