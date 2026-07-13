import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';
import InfoBlock from '@/components/grafa/InfoBlock';

const services = [
  "Ikmēneša finanšu atskaišu sagatavošana klienta iekšējās vadības vajadzībām.",
  "Naudas plūsmas plānošana un analīze.",
  "Budžetu un finanšu prognožu sagatavošana.",
  "Svarīgāko finanšu rādītāju analīze (rentabilitāte, likviditāte, maksātspēja u.c.) un to izvērtējums uzņēmuma attīstības vajadzībām.",
  "Finanšu pārskatu sagatavošana bankām, investoriem un sadarbības partneriem.",
  "Grāmatvedības organizācijas dokumentu, metodiku, nolikumu, iekšējās kontroles sistēmu, pakalpojumu kalkulāciju un citas individuālas dokumentācijas izstrāde.",
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
          className="font-body text-[15px] md:text-[16px] text-[#08233E] leading-[1.8] mb-12 max-w-3xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Visaptveroša finanšu analīze un individuālu metodiku izstrāde Jūsu uzņēmuma izaugsmei.
        </motion.p>

        <ServiceList items={services} />

        <InfoBlock text="Individuālu metodiku, kārtību, nolikumu, kontroles sistēmu, kalkulāciju un investoru dokumentācijas izstrāde nav iekļauta ikmēneša grāmatvedības pakalpojuma maksā. Tas ir atsevišķs pakalpojums pēc iepriekšējas vienošanās." />
      </div>
    </ServicePageLayout>
  );
}