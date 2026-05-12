import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';

export default function FinanceSection() {
  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              className="text-sm tracking-widest uppercase text-muted-foreground font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Finanses & Konsultācijas
            </motion.span>
            <motion.h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Finanšu <span className="gradient-text italic">skaidrība</span><br />
              Jūsu biznesam
            </motion.h2>
            <InkLine className="mb-8 max-w-[120px]" />
            <motion.div
              className="space-y-5 text-foreground/70 font-body text-base leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>
                Finanšu konsultācijas ir vairāk nekā skaitļi — tās ir par Jūsu biznesa nākotni. 
                Mēs palīdzam izprast finanšu plūsmu, plānot izdevumus un pieņemt apzinātus lēmumus.
              </p>
              <p>
                Individuālas konsultācijas pieejamas gan klātienē Jelgavā, gan attālināti — 
                Jums ērtā laikā un formātā.
              </p>
            </motion.div>
          </div>

          {/* Right side visual card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-200/20 via-teal-200/10 to-transparent blur-2xl" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-amber-200/20 to-transparent blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/50">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <span className="text-purple-500 text-lg">📊</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">Finanšu analīze</h4>
                    <p className="text-xs text-muted-foreground">Detalizēts biznesa pārskats</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/50">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <span className="text-teal-500 text-lg">💡</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">Stratēģiskas konsultācijas</h4>
                    <p className="text-xs text-muted-foreground">Personalizēti ieteikumi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/50">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-500 text-lg">📋</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">Nodokļu plānošana</h4>
                    <p className="text-xs text-muted-foreground">Optimāls risinājums</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}