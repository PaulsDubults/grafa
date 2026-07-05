import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WatercolorBackground from './WatercolorBackground';
import FeatherDecoration from './FeatherDecoration';
import GoldLine from './GoldLine';
import DecorativeAsset from './DecorativeAsset';
import Footer from './Footer';

export default function ServicePageLayout({ breadcrumbs, title, subtitle, children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f5f0e8' }}>
      {/* Paper texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg width="100%" height="100%">
          <filter id="pagePaper"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
          <rect width="100%" height="100%" filter="url(#pagePaper)"/>
        </svg>
      </div>

      {/* Header / Breadcrumb area */}
      <div className="relative overflow-hidden" style={{ background: '#faf7f2' }}>
        <WatercolorBackground variant="services" />
        <FeatherDecoration className="absolute -right-10 top-10 w-[120px] h-[320px] hidden lg:block" opacity={0.04} />
        <DecorativeAsset asset="pyramid" className="hidden lg:block -left-2 bottom-4 w-[200px]" opacity={0.28} />
        <DecorativeAsset asset="pyramid" className="hidden lg:block right-[6%] top-2 w-[180px] rotate-[8deg]" opacity={0.2} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 pt-10 pb-14 md:pt-14 md:pb-20">
          {/* Back + Breadcrumb */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 text-[12px] font-body text-[#1e3a5f]/40 hover:text-[#1e3a5f]/70 transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Atpakaļ</span>
            </button>

            <div className="h-4 w-[1px] bg-[#1e3a5f]/10" />

            <nav className="flex items-center gap-1.5 text-[11px] font-body text-[#1e3a5f]/35">
              <Link to="/" className="hover:text-[#1e3a5f]/60 transition-colors">Sākums</Link>
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

          {/* Page title */}
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

      {/* Content */}
      <div className="relative z-10">
        <DecorativeAsset asset="pyramid" className="hidden lg:block -right-4 top-16 w-[300px] rotate-3" opacity={0.28} />
        <DecorativeAsset asset="pyramid" className="hidden lg:block left-0 bottom-16 w-[260px]" opacity={0.25} />
        <DecorativeAsset asset="featherGoldSwirl" className="hidden lg:block right-[8%] bottom-[25%] w-[280px] rotate-6" opacity={0.2} />
        <DecorativeAsset asset="featherCircle" className="hidden lg:block left-[8%] top-[45%] w-[150px]" opacity={0.18} />
        {children}
      </div>

      <Footer />
    </div>
  );
}