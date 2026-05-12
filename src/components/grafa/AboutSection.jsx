import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';

export default function AboutSection() {
  return (
    <SectionWrapper id="par-mums">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <div>
            <motion.p
              className="text-[12px] tracking-[0.2em] uppercase text-foreground/30 font-body mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Par mums
            </motion.p>
            <motion.h2
              className="font-heading text-3xl md:text-4xl font-medium leading-tight mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Mazs uzņēmums
              <br />
              <span className="italic text-foreground/60">ar lielu rūpību</span>
            </motion.h2>
            <InkLine className="mb-8 w-12" />
          </div>

          {/* Right */}
          <motion.div
            className="space-y-6 text-foreground/55 font-body text-[15px] leading-[1.8]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              <span className="font-heading italic text-foreground/80 text-base">SIA firma GRĀFA</span> ir 
              grāmatvedības ārpakalpojumu uzņēmums Jelgavā, kur īpaši svarīga ir individuāla pieeja 
              katram klientam.
            </p>
            <p>
              Mēs esam mazs uzņēmums, tāpēc katrs klients mums ir ne tikai sadarbības partneris, 
              bet arī cilvēks, ar kuru veidojam uzticamu un ilgtermiņa sadarbību.
            </p>
            <p className="text-foreground/45">
              Ar klientiem varam tikties viņiem ērtā laikā un vietā.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}