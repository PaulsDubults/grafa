import React from 'react';
import { useI18n } from '@/lib/i18n';
import { GoldDots, GoldStars } from './Decorations';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative py-14 px-6 md:px-10 overflow-hidden" style={{ background: '#1e3a5f' }}>
      {/* Subtle paper noise on dark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <svg width="100%" height="100%">
          <filter id="footerPaper">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#footerPaper)" />
        </svg>
      </div>

      <GoldDots className="w-[60px] h-[60px] right-8 top-4" opacity={0.06} count={6} />
      <GoldStars className="w-[50px] h-[40px] left-8 bottom-4" opacity={0.05} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="w-full h-[0.5px] mb-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-heading text-[14px] font-semibold text-white/80 mb-1">
              SIA firma GRĀFA
            </p>
            <p className="text-[10px] text-[#c9a84c]/60 tracking-[0.15em] font-body">
              {t('footer.tagline')}
            </p>
            <p className="text-[11px] text-white/25 font-body mt-3">
              {t('footer.copyright')}
            </p>
          </div>

          <div className="flex gap-6">
            <span className="text-[11px] text-white/30 font-body cursor-pointer hover:text-white/50 transition-colors duration-300">
              {t('footer.privacy')}
            </span>
            <span className="text-[11px] text-white/30 font-body cursor-pointer hover:text-white/50 transition-colors duration-300">
              {t('footer.cookies')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}