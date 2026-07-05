import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';
import InfoBlock from '@/components/grafa/InfoBlock';

const services = [
  "Nodokļu izmaiņas",
  "Praktiski semināri",
  "Grāmatvedības procesu pilnveidošana",
  "Praktiska darbinieku apmācība",
  "Individuālas apmācību programmas",
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
          className="font-body text-[15px] md:text-[17px] text-[#1e3a5f]/55 leading-[1.9] mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Zināšanas ir vērtīgas tikai tad, ja tās iespējams izmantot ikdienas darbā. Tāpēc mūsu 
          apmācības balstās praktiskos piemēros, uzņēmuma specifikā un reālās situācijās.
        </motion.p>

        <ServiceList items={services} />

        <InfoBlock text="Apmācības ir atsevišķs pakalpojums un nav iekļautas ikmēneša grāmatvedības pakalpojumā, ja vien tas nav atrunāts līgumā." />
      </div>
    </ServicePageLayout>
  );
}