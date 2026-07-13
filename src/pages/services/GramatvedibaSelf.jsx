import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';

const services = [
  "Ienākošo un izejošo rēķinu apstrāde.",
  "Avansa norēķinu un darbinieku izdevumu pārskatu apstrāde ar pievienotajiem izmaksu dokumentiem.",
  "Bankas transakciju iegrāmatošana.",
  "Kases dokumentu noformēšana un iegrāmatošana.",
  "Pamatlīdzekļu, krājumu un mazvērtīgā inventāra uzskaite u.c.",
  "Nodokļu pārskatu sagatavošana un iesniegšana VID: pašnodarbinātā vai darba ņēmēja ziņojumi, apliecinājumi par plānotajiem ienākumiem, skaidrās naudas deklarācijas, kvīšu atskaites, PVN deklarācijas, gada ienākumu deklarācijas u.c.",
  "Statistikas atskaišu sagatavošana un iesniegšana.",
  "Sadarbība ar VID un atbilžu sniegšana VID.",
];

export default function GramatvedibaSelf() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Pakalpojumi", path: "/#pakalpojumi" },
        { label: "Grāmatvedība", path: "/pakalpojumi/gramatvediba" },
        { label: "Pašnodarbinātajiem" },
      ]}
      title="Grāmatvedība pašnodarbinātajiem"
      subtitle="Pakalpojumi pašnodarbinātajiem"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.p
          className="font-body text-[15px] md:text-[16px] text-[#08233E] leading-[1.8] mb-12 max-w-3xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Grāmatvedības pakalpojumi pašnodarbinātajām personām — no ikdienas uzskaites līdz gada deklarācijām.
        </motion.p>

        <ServiceList items={services} />
      </div>
    </ServicePageLayout>
  );
}