import React from 'react';
import { useI18n } from '@/lib/i18n';
import { StarConstellation, GoldDotGrid, FeatherTip, SmallPyramid, ScatteredDots } from './Decorations';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative py-16 px-6 md:px-10 overflow-hidden" style={{ background: '#1e3a5f' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg width="100%" height="100%">
          <filter id="footP"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#footP)" />
        </svg>
      </div>

      <StarConstellation className="w-[120px] h-[120px] right-8 top-2" opacity={0.1} />
      <GoldDotGrid className="w-[90px] h-[50px] left-8 bottom-3" rows={3} cols={5} opacity={0.08} />
      <FeatherTip className="w-[40px] md:w-[55px] h-[65px] md:h-[90px] right-[20%] bottom-2" opacity={0.08} color="#c9a84c" rotate={-10} />
      <SmallPyramid className="w-[35px] md:w-[45px] h-[35px] md:h-[45px] left-[25%] top-4" opacity={0.06} color="#c9a84c" />
      <ScatteredDots className="w-[80px] h-[80px] left-[50%] top-2" opacity={0.06} count={8} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="w-full h-[1px] mb-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-heading text-[16px] font-semibold text-white/80 mb-1.5">
              SIA firma GRĀFA
            </p>
            <p className="text-[11px] text-[#c9a84c]/60 tracking-[0.2em] font-body">
              {t('footer.tagline')}
            </p>
            <p className="text-[11px] text-white/20 font-body mt-4">
              {t('footer.copyright')}
            </p>
          </div>

          <div className="flex gap-8">
            <span className="text-[11px] text-white/25 font-body cursor-pointer hover:text-white/50 transition-colors duration-300">
              {t('footer.privacy')}
            </span>
            <span className="text-[11px] text-white/25 font-body cursor-pointer hover:text-white/50 transition-colors duration-300">
              {t('footer.cookies')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}