import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/c3f1ec4a1_ChatGPTImageJul11202602_25_21PM.png";

const locations = [
  { name: "Ventspils",       clients: 1,  x: 13,   y: 27.5 },
  { name: "Liepāja",         clients: 6,  x: 4.5,  y: 64 },
  { name: "Dobele",          clients: 1,  x: 28,   y: 54 },
  { name: "Jūrmala",         clients: 1,  x: 42,   y: 36 },
  { name: "Rīga",            clients: 16, x: 46.5, y: 32 },
  { name: "Mārupes novads",  clients: 1,  x: 44,   y: 42 },
  { name: "Olaine",          clients: 1,  x: 41.5, y: 49 },
  { name: "Jelgava",         clients: 39, x: 39,   y: 53 },
  { name: "Baldone",         clients: 1,  x: 44.5, y: 58 },
  { name: "Bauskas novads",  clients: 1,  x: 46.5, y: 64 },
  { name: "Ogres novads",    clients: 2,  x: 56,   y: 44 },
  { name: "Ropažu novads",   clients: 1,  x: 55,   y: 26 },
];

const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);

export default function LatviaMapSection() {
  return (
    <motion.section
      id="karte"
      className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="map" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
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
            {totalClients} klienti visā Latvijā
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-[950px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={MAP_IMAGE}
            alt="Latvijas karte ar klientu atrašanās vietām"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-[#e8e0d4]/40"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B2E] flex-shrink-0" />
                <span className="font-body text-[12px] md:text-[13px] text-[#08233E]/70">{loc.name}</span>
                <span className="font-heading text-[13px] md:text-[14px] font-bold text-[#08233E]">{loc.clients}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}