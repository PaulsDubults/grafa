import React from 'react';
import Navbar from '@/components/grafa/Navbar';
import HeroSection from '@/components/grafa/HeroSection';
import SectionDivider from '@/components/grafa/SectionDivider';
import ServicesSection from '@/components/grafa/ServicesSection';
import WhyGrafaSection from '@/components/grafa/WhyGrafaSection';
import WhyChooseSection from '@/components/grafa/WhyChooseSection';
import PricingSection from '@/components/grafa/PricingSection';
import ProcessSection from '@/components/grafa/ProcessSection';
import KnowledgeSection from '@/components/grafa/KnowledgeSection';
import AboutSection from '@/components/grafa/AboutSection';
import JoinSection from '@/components/grafa/JoinSection';
import CareersSection from '@/components/grafa/CareersSection';
import ContactSection from '@/components/grafa/ContactSection';
import Footer from '@/components/grafa/Footer';
import WatercolorBg from '@/components/grafa/WatercolorBg';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <WatercolorBg />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider flip />
      <ProcessSection />
      <SectionDivider />
      <PricingSection />
      <SectionDivider flip />
      <WhyChooseSection />
      <SectionDivider />
      <WhyGrafaSection />
      <SectionDivider flip />
      <KnowledgeSection />
      <SectionDivider />
      <AboutSection />
      <JoinSection />
      <SectionDivider />
      <CareersSection />
      <SectionDivider flip />
      <ContactSection />
      <Footer />
    </div>
  );
}