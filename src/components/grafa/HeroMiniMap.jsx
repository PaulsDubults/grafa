import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MapModal from './MapModal';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/719cd8202_image.png";

export default function HeroMiniMap() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="relative mt-8 lg:mt-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <p className="text-[11px] font-body text-[#1e3a5f]/40 mb-3 italic">
          Apskatiet, kur visā Latvijā mums jau uzticas.
        </p>

        <button
          className="relative w-full max-w-[280px] rounded-sm overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-[0_4px_24px_rgba(201,168,76,0.15)] text-left p-3"
          onClick={() => setShowModal(true)}
        >
          <img
            src={MAP_IMAGE}
            alt="Latvijas karte"
            className="w-full h-auto opacity-35 group-hover:opacity-60 transition-all duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-2">
            <span className="bg-white/90 text-[10px] font-body text-[#1e3a5f]/70 tracking-wider uppercase px-3 py-1.5 rounded-sm shadow-sm">
              Apskatīt karti
            </span>
          </div>
        </button>
      </motion.div>

      <MapModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}