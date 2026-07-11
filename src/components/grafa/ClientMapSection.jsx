import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldLine from './GoldLine';
import { PaperTexture, StarConstellation, GoldDotGrid, ScatteredDots, GoldCurve, WatercolorStain } from './Decorations';
import { useI18n } from '@/lib/i18n';
import LatviaSvgMap from './LatviaSvgMap';
import ClientMarker from './ClientMarker';

const CLIENT_DATA = [
  { id: 'jelgava', name: { lv: 'Jelgava', ru: 'Елгава' }, count: 30, x: 46, y: 64, isHQ: true },
  { id: 'riga', name: { lv: 'Rīga', ru: 'Рига' }, count: 16, x: 52, y: 38 },
  { id: 'liepaja', name: { lv: 'Liepāja', ru: 'Лиепая' }, count: 6, x: 14, y: 60 },
  { id: 'jelgavas_nov', name: { lv: 'Jelgavas nov.', ru: 'Елгавский кр.' }, count: 9, x: 36, y: 54 },
  { id: 'ogres_nov', name: { lv: 'Ogres nov.', ru: 'Огрский кр.' }, count: 2, x: 66, y: 46 },
  { id: 'baldone', name: { lv: 'Baldone', ru: 'Балдоне' }, count: 1, x: 57, y: 55 },
  { id: 'bauskas_nov', name: { lv: 'Bauskas nov.', ru: 'Бауский кр.' }, count: 1, x: 52, y: 74 },
  { id: 'dobele', name: { lv: 'Dobele', ru: 'Добеле' }, count: 1, x: 35, y: 68 },
  { id: 'jurmala', name: { lv: 'Jūrmala', ru: 'Юрмала' }, count: 1, x: 42, y: 36 },
  { id: 'marupes_nov', name: { lv: 'Mārupes nov.', ru: 'Марупский кр.' }, count: 1, x: 48, y: 44 },
  { id: 'olaine', name: { lv: 'Olaine', ru: 'Олайне' }, count: 1, x: 42, y: 50 },
  { id: 'ropazu_nov', name: { lv: 'Ropažu nov.', ru: 'Ропажский кр.' }, count: 1, x: 60, y: 34 },
  { id: 'ventspils', name: { lv: 'Ventspils', ru: 'Вентспилс' }, count: 1, x: 17, y: 30 },
];

const TOTAL_CLIENTS = CLIENT_DATA.reduce((s, c) => s + c.count, 0);

export default function ClientMapSection() {
  const { t, language } = useI18n();
  const [activeId, setActiveId] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mapRef.current && !mapRef.current.contains(e.target)) {
        setActiveId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="musu-klienti" className="relative py-28 md:py-40 overflow-hidden" style={{ background: '#FBF7F0' }}>
      <PaperTexture id="clientMapP" />
      <WatercolorStain className="left-[-100px] top-[15%]" color="#d4b878" opacity={0.1} size={450} id="cmap1" />
      <WatercolorStain className="right-[-80px] bottom-[-20px]" color="#e0b5b0" opacity={0.08} size={350} id="cmap2" />
      <StarConstellation className="w-[180px] h-[180px] right-6 top-10" opacity={0.25} />
      <GoldDotGrid className="w-[120px] h-[70px] left-6 bottom-16" rows={4} cols={7} opacity={0.2} />
      <ScatteredDots className="w-[100px] h-[100px] left-[25%] top-[75%]" opacity={0.18} count={12} />
      <GoldCurve className="w-[240px] md:w-[340px] h-[50px] md:h-[65px] right-[10%] top-[35%]" opacity={0.15} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#C89B3C] mb-5 font-medium">
            {t('clientMap.subtitle')}
          </p>
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#08233E] mb-6 leading-[1.1]">
            {t('clientMap.heading')}
          </h2>
          <GoldLine width="w-28" className="mx-auto mb-8" />
          <p className="text-[#08233E]/50 font-body text-[15px] md:text-[17px] leading-[1.9] max-w-2xl mx-auto">
            {t('clientMap.description')}
          </p>
        </motion.div>

        <motion.div
          ref={mapRef}
          className="relative max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="relative w-full" style={{ paddingBottom: '62%' }}>
            <div className="absolute inset-0">
              <LatviaSvgMap />

              {CLIENT_DATA.map((loc, i) => (
                <ClientMarker
                  key={loc.id}
                  location={loc}
                  language={language}
                  isActive={activeId === loc.id}
                  onToggle={() => setActiveId(prev => prev === loc.id ? null : loc.id)}
                  index={i}
                  clientSuffix={t('clientMap.clientSuffix')}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="flex items-center justify-center gap-8 mt-10 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#2E5D50]" />
              <span className="text-[12px] md:text-[13px] font-body text-[#08233E]/50">{t('clientMap.legendLocation')}</span>
            </div>
            <div className="text-[13px] md:text-[14px] font-body text-[#08233E]/40">
              {t('clientMap.totalLabel')}: <span className="font-semibold text-[#08233E]/70">{TOTAL_CLIENTS}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}