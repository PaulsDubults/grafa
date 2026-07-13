import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';
import InfoBlock from '@/components/grafa/InfoBlock';

const services = [
  "Ikmēneša finanšu atskaišu sagatavošana klienta iekšējās grāmatvedības kontroles vajadzībām, ja tas ir atrunāts sadarbībā.",
  "Ieņēmumu un izdevumu analīze.",
  "Naudas plūsmas plānošana.",
  "Individuālu grāmatvedības kārtību izstrāde, piemēram, par pamatlīdzekļu uzskaiti, komandējumiem, skaidras naudas darījumiem u.c.",
];

export default function FinansesSelf() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Pakalpojumi", path: "/#pakalpojumi" },
        { label: "Finanses", path: "/pakalpojumi/finanses" },
        { label: "Pašnodarbinātajiem" },
      ]}
      title="Finanses pašnodarbinātajiem"
      subtitle="Finanšu pakalpojumi"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.p
          className="font-body text-[15px] md:text-[16px] text-[#08233E] leading-[1.8] mb-12 max-w-3xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Finanšu analīze un individuālu kārtību izstrāde pašnodarbinātajiem.
        </motion.p>

        <ServiceList items={services} />

        <InfoBlock text="Ikdienas jautājumi, kas saistīti ar tekošo grāmatvedības uzskaiti, ilgtermiņa sadarbības klientiem var būt iekļauti mēneša maksā, savukārt atsevišķu kārtību vai plašāku finanšu risinājumu izstrāde ir atsevišķs pakalpojums." />
      </div>
    </ServicePageLayout>
  );
}