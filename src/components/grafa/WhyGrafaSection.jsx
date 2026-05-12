import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';
import FeatherSVG from './FeatherSVG';

const reasons = [
  {
    title: "Individuāla pieeja",
    text: "Mēs nestrādājam ar veidnēm. Katrs klients saņem tieši to, kas viņam ir vajadzīgs.",
  },
  {
    title: "Elastīgs darba laiks",
    text: "Tiekamies Jums ērtā laikā un vietā — Jūsu komfortam nav robežu.",
  },
  {
    title: "Cilvēcīga komunikācija",
    text: "Runājam vienkārši par sarežģītām lietām. Nekādu birokrātisku žargonu.",
  },
  {
    title: "Uzticamas attiecības",
    text: "Ilgtermiņa sadarbība, kas balstīta uz savstarpēju cieņu un sapratni.",
  },
];

export default function WhyGrafaSection() {
  return (
    <SectionWrapper id="kapec">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - visual */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background pyramid */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="pyramidFill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7B4FA2" stopOpacity="0.08" />
                    <stop offset="33%" stopColor="#3B82C4" stopOpacity="0.06" />
                    <stop offset="66%" stopColor="#2BA8A4" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#F0C040" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <polygon 
                  points="200,40 360,340 40,340" 
                  fill="url(#pyramidFill)" 
                  stroke="url(#pyramidGrad2)" 
                  strokeWidth="1"
                />
                <defs>
                  <linearGradient id="pyramidGrad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7B4FA2" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#2BA8A4" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#F0C040" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Feather overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FeatherSVG className="w-3/5 h-3/5 feather-sway opacity-30" />
              </div>

              {/* Floating glow orbs */}
              <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-purple-300/20 blur-2xl float-gradient" />
              <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full bg-teal-300/20 blur-2xl float-gradient" style={{ animationDelay: '-4s' }} />
              <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-amber-300/15 blur-2xl float-gradient" style={{ animationDelay: '-2s' }} />
            </div>
          </motion.div>

          {/* Right - content */}
          <div className="order-1 md:order-2">
            <motion.span
              className="text-sm tracking-widest uppercase text-muted-foreground font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Kāpēc izvēlēties mūs
            </motion.span>
            <motion.h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Pieredze, kas{' '}
              <span className="gradient-text italic">iedvesmo uzticēties</span>
            </motion.h2>
            <InkLine className="mb-10 max-w-[120px]" />

            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div className="mt-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-teal-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-lg font-semibold mb-1">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}