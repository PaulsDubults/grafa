import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/c3f1ec4a1_ChatGPTImageJul11202602_25_21PM.png";

const locations = [
  { name: "Ventspils",       clients: 1,  x: 10.5, y: 28 },
  { name: "Liepāja",         clients: 6,  x: 2.5,  y: 64 },
  { name: "Dobele",           clients: 1,  x: 30,   y: 57 },
  { name: "Jelgava",          clients: 39, x: 37,   y: 49 },
  { name: "Jūrmala",          clients: 1,  x: 38,   y: 37 },
  { name: "Mārupes novads",   clients: 1,  x: 42,   y: 40 },
  { name: "Rīga",             clients: 16, x: 46,   y: 33 },
  { name: "Olaine",           clients: 1,  x: 39.5, y: 44 },
  { name: "Baldone",          clients: 1,  x: 45.5, y: 49 },
  { name: "Bauskas novads",   clients: 1,  x: 43,   y: 69 },
  { name: "Ogres novads",     clients: 2,  x: 52,   y: 41 },
  { name: "Ropažu novads",    clients: 1,  x: 54,   y: 27 },
];

const totalClients = locations.reduce((sum, l) => sum + l.clients, 0);

function Hotspot({ loc, isActive, onClick }) {
  return (
    <button
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
      style={{ left: `${loc.x}%`, top: `${loc.y}%`, width: 28, height: 28 }}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      title={loc.name}
    >
      <span className="absolute inset-[-4px] rounded-full bg-[#2E8B2E]/0 group-hover:bg-[#2E8B2E]/20 transition-colors duration-300" />

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white rounded-sm shadow-xl border border-[#e8e0d4]/50 px-3.5 py-2 text-center">
              <p className="font-heading text-[13px] font-semibold text-[#08233E]">{loc.name}</p>
              <p className="font-body text-[11px] text-[#08233E]/50">{loc.clients} {loc.clients === 1 ? 'klients' : 'klienti'}</p>
            </div>
            <div className="w-2 h-2 bg-white border-r border-b border-[#e8e0d4]/50 rotate-45 mx-auto -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function LatviaMapSection() {
  const [activeIdx, setActiveIdx] = useState(null);

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
          onClick={() => setActiveIdx(null)}
        >
          <div className="relative">
            <img
              src={MAP_IMAGE}
              alt="Latvijas karte ar klientu atrašanās vietām"
              className="w-full h-auto"
            />
            {locations.map((loc, i) => (
              <Hotspot
                key={loc.name}
                loc={loc}
                isActive={activeIdx === i}
                onClick={() => setActiveIdx(prev => prev === i ? null : i)}
              />
            ))}
          </div>
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