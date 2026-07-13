import React from 'react';
import Navbar from '@/components/grafa/Navbar';
import HeroSection from '@/components/grafa/HeroSection';
import SectionDivider from '@/components/grafa/SectionDivider';
import ServicesSection from '@/components/grafa/ServicesSection';
import WhyChooseSection from '@/components/grafa/WhyChooseSection';
import PricingSection from '@/components/grafa/PricingSection';
import KnowledgeSection from '@/components/grafa/KnowledgeSection';
import AboutSection from '@/components/grafa/AboutSection';
import LatviaMapSection from '@/components/grafa/LatviaMapSection';
import JoinCareersSection from '@/components/grafa/JoinCareersSection';
import ContactSection from '@/components/grafa/ContactSection';
import Footer from '@/components/grafa/Footer';
import WatercolorBg from '@/components/grafa/WatercolorBg';

/* Page order per mockups: Hero → Pakalpojumi → Kāpēc izvēlas (with process + price box) → Cena → Zināšanu telpa → Par mums → Pievienojies+Karjera (combined dark) → Kontakti → Footer */

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
      <SectionDivider />
      <PricingSection />
      <SectionDivider flip />
      <KnowledgeSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider flip />
      <LatviaMapSection />
      <SectionDivider />
      <JoinCareersSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
}