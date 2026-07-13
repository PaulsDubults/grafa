import React from 'react';
import { motion } from 'framer-motion';

const CLIENT_DATA = [
  { name: "Jelgava", count: 30 },
  { name: "Rīga", count: 16 },
  { name: "Jelgavas novads", count: 9 },
  { name: "Liepāja", count: 5 },
  { name: "Ogres novads", count: 2 },
  { name: "Ventspils", count: 1 },
  { name: "Jūrmala", count: 1 },
  { name: "Salaspils", count: 1 },
  { name: "Dobele", count: 1 },
  { name: "Bauskas novads", count: 1 },
  { name: "Ropažu novads", count: 1 },
  { name: "Olaine", count: 1 },
  { name: "Mārupes novads", count: 1 },
  { name: "Baldone", count: 1 },
];

const MAX_VALUE = 30;

export default function ClientStatsChart() {
  return (
    <div className="bg-white/70 backdrop-blur border border-[#e8e0d4]/50 rounded-xl p-5 md:p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
      <h3 className="font-heading text-[18px] md:text-[22px] font-semibold text-[#08233E] mb-1">
        Klientu sadalījums pa reģioniem
      </h3>
      <p className="font-body text-[12px] md:text-[13px] text-[#08233E]/45 mb-5">
        Kopā 72 klienti visā Latvijā
      </p>

      <div className="space-y-2.5">
        {CLIENT_DATA.map((item, i) => (
          <motion.div
            key={item.name}
            className="group flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-[#F5EDE0]/50 transition-colors duration-300"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
          >
            <span className="flex-shrink-0 w-[110px] md:w-[140px] font-body text-[12px] md:text-[13px] text-[#08233E]/70 truncate">
              {item.name}
            </span>
            <span className="flex-shrink-0 w-[28px] font-heading text-[13px] md:text-[14px] font-bold text-[#08233E] text-right tabular-nums">
              {item.count}
            </span>
            <div className="flex-1 h-[14px] bg-[#F5EDE0]/80 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #D4AF37, #E6C766)' }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.count / MAX_VALUE) * 100}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.04, duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}