import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, BookOpen } from 'lucide-react';
import { FullFeather, HalfFeather, WatercolorStain, PaperTexture } from './Decorations';
import TypewriterText from './TypewriterText';
import { useI18n } from '@/lib/i18n';

const LV_MONTHS = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
const LV_DAYS = ['Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se', 'Sv'];

const accountantReminders = {
  '2026-10-2': { title: 'Gada inventarizācija', desc: 'Gada inventarizācijas turpināšana pirms 2026. gada slēguma.' },
  '2026-10-16': { title: 'Paziņojumi VID un NĪN', desc: 'Paziņojumu par fiziskajām personām izmaksātajām summām iesniegšana VID par oktobri. Nekustamā īpašuma nodokļa 2026. gada IV ceturkšņa maksājums.' },
  '2026-10-17': { title: 'Darba devēja ziņojumi', desc: 'Darba devēja ziņojumu iesniegšana VID par oktobri – VSAOI un IIN dati.' },
  '2026-10-20': { title: 'PVN un UIN deklarācijas', desc: 'PVN deklarāciju un pielikumu iesniegšana par oktobri. UIN deklarāciju iesniegšana par oktobri, ja ir deklarējami objekti.' },
  '2026-10-23': { title: 'Nodokļu samaksas termiņš', desc: 'Nodokļu samaksas termiņš – PVN, UIN, VSAOI un citi attiecīgajā termiņā maksājamie nodokļi.' },
};

const trainingDates = {
  '2026-10-20': { title: 'Apmācība pieejama', desc: 'Pieejams uzņēmuma darbinieku apmācībām.', status: 'free' },
  '2026-10-25': { title: 'Apmācība pieejama', desc: 'Pieejams uzņēmuma darbinieku apmācībām.', status: 'free' },
  '2026-10-27': { title: 'Rezervēts', desc: 'Šis datums jau ir rezervēts.', status: 'reserved' },
};

function CalendarGrid({ year, month, highlights, onDateClick, selectedDate }) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {LV_DAYS.map((d) => (
          <div key={d} className="text-center text-[11px] font-medium text-[#08233E]/40 py-1 font-body">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const key = `${year}-${month}-${day}`;
          const hasHighlight = highlights[key];
          const isSelected = selectedDate === key;
          const status = hasHighlight?.status;
          return (
            <button
              key={i}
              onClick={() => hasHighlight && onDateClick(key)}
              className={`w-8 h-8 lg:w-9 lg:h-9 rounded-lg text-[13px] font-body flex items-center justify-center transition-all
                ${hasHighlight ? 'cursor-pointer font-bold' : 'cursor-default'}
                ${isSelected ? 'bg-[#C89B3C] text-white ring-2 ring-[#C89B3C]/30' :
                  status === 'reserved' ? 'bg-[#08233E]/10 text-[#08233E]' :
                  hasHighlight ? 'bg-[#C89B3C]/15 text-[#08233E] hover:bg-[#C89B3C]/30' :
                  'text-[#08233E]/70 hover:bg-[#F5EDE0]/60'}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CalendarPanel({ title, icon: Icon, highlights, color }) {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(10);
  const [selectedDate, setSelectedDate] = useState(null);
  const selectedInfo = selectedDate ? highlights[selectedDate] : null;

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(year - 1); } else setMonth(month - 1); setSelectedDate(null); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(year + 1); } else setMonth(month + 1); setSelectedDate(null); };

  return (
    <div className="bg-white/80 backdrop-blur border border-[#e8e0d4]/50 rounded-xl overflow-hidden">
      <div className={`p-4 ${color === 'navy' ? 'bg-[#08233E]/[0.06]' : 'bg-[#C89B3C]/[0.08]'}`}>
        <div className="flex items-center gap-2 mb-1">
          <Icon size={18} className={color === 'navy' ? 'text-[#08233E]' : 'text-[#C89B3C]'} strokeWidth={1.5} />
          <h3 className="font-heading text-[#08233E] font-semibold text-[15px] uppercase tracking-wider">{title}</h3>
        </div>
        <p className="text-[#08233E]/40 text-[11px] font-body">
          {color === 'navy' ? 'Svarīgākie termiņi un draudzīgi atgādinājumi uzņēmējiem.' : 'Piedāvājam datumus uzņēmumu darbinieku apmācībām.'}
        </p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="p-1 hover:bg-[#F5EDE0] rounded-lg transition-colors"><ChevronLeft size={16} className="text-[#08233E]/40" /></button>
          <span className="font-heading text-[#08233E] font-semibold uppercase text-[13px] tracking-wider">{LV_MONTHS[month]} {year}</span>
          <button onClick={nextMonth} className="p-1 hover:bg-[#F5EDE0] rounded-lg transition-colors"><ChevronRight size={16} className="text-[#08233E]/40" /></button>
        </div>
        <CalendarGrid year={year} month={month} highlights={highlights} onDateClick={setSelectedDate} selectedDate={selectedDate} />
        {selectedInfo && (
          <motion.div className="mt-4 p-3.5 bg-[#F5EDE0]/50 rounded-lg border border-[#C89B3C]/10" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <p className="font-heading text-[#08233E] font-semibold text-[13px] mb-1">{selectedDate.split('-')[2]}. {LV_MONTHS[parseInt(selectedDate.split('-')[1])]}</p>
            <h4 className="text-[#08233E] font-medium text-[14px] mb-0.5">{selectedInfo.title}</h4>
            <p className="text-[#08233E]/50 text-[12px] font-body">{selectedInfo.desc}</p>
            {selectedInfo.status === 'free' && (
              <button className="mt-3 bg-[#C89B3C] text-white px-4 py-2 rounded-lg text-[12px] font-body font-medium hover:bg-[#b8973f] transition-colors">Pieteikt rezervāciju</button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function KnowledgeSection() {
  const { t } = useI18n();
  const [typewriterDone, setTypewriterDone] = useState(false);

  return (
    <section id="zinasanu-telpa" className="relative py-16 md:py-24 overflow-x-clip">
      <PaperTexture id="knwP" />

      <WatercolorStain className="left-[-100px] top-[20%]" color="#b8cde8" opacity={0.1} size={480} id="knw1" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Script text */}
        <div className="mb-6 md:mb-8 min-h-[50px] md:min-h-[60px]">
          <TypewriterText
            text={t('knowledge.scriptLine')}
            className="font-script text-[18px] md:text-[22px] text-[#08233E]/70 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading with gold divider */}
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-[38px] md:text-[52px] lg:text-[60px] font-semibold text-[#08233E] mb-2 leading-[1.1]">
            {t('knowledge.heading')}
          </h2>
          <p className="text-[#08233E]/50 font-body text-[14px] md:text-[15px] mb-4">{t('knowledge.subtitle')}</p>
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C89B3C]/60 via-[#E8D1A0]/40 to-transparent" />
        </motion.div>

        {/* Two calendars */}
        <motion.div
          className="grid md:grid-cols-2 gap-5 lg:gap-6 mt-8 md:mt-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <CalendarPanel title="Grāmatveža kalendārs" icon={Calendar} highlights={accountantReminders} color="navy" />
          <CalendarPanel title="Apmācību kalendārs" icon={BookOpen} highlights={trainingDates} color="gold" />
        </motion.div>

        {/* Legend */}
        <motion.div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-[12px] font-body text-[#08233E]/45" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#C89B3C]" /> Brīvs</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#08233E]/25" /> Rezervēts</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gray-300" /> Nav plānotas apmācības</span>
        </motion.div>

        {/* Info note */}
        <motion.div className="mt-5 bg-white/60 border border-[#e8e0d4]/50 rounded-lg p-3.5 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
          <p className="text-[#08233E]/60 text-[13px] font-body">
            <span className="text-[#C89B3C] mr-1">ℹ</span>
            Apmācības organizējam Jūsu uzņēmuma telpās ērtā laikā, kas piemērots Jūsu komandai.
          </p>
        </motion.div>
      </div>
    </section>
  );
}