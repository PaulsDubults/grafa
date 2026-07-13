import React from 'react';
import Navbar from '@/components/grafa/Navbar';
import HeroSection from '@/components/grafa/HeroSection';
import SectionDivider from '@/components/grafa/SectionDivider';
import ServicesSection from '@/components/grafa/ServicesSection';
import WhyChooseSection from '@/components/grafa/WhyChooseSection';

import KnowledgeSection from '@/components/grafa/KnowledgeSection';
import JoinCareersSection from '@/components/grafa/JoinCareersSection';
import ContactSection from '@/components/grafa/ContactSection';
import Footer from '@/components/grafa/Footer';
import WatercolorBg from '@/components/grafa/WatercolorBg';

/* Page order: 1.Sākumlapa → 2.Pakalpojumi → 3.Kāpēc izvēlas (3.1 Process + 3.2 Cena) → 4.Zināšanu telpa → 5.Pievienojies → 6.Kontakti → Footer */

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <WatercolorBg />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider flip />
      <WhyChooseSection />
      <SectionDivider flip />
      <KnowledgeSection />
      <SectionDivider />
      <JoinCareersSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
}