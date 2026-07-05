import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';
import InfoBlock from '@/components/grafa/InfoBlock';

const services = [
  "Ikmēneša finanšu atskaites",
  "Naudas plūsmas analīze",
  "Budžetu plānošana",
  "Finanšu prognozes",
  "Rentabilitātes analīze",
  "Likviditātes analīze",
  "Maksātspējas analīze",
  "Banku dokumentācija",
  "Investoru dokumentācija",
  "Grāmatvedības metodiku izstrāde",
  "Iekšējās kontroles sistēmas",
  "Pakalpojumu kalkulācijas",
];

export default function FinansesBusiness() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Pakalpojumi", path: "/#pakalpojumi" },
        { label: "Finanses", path: "/pakalpojumi/finanses" },
        { label: "Uzņēmumiem" },
      ]}
      title="Finanses uzņēmumiem"
      subtitle="Finanšu pakalpojumi"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.p
          className="font-body text-[15px] md:text-[16px] text-[#1e3a5f]/50 leading-[1.8] mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Visaptveroša finanšu analīze un individuālu metodiku izstrāde Jūsu uzņēmuma izaugsmei.
        </motion.p>

        <ServiceList items={services} />

        <InfoBlock text="Individuālu metodiku, nolikumu, kontroles sistēmu un investoru dokumentācijas izstrāde nav iekļauta ikmēneša grāmatvedības pakalpojumā un tiek sniegta kā atsevišķs pakalpojums." />
      </div>
    </ServicePageLayout>
  );
}