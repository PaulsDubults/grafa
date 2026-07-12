import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import TypewriterText from './TypewriterText';
import ApplicationForm from './ApplicationForm';
import VacancyDetail from './VacancyDetail';
import { FullFeather } from './Decorations';
import { base44 } from '@/api/base44Client';
import { useI18n } from '@/lib/i18n';

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
    <section id="pievienojies" className="relative py-16 md:py-24 overflow-hidden" style={{ background: '#08233E' }}>
      {/* Paper noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
        <svg width="100%" height="100%"><filter id="jcP"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#jcP)"/></svg>
      </div>

      <FullFeather className="w-[200px] md:w-[320px] h-[250px] md:h-[400px] left-[-30px] md:left-[-10px] top-[-10px]" opacity={0.1} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Script text */}
        <div className="mb-6 md:mb-8 min-h-[50px] md:min-h-[60px]">
          <TypewriterText
            text={t('careers.scriptLine')}
            className="font-script text-[18px] md:text-[22px] text-[#C89B3C]/70 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading with gold divider */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[34px] md:text-[46px] lg:text-[54px] font-semibold text-white mb-4 leading-[1.1]">
            {t('careers.heading')}
          </h2>
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C89B3C]/50 via-[#E8D1A0]/30 to-transparent" />
        </motion.div>

        {/* Intro texts */}
        <div className="mb-10 md:mb-12 max-w-3xl space-y-3">
          {introTexts.map((text, i) => (
            <motion.p
              key={i}
              className="text-white/60 font-body text-[14px] md:text-[15px] leading-[2]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Value blocks (disability inclusion) */}
        <div className="space-y-3 mb-10 md:mb-12">
          {valueBlocks.map((block, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3.5 bg-white/[0.05] rounded-lg p-4 md:p-5 border border-white/[0.06]"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#C89B3C]/15 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M10,2 L10,18 M6,14 L10,18 L14,14" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="text-white/50 font-body text-[13px] md:text-[14px] leading-[1.85] pt-1">{block}</p>
            </motion.div>
          ))}
        </div>

        {/* Vacancies */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-7 h-7 border-2 border-[#C89B3C]/20 border-t-[#C89B3C] rounded-full animate-spin" />
          </div>
        ) : vacancies.length > 0 ? (
          <>
            <motion.p className="font-body text-[10px] tracking-[0.25em] uppercase text-[#C89B3C] mb-5 font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>{t('careers.vacanciesSubtitle')}</motion.p>
            <div className="space-y-3 mb-10 md:mb-12">
              {vacancies.map((vacancy, i) => (
                <motion.div
                  key={vacancy.id}
                  className="group relative bg-white/[0.05] rounded-lg p-5 md:p-6 border border-white/[0.06] overflow-hidden transition-all duration-400 hover:bg-white/[0.08]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C89B3C]/15 flex items-center justify-center">
                      <Briefcase className="w-4.5 h-4.5 text-[#C89B3C]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-[17px] md:text-[19px] font-semibold text-white mb-1.5">{vacancy.title}</h3>
                      <p className="text-white/40 font-body text-[13px] md:text-[14px] leading-[1.85] mb-4">{vacancy.short_description}</p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <button onClick={() => openDetail(vacancy)} className="text-[11px] font-body text-[#C89B3C] tracking-[0.12em] uppercase hover:text-[#E8D1A0] transition-colors flex items-center gap-2">
                          <span className="w-4 h-[1px] bg-[#C89B3C]" />{t('careers.buttonReadMore')}
                        </button>
                        <button onClick={() => openApply(vacancy.title)} className="bg-[#C89B3C] text-white text-[11px] font-body tracking-[0.12em] uppercase px-5 py-2 rounded-sm hover:bg-[#b8973f] transition-colors">{t('careers.buttonApply')}</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            className="relative bg-white/[0.05] rounded-lg p-6 md:p-7 border border-white/[0.06] overflow-hidden mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/55 font-body text-[14px] md:text-[15px] leading-[2] mb-5">{t('careers.noVacanciesText')}</p>
            <button onClick={() => openApply('')} className="bg-white/[0.08] border border-white/[0.12] text-white text-[11px] font-body tracking-[0.15em] uppercase px-7 py-2.5 rounded-sm hover:bg-white/[0.12] transition-colors">
              {t('careers.buttonFuture')}
            </button>
          </motion.div>
        )}

        {/* Closing text */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-white/40 font-body text-[14px] md:text-[15px] leading-[2] italic max-w-3xl mx-auto mb-6">
            {t('careers.closingText')}
          </p>
          <div className="w-14 h-[1.5px] mx-auto mb-5" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, transparent)' }} />
          <p className="font-heading text-[18px] md:text-[22px] text-white/25 tracking-[0.1em]">GRĀFA</p>
        </motion.div>
      </div>

      <ApplicationForm open={applicationOpen} onClose={() => setApplicationOpen(false)} vacancyTitle={applicationTitle} />
      <VacancyDetail open={detailOpen} onClose={() => setDetailOpen(false)} vacancy={selectedVacancy} onApply={() => openApply(selectedVacancy?.title)} />
    </section>
  );
}