import React from 'react';
import Navbar from '../components/grafa/Navbar';
import HeroSection from '../components/grafa/HeroSection';
import ApproachSection from '../components/grafa/ApproachSection';
import ServicesSection from '../components/grafa/ServicesSection';
import ContactSection from '../components/grafa/ContactSection';
import Footer from '../components/grafa/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}