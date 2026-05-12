import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';
import FeatherSVG from './FeatherSVG';

export default function ApproachSection() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text */}
          <div>
            <motion.p
              className="text-[12px] tracking-[0.2em] uppercase text-foreground/30 font-body mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Individuāla pieeja
            </motion.p>
            <motion.h2
              className="font-heading text-3xl md:text-4xl font-medium leading-tight mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Individuāla pieeja
              <br />
              <span className="italic text-foreground/60">katram klientam</span>
            </motion.h2>
            <InkLine className="mb-8 w-12" />
            <motion.p
              className="text-foreground/50 font-body text-[15px] leading-[1.8] mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ilgtermiņa sadarbībā svarīga ir uzticēšanās, sapratne un pieejamība. 
              Tāpēc klientiem nodrošinām ne tikai grāmatvedības pakalpojumus, 
              bet arī cilvēcīgu komunikāciju un atbalstu ikdienas jautājumos.
            </motion.p>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                "Personiska pieeja katram klientam",
                "Tikšanās Jums ērtā laikā un vietā",
                "Vienkārša un saprotama komunikācija",
                "Ilgtermiņa uzticamas attiecības",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-1 h-1 rounded-full bg-foreground/25 flex-shrink-0" />
                  <p className="text-sm text-foreground/45 font-body">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Feather visual */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="text-foreground/[0.07] feather-sway">
              <FeatherSVG className="h-[50vh] md:h-[55vh] w-auto" />
            </div>
            {/* Very subtle pyramid behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <polygon 
                  points="100,15 185,175 15,175" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.6"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}