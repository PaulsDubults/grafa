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
import ClientMapSection from '@/components/grafa/ClientMapSection';
import ContactSection from '@/components/grafa/ContactSection';
import Footer from '@/components/grafa/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#F8F2EA' }}>
      <Navbar />
      <HeroSection />
      <SectionDivider color="#FBF7F0" />
      <ServicesSection />
      <SectionDivider color="#F8F2EA" flip />
      <WhyChooseSection />
      <SectionDivider color="#FBF7F0" />
      <PricingSection />
      <SectionDivider color="#F8F2EA" flip />
      <WhyGrafaSection />
      <SectionDivider color="#FBF7F0" />
      <ProcessSection />
      <SectionDivider color="#F8F2EA" flip />
      <KnowledgeSection />
      <SectionDivider color="#FBF7F0" />
      <AboutSection />
      <SectionDivider color="#FBF7F0" flip />
      <ClientMapSection />
      <JoinSection />
      <SectionDivider color="#FBF7F0" />
      <CareersSection />
      <SectionDivider color="#F8F2EA" flip />
      <ContactSection />
      <Footer />
    </div>
  );
}