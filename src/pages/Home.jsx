import React from 'react';
import Navbar from '@/components/grafa/Navbar';
import HeroSection from '@/components/grafa/HeroSection';
import SectionDivider from '@/components/grafa/SectionDivider';
import ServicesSection from '@/components/grafa/ServicesSection';
import WhyGrafaSection from '@/components/grafa/WhyGrafaSection';
import ProcessSection from '@/components/grafa/ProcessSection';
import KnowledgeSection from '@/components/grafa/KnowledgeSection';
import AboutSection from '@/components/grafa/AboutSection';
import JoinSection from '@/components/grafa/JoinSection';
import ContactSection from '@/components/grafa/ContactSection';
import Footer from '@/components/grafa/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f5f0e8' }}>
      <Navbar />
      <HeroSection />
      <SectionDivider color="#faf7f2" />
      <ServicesSection />
      <SectionDivider color="#f5f0e8" flip />
      <WhyGrafaSection />
      <SectionDivider color="#faf7f2" />
      <ProcessSection />
      <SectionDivider color="#f5f0e8" flip />
      <KnowledgeSection />
      <SectionDivider color="#faf7f2" />
      <AboutSection />
      <JoinSection />
      <SectionDivider color="#faf7f2" />
      <ContactSection />
      <Footer />
    </div>
  );
}