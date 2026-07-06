import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GoldLine from './GoldLine';
import Footer from './Footer';
import { FullFeather, SmallFeather, PyramidOutline, WatercolorStain, StarConstellation, GoldDotGrid, ScatteredDots, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function ServicePageLayout({ breadcrumbs, title, subtitle, children }) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f5f0e8' }}>
      <PaperTexture id="svcPageP" />

      <div className="relative overflow-hidden" style={{ background: '#faf7f2' }}>
        <PaperTexture id="svcHdrP" />
        <WatercolorStain className="right-[-80px] top-[-30px]" color="#e8c89a" opacity={0.16} size={450} id="svcLW" />
        <FullFeather className="w-[160px] md:w-[240px] h-[400px] md:h-[600px] right-[-10px] md:right-4 top-0" opacity={0.25} />
        <SmallFeather className="w-[50px] md:w-[70px] h-[130px] md:h-[180px] left-4 bottom-4" opacity={0.18} rotate={-10} />
        <PyramidOutline className="w-[250px] md:w-[350px] h-[240px] md:h-[340px] left-[10%] top-[-15px]" opacity={0.08} />
        <StarConstellation className="w-[160px] h-[160px] left-6 top-4" opacity={0.28} />
        <GoldDotGrid className="w-[120px] h-[70px] right-[15%] bottom-4" rows={4} cols={6} opacity={0.25} />
        <ScatteredDots className="w-[90px] h-[90px] left-[30%] bottom-8" opacity={0.2} count={10} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 pt-10 pb-14 md:pt-14 md:pb-20">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 text-[12px] font-body text-[#1e3a5f]/40 hover:text-[#1e3a5f]/70 transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t('servicePages.back')}</span>
            </button>

            <div className="h-4 w-[1px] bg-[#1e3a5f]/10" />

            <nav className="flex items-center gap-1.5 text-[11px] font-body text-[#1e3a5f]/35">
              <Link to="/" className="hover:text-[#1e3a5f]/60 transition-colors">{t('servicePages.home')}</Link>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  <ChevronRight className="w-3 h-3" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-[#1e3a5f]/60 transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-[#1e3a5f]/55">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {subtitle && (
              <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
                {subtitle}
              </p>
            )}
            <h1 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-[#1e3a5f] mb-5 leading-tight">
              {title}
            </h1>
            <GoldLine width="w-24" className="mb-0" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10">
        {children}
      </div>

      <Footer />
    </div>
  );
}