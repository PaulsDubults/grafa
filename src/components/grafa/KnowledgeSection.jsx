import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, BookOpen } from 'lucide-react';
import { FullFeather } from './Decorations';
import TypewriterText from './TypewriterText';
import { useI18n } from '@/lib/i18n';

const BG_URL = 'https://media.base44.com/images/public/6a5361fb4451fc131553e07e/cdca4fadf_generated_def1557f.png';

const LV_MONTHS = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'];
const LV_DAYS = ['Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se', 'Sv'];

const accountantReminders = {
  '2025-6-10': { title: 'Cieni savu grāmatvedi!', desc: 'Iesniedz dokumentus līdz 10. datumam.' },
  '2025-6-15': { title: 'Pašnodarbinātajiem', desc: 'Atgādinām, ka tuvojas ceturkšņa VSAOI ziņojuma iesniegšanas termiņš. Savlaicīga iesniegšana palīdz izvairīties no nokavējumiem un soda sankcijām.' },
  '2025-6-23': { title: 'Nodokļu pārbaude', desc: 'Pārbaudī, vai nav neapmaksātu nodokļu maksājumu.' },
  '2025-6-31': { title: 'Mēneša pārskats', desc: 'Pārbaudī mēneša grāmatvedības pārskatu un finanšu rādītājus.' },
};

const trainingDates = {
  '2025-6-20': { title: 'Apmācība pieejama', desc: 'Pieejams uzņēmuma darbinieku apmācībām grāmatvedības un nodokļu jautājumos.', status: 'free' },
  '2025-6-25': { title: 'Apmācība pieejama', desc: 'Pieejams uzņēmuma darbinieku apmācībām.', status: 'free' },
  '2025-6-27': { title: 'Rezervēts', desc: 'Šis datums jau ir rezervēts.', status: 'reserved' },
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
          <div key={d} className="text-center text-xs font-medium text-grafa-text-light py-1">{d}</div>
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
              className={`w-8 h-8 lg:w-9 lg:h-9 rounded-lg text-sm flex items-center justify-center transition-all
                ${hasHighlight ? 'cursor-pointer font-bold' : 'cursor-default'}
                ${isSelected ? 'bg-grafa-gold text-white ring-2 ring-grafa-gold/50' :
                  status === 'reserved' ? 'bg-grafa-navy/15 text-grafa-navy' :
                  hasHighlight ? 'bg-grafa-gold/20 text-grafa-navy hover:bg-grafa-gold/40' :
                  'text-grafa-text hover:bg-grafa-cream/60'}
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
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(6);
  const [selectedDate, setSelectedDate] = useState(null);

  const selectedInfo = selectedDate ? highlights[selectedDate] : null;

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
    setSelectedDate(null);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
    setSelectedDate(null);
  };

  return (
    <div className="bg-white/70 backdrop-blur border border-grafa-gold/20 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className={`p-4 ${color === 'navy' ? 'bg-grafa-navy/10' : 'bg-grafa-gold/10'}`}>
        <div className="flex items-center gap-2 mb-1">
          <Icon size={20} className={color === 'navy' ? 'text-grafa-navy' : 'text-grafa-gold'} />
          <h3 className="font-heading text-grafa-navy font-bold text-lg uppercase tracking-wider">{title}</h3>
        </div>
        <p className="text-grafa-text-light text-xs">
          {color === 'navy' ? 'Svarīgākie termiņi un draudzīgi atgādinājumi uzņēmējiem.' : 'Piedāvājam datumus uzņēmumu darbinieku apmācībām.'}
        </p>
      </div>

      <div className="p-4">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="p-1 hover:bg-grafa-cream rounded-lg transition-colors">
            <ChevronLeft size={18} className="text-grafa-text-light" />
          </button>
          <span className="font-heading text-grafa-navy font-semibold uppercase text-sm tracking-wider">
            {LV_MONTHS[month]} {year}
          </span>
          <button onClick={nextMonth} className="p-1 hover:bg-grafa-cream rounded-lg transition-colors">
            <ChevronRight size={18} className="text-grafa-text-light" />
          </button>
        </div>

        <CalendarGrid
          year={year}
          month={month}
          highlights={highlights}
          onDateClick={setSelectedDate}
          selectedDate={selectedDate}
        />

        {/* Selected date info */}
        {selectedInfo && (
          <motion.div
            className="mt-4 p-4 bg-grafa-cream/50 rounded-xl border border-grafa-gold/15"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-heading text-grafa-navy font-semibold text-sm mb-1">
              {selectedDate.split('-')[2]}. {LV_MONTHS[parseInt(selectedDate.split('-')[1])]}
            </p>
            <h4 className="text-grafa-navy font-medium mb-1">{selectedInfo.title}</h4>
            <p className="text-grafa-text-light text-sm">{selectedInfo.desc}</p>
            {selectedInfo.status === 'free' && (
              <button className="mt-3 bg-grafa-gold text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-grafa-gold-light transition-colors">
                Pieteikt rezervāciju
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function KnowledgeSection() {
  const { t } = useI18n();

  return (
    <section
      id="zinasanu-telpa"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundImage: `url(${BG_URL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-grafa-paper/[0.88]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Feather */}
        <div className="absolute right-4 lg:right-12 top-4 opacity-40">
          <FullFeather className="w-[200px] md:w-[300px] h-[250px] md:h-[380px] -rotate-12" opacity={0.4} />
        </div>

        {/* Script text */}
        <div className="mb-4 min-h-[50px]">
          <TypewriterText
            text={t('knowledge.scriptLine')}
            className="font-script text-[24px] lg:text-[30px] text-grafa-gold/80 leading-[1.6] italic"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-grafa-navy mb-2 uppercase tracking-wider">
            {t('knowledge.heading')}
          </h2>
          <p className="text-grafa-text-light text-base lg:text-lg mb-10">
            {t('knowledge.subtitle')}
          </p>
        </motion.div>

        {/* Book-style two calendars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <CalendarPanel
              title="Grāmatveža kalendārs"
              icon={Calendar}
              highlights={accountantReminders}
              color="navy"
            />
            <CalendarPanel
              title="Apmācību kalendārs"
              icon={BookOpen}
              highlights={trainingDates}
              color="gold"
            />
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-grafa-text-light">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-grafa-gold" /> Brīvs</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-grafa-navy/30" /> Rezervēts</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gray-300" /> Nav plānotas apmācības</span>
          </div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-white/50 border border-grafa-gold/20 rounded-xl p-4 text-center">
            <p className="text-grafa-text text-sm">
              <span className="text-grafa-gold mr-1">ℹ</span>
              Apmācības organizējam Jūsu uzņēmuma telpās ērtā laikā, kas piemērots Jūsu komandai.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}