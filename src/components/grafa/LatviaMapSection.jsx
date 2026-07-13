import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';

const MAP_VIDEO = "https://media.base44.com/videos/public/6a02e63e7c5f99b008a3ed38/99011546d_Riga.mp4";

const locations = [
  { name: "Jelgava", clients: 30 },
  { name: "Rīga", clients: 16 },
  { name: "Jelgavas novads", clients: 9 },
  { name: "Liepāja", clients: 5 },
  { name: "Ogres novads", clients: 2 },
  { name: "Ventspils", clients: 1 },
  { name: "Jūrmala", clients: 1 },
  { name: "Salaspils", clients: 1 },
  { name: "Dobele", clients: 1 },
  { name: "Bauskas novads", clients: 1 },
  { name: "Ropažu novads", clients: 1 },
  { name: "Olaine", clients: 1 },
  { name: "Mārupes novads", clients: 1 },
  { name: "Baldone", clients: 1 },
];

const MAX_VALUE = 30;

export default function LatviaMapSection() {
  return (
    <motion.section
      id="karte"
      className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: 'transparent' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="map" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#C89B3C] mb-4 font-medium">
            Mūsu klienti
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-[#08233E]">
            Klienti visā Latvijā
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-4" />
          <p className="text-[#08233E]/45 font-body text-[15px] md:text-[16px]">
            72 klienti visā Latvijā
          </p>
        </motion.div>

        {/* Map video */}
        <motion.div
          className="relative max-w-[950px] mx-auto rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <video
            src={MAP_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </motion.div>

        {/* Statistics chart */}
        <motion.div
          className="mt-12 md:mt-16 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-[#e8e0d4]/50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-6 md:p-8">
            <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-[#08233E] mb-1.5">
              Klientu sadalījums pa reģioniem
            </h3>
            <p className="text-[#08233E]/40 font-body text-[13px] md:text-[14px] mb-6 md:mb-8">
              Kopā 72 klienti visā Latvijā
            </p>

            <div className="space-y-3 md:space-y-3.5">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  className="group"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="flex-shrink-0 w-[120px] md:w-[160px] font-body text-[13px] md:text-[14px] text-[#08233E]/75 truncate">
                      {loc.name}
                    </span>
                    <span className="flex-shrink-0 w-[28px] font-heading text-[14px] md:text-[15px] font-bold text-[#08233E] text-right tabular-nums">
                      {loc.clients}
                    </span>
                    <div className="flex-1 h-[22px] md:h-[26px] bg-[#F5EDE0]/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-shadow duration-300"
                        style={{
                          background: 'linear-gradient(90deg, #D4AF37, #E6C766)',
                          width: `${(loc.clients / MAX_VALUE) * 100}%`,
                          minWidth: loc.clients > 0 ? '12px' : '0px',
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(loc.clients / MAX_VALUE) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + 0.05 * i, duration: 0.7, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}