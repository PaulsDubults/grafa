import React from 'react';
import Navbar from '@/components/grafa/Navbar';
import PricingSection from '@/components/grafa/PricingSection';
import Footer from '@/components/grafa/Footer';
import WatercolorBg from '@/components/grafa/WatercolorBg';

export default function Pricing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <WatercolorBg />
      <Navbar />
      <div className="pt-20" />
      <PricingSection />
      <Footer />
    </div>
  );
}