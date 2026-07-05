import React from 'react';
import { motion } from 'framer-motion';
import PyramidDecoration from './PyramidDecoration';
import GoldLine from './GoldLine';
import DecorativeAsset from './DecorativeAsset';

export default function JoinSection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('kontakti');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="pievienojies"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#1e3a5f' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <PyramidDecoration className="absolute -right-10 bottom-10 w-[200px] h-[240px] hidden lg:block" opacity={0.06} />

      <DecorativeAsset asset="pyramid" className="hidden lg:block -left-4 top-8 w-[280px] -rotate-6" opacity={0.18} />
      <DecorativeAsset asset="pyramid" className="hidden lg:block right-14 top-6 w-[200px] rotate-[10deg]" opacity={0.15} />
      <DecorativeAsset asset="featherGoldSwirl" className="hidden lg:block right-[8%] bottom-4 w-[300px] rotate-6" opacity={0.18} />
      <DecorativeAsset asset="featherCircle" className="hidden lg:block left-[22%] bottom-8 w-[140px]" opacity={0.15} />

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
            Sāksim sadarbību
          </p>
          <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 text-white leading-tight">
            Pievienojies GRĀFAI
          </h2>
          <GoldLine width="w-24" className="mx-auto mb-8" />

          <p className="text-white/50 font-body text-[15px] md:text-[17px] leading-[1.9] mb-6 max-w-2xl mx-auto">
            Ja meklējat uzticamu grāmatvedības partneri, kas saprot Jūsu uzņēmuma vajadzības un 
            piedāvā individuālu pieeju — mēs esam gatavi Jums palīdzēt.
          </p>

          <p className="font-script text-[20px] md:text-[24px] text-[#c9a84c] mb-10 italic">
            Jūsu finanšu lietas — drošās rokās.
          </p>

          <motion.button
            className="bg-[#c9a84c] text-white hover:bg-[#b8973f] text-[13px] font-body tracking-wider uppercase px-12 py-4 transition-all duration-400 rounded-sm hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)] active:scale-[0.98]"
            whileHover={{ y: -2 }}
            onClick={scrollToContact}
          >
            Sazināties ar mums
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}