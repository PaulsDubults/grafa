import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import ApplicationForm from './ApplicationForm';
import VacancyDetail from './VacancyDetail';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
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
    <section id="karjera" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="carP" />
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-40px] md:right-[-10px] top-[5%]" opacity={0.18} />
      <WatercolorStain className="left-[-120px] top-[15%]" color="#e8c89a" opacity={0.08} size={480} id="car1" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="mb-8 md:mb-10 min-h-[60px] md:min-h-[80px]">
          <TypewriterText
            text={t('careers.scriptLine')}
            className="font-script text-[24px] md:text-[32px] text-[#C89B3C]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[38px] md:text-[54px] lg:text-[64px] font-semibold text-[#08233E] mb-6 leading-[1.1]">
            {t('careers.heading')}
          </h2>
          <GoldLine width="w-28" />
        </motion.div>

        <div className="mb-14 md:mb-18 max-w-3xl space-y-4">
          {introTexts.map((text, i) => (
            <motion.p
              key={i}
              className="text-[#08233E] font-body text-[17px] md:text-[19px] leading-[2]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <div className="space-y-5 mb-16 md:mb-20">
          {valueBlocks.map((block, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5 bg-white rounded-xl p-6 md:p-8 border border-[#e8e0d4]/50 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
            >
              <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center">
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                  <path d="M24,8 L24,40 M16,16 L32,16 M16,32 L32,32" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
                  <circle cx="24" cy="24" r="18" stroke="#C89B3C" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
              <p className="text-[#08233E] font-body text-[16px] md:text-[18px] leading-[1.85] pt-1.5">{block}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#C89B3C] mb-8 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('careers.vacanciesSubtitle')}
        </motion.p>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-[#C89B3C]/20 border-t-[#C89B3C] rounded-full animate-spin" />
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
                <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-[20px] md:text-[24px] font-semibold text-[#08233E] mb-2">{vacancy.title}</h3>
                    <p className="text-[#08233E]/60 font-body text-[15px] md:text-[17px] leading-[1.85] mb-5">{vacancy.short_description}</p>
                    <div className="flex items-center gap-4 flex-wrap">
                      <button
                        onClick={() => openDetail(vacancy)}
                        className="text-[12px] font-body text-[#C89B3C] tracking-[0.15em] uppercase hover:text-[#b8973f] transition-colors duration-300 flex items-center gap-2"
                      >
                        <div className="w-5 h-[1.5px] bg-[#C89B3C]" />
                        {t('careers.buttonReadMore')}
                      </button>
                      <button
                        onClick={() => openApply(vacancy.title)}
                        className="bg-[#08233E] text-white text-[12px] font-body tracking-[0.15em] uppercase px-7 py-3 rounded-sm hover:bg-[#08233E]/90 transition-all duration-300"
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
            <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
            <p className="text-[#08233E] font-body text-[17px] md:text-[18px] leading-[2] mb-6">{t('careers.noVacanciesText')}</p>
            <button
              onClick={() => openApply('')}
              className="relative bg-[#C89B3C] text-white hover:bg-[#b8973f] text-[13px] font-body tracking-[0.2em] uppercase px-10 py-4 transition-all duration-500 rounded-sm overflow-hidden group"
            >
              <span className="relative z-10">{t('careers.buttonFuture')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </motion.div>
        )}

        <motion.div
          className="relative bg-[#08233E] rounded-xl p-8 md:p-10 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent 5%, #C89B3C 25%, #E8D1A0 50%, #C89B3C 75%, transparent 95%)' }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg width="100%" height="100%">
              <filter id="carClP"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
              <rect width="100%" height="100%" filter="url(#carClP)" />
            </svg>
          </div>
          <p className="relative z-10 text-white/70 font-body text-[17px] md:text-[19px] leading-[2] italic">
            {t('careers.closingText')}
          </p>
        </motion.div>
      </div>

      <ApplicationForm open={applicationOpen} onClose={() => setApplicationOpen(false)} vacancyTitle={applicationTitle} />
      <VacancyDetail open={detailOpen} onClose={() => setDetailOpen(false)} vacancy={selectedVacancy} onApply={() => openApply(selectedVacancy?.title)} />
    </section>
  );
}