import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MapModal from './MapModal';

const LATVIA_PATH = "M52,bindung M52,95 L48,93 L38,96 L28,100 L18,108 L10,118 L8,125 L12,132 L10,140 L15,145 L18,155 L22,158 L30,156 L42,158 L55,165 L65,168 L72,172 L80,178 L88,180 L95,178 L105,180 L115,185 L125,188 L138,192 L148,195 L160,198 L172,195 L180,190 L188,188 L198,185 L210,180 L218,178 L225,180 L232,185 L238,182 L245,178 L250,172 L255,165 L258,158 L262,148 L268,140 L275,135 L280,128 L282,120 L280,112 L278,105 L282,98 L288,92 L292,85 L290,78 L285,72 L278,68 L272,62 L268,55 L265,48 L260,42 L255,38 L248,35 L240,32 L232,30 L225,28 L218,25 L210,22 L202,20 L195,18 L188,15 L180,12 L172,10 L165,12 L158,15 L152,20 L145,25 L140,30 L135,35 L130,38 L125,35 L120,30 L115,28 L108,30 L102,35 L98,42 L95,48 L92,55 L88,60 L82,62 L78,58 L75,52 L72,45 L68,40 L62,38 L58,42 L55,48 L52,55 L50,62 L48,70 L52,78 L58,82 L62,78 L65,72 L68,68 L72,72 L75,78 L72,85 L65,90 L58,92 L52,95 Z";

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
          className="relative w-full max-w-[280px] rounded-sm overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-[0_4px_24px_rgba(201,168,76,0.15)] text-left p-4"
          onClick={() => setShowModal(true)}
        >
          <svg viewBox="0 0 300 210" fill="none" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700">
            <path
              d="M52,95 L48,93 L38,96 L28,100 L18,108 L10,118 L8,125 L12,132 L10,140 L15,145 L18,155 L22,158 L30,156 L42,158 L55,165 L65,168 L72,172 L80,178 L88,180 L95,178 L105,180 L115,185 L125,188 L138,192 L148,195 L160,198 L172,195 L180,190 L188,188 L198,185 L210,180 L218,178 L225,180 L232,185 L238,182 L245,178 L250,172 L255,165 L258,158 L262,148 L268,140 L275,135 L280,128 L282,120 L280,112 L278,105 L282,98 L288,92 L292,85 L290,78 L285,72 L278,68 L272,62 L268,55 L265,48 L260,42 L255,38 L248,35 L240,32 L232,30 L225,28 L218,25 L210,22 L202,20 L195,18 L188,15 L180,12 L172,10 L165,12 L158,15 L152,20 L145,25 L140,30 L135,35 L130,38 L125,35 L120,30 L115,28 L108,30 L102,35 L98,42 L95,48 L92,55 L88,60 L82,62 L78,58 L75,52 L72,45 L68,40 L62,38 L58,42 L55,48 L52,55 L50,62 L48,70 L52,78 L58,82 L62,78 L65,72 L68,68 L72,72 L75,78 L72,85 L65,90 L58,92 L52,95 Z"
              stroke="#1e3a5f"
              strokeWidth="1.2"
              fill="none"
              opacity="0.35"
              className="group-hover:opacity-60 transition-opacity duration-500"
            />
            {/* Jelgava dot */}
            <circle cx="135" cy="140" r="3" fill="#c9a84c" opacity="0.7" className="group-hover:opacity-100 transition-opacity duration-500" />
            <circle cx="135" cy="140" r="6" stroke="#c9a84c" strokeWidth="0.5" fill="none" opacity="0.3" />
          </svg>

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