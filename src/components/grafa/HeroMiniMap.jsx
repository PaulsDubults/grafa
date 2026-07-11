import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MapModal from './MapModal';
import LatviaSvgMap from './LatviaSvgMap';
import { locationsWithXY as locations, totalClients } from './mapData';
import { useI18n } from '@/lib/i18n';

export default function HeroMiniMap({ centered }) {
  const { t } = useI18n();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={centered ? "text-center" : ""}>
        <p className="text-[11px] font-body text-[#08233E]/40 mb-3 italic">
          {t('miniMap.subtitle')}
        </p>

        <button
          className={`relative rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-[0_8px_32px_rgba(46,93,80,0.12)] bg-[#FBF7F0] border border-[#e8e0d4]/40 p-4 ${
            centered ? 'w-full max-w-[480px] mx-auto' : 'w-full max-w-[320px] text-left'
          }`}
          onClick={() => setShowModal(true)}
        >
          <LatviaSvgMap
            className="w-full"
            opacity={0.6}
          >
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              >
                <div className={`rounded-full bg-[#2E5D50] border border-white/70 ${
                  loc.clients >= 10 ? 'w-3 h-3' : 'w-2 h-2'
                }`} />
              </div>
            ))}
          </LatviaSvgMap>

          {/* Bottom label */}
          <div className="flex items-center justify-between mt-3 px-1">
            <span className="font-body text-[10px] text-[#08233E]/50 tracking-wider uppercase">
              {totalClients} {t('miniMap.clientsLabel') || 'klienti'}
            </span>
            <span className="bg-[#2E5D50]/10 text-[#2E5D50] text-[10px] font-body font-medium tracking-wider uppercase px-2.5 py-1 rounded-sm group-hover:bg-[#2E5D50]/20 transition-colors duration-300">
              {t('miniMap.viewMap')}
            </span>
          </div>
        </button>
      </div>

      <MapModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}