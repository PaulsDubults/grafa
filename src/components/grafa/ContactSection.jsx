import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <motion.section
      id="kontakti"
      className="py-16 md:py-24 px-6 md:px-10"
      style={{ background: '#f5f1eb' }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading text-[22px] md:text-[26px] font-semibold mb-2">Saziņa</h2>
          <div className="w-10 h-[1.5px] bg-[#c9a84c]/50" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Contact details */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <Phone className="w-[15px] h-[15px] text-foreground/25" strokeWidth={1.5} />
              <a href="tel:+37120383974" className="text-[13px] font-body text-foreground/55 hover:text-foreground transition-colors">
                +371 20383974
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-[15px] h-[15px] text-foreground/25" strokeWidth={1.5} />
              <a href="mailto:firmagrafa@gmail.com" className="text-[13px] font-body text-foreground/55 hover:text-foreground transition-colors">
                firmagrafa@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-[15px] h-[15px] text-foreground/25" strokeWidth={1.5} />
              <span className="text-[13px] font-body text-foreground/45">Jelgavas novads / Eleja</span>
            </div>
          </div>

          {/* Liene signature + ink flourish */}
          <motion.div
            className="flex flex-col items-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-script text-[38px] md:text-[46px] text-foreground/18 leading-none italic">Liene</span>
            <svg viewBox="0 0 140 35" className="w-28 mt-0.5" fill="none">
              <path
                d="M5,18 C25,10 45,25 65,15 C85,5 105,22 130,12"
                stroke="#1a1a1a"
                strokeWidth="0.7"
                opacity="0.12"
                strokeLinecap="round"
              />
              {/* Small ink dots */}
              <circle cx="130" cy="12" r="1.5" fill="#1a1a1a" opacity="0.08" />
              <circle cx="133" cy="15" r="0.8" fill="#1a1a1a" opacity="0.05" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}