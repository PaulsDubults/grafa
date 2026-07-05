import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ChoiceCards from '@/components/grafa/ChoiceCards';

const choices = [
  { label: "Uzņēmumiem", desc: "Pilna grāmatvedības uzskaite juridiskajām personām.", path: "/pakalpojumi/gramatvediba/uznemumiem" },
  { label: "Pašnodarbinātajiem", desc: "Grāmatvedības pakalpojumi fiziskajām personām.", path: "/pakalpojumi/gramatvediba/pasnodarbinatajiem" },
];

export default function Gramatvediba() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Pakalpojumi", path: "/#pakalpojumi" },
        { label: "Grāmatvedība" },
      ]}
      title="Grāmatvedība"
      subtitle="Pakalpojumi"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.p
          className="text-center font-body text-[15px] md:text-[16px] text-[#1e3a5f]/50 leading-[1.8] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Izvēlieties pakalpojumu kategoriju atbilstoši Jūsu uzņēmējdarbības formai.
        </motion.p>

        <ChoiceCards choices={choices} />
      </div>
    </ServicePageLayout>
  );
}