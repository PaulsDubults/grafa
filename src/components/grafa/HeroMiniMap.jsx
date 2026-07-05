import React from 'react';
import { motion } from 'framer-motion';

const office = { x: 39, y: 72, name: "Jelgava", isOffice: true };

const clients = [
  { x: 48, y: 42 },
  { x: 62, y: 48 },
  { x: 28, y: 55 },
  { x: 55, y: 62 },
  { x: 72, y: 38 },
  { x: 18, y: 42 },
  { x: 83, y: 55 },
  { x: 55, y: 32 },
];

export default function HeroMiniMap() {
  return (
    <motion.div
      className="relative mt-8 lg:mt-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <p className="text-[11px] font-body text-[#1e3a5f]/40 mb-3 flex items-center gap-2">
        <span className="italic">Apskatiet, kur visā Latvijā mums jau uzticas.</span>
      </p>

      <div className="relative w-full max-w-[280px] bg-[#f0ebe2]/60 rounded-sm p-4 border border-[#e8e0d4]/40">
        <div className="relative aspect-[16/10]">
          <svg viewBox="0 0 100 65" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5,35 C8,32 10,28 12,30 C14,32 13,36 16,38 C19,40 22,37 25,35 C28,33 30,30 28,27 C26,24 24,22 22,20 C20,18 22,15 25,14 C28,13 32,14 35,12 C38,10 40,8 43,9 C46,10 48,13 50,12 C52,11 53,8 56,8 C59,8 61,10 63,12 C65,14 68,15 70,13 C72,11 73,9 76,10 C79,11 82,14 85,16 C88,18 90,20 92,22 C94,24 95,27 93,30 C91,33 88,35 90,38 C92,41 95,42 94,45 C93,48 90,50 87,52 C84,54 80,55 76,54 C72,53 68,50 65,52 C62,54 60,57 57,58 C54,59 50,58 47,56 C44,54 42,51 39,50 C36,49 32,50 29,52 C26,54 23,57 20,56 C17,55 15,52 13,49 C11,46 9,44 7,42 C5,40 3,38 5,35 Z"
              fill="#ede7db"
              stroke="#c9a84c"
              strokeWidth="0.4"
              opacity="0.7"
            />
          </svg>

          {clients.map((c, i) => (
            <div
              key={i}
              className="absolute w-[5px] h-[5px] rounded-full bg-[#1e3a5f]"
              style={{ left: `${c.x}%`, top: `${c.y}%`, transform: 'translate(-50%, -50%)' }}
            />
          ))}

          <div
            className="absolute w-[7px] h-[7px] rounded-full bg-[#c9a84c] ring-1 ring-[#c9a84c]/30"
            style={{ left: `${office.x}%`, top: `${office.y}%`, transform: 'translate(-50%, -50%)' }}
          />
        </div>

        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-[5px] h-[5px] rounded-full bg-[#c9a84c]" />
            <span className="text-[8px] font-body text-[#1e3a5f]/40">Mūsu birojs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-[4px] h-[4px] rounded-full bg-[#1e3a5f]" />
            <span className="text-[8px] font-body text-[#1e3a5f]/40">Klienti</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}