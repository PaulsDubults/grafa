import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MapModal from './MapModal';
import { useI18n } from '@/lib/i18n';

const MAP_IMAGE = "https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/719cd8202_image.png";

export default function HeroMiniMap({ centered }) {
  const { t } = useI18n();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={centered ? "text-center" : ""}>
        <p className="text-[11px] font-body text-[#1e3a5f]/40 mb-3 italic">
          {t('miniMap.subtitle')}
        </p>

        <button
          className={`relative rounded-sm overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-[0_4px_24px_rgba(201,168,76,0.15)] p-3 ${
            centered ? 'w-full max-w-[480px] mx-auto' : 'w-full max-w-[280px] text-left'
          }`}
          onClick={() => setShowModal(true)}
        >
          <img
            src={MAP_IMAGE}
            alt="Latvijas karte"
            className="w-full h-auto opacity-35 group-hover:opacity-60 transition-all duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-2">
            <span className="bg-white/90 text-[10px] font-body text-[#1e3a5f]/70 tracking-wider uppercase px-3 py-1.5 rounded-sm shadow-sm">
              {t('miniMap.viewMap')}
            </span>
          </div>
        </button>
      </div>

      <MapModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}