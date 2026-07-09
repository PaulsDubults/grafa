import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ChoiceCards from '@/components/grafa/ChoiceCards';

const choices = [
  { label: "Uzņēmumiem", desc: "Finanšu analīze, plānošana un metodiku izstrāde.", path: "/pakalpojumi/finanses/uznemumiem" },
  { label: "Pašnodarbinātajiem", desc: "Ieņēmumu un izdevumu analīze, naudas plūsma.", path: "/pakalpojumi/finanses/pasnodarbinatajiem" },
];

export default function Finanses() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Pakalpojumi", path: "/#pakalpojumi" },
        { label: "Finanses" },
      ]}
      title="Finanses"
      subtitle="Pakalpojumi"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.p
          className="text-center font-body text-[15px] md:text-[16px] text-[#08233E]/50 leading-[1.8] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Izvēlieties finanšu pakalpojumu kategoriju atbilstoši Jūsu vajadzībām.
        </motion.p>

        <ChoiceCards choices={choices} />
      </div>
    </ServicePageLayout>
  );
}