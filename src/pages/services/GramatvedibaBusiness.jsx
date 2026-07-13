import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '@/components/grafa/ServicePageLayout';
import ServiceList from '@/components/grafa/ServiceList';
import InfoBlock from '@/components/grafa/InfoBlock';

const services = [
  "Ienākošo un izejošo rēķinu apstrāde.",
  "Avansa norēķinu un darbinieku izdevumu pārskatu apstrāde ar pievienotajiem izmaksu dokumentiem.",
  "Bankas transakciju iegrāmatošana.",
  "Kases dokumentu noformēšana un iegrāmatošana.",
  "Pamatlīdzekļu, krājumu un mazvērtīgā inventāra uzskaite.",
  "Debitoru analīze un salīdzināšanās aktu sagatavošana.",
  "Ceļazīmēs norādītās informācijas iegrāmatošana un inventarizācijas sarakstu sagatavošana.",
  "Darba algu, atvaļinājuma naudas, piemaksu, prēmiju un kompensāciju aprēķinu veikšana.",
  "Nodokļu pārskatu sagatavošana un iesniegšana VID: PVN deklarācijas, VSAOI ziņas un ziņojumi, paziņojumi par IIN, UIN deklarācijas, skaidrās naudas deklarācijas, kvīšu un biļešu atskaites, akcīzes nodokļa deklarācijas u.c.",
  "Atskaišu sagatavošana Centrālajai statistikas pārvaldei un Latvijas Bankai.",
  "UIN deklarāciju un gada pārskatu sagatavošana.",
  "Sadarbība ar VID un atbilžu sniegšana VID.",
];

export default function GramatvedibaBusiness() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Pakalpojumi", path: "/#pakalpojumi" },
        { label: "Grāmatvedība", path: "/pakalpojumi/gramatvediba" },
        { label: "Uzņēmumiem" },
      ]}
      title="Grāmatvedība uzņēmumiem"
      subtitle="Pakalpojumi uzņēmumiem"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.p
          className="font-body text-[15px] md:text-[16px] text-[#08233E] leading-[1.8] mb-12 max-w-3xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pilna grāmatvedības uzskaite, pārskatu sagatavošana un iesniegšana — viss, kas nepieciešams 
          Jūsu uzņēmuma finanšu kārtībai.
        </motion.p>

        <ServiceList items={services} />

        <InfoBlock text="Ilgtermiņa sadarbības klientiem ikdienas konsultācijas, kas saistītas ar grāmatvedības uzskaiti, ir iekļautas pakalpojuma cenā." />
      </div>
    </ServicePageLayout>
  );
}