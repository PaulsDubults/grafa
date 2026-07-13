import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';
import InfoBlock from '@/components/grafa/InfoBlock';

const services = [
  "Saimnieciskās darbības uzsākšana.",
  "Piemērotākā nodokļu režīma izvēle.",
  "PVN reģistrācijas un piemērošanas jautājumi.",
  "Sadarbība ar VID un atbilžu sagatavošana.",
  "Darbības formas maiņa, piemēram, pāreja uz SIA.",
  "Individuālas konsultācijas grāmatvedības, nodokļu un finanšu jautājumos.",
];

export default function KonsultacijasSelf() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Pakalpojumi", path: "/#pakalpojumi" },
        { label: "Konsultācijas pašnodarbinātajiem" },
      ]}
      title="Konsultācijas pašnodarbinātajiem"
      subtitle="Individuāls atbalsts"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.div
          className="bg-[#08233E]/[0.04] border-l-2 border-[#C89B3C] rounded-sm px-6 py-5 md:px-8 md:py-6 mb-12"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-heading text-[16px] md:text-[18px] text-[#08233E] leading-[1.8] italic">
            Dažkārt viena pareiza konsultācija ir vērtīgāka par desmit aizpildītām atskaitēm.
          </p>
        </motion.div>

        <ServiceList items={services} />

        <InfoBlock text="Konsultācijas pašnodarbinātajiem nav automātiski iekļautas ikmēneša grāmatvedības apkalpošanas maksā. Tās tiek sniegtas kā atsevišķs pakalpojums pēc iepriekšējas vienošanās, izņemot īsus ikdienas jautājumus, kas tieši saistīti ar tekošo uzskaiti un ir atrunāti sadarbības nosacījumos." />
      </div>
    </ServicePageLayout>
  );
}