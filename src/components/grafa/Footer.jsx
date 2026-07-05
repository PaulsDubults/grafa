import React from 'react';
import GoldSwirl from './decorations/GoldSwirl';

export default function Footer() {
  return (
    <footer className="relative py-14 px-6 md:px-10 overflow-hidden" style={{ background: '#1e3a5f' }}>
      <GoldSwirl className="absolute right-[5%] top-4 w-[120px] h-[16px] hidden md:block" />
      <div className="max-w-[1200px] mx-auto">
        {/* Gold line */}
        <div className="w-full h-[0.5px] bg-white/10 mb-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-heading text-[14px] font-semibold text-white/80 mb-1">
              SIA firma GRĀFA
            </p>
            <p className="text-[10px] text-[#c9a84c]/60 tracking-[0.15em] font-body">
              Grāmatvedība. Finanses. Apmācības.
            </p>
            <p className="text-[11px] text-white/25 font-body mt-3">
              © 2025 SIA firma GRĀFA. Visas tiesības aizsargātas.
            </p>
          </div>

          <div className="flex gap-6">
            <span className="text-[11px] text-white/30 font-body cursor-pointer hover:text-white/50 transition-colors duration-300">
              Privātuma politika
            </span>
            <span className="text-[11px] text-white/30 font-body cursor-pointer hover:text-white/50 transition-colors duration-300">
              Sīkdatņu politika
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}