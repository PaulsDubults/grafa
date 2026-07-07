import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import ApplicationForm from './ApplicationForm';
import VacancyDetail from './VacancyDetail';
import { FullFeather, FeatherTip, SmallFeather, WatercolorStain, GoldCurve, StarConstellation, GoldDotGrid, ScatteredDots, PaperTexture } from './Decorations';
import { base44 } from '@/api/base44Client';
import { useI18n } from '@/lib/i18n';

export default function CareersSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [applicationTitle, setApplicationTitle] = useState('');
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  useEffect(() => {
    base44.entities.Vacancy.filter({ is_active: true }).then((data) => {
      setVacancies(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const openApply = (title) => {
    setApplicationTitle(title);
    setApplicationOpen(true);
  };

  const openDetail = (vacancy) => {
    setSelectedVacancy(vacancy);
    setDetailOpen(true);
  };

  const introTexts = t('careers.introTexts');
  const valueBlocks = t('careers.valueBlocks');

  return (
    <section id="karjera" className="relative py-28 md:py-44 overflow-hidden" style={{ background: '#faf7f2' }}>
      <PaperTexture id="carP" />

      {/* Decorative feather — right side */}
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-40px] md:right-[-10px] top-[5%]" opacity={0.22} />
      <FeatherTip className="w-[90px] md:w-[130px] h-[110px] md:h-[160px] left-[3%] top-[8%]" opacity={0.14} rotate={-12} />
      <SmallFeather className="w-[80px] md:w-[110px] h-[95px] md:h-[140px] left-[8%] bottom-[10%]" opacity={0.12} rotate={8} />

      <WatercolorStain className="left-[-120px] top-[15%]" color="#e8c89a" opacity={0.1} size={480} id="car1" />
      <WatercolorStain className="right-[-100px] bottom-[-30px]" color="#e0b5b0" opacity={0.07} size={380} id="car2" />

      <GoldCurve className="w-[240px] md:w-[360px] h-[55px] md:h-[75px] left-[5%] bottom-[20%]" opacity={0.16} />
      <StarConstellation className="w-[180px] h-[180px] right-4 top-8" opacity={0.25} />
      <GoldDotGrid className="w-[130px] h-[80px] left-8 bottom-16" rows={4} cols={7} opacity={0.2} />
      <ScatteredDots className="w-[110px] h-[110px] right-[25%] bottom-[6%]" opacity={0.18} count={12} />

      {/* Gold line accent beside feather */}
      <motion.div
        className="absolute right-[60px] md:right-[120px] top-[8%] w-[2px] h-[120px] md:h-[200px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, #c9a84c, transparent)' }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 1.5 }}
      />
      {/* Ink drop */}
      <motion.div
        className="absolute right-[56px] md:right-[116px] top-[28%] md:top-[32%] pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <path d="M9,1 C9,1 1,10 1,14 C1,18.5 5,21 9,21 C13,21 17,18.5 17,14 C17,10 9,1 9,1 Z" fill="#1e3a5f" opacity="0.6" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
        {/* 1. Typewriter script text */}
        <div className="mb-8 md:mb-10 min-h-[60px] md:min-h-[80px]">
          <TypewriterText
            text={t('careers.scriptLine')}
            className="font-script text-[20px] md:text-[26px] text-[#c9a84c]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* 2. Heading with fade in */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-6 leading-[1.1]">
            {t('careers.heading')}
          </h2>
          <GoldLine width="w-28" />
        </motion.div>

        {/* 3. Intro texts — sequential fade in */}
        <div className="mb-14 md:mb-18 max-w-3xl space-y-4">
          {introTexts.map((text, i) => (
            <motion.p
              key={i}
              className="text-[#1e3a5f]/55 font-body text-[15px] md:text-[17px] leading-[2]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* 4. Value blocks */}
        <div className="space-y-5 mb-16 md:mb-20">
          {valueBlocks.map((block, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5 bg-white rounded-xl p-6 md:p-8 border border-[#e8e0d4]/50 overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
            >
              <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#c9a84c]/[0.12] flex items-center justify-center">
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                  <path d="M24,8 L24,40 M16,16 L32,16 M16,32 L32,32" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
                  <circle cx="24" cy="24" r="18" stroke="#c9a84c" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
              <p className="text-[#1e3a5f]/65 font-body text-[14px] md:text-[16px] leading-[1.85] pt-1.5">{block}</p>
            </motion.div>
          ))}
        </div>

        {/* 5/6. Vacancies or empty state */}
        <motion.p
          className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-8 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('careers.vacanciesSubtitle')}
        </motion.p>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-[#c9a84c]/20 border-t-[#c9a84c] rounded-full animate-spin" />
          </div>
        ) : vacancies.length > 0 ? (
          <div className="space-y-5 mb-16 md:mb-20">
            {vacancies.map((vacancy, i) => (
              <motion.div
                key={vacancy.id}
                className="group relative bg-white rounded-xl p-7 md:p-9 border border-[#e8e0d4]/50 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,58,95,0.06)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              >
                <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a84c]/[0.12] flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#c9a84c]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-[18px] md:text-[20px] font-semibold text-[#1e3a5f] mb-2">{vacancy.title}</h3>
                    <p className="text-[#1e3a5f]/50 font-body text-[13px] md:text-[15px] leading-[1.85] mb-5">{vacancy.short_description}</p>
                    <div className="flex items-center gap-4 flex-wrap">
                      <button
                        onClick={() => openDetail(vacancy)}
                        className="text-[12px] font-body text-[#c9a84c] tracking-[0.15em] uppercase hover:text-[#b8973f] transition-colors duration-300 flex items-center gap-2"
                      >
                        <div className="w-5 h-[1.5px] bg-[#c9a84c]" />
                        {t('careers.buttonReadMore')}
                      </button>
                      <button
                        onClick={() => openApply(vacancy.title)}
                        className="bg-[#1e3a5f] text-white text-[12px] font-body tracking-[0.15em] uppercase px-7 py-3 rounded-sm hover:bg-[#1e3a5f]/90 transition-all duration-300"
                      >
                        {t('careers.buttonApply')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="relative bg-white rounded-xl p-8 md:p-10 border border-[#e8e0d4]/50 overflow-hidden mb-16 md:mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
            <p className="text-[#1e3a5f]/55 font-body text-[15px] md:text-[16px] leading-[2] mb-6">{t('careers.noVacanciesText')}</p>
            <button
              onClick={() => openApply('')}
              className="relative bg-[#c9a84c] text-white hover:bg-[#b8973f] text-[13px] font-body tracking-[0.2em] uppercase px-10 py-4 transition-all duration-500 rounded-sm overflow-hidden group"
            >
              <span className="relative z-10">{t('careers.buttonFuture')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </motion.div>
        )}

        {/* 9. Closing text */}
        <motion.div
          className="relative bg-[#1e3a5f] rounded-xl p-8 md:p-10 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 5%, #c9a84c 25%, #e8d5a3 50%, #c9a84c 75%, transparent 95%)' }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg width="100%" height="100%">
              <filter id="carClP"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
              <rect width="100%" height="100%" filter="url(#carClP)" />
            </svg>
          </div>
          <svg className="absolute top-4 right-4 w-8 h-8 opacity-[0.15]" viewBox="0 0 30 30" fill="none">
            <path d="M28,2 L28,12 M28,2 L18,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <svg className="absolute bottom-4 left-4 w-8 h-8 opacity-[0.15]" viewBox="0 0 30 30" fill="none">
            <path d="M2,28 L2,18 M2,28 L12,28" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <p className="relative z-10 text-white/70 font-body text-[15px] md:text-[17px] leading-[2] italic">
            {t('careers.closingText')}
          </p>
        </motion.div>
      </div>

      <ApplicationForm open={applicationOpen} onClose={() => setApplicationOpen(false)} vacancyTitle={applicationTitle} />
      <VacancyDetail open={detailOpen} onClose={() => setDetailOpen(false)} vacancy={selectedVacancy} onApply={() => openApply(selectedVacancy?.title)} />
    </section>
  );
}