import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/grafa/Navbar';
import PricingSection from '@/components/grafa/PricingSection';
import Footer from '@/components/grafa/Footer';
import WatercolorBg from '@/components/grafa/WatercolorBg';
import { useI18n } from '@/lib/i18n';

export default function Pricing() {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <WatercolorBg />
      <Navbar />
      <div className="pt-20" />
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 mb-[-2rem]">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[#08233E]/60 hover:text-[#08233E] font-body text-[13px] md:text-[14px] transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          {t('servicePages.back')}
        </button>
      </div>
      <PricingSection />
      <Footer />
    </div>
  );
}