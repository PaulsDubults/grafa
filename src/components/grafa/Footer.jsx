import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative py-12 px-6 md:px-10 overflow-hidden" style={{ background: '#08233E' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg width="100%" height="100%">
          <filter id="footP"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#footP)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="w-full h-[1px] mb-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)' }} />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="font-heading text-[14px] font-semibold text-white/70 mb-1">SIA firma GRĀFA</p>
            <p className="text-[10px] text-[#C89B3C]/50 tracking-[0.2em] font-body">{t('footer.tagline')}</p>
            <p className="text-[10px] text-white/18 font-body mt-3">{t('footer.copyright')}</p>
          </div>
          <div className="flex gap-6">
            <span className="text-[10px] text-white/20 font-body cursor-pointer hover:text-white/40 transition-colors">{t('footer.privacy')}</span>
            <span className="text-[10px] text-white/20 font-body cursor-pointer hover:text-white/40 transition-colors">{t('footer.cookies')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}