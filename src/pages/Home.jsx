import React from 'react';
import Navbar from '../components/grafa/Navbar';
import HeroSection from '../components/grafa/HeroSection';
import AboutSection from '../components/grafa/AboutSection';
import ServicesSection from '../components/grafa/ServicesSection';
import WhyGrafaSection from '../components/grafa/WhyGrafaSection';
import ApproachSection from '../components/grafa/ApproachSection';
import FinanceSection from '../components/grafa/FinanceSection';
import TrainingSection from '../components/grafa/TrainingSection';
import TestimonialsSection from '../components/grafa/TestimonialsSection';
import ContactSection from '../components/grafa/ContactSection';
import Footer from '../components/grafa/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyGrafaSection />
      <ApproachSection />
      <FinanceSection />
      <TrainingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}