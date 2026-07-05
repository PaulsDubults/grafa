import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';
import InfoBlock from '@/components/grafa/InfoBlock';

const services = [
  "Ieņēmumu analīze",
  "Izdevumu analīze",
  "Naudas plūsma",
  "Individuālu grāmatvedības kārtību izstrāde",
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
          className="font-body text-[15px] md:text-[16px] text-[#1e3a5f]/50 leading-[1.8] mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Finanšu analīze un individuālu kārtību izstrāde pašnodarbinātajiem.
        </motion.p>

        <ServiceList items={services} />

        <InfoBlock text="Plašāki finanšu risinājumi un individuālu kārtību izstrāde ir atsevišķs pakalpojums." />
      </div>
    </ServicePageLayout>
  );
}