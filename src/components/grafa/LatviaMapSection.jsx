import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/58c044609_ChatGPTImageJul5202612_47_42PM.png";

/* Hotspot positions matching the pins already baked into the image.
   Coordinates are % of the map image dimensions. */
const hotspots = [
  { x: 50, y: 37, name: "Rīga", desc: "Klienti Rīgā un apkārtnē." },
  { x: 61, y: 44, name: "Ogre", desc: "Sadarbības partneri Ogrē." },
  { x: 30, y: 50, name: "Kuldīga", desc: "Esam priecīgi, ka mūsu klientu pulkam pievienojies jauns uzņēmums Kuldīgā." },
  { x: 55, y: 57, name: "Bauska", desc: "Klienti Bauskā." },
  { x: 69, y: 32, name: "Cēsis", desc: "Klienti Cēsīs." },
  { x: 17, y: 44, name: "Liepāja", desc: "Klienti Liepājā." },
  { x: 85, y: 50, name: "Daugavpils", desc: "Klienti Daugavpilī." },
  { x: 62, y: 26, name: "Valmiera", desc: "Klienti Valmierā." },
  { x: 39, y: 35, name: "Tukums", desc: "Klienti Tukumā." },
  { x: 23, y: 36, name: "Ventspils", desc: "Klienti Ventspilī." },
  { x: 75, y: 42, name: "Madona", desc: "Klienti Madonā." },
  { x: 80, y: 34, name: "Gulbene", desc: "Klienti Gulbenē." },
  { x: 43, y: 44, name: "Jūrmala", desc: "Klienti Jūrmalā." },
  { x: 68, y: 52, name: "Jēkabpils", desc: "Klienti Jēkabpilī." },
  { x: 34, y: 55, name: "Saldus", desc: "Klienti Saldū." },
  { x: 56, y: 22, name: "Sigulda", desc: "Klienti Siguldā." },
  { x: 90, y: 40, name: "Rēzekne", desc: "Klienti Rēzeknē." },
  { x: 78, y: 55, name: "Preiļi", desc: "Klienti Preiļos." },
  { x: 25, y: 48, name: "Talsi", desc: "Klienti Talsos." },
  { x: 48, y: 60, name: "Dobele", desc: "Klienti Dobelē." },
  { x: 65, y: 36, name: "Limbaži", desc: "Klienti Limbažos." },
  { x: 41, y: 26, name: "Dundaga", desc: "Klienti Dundagā." },
  { x: 86, y: 28, name: "Balvi", desc: "Klienti Balvos." },
  { x: 73, y: 57, name: "Aizkraukle", desc: "Klienti Aizkrauklē." },
  { x: 47, y: 49, name: "Jelgava", desc: "Mūsu biroja atrašanās vieta — Jelgavā strādājošs uzņēmums ar vairāk kā 20 gadu pieredzi.", isOffice: true },
];

function PointPopup({ point, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-[#1e3a5f]/30 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-white rounded-sm shadow-2xl border border-[#e8e0d4]/50 p-6 md:p-8 max-w-[320px] w-full"
        initial={{ scale: 0.9, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <button
          className="absolute top-3 right-3 text-[#1e3a5f]/25 hover:text-[#1e3a5f]/60 transition-colors"
          onClick={onClose}
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-2.5 mb-3">
          <MapPin className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
          <h4 className="font-heading text-[17px] md:text-[18px] font-semibold text-[#1e3a5f]">
            {point.name}
          </h4>
        </div>

        <p className="text-[#1e3a5f]/55 font-body text-[13px] md:text-[14px] leading-[1.75]">
          {point.desc}
        </p>

        {point.name === "Kuldīga" && (
          <p className="font-script text-[16px] text-[#c9a84c] mt-3 italic">
            Laipni lūgti GRĀFAS saimē!
          </p>
        )}

        <div className="w-10 h-[1.5px] mt-4" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
      </motion.div>
    </motion.div>
  );
}

export default function LatviaMapSection() {
  const [activePoint, setActivePoint] = useState(null);

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
        {/* Section header */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
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

        {/* Map — image already contains all visual pins */}
        <motion.div
          className="relative max-w-[950px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="relative">
            <img
              src={MAP_IMAGE}
              alt="Latvijas karte ar klientu atrašanās vietām"
              className="w-full h-auto"
            />

            {/* Invisible clickable hotspots over the baked-in pins */}
            <div className="absolute" style={{ top: '5%', left: '6%', right: '4%', bottom: '25%' }}>
              {hotspots.map((spot) => (
                <button
                  key={spot.name}
                  className="absolute w-5 h-6 md:w-6 md:h-7 cursor-pointer group -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  onClick={() => setActivePoint(spot)}
                  title={spot.name}
                >
                  {/* Hover highlight ring */}
                  <span className="absolute inset-[-4px] rounded-full bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/15 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {activePoint && (
          <PointPopup
            point={activePoint}
            onClose={() => setActivePoint(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}