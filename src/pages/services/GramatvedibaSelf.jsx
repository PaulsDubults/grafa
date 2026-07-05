import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';

const services = [
  "Rēķinu apstrāde",
  "Bankas operācijas",
  "Kases dokumenti",
  "Pamatlīdzekļu uzskaite",
  "Nodokļu deklarācijas",
  "Gada ienākumu deklarācijas",
  "PVN deklarācijas",
  "Statistikas pārskati",
  "Sadarbība ar VID",
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
          className="font-body text-[15px] md:text-[16px] text-[#1e3a5f]/50 leading-[1.8] mb-12 max-w-3xl"
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