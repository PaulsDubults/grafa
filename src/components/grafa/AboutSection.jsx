import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';

export default function AboutSection() {
  return (
    <SectionWrapper id="par-mums">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <motion.span
              className="text-sm tracking-widest uppercase text-muted-foreground font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Par mums
            </motion.span>
            <motion.h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Mazs uzņēmums ar{' '}
              <span className="gradient-text italic">lielu sirdi</span>
            </motion.h2>
            
            <InkLine className="mb-8 max-w-[120px]" />

            <motion.div
              className="space-y-5 text-foreground/70 font-body text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>
                <span className="font-heading italic text-foreground text-lg">SIA firma GRĀFA</span> — Jelgavā bāzēts 
                grāmatvedības uzņēmums, kas nodrošina ārpakalpojumus ar personisku pieeju katram klientam.
              </p>
              <p>
                Tā kā esam mazs uzņēmums, katrs klients ir gan mūsu <span className="text-foreground font-medium">sadarbības partneris</span>, 
                gan <span className="text-foreground font-medium">draugs</span>, ar kuru varam tikties viņam ērtā laikā un vietā.
              </p>
              <p>
                Ja esat SIA, pašnodarbinātais, biedrība, individuālais komersants vai zemnieku saimniecība — 
                ar prieku palīdzēsim sakārtot Jūsu grāmatvedību.
              </p>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden p-10 md:p-14">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-teal-50/50 to-amber-50/30 rounded-3xl" />
              <div className="absolute top-8 right-8 w-40 h-40 rounded-full bg-gradient-to-br from-purple-200/30 to-teal-200/20 blur-2xl" />
              <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-amber-200/25 to-green-200/15 blur-2xl" />
              
              {/* Content */}
              <div className="relative space-y-8">
                {[
                  { num: "01", title: "Personiska pieeja", desc: "Katrs klients ir individuāls" },
                  { num: "02", title: "Elastīga komunikācija", desc: "Tikšanās Jums ērtā laikā un vietā" },
                  { num: "03", title: "Uzticamas attiecības", desc: "Sadarbība balstīta uz cieņu un sapratni" },
                ].map((item, i) => (
                  <motion.div
                    key={item.num}
                    className="flex items-start gap-5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                  >
                    <span className="font-heading text-2xl gradient-text font-semibold">{item.num}</span>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-body mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}