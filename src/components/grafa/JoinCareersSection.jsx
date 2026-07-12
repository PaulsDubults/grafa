import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import ApplicationForm from './ApplicationForm';
import VacancyDetail from './VacancyDetail';
import { FullFeather } from './Decorations';
import { base44 } from '@/api/base44Client';
import { useI18n } from '@/lib/i18n';

/* Per mockup 5lapa: Combined Pievienojies + Karjera in ONE dark blue section.
   Layout: script text → heading → intro texts → disability inclusion blocks → vacancies → closing text → "GRĀFA" */

export default function JoinCareersSection() {
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

  const openApply = (title) => { setApplicationTitle(title); setApplicationOpen(true); };
  const openDetail = (vacancy) => { setSelectedVacancy(vacancy); setDetailOpen(true); };

  const introTexts = t('careers.introTexts');
  const valueBlocks = t('careers.valueBlocks');

  return (
    <section id="pievienojies" className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#08233E' }}>
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
        <svg width="100%" height="100%"><filter id="jcP"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#jcP)"/></svg>
      </div>

      {/* Feather top-left */}
      <FullFeather className="w-[200px] md:w-[320px] h-[250px] md:h-[400px] left-[-30px] md:left-[-10px] top-[-10px]" opacity={0.1} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
        {/* Script text — typewriter */}
        <div className="mb-6 md:mb-8 min-h-[60px] md:min-h-[80px]">
          <TypewriterText
            text={t('careers.scriptLine')}
            className="font-script text-[24px] md:text-[32px] text-[#C89B3C]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[36px] md:text-[48px] lg:text-[58px] font-semibold text-white mb-6 leading-[1.1]">
            {t('careers.heading')}
          </h2>
          <GoldLine width="w-28" />
        </motion.div>

        {/* Intro texts */}
        <div className="mb-12 md:mb-16 max-w-3xl space-y-4">
          {introTexts.map((text, i) => (
            <motion.p
              key={i}
              className="text-white/70 font-body text-[16px] md:text-[18px] leading-[2]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Disability inclusion blocks */}
        <div className="space-y-4 mb-14 md:mb-18">
          {valueBlocks.map((block, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-white/[0.06] rounded-xl p-5 md:p-6 border border-white/[0.08]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <path d="M10,2 L10,18 M6,14 L10,18 L14,14" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-white/60 font-body text-[15px] md:text-[16px] leading-[1.85] pt-1">{block}</p>
            </motion.div>
          ))}
        </div>

        {/* Vacancies or no-vacancies */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-[#C89B3C]/20 border-t-[#C89B3C] rounded-full animate-spin" />
          </div>
        ) : vacancies.length > 0 ? (
          <>
            <motion.p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#C89B3C] mb-6 font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>{t('careers.vacanciesSubtitle')}</motion.p>
            <div className="space-y-4 mb-14 md:mb-18">
              {vacancies.map((vacancy, i) => (
                <motion.div
                  key={vacancy.id}
                  className="group relative bg-white/[0.06] rounded-xl p-6 md:p-8 border border-white/[0.08] overflow-hidden transition-all duration-500 hover:bg-white/[0.1]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-[18px] md:text-[22px] font-semibold text-white mb-2">{vacancy.title}</h3>
                      <p className="text-white/50 font-body text-[14px] md:text-[16px] leading-[1.85] mb-4">{vacancy.short_description}</p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <button onClick={() => openDetail(vacancy)} className="text-[11px] font-body text-[#C89B3C] tracking-[0.15em] uppercase hover:text-[#E8D1A0] transition-colors flex items-center gap-2">
                          <div className="w-4 h-[1.5px] bg-[#C89B3C]" />{t('careers.buttonReadMore')}
                        </button>
                        <button onClick={() => openApply(vacancy.title)} className="bg-[#C89B3C] text-white text-[11px] font-body tracking-[0.15em] uppercase px-6 py-2.5 rounded-sm hover:bg-[#b8973f] transition-colors">{t('careers.buttonApply')}</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            className="relative bg-white/[0.06] rounded-xl p-7 md:p-9 border border-white/[0.08] overflow-hidden mb-14 md:mb-18"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 font-body text-[15px] md:text-[17px] leading-[2] mb-5">{t('careers.noVacanciesText')}</p>
            <button onClick={() => openApply('')} className="bg-white/10 border border-white/15 text-white text-[12px] font-body tracking-[0.15em] uppercase px-8 py-3 rounded-sm hover:bg-white/15 transition-colors">
              {t('careers.buttonFuture')}
            </button>
          </motion.div>
        )}

        {/* Closing text */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <p className="text-white/50 font-body text-[16px] md:text-[18px] leading-[2] italic max-w-3xl mx-auto mb-8">
            {t('careers.closingText')}
          </p>
          <GoldLine width="w-16" className="mx-auto mb-6" />
          <p className="font-heading text-[20px] md:text-[24px] text-white/30 tracking-[0.1em]">GRĀFA</p>
        </motion.div>
      </div>

      <ApplicationForm open={applicationOpen} onClose={() => setApplicationOpen(false)} vacancyTitle={applicationTitle} />
      <VacancyDetail open={detailOpen} onClose={() => setDetailOpen(false)} vacancy={selectedVacancy} onApply={() => openApply(selectedVacancy?.title)} />
    </section>
  );
}