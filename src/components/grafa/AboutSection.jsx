import React from 'react';
import { motion } from 'framer-motion';
import WatercolorBackground from './WatercolorBackground';
import FeatherDecoration from './FeatherDecoration';
import GoldLine from './GoldLine';
import DecorativeAsset from './DecorativeAsset';

const missionValues = [
  {
    label: "Misija",
    text: "Sniegt kvalitatīvus, uzticamus un individuāli pielāgotus grāmatvedības pakalpojumus, ļaujot uzņēmējiem koncentrēties uz biznesa attīstību.",
  },
  {
    label: "Vīzija",
    text: "Būt par uzticamāko grāmatvedības partneri Latvijā, kuru iesaka un ar kuru lepojas mūsu klienti.",
  },
];

const coreValues = [
  { title: "Precizitāte", desc: "Katra detaļa ir svarīga." },
  { title: "Uzticamība", desc: "Droša partnerība ilgtermiņā." },
  { title: "Individualitāte", desc: "Risinājums katram klientam." },
  { title: "Profesionalitāte", desc: "Augstākie kvalitātes standarti." },
];

export default function AboutSection() {
  return (
    <motion.section
      id="par-mums"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="contact" />
      <FeatherDecoration className="absolute -right-10 top-20 w-[150px] h-[400px] hidden lg:block" opacity={0.04} />

      <DecorativeAsset asset="featherCircle" className="hidden lg:block left-6 top-28 w-[130px]" opacity={0.07} />
      <DecorativeAsset asset="featherGoldSwirl" className="hidden lg:block right-8 bottom-32 w-[220px] rotate-3" opacity={0.05} />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            Iepazīstieties
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-[#1e3a5f]">
            Par mums
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />
        </motion.div>

        {/* Company description */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <p className="font-heading text-[18px] md:text-[20px] font-semibold text-[#1e3a5f] mb-4">
            SIA firma GRĀFA
          </p>
          <p className="text-[#1e3a5f]/55 font-body text-[14px] md:text-[16px] leading-[1.9] mb-4">
            Mēs esam Jelgavā strādājošs grāmatvedības ārpakalpojumu uzņēmums. Mūsu pakalpojumu 
            kvalitāte balstīta uz zināšanām un <strong className="text-[#1e3a5f] font-semibold">vairāk kā 20 gadu pieredzi</strong> grāmatveža 
            un finanšu analītiķa profesijā.
          </p>
          <p className="text-[#1e3a5f]/45 font-body text-[14px] md:text-[15px] leading-[1.9]">
            Sniedzam grāmatvedības pakalpojumus dažādām uzņēmējdarbības formām, saglabājot 
            individuālu un saprotamu pieeju katram klientam.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {missionValues.map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-white/60 backdrop-blur-sm p-8 md:p-10 border border-[#e8e0d4]/40 rounded-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              <p className="text-[10px] font-body text-[#c9a84c] tracking-[0.25em] uppercase mb-3 font-medium">
                {item.label}
              </p>
              <p className="text-[#1e3a5f]/60 font-body text-[14px] md:text-[15px] leading-[1.85]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-[#c9a84c] mb-6 font-medium">
            Mūsu vērtības
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {coreValues.map((val, i) => (
            <motion.div
              key={val.title}
              className="text-center p-5 md:p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c]" />
              </div>
              <h4 className="font-heading text-[14px] md:text-[15px] font-semibold text-[#1e3a5f] mb-1.5">
                {val.title}
              </h4>
              <p className="text-[#1e3a5f]/40 font-body text-[12px] md:text-[13px]">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}