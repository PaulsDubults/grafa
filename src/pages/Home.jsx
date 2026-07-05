import React from 'react';
import Navbar from '@/components/grafa/Navbar';
import HeroSection from '@/components/grafa/HeroSection';
import SectionDivider from '@/components/grafa/SectionDivider';
import ApproachSection from '@/components/grafa/ApproachSection';
import ServicesSection from '@/components/grafa/ServicesSection';
import LatviaMapSection from '@/components/grafa/LatviaMapSection';
import ContactSection from '@/components/grafa/ContactSection';
import Footer from '@/components/grafa/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f5f0e8' }}>
      <Navbar />
      <HeroSection />
      <SectionDivider color="#f5f0e8" />
      <ApproachSection />
      <SectionDivider color="#faf7f2" flip />
      <ServicesSection />
      <SectionDivider color="#faf7f2" flip />
      <LatviaMapSection />
      <SectionDivider color="#faf7f2" flip />
      <ContactSection />
      <Footer />
    </div>
  );
}