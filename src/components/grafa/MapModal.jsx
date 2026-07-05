import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/719cd8202_image.png";

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

function LocationTooltip({ point }) {
  return (
    <motion.div
      className="absolute z-30 bg-white rounded-sm shadow-xl border border-[#e8e0d4]/50 p-4 w-[220px] md:w-[260px]"
      style={{
        left: `${point.x}%`,
        top: `${point.y}%`,
        transform: point.x > 60 ? 'translate(-105%, -50%)' : 'translate(10px, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <MapPin className="w-3.5 h-3.5 text-[#c9a84c] flex-shrink-0" />
        <h4 className="font-heading text-[14px] md:text-[15px] font-semibold text-[#1e3a5f]">{point.name}</h4>
      </div>
      <p className="text-[#1e3a5f]/55 font-body text-[11px] md:text-[12px] leading-[1.7]">{point.desc}</p>
      {point.name === "Kuldīga" && (
        <p className="font-script text-[13px] text-[#c9a84c] mt-1.5 italic">Laipni lūgti GRĀFAS saimē!</p>
      )}
    </motion.div>
  );
}

function KuldigaNotification({ onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 6000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
      onClick={onDismiss}
    >
      <div className="bg-white rounded-sm shadow-2xl border border-[#c9a84c]/20 px-6 py-4 max-w-[420px]">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-[#c9a84c]" />
          </div>
          <div>
            <p className="font-body text-[13px] text-[#1e3a5f]/70 leading-[1.7]">
              Esam priecīgi, ka mūsu klientu pulkam pievienojies jauns uzņēmums <strong className="text-[#1e3a5f] font-semibold">Kuldīgā</strong>.
            </p>
            <p className="font-script text-[15px] text-[#c9a84c] mt-1 italic">
              Laipni lūgti GRĀFAS saimē!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MapModal({ isOpen, onClose }) {
  const [activePoint, setActivePoint] = useState(null);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setActivePoint(null);
      setShowNotification(true);
      return;
    }
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-[#1e3a5f]/40 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative bg-[#faf7f2] rounded-sm shadow-2xl border border-[#e8e0d4]/50 w-full max-w-[900px] max-h-[90vh] overflow-auto"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={() => setActivePoint(null)}
          >
            <button
              className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors"
              onClick={onClose}
            >
              <X size={16} className="text-[#1e3a5f]/60" />
            </button>

            <div className="text-center pt-6 pb-2 px-6">
              <p className="font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#c9a84c] mb-2 font-medium">
                Mūsu klienti
              </p>
              <h3 className="font-heading text-[22px] md:text-[28px] font-semibold text-[#1e3a5f]">
                Klienti visā Latvijā
              </h3>
            </div>

            <div className="relative px-4 pb-6">
              <div className="relative">
                <img
                  src={MAP_IMAGE}
                  alt="Latvijas karte ar klientu atrašanās vietām"
                  className="w-full h-auto"
                />

                <div className="absolute" style={{ top: '5%', left: '6%', right: '4%', bottom: '25%' }}>
                  {hotspots.map((spot) => (
                    <button
                      key={spot.name}
                      className="absolute w-6 h-7 md:w-7 md:h-8 cursor-pointer group -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePoint(prev => prev?.name === spot.name ? null : spot);
                      }}
                      title={spot.name}
                    >
                      <span className="absolute inset-[-6px] rounded-full bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/15 transition-colors duration-300" />
                    </button>
                  ))}

                  <AnimatePresence>
                    {activePoint && <LocationTooltip point={activePoint} />}
                  </AnimatePresence>
                </div>
              </div>

              {/* Kuldīga notification */}
              <AnimatePresence>
                {showNotification && (
                  <KuldigaNotification onDismiss={() => setShowNotification(false)} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}