import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';
import InfoBlock from '@/components/grafa/InfoBlock';

const services = [
  "Nodokļu un normatīvo aktu izmaiņu skaidrošana.",
  "Praktiski semināri uzņēmuma darbiniekiem par grāmatvedības, nodokļu un dokumentu aprites jautājumiem.",
  "Grāmatvedības procesu pilnveidošana atbilstoši konkrētā uzņēmuma specifikai.",
  "Praktiska darbinieku apmācība uzņēmumā izmantotajos grāmatvedības un dokumentu aprites procesos.",
  "Individuālas apmācību programmas konkrētam uzņēmumam.",
];

export default function Apmacibas() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Pakalpojumi", path: "/#pakalpojumi" },
        { label: "Apmācības" },
      ]}
      title="Apmācības"
      subtitle="Pakalpojumi uzņēmumiem"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.p
          className="font-body text-[15px] md:text-[17px] text-[#08233E] leading-[1.9] mb-12 max-w-3xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Zināšanas ir vērtīgas tikai tad, ja tās iespējams izmantot ikdienas darbā. Tāpēc mūsu 
          apmācības balstās praktiskos piemēros, uzņēmuma specifikā un reālās situācijās.
        </motion.p>

        <ServiceList items={services} />

        <InfoBlock text="Apmācības ir atsevišķs pakalpojums un nav iekļautas ikmēneša grāmatvedības apkalpošanas maksā, ja vien par to nav atsevišķi vienots līgumā." />

        {/* Link to consultations for self-employed */}
        <motion.div
          className="mt-12 bg-white/80 rounded-xl p-6 md:p-8 border border-[#e8e0d4]/50 overflow-hidden relative"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="absolute top-0 left-5 right-5 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
          <p className="font-body text-[13px] md:text-[14px] text-[#08233E] leading-[1.85] mb-4">
            <strong className="font-bold">Pašnodarbinātajiem</strong> apmācību bloks netiek veidots atsevišķi — viņiem tiek piedāvātas individuālas konsultācijas.
          </p>
          <Link
            to="/pakalpojumi/konsultacijas-pasnodarbinatajiem"
            className="inline-flex items-center gap-2 text-[12px] font-body text-[#C89B3C] tracking-[0.12em] uppercase hover:text-[#b8973f] transition-colors font-medium"
          >
            <span className="w-5 h-[1px] bg-[#C89B3C]" />
            Konsultācijas pašnodarbinātajiem
          </Link>
        </motion.div>
      </div>
    </ServicePageLayout>
  );
}