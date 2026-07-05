import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';

const office = { x: 39, y: 72, name: "Jelgava", desc: "Mūsu biroja atrašanās vieta", isOffice: true };

const clients = [
  { x: 48, y: 42, name: "Rīga", desc: "Klienti Rīgā un apkārtnē" },
  { x: 62, y: 48, name: "Ogre", desc: "Sadarbības partneri Ogrē" },
  { x: 28, y: 55, name: "Kuldīga", desc: "Esam priecīgi, ka mūsu klientu pulkam pievienojies jauns uzņēmums Kuldīgā." },
  { x: 55, y: 62, name: "Bauska", desc: "Klienti Bauskā" },
  { x: 72, y: 38, name: "Cēsis", desc: "Klienti Cēsīs" },
  { x: 18, y: 42, name: "Liepāja", desc: "Klienti Liepājā" },
  { x: 83, y: 55, name: "Daugavpils", desc: "Klienti Daugavpilī" },
  { x: 55, y: 32, name: "Valmiera", desc: "Klienti Valmierā" },
];

function MapPoint({ point, onClick, isActive }) {
  return (
    <motion.button
      className={`absolute z-10 group ${isActive ? 'z-20' : ''}`}
      style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}
      onClick={() => onClick(point)}
      whileHover={{ scale: 1.3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={`w-3 h-3 rounded-full shadow-md transition-all duration-300 ${
        point.isOffice
          ? 'bg-[#c9a84c] ring-2 ring-[#c9a84c]/30 w-4 h-4'
          : 'bg-[#1e3a5f] group-hover:bg-[#1e3a5f]/80 group-hover:ring-2 group-hover:ring-[#1e3a5f]/20'
      }`} />
      <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        point.isOffice ? 'text-[#c9a84c] font-medium' : 'text-[#1e3a5f]/60'
      }`}>
        {point.name}
      </span>
    </motion.button>
  );
}

export default function LatviaMapSection() {
  const [activePoint, setActivePoint] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePointClick = (point) => {
    setActivePoint(point);
    setShowModal(true);
  };

  return (
    <motion.section
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#f5f0e8' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="map" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            Mūsu klienti
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-[#1e3a5f]">
            Klienti visā Latvijā
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />
          <p className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[16px] leading-[1.8] max-w-2xl mx-auto">
            Apskatiet, kur visā Latvijā mums jau uzticas.
          </p>
        </motion.div>

        {/* Map container */}
        <motion.div
          className="relative max-w-[800px] mx-auto bg-white/60 backdrop-blur-sm rounded-sm p-6 md:p-10 shadow-[0_4px_20px_rgba(30,58,95,0.08)] border border-[#e8e0d4]/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Latvia SVG Map outline */}
          <div className="relative aspect-[16/10]">
            <svg viewBox="0 0 100 65" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5,35 C8,32 10,28 12,30 C14,32 13,36 16,38 C19,40 22,37 25,35 C28,33 30,30 28,27 C26,24 24,22 22,20 C20,18 22,15 25,14 C28,13 32,14 35,12 C38,10 40,8 43,9 C46,10 48,13 50,12 C52,11 53,8 56,8 C59,8 61,10 63,12 C65,14 68,15 70,13 C72,11 73,9 76,10 C79,11 82,14 85,16 C88,18 90,20 92,22 C94,24 95,27 93,30 C91,33 88,35 90,38 C92,41 95,42 94,45 C93,48 90,50 87,52 C84,54 80,55 76,54 C72,53 68,50 65,52 C62,54 60,57 57,58 C54,59 50,58 47,56 C44,54 42,51 39,50 C36,49 32,50 29,52 C26,54 23,57 20,56 C17,55 15,52 13,49 C11,46 9,44 7,42 C5,40 3,38 5,35 Z"
                fill="#f0ebe2"
                stroke="#c9a84c"
                strokeWidth="0.4"
                opacity="0.8"
              />
            </svg>

            {/* Client points */}
            {clients.map((client, i) => (
              <MapPoint key={client.name} point={client} onClick={handlePointClick} isActive={activePoint?.name === client.name} />
            ))}

            {/* Office point */}
            <MapPoint point={office} onClick={handlePointClick} isActive={activePoint?.name === office.name} />
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c9a84c]" />
              <span className="text-[11px] font-body text-[#1e3a5f]/50">Mūsu biroja atrašanās vieta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1e3a5f]" />
              <span className="text-[11px] font-body text-[#1e3a5f]/50">Mūsu klienti</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popup modal */}
      <AnimatePresence>
        {showModal && activePoint && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[#1e3a5f]/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div
              className="relative bg-white rounded-sm p-8 md:p-10 max-w-md w-full shadow-2xl border border-[#e8e0d4]/50"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <button
                className="absolute top-4 right-4 text-[#1e3a5f]/30 hover:text-[#1e3a5f]/60 transition-colors"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#c9a84c]" />
                <h3 className="font-heading text-[20px] font-semibold text-[#1e3a5f]">
                  {activePoint.name}
                </h3>
              </div>

              <p className="text-[#1e3a5f]/60 font-body text-[14px] leading-[1.8] mb-6">
                {activePoint.desc}
              </p>

              {activePoint.name === "Kuldīga" && (
                <p className="font-script text-[18px] text-[#c9a84c] italic">
                  Laipni lūgti GRĀFAS saimē!
                </p>
              )}

              <div className="w-12 h-[1.5px] mt-4" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}