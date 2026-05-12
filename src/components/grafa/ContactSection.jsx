import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <motion.section
      id="kontakti"
      className="py-20 md:py-28 px-6 md:px-10 bg-foreground/[0.015]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
          {/* Left */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">Saziņa</h2>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-foreground/25" strokeWidth={1.5} />
                <a href="tel:+37120383974" className="text-sm font-body text-foreground/60 hover:text-foreground transition-colors">
                  +371 20383974
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-foreground/25" strokeWidth={1.5} />
                <a href="mailto:firmagrafa@gmail.com" className="text-sm font-body text-foreground/60 hover:text-foreground transition-colors">
                  firmagrafa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-foreground/25" strokeWidth={1.5} />
                <span className="text-sm font-body text-foreground/50">
                  Jelgavas novads / Eleja
                </span>
              </div>
            </div>
          </div>

          {/* Right - Liene signature + ink decoration */}
          <motion.div
            className="flex flex-col items-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-script text-4xl md:text-5xl text-foreground/20">Liene</span>
            {/* Small ink flourish */}
            <svg viewBox="0 0 120 30" className="w-24 mt-1" fill="none">
              <path 
                d="M5,15 C20,8 40,22 60,12 C80,2 100,18 115,10" 
                stroke="currentColor" 
                strokeWidth="0.6" 
                opacity="0.12" 
                strokeLinecap="round"
              />
              <circle cx="115" cy="10" r="1.2" fill="currentColor" opacity="0.08" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}