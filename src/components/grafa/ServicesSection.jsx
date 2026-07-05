import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WatercolorBackground from './WatercolorBackground';
import FeatherDecoration from './FeatherDecoration';
import GoldLine from './GoldLine';
import DecorativeAsset from './DecorativeAsset';

const bulletPoints = [
  { text: "Mūsu darbs nesākas ar pakalpojumu sarakstu.", bold: "Tas sākas ar sarunu." },
  { text: "Ar vēlmi saprast, kas konkrētajā brīdī ir nepieciešams tieši Jūsu uzņēmumam — vai tā ir ikdienas grāmatvedība, finanšu analīze vai konsultācija. Mēs pielāgojamies Jūsu uzņēmuma vajadzībām." },
  { text: "Kad grāmatvedis pazīst uzņēmumu, tā cilvēkus un mērķus, ikdienas darbs kļūst vienkāršāks." },
  { text: "Mūsu pakalpojumi nav tikai atskaites un deklarācijas. Tie ir", bold: "risinājumi, kas palīdz uzņēmumam drošāk augt." },
  { text: "Mūsu veiktais darbs dod uzņēmējam iespēju vairāk laika veltīt sava uzņēmuma attīstībai, nevis raizēm par dokumentiem, termiņiem vai nodokļu izmaiņām." },
  { text: "Tieši tāpēc mēs katram klientam", bold: "meklējam risinājumu,", after: "nevis vienkārši izpildām uzdevumu." },
];

const cards = [
  {
    title: "Grāmatvedība",
    desc: "Pilna grāmatvedības uzskaite un atskaites, nodokļu aprēķini un deklarācijas. Rūpējamies par to, lai viss būtu kārtībā laikus un bez stresa.",
    path: "/pakalpojumi/gramatvediba",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <rect x="9" y="6" width="26" height="32" rx="2" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <path d="M15,14 L29,14 M15,20 L29,20 M15,26 L23,26" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
        <path d="M28,28 L32,32 L36,24" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Finanses",
    desc: "Finanšu analīze, plānošana un uzraudzība, kas palīdz pieņemt pārdomātus lēmumus un nodrošina stabilu izaugsmi.",
    path: "/pakalpojumi/finanses",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <polyline points="7,36 15,24 23,28 32,16 38,12" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="38" cy="12" r="2.5" stroke="#c9a84c" strokeWidth="1" fill="none"/>
        <line x1="7" y1="40" x2="38" y2="40" stroke="#c9a84c" strokeWidth="0.7" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Apmācības",
    desc: "Praktiskas un saprotamas apmācības uzņēmējiem un darbiniekiem par grāmatvedību, nodokļiem un finanšu jautājumiem ikdienas darbā.",
    path: "/pakalpojumi/apmacibas",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9">
        <path d="M8,16 L22,8 L36,16 L22,24 Z" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <path d="M14,20 L14,32 C14,36 18,40 22,40 C26,40 30,36 30,32 L30,20" stroke="#c9a84c" strokeWidth="1.2" fill="none"/>
        <line x1="36" y1="16" x2="36" y2="36" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
      </svg>
    ),
  },
];

function BulletPoint({ item, index }) {
  return (
    <motion.div
      className="flex items-start gap-3 mb-3"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.06, duration: 0.5 }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-[7px] flex-shrink-0" />
      <p className="font-body text-[13px] md:text-[14px] text-[#1e3a5f]/60 leading-[1.75]">
        {item.text}{' '}
        {item.bold && <strong className="text-[#1e3a5f] font-semibold">{item.bold}</strong>}
        {item.after && <> {item.after}</>}
      </p>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <motion.section
      id="pakalpojumi"
      className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="services" />

      {/* Feather on right side */}
      <FeatherDecoration className="absolute right-4 md:right-10 top-16 w-[100px] md:w-[140px] h-[400px] md:h-[500px]" opacity={0.07} />

      <DecorativeAsset asset="pyramid" className="hidden lg:block -left-6 bottom-28 w-[300px]" opacity={0.3} />
      <DecorativeAsset asset="featherCircle" className="hidden lg:block right-12 bottom-16 w-[180px]" opacity={0.28} />
      <DecorativeAsset asset="pyramid" className="hidden lg:block right-[6%] top-20 w-[200px] rotate-[5deg]" opacity={0.2} />
      <DecorativeAsset asset="featherGoldSwirl" className="hidden lg:block left-[30%] top-[55%] w-[280px] rotate-6" opacity={0.15} />

      {/* Ink drop decoration */}
      <div className="absolute right-[60px] md:right-[100px] top-12 w-3 h-4 pointer-events-none opacity-[0.06]">
        <svg viewBox="0 0 12 16" fill="#1e3a5f" className="w-full h-full">
          <ellipse cx="6" cy="10" rx="5" ry="6" />
          <path d="M6,0 Q8,5 6,10 Q4,5 6,0" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Handwriting intro text */}
        <motion.div
          className="mb-8 md:mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[16px] md:text-[19px] lg:text-[21px] text-[#1e3a5f]/50 leading-[1.9] italic">
            Katrs uzņēmums strādā citā nozarē.{' '}
            Kāds ir pašā ceļa sākumā, bet citam jau ir stabils bizness ar lieliem mērķiem.{' '}
            Mēs pielāgojamies Jūsu uzņēmuma vajadzībām, saglabājot profesionālu un tajā pašā laikā saprotamu pieeju ikvienā sadarbības posmā, neskatoties uz to, vai Jūsu uzņēmums ir mazs, vidējs vai liels.
          </p>
        </motion.div>

        {/* Gold decorative line */}
        <GoldLine width="w-20" className="mb-8" />

        {/* Large heading */}
        <motion.h2
          className="font-heading text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-[#1e3a5f] mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          Pakalpojumi
        </motion.h2>

        {/* Bullet points — left column */}
        <div className="max-w-2xl mb-14 md:mb-18">
          {bulletPoints.map((item, i) => (
            <BulletPoint key={i} item={item} index={i} />
          ))}
        </div>

        {/* Three service cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
            >
              <Link
                to={card.path}
                className="block bg-white rounded-sm p-6 md:p-7 cursor-pointer shadow-[0_2px_10px_rgba(30,58,95,0.05)] hover:shadow-[0_10px_36px_rgba(30,58,95,0.12)] hover:-translate-y-1.5 transition-all duration-500 border border-[#e8e0d4]/50 hover:border-[#c9a84c]/30 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  {card.icon}
                  <h3 className="font-heading text-[17px] md:text-[19px] font-semibold text-[#1e3a5f]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[#1e3a5f]/45 font-body text-[12px] md:text-[13px] leading-[1.8]">
                  {card.desc}
                </p>
                <div className="w-8 h-[1.5px] mt-5 transition-all duration-600 group-hover:w-14" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)' }} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent text */}
        <motion.div
          className="flex items-start gap-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">◆</span>
          <p className="font-body text-[13px] md:text-[14px] text-[#1e3a5f]/50 leading-[1.75]">
            <strong className="text-[#1e3a5f]/70 font-semibold">Mūsu mērķis</strong> — nodrošināt skaidrību finanšu procesos un palīdzēt 
            pieņemt pārdomātus lēmumus Jūsu uzņēmuma izaugsme.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}