import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

const LATVIA_PATH = "M5,35 C8,32 10,28 12,30 C14,32 13,36 16,38 C19,40 22,37 25,35 C28,33 30,30 28,27 C26,24 24,22 22,20 C20,18 22,15 25,14 C28,13 32,14 35,12 C38,10 40,8 43,9 C46,10 48,13 50,12 C52,11 53,8 56,8 C59,8 61,10 63,12 C65,14 68,15 70,13 C72,11 73,9 76,10 C79,11 82,14 85,16 C88,18 90,20 92,22 C94,24 95,27 93,30 C91,33 88,35 90,38 C92,41 95,42 94,45 C93,48 90,50 87,52 C84,54 80,55 76,54 C72,53 68,50 65,52 C62,54 60,57 57,58 C54,59 50,58 47,56 C44,54 42,51 39,50 C36,49 32,50 29,52 C26,54 23,57 20,56 C17,55 15,52 13,49 C11,46 9,44 7,42 C5,40 3,38 5,35 Z";

const office = { x: 39, y: 72, name: "Jelgava", desc: "Mūsu biroja atrašanās vieta — Jelgavā strādājošs uzņēmums ar vairāk kā 20 gadu pieredzi.", isOffice: true };

const clients = [
  { x: 48, y: 42, name: "Rīga", desc: "Klienti Rīgā un apkārtnē." },
  { x: 62, y: 48, name: "Ogre", desc: "Sadarbības partneri Ogrē." },
  { x: 28, y: 55, name: "Kuldīga", desc: "Esam priecīgi, ka mūsu klientu pulkam pievienojies jauns uzņēmums Kuldīgā." },
  { x: 55, y: 62, name: "Bauska", desc: "Klienti Bauskā." },
  { x: 72, y: 38, name: "Cēsis", desc: "Klienti Cēsīs." },
  { x: 18, y: 42, name: "Liepāja", desc: "Klienti Liepājā." },
  { x: 83, y: 55, name: "Daugavpils", desc: "Klienti Daugavpilī." },
  { x: 55, y: 32, name: "Valmiera", desc: "Klienti Valmierā." },
];

function GlowPoint({ point, onClick, isActive, delay = 0 }) {
  return (
    <motion.button
      className={`absolute group ${isActive ? 'z-30' : 'z-10'}`}
      style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}
      onClick={(e) => { e.stopPropagation(); onClick(point); }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 + delay * 0.06, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.4 }}
    >
      {/* Pulse ring */}
      <span className={`absolute inset-0 rounded-full animate-ping ${
        point.isOffice ? 'bg-[#c9a84c]/20' : 'bg-[#c9a84c]/15'
      }`} style={{ animationDuration: '2.5s' }} />

      {/* Outer glow */}
      <span className={`absolute rounded-full ${
        point.isOffice 
          ? '-inset-1.5 bg-[#c9a84c]/20' 
          : '-inset-1 bg-[#c9a84c]/10'
      }`} />

      {/* Core dot */}
      <span className={`relative block rounded-full shadow-lg ${
        point.isOffice
          ? 'w-4 h-4 md:w-5 md:h-5 bg-[#1e3a5f] ring-2 ring-[#c9a84c]/60'
          : 'w-2.5 h-2.5 md:w-3 md:h-3 bg-[#c9a84c] shadow-[0_0_8px_rgba(201,168,76,0.6)]'
      }`} />

      {/* Name label on hover */}
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-[11px] font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/70 font-medium">
        {point.name}
      </span>
    </motion.button>
  );
}

function PointPopup({ point, onClose }) {
  return (
    <motion.div
      className="absolute z-40"
      style={{
        left: `${point.x}%`,
        top: `${point.y}%`,
        transform: point.x > 60 ? 'translate(-100%, -110%)' : 'translate(10%, -110%)',
      }}
      initial={{ opacity: 0, y: 8, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white rounded-sm shadow-2xl border border-[#e8e0d4]/50 p-5 md:p-6 max-w-[260px] md:max-w-[300px] relative">
        <button
          className="absolute top-3 right-3 text-[#1e3a5f]/25 hover:text-[#1e3a5f]/60 transition-colors"
          onClick={onClose}
        >
          <X size={14} />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
          <h4 className="font-heading text-[15px] md:text-[16px] font-semibold text-[#1e3a5f]">
            {point.name}
          </h4>
        </div>

        <p className="text-[#1e3a5f]/55 font-body text-[12px] md:text-[13px] leading-[1.7]">
          {point.desc}
        </p>

        {point.name === "Kuldīga" && (
          <p className="font-script text-[15px] text-[#c9a84c] mt-3 italic">
            Laipni lūgti GRĀFAS saimē!
          </p>
        )}

        <div className="w-8 h-[1px] mt-3" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
      </div>
    </motion.div>
  );
}

export default function LatviaMapModal({ isOpen, onClose }) {
  const [activePoint, setActivePoint] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setActivePoint(null);
      return;
    }
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handlePointClick = (point) => {
    setActivePoint(prev => prev?.name === point.name ? null : point);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#0a1929]/80 backdrop-blur-md"
            onClick={() => { setActivePoint(null); onClose(); }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal container */}
          <motion.div
            className="relative w-full max-w-[900px] max-h-[90vh] bg-[#0f1f35] rounded-sm shadow-2xl border border-[#c9a84c]/10 overflow-hidden"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActivePoint(null)}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c9a84c]" />
                <h2 className="font-heading text-[18px] md:text-[22px] font-semibold text-white">
                  Mūsu klienti visā Latvijā
                </h2>
              </div>
              <button
                className="text-white/30 hover:text-white/70 transition-colors p-1"
                onClick={onClose}
              >
                <X size={22} />
              </button>
            </div>

            {/* Map area */}
            <div className="relative px-6 md:px-10 py-8 md:py-12">
              <div className="relative aspect-[16/10] max-w-[750px] mx-auto">
                {/* Latvia shape */}
                <svg viewBox="0 0 100 65" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="map-glow">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Shadow */}
                  <path d={LATVIA_PATH} fill="#c9a84c" opacity="0.03" transform="translate(1, 1)" />
                  {/* Main shape */}
                  <path
                    d={LATVIA_PATH}
                    fill="#1a2f4a"
                    stroke="#c9a84c"
                    strokeWidth="0.3"
                    opacity="0.9"
                  />
                  {/* Inner highlight */}
                  <path
                    d={LATVIA_PATH}
                    fill="url(#map-gradient)"
                    opacity="0.15"
                  />
                  <defs>
                    <radialGradient id="map-gradient" cx="45%" cy="45%" r="50%">
                      <stop offset="0%" stopColor="#c9a84c" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Client points */}
                {clients.map((client, i) => (
                  <GlowPoint
                    key={client.name}
                    point={client}
                    onClick={handlePointClick}
                    isActive={activePoint?.name === client.name}
                    delay={i}
                  />
                ))}

                {/* Office point */}
                <GlowPoint
                  point={office}
                  onClick={handlePointClick}
                  isActive={activePoint?.name === office.name}
                  delay={clients.length}
                />

                {/* Point popup */}
                <AnimatePresence>
                  {activePoint && (
                    <PointPopup
                      point={activePoint}
                      onClose={() => setActivePoint(null)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 md:gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#1e3a5f] ring-1.5 ring-[#c9a84c]/50 block" />
                  <span className="text-[10px] md:text-[11px] font-body text-white/40">Mūsu biroja atrašanās vieta</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#c9a84c] shadow-[0_0_6px_rgba(201,168,76,0.5)] block" />
                  <span className="text-[10px] md:text-[11px] font-body text-white/40">Mūsu klienti</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}