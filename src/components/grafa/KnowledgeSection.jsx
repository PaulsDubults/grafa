import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

/* Per mockup 4lapa: Open book layout with two interactive calendars — Grāmatveža kalendārs (left page) and Apmācību kalendārs (right page). Each calendar has month navigation, highlighted dates, and info panels. */

const DAYS_LV = ['Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se', 'Sv'];
const MONTHS_LV = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];

/* Sample accounting reminders per month */
const accountingDates = {
  '2025-6': [ // July 2025 (0-indexed month=6)
    { day: 10, title: 'Pašnodarbinātajiem', desc: 'Atgādinām, ka tuvojas ceturkšņa VSAOI ziņojuma iesniegšanas termiņš.\n\nSavlaicīga iesniegšana palīdz izvairīties no nokavējumiem un soda sankcijām.', icon: '📋' },
    { day: 15, title: 'Cieni savu grāmatvedi!', desc: 'Iesniedz dokumentus līdz 10. datumam.', icon: '📅' },
    { day: 23, title: 'Nodokļi', desc: 'Pārbaudi, vai nav neapmaksātu nodokļu maksājumu.', icon: '🏛️' },
    { day: 31, title: 'Mēneša beigas', desc: 'Pārbaudi mēneša grāmatvedības pārskatu un finanšu rādītājus.', icon: '📊' },
  ],
  '2025-7': [ // August
    { day: 10, title: 'Dokumentu iesniegšana', desc: 'Iesniedz dokumentus grāmatvedim.', icon: '📋' },
    { day: 20, title: 'PVN deklarācija', desc: 'PVN deklarācijas iesniegšanas termiņš.', icon: '🏛️' },
  ],
};

/* Sample training dates */
const trainingDates = {
  '2025-6': [
    { day: 20, title: 'Apmācība', desc: 'Pieejams uzņēmuma darbinieku apmācībām grāmatvedības un nodokļu jautājumos.', status: 'free' },
    { day: 25, title: 'Apmācība', desc: 'Grāmatvedības pamati jauniem darbiniekiem.', status: 'reserved' },
    { day: 27, title: 'Konsultācija', desc: 'Individuāla finanšu konsultācija.', status: 'free' },
  ],
  '2025-7': [
    { day: 5, title: 'Nodokļu apmācība', desc: 'PVN un nodokļu optimizācijas seminārs.', status: 'free' },
    { day: 15, title: 'Grāmatvedība', desc: 'Grāmatvedības kurss uzņēmējiem.', status: 'free' },
  ],
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1; // Monday = 0
}

function CalendarGrid({ year, month, highlightedDays, selectedDay, onSelectDay }) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const cells = [];

  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const today = new Date();
  const isToday = (d) => today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
  const isHighlighted = (d) => highlightedDays.includes(d);

  return (
    <div>
      <div className="grid grid-cols-7 gap-0 mb-1">
        {DAYS_LV.map((d) => (
          <div key={d} className="text-center font-body text-[10px] md:text-[11px] text-[#08233E]/40 py-1 font-medium">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0">
        {cells.map((day, i) => (
          <button
            key={i}
            className={`relative h-8 md:h-9 flex items-center justify-center text-[12px] md:text-[13px] font-body transition-all duration-200 rounded-sm
              ${!day ? '' : isHighlighted(day)
                ? 'text-[#C89B3C] font-bold cursor-pointer hover:bg-[#C89B3C]/10'
                : isToday(day)
                  ? 'text-[#08233E] font-semibold bg-[#08233E]/5 rounded-full'
                  : 'text-[#08233E]/60 hover:bg-[#08233E]/5 cursor-default'
              }
              ${selectedDay === day ? 'bg-[#C89B3C]/15 ring-1 ring-[#C89B3C]/30 rounded-full' : ''}
            `}
            onClick={() => day && isHighlighted(day) && onSelectDay(day)}
            disabled={!day || !isHighlighted(day)}
          >
            {day}
            {day && isHighlighted(day) && (
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C89B3C]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function BookCalendar({ title, subtitle, year, month, onPrev, onNext, dates, icon, isTraining }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const highlightedDays = dates.map(d => d.day);
  const selectedDate = dates.find(d => d.day === selectedDay);

  useEffect(() => { setSelectedDay(null); }, [month]);

  return (
    <div className="flex-1 min-w-0">
      {/* Calendar header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#C89B3C]/[0.15] flex items-center justify-center">
          <span className="text-lg">{icon}</span>
        </div>
        <div>
          <h3 className="font-heading text-[16px] md:text-[20px] font-bold text-[#08233E] uppercase tracking-wide leading-tight">{title}</h3>
          <p className="font-body text-[11px] md:text-[12px] text-[#08233E]/40 leading-snug">{subtitle}</p>
        </div>
      </div>

      {/* Month navigation */}
      <div className="flex items-center justify-between mb-3 bg-[#08233E] rounded-lg px-4 py-2">
        <button onClick={onPrev} className="text-white/60 hover:text-white transition-colors"><ChevronLeft size={16} /></button>
        <span className="font-heading text-[13px] md:text-[14px] text-white font-semibold tracking-wide uppercase">
          {MONTHS_LV[month]} {year}
        </span>
        <button onClick={onNext} className="text-white/60 hover:text-white transition-colors"><ChevronRight size={16} /></button>
      </div>

      {/* Calendar grid */}
      <CalendarGrid
        year={year}
        month={month}
        highlightedDays={highlightedDays}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
      />

      {/* Selected date info */}
      <AnimatePresence mode="wait">
        {selectedDate && (
          <motion.div
            key={selectedDay}
            className="mt-4 bg-[#FBF7F0] rounded-lg p-4 border border-[#e8e0d4]/50"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-heading text-[13px] md:text-[14px] font-bold text-[#08233E] mb-1">
              {selectedDay}. {MONTHS_LV[month]}
            </p>
            <p className="font-body text-[12px] md:text-[13px] text-[#08233E]/50 mb-2 font-medium">{selectedDate.title}</p>
            <p className="font-body text-[11px] md:text-[12px] text-[#08233E]/60 leading-[1.7] whitespace-pre-line">{selectedDate.desc}</p>
            {isTraining && selectedDate.status === 'free' && (
              <button className="mt-3 bg-[#C89B3C] text-white text-[11px] font-body tracking-[0.1em] uppercase px-5 py-2 rounded-sm hover:bg-[#b8973f] transition-colors">
                Pieteikt rezervāciju
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom reminders for accounting calendar */}
      {!isTraining && !selectedDate && dates.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="font-body text-[10px] text-[#C89B3C] tracking-[0.2em] uppercase font-medium mb-2">Citi svarīgi atgādinājumi šajā mēnesī</p>
          {dates.slice(0, 3).map((d, i) => (
            <button
              key={i}
              onClick={() => setSelectedDay(d.day)}
              className="flex items-center gap-3 w-full text-left hover:bg-[#C89B3C]/5 rounded-lg p-2 transition-colors"
            >
              <span className="text-sm">{d.icon}</span>
              <div className="flex-1 min-w-0">
                <span className="font-heading text-[12px] font-bold text-[#08233E]">{d.day}. {MONTHS_LV[month]}</span>
                <span className="font-body text-[11px] text-[#08233E]/50 ml-2">{d.title}</span>
              </div>
              <svg viewBox="0 0 16 16" className="w-3 h-3 text-[#C89B3C] flex-shrink-0"><path d="M6,3 L11,8 L6,13" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          ))}
        </div>
      )}

      {/* Training date legend */}
      {isTraining && !selectedDate && (
        <div className="mt-4 flex items-center gap-4 text-[11px] font-body text-[#08233E]/50">
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#C89B3C]" /> Brīvs</div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#08233E]/30" /> Rezervēts</div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#08233E]/10" /> Nav plānotas</div>
        </div>
      )}
    </div>
  );
}

export default function KnowledgeSection() {
  const { t } = useI18n();
  const [leftMonth, setLeftMonth] = useState({ year: 2025, month: 6 }); // July
  const [rightMonth, setRightMonth] = useState({ year: 2025, month: 6 });

  const getDateKey = (y, m) => `${y}-${m}`;

  const leftDates = accountingDates[getDateKey(leftMonth.year, leftMonth.month)] || [];
  const rightDates = trainingDates[getDateKey(rightMonth.year, rightMonth.month)] || [];

  const prevMonth = (current, setter) => {
    setter(prev => {
      const m = prev.month - 1;
      return m < 0 ? { year: prev.year - 1, month: 11 } : { ...prev, month: m };
    });
  };

  const nextMonth = (current, setter) => {
    setter(prev => {
      const m = prev.month + 1;
      return m > 11 ? { year: prev.year + 1, month: 0 } : { ...prev, month: m };
    });
  };

  return (
    <section id="zinasanu-telpa" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="knowP" />
      <FullFeather className="w-[260px] md:w-[400px] h-[320px] md:h-[500px] right-[-50px] md:right-[-20px] top-[0%]" opacity={0.16} />
      <WatercolorStain className="left-[-100px] top-[20%]" color="#d4b878" opacity={0.1} size={550} id="know1" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header — script text + heading + subtitle */}
        <div className="mb-12 md:mb-16">
          <motion.p
            className="font-script text-[24px] md:text-[32px] text-[#C89B3C]/80 leading-[1.6] italic mb-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('knowledge.scriptLine')}
          </motion.p>
          <motion.h2
            className="font-heading text-[42px] md:text-[58px] lg:text-[72px] font-bold text-[#08233E] mb-3 leading-[1.05] uppercase tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            {t('knowledge.heading')}
          </motion.h2>
          <motion.p
            className="font-body text-[14px] md:text-[16px] text-[#08233E]/45"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('knowledge.subtitle')}
          </motion.p>
        </div>

        {/* Open book layout */}
        <motion.div
          className="relative bg-white rounded-xl border border-[#e8e0d4]/50 overflow-hidden shadow-[0_8px_40px_rgba(30,58,95,0.06)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Gold binding spine */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] hidden md:block" style={{ background: 'linear-gradient(180deg, #C89B3C, #E8D1A0, #C89B3C, #E8D1A0, #C89B3C)' }} />
          {/* Binding dots */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center justify-evenly py-8 z-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#C89B3C] shadow-[0_0_4px_rgba(201,168,76,0.3)]" />
            ))}
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left page — Grāmatveža kalendārs */}
            <div className="flex-1 p-6 md:p-8 md:pr-10 border-b md:border-b-0 md:border-r border-[#e8e0d4]/30">
              <BookCalendar
                title="Grāmatveža"
                subtitle="Svarīgākie termiņi un draudzīgi atgādinājumi uzņēmējiem."
                year={leftMonth.year}
                month={leftMonth.month}
                onPrev={() => prevMonth(leftMonth, setLeftMonth)}
                onNext={() => nextMonth(leftMonth, setLeftMonth)}
                dates={leftDates}
                icon="📅"
                isTraining={false}
              />
            </div>

            {/* Right page — Apmācību kalendārs */}
            <div className="flex-1 p-6 md:p-8 md:pl-10">
              <BookCalendar
                title="Apmācību"
                subtitle="Piedāvājam datumus uzņēmumu darbinieku apmācībām."
                year={rightMonth.year}
                month={rightMonth.month}
                onPrev={() => prevMonth(rightMonth, setRightMonth)}
                onNext={() => nextMonth(rightMonth, setRightMonth)}
                dates={rightDates}
                icon="📖"
                isTraining={true}
              />
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="bg-[#FBF7F0] border-t border-[#e8e0d4]/30 px-6 md:px-8 py-4 flex items-center justify-center gap-2 text-center">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-[#C89B3C] flex-shrink-0"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M10,6 L10,11 M10,13 L10,14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            <p className="font-body text-[12px] md:text-[13px] text-[#08233E]/50">
              Apmācības organizējam Jūsu uzņēmuma telpās ērtā laikā, kas piemērots Jūsu komandai.
            </p>
          </div>

          {/* Bottom heart decoration */}
          <div className="flex justify-center py-3">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#C89B3C]/30">
              <path d="M12,21 C12,21 3,14 3,8 C3,4 6,2 9,4 C10.5,5 12,7 12,7 C12,7 13.5,5 15,4 C18,2 21,4 21,8 C21,14 12,21 12,21Z" fill="currentColor"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}