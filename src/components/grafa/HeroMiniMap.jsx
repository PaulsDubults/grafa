import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MapModal from './MapModal';
import { useI18n } from '@/lib/i18n';

const MINI_LATVIA_PATH = `
M 52,335 C 48,325 40,305 42,285 C 44,265 48,250 42,230 C 36,210 30,195 28,175
C 26,158 30,145 40,132 C 52,118 68,108 88,100 C 110,92 135,86 160,82
C 185,78 210,75 235,72 C 255,68 270,64 290,58 C 308,52 320,48 340,42
C 355,38 365,34 380,28 C 392,23 400,20 415,18 C 430,16 442,20 455,28
C 462,32 468,38 475,45 L 490,55 C 498,58 505,55 515,50 C 528,44 540,38 555,32
C 572,26 588,22 608,18 C 630,14 650,15 670,20 C 690,25 708,32 725,42
C 740,50 752,58 768,68 C 782,78 795,88 808,100 C 820,112 830,125 838,140
C 846,155 852,170 858,188 C 862,205 865,222 866,240 C 866,258 864,275 860,292
C 855,310 848,325 840,340 C 832,355 822,365 810,378 C 798,390 785,400 770,412
C 755,422 742,430 728,438 C 712,445 698,450 682,455 C 662,460 642,464 620,466
C 598,468 578,468 558,466 C 538,464 520,460 502,456 C 485,452 470,448 455,444
C 438,440 425,436 410,430 C 395,424 382,418 370,410 C 358,402 348,395 335,388
C 320,380 308,374 295,368 C 278,362 265,358 250,354 C 232,350 218,348 200,346
C 180,344 162,344 142,346 C 122,348 108,350 92,352 C 78,354 66,352 58,345
C 54,340 52,338 52,335 Z
`;

const miniDots = [
  { cx: 130, cy: 155, color: '#DC2626' },
  { cx: 62,  cy: 345, color: '#2563EB' },
  { cx: 465, cy: 165, color: '#3B82F6' },
  { cx: 430, cy: 195, color: '#16A34A' },
  { cx: 445, cy: 230, color: '#7C3AED' },
  { cx: 405, cy: 275, color: '#EAB308' },
  { cx: 305, cy: 305, color: '#06B6D4' },
  { cx: 440, cy: 365, color: '#92400E' },
  { cx: 570, cy: 125, color: '#15803D' },
  { cx: 735, cy: 145, color: '#F97316' },
  { cx: 630, cy: 290, color: '#38BDF8' },
  { cx: 830, cy: 345, color: '#7C3AED' },
  { cx: 760, cy: 430, color: '#EC4899' },
];

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
          className={`relative rounded-sm overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-[0_4px_24px_rgba(201,168,76,0.15)] p-3 ${
            centered ? 'w-full max-w-[480px] mx-auto' : 'w-full max-w-[280px] text-left'
          }`}
          onClick={() => setShowModal(true)}
        >
          <svg
            viewBox="0 0 960 500"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto opacity-35 group-hover:opacity-60 transition-all duration-700 group-hover:scale-[1.02]"
          >
            <path d={MINI_LATVIA_PATH} fill="none" stroke="#08233E" strokeWidth="2.5" strokeLinejoin="round" opacity="0.5" />
            {miniDots.map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r="8" fill={dot.color} opacity="0.7" />
            ))}
          </svg>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-2">
            <span className="bg-white/90 text-[10px] font-body text-[#08233E]/70 tracking-wider uppercase px-3 py-1.5 rounded-sm shadow-sm">
              {t('miniMap.viewMap')}
            </span>
          </div>
        </button>
      </div>

      <MapModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}