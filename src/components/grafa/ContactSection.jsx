import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import GoldLine from './GoldLine';
import { LargeFeather, PeachWash, GoldDotGrid, StarConstellation, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function ContactSection() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const contactItems = [
    { icon: User, label: "Liene Upeniece", href: null },
    { icon: Phone, label: "+371 20383974", href: "tel:+37120383974" },
    { icon: Mail, label: "firmagrafa@gmail.com", href: "mailto:firmagrafa@gmail.com" },
    { icon: MapPin, label: t('contact.location'), href: null },
    { icon: Clock, label: t('contact.hours'), href: null },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="kontakti"
      className="relative py-28 md:py-44 overflow-hidden"
      style={{ background: '#faf7f2' }}
    >
      <PaperTexture id="contP" />
      
      {/* Large feather — right side */}
      <LargeFeather className="w-[160px] md:w-[220px] h-[400px] md:h-[560px] right-[-10px] md:right-4 top-[5%]" opacity={0.12} />
      
      {/* Peach wash — left */}
      <PeachWash className="left-[-120px] top-[30%]" size={550} opacity={0.12} />
      
      {/* Stars — bottom right */}
      <StarConstellation className="w-[160px] h-[160px] right-8 bottom-16" opacity={0.18} />
      
      {/* Gold dot grid — top left */}
      <GoldDotGrid className="w-[120px] h-[75px] left-8 top-24" rows={4} cols={7} opacity={0.16} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5 font-medium">
              {t('contact.subtitle')}
            </p>
            <h2 className="font-heading text-[34px] md:text-[48px] lg:text-[56px] font-semibold mb-6 leading-[1.1] text-[#1e3a5f]">
              {t('contact.heading')}
            </h2>
            <GoldLine width="w-28" className="mb-10" />

            <p className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[17px] leading-[2] mb-12 max-w-md">
              {t('contact.description')}
            </p>

            <p className="font-heading text-[18px] font-semibold mb-10 text-[#1e3a5f]">
              {t('contact.companyName')}
            </p>

            <div className="flex flex-col gap-7">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-5 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/[0.08] flex items-center justify-center group-hover:bg-[#c9a84c]/[0.18] transition-all duration-500 group-hover:shadow-[0_4px_16px_rgba(201,168,76,0.15)]">
                    <item.icon className="w-5 h-5 text-[#c9a84c]" strokeWidth={1.5} />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-[15px] font-body text-[#1e3a5f]/65 hover:text-[#1e3a5f] transition-colors duration-300">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-[15px] font-body text-[#1e3a5f]/55">{item.label}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form in premium card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative bg-white rounded-xl p-10 md:p-14 border border-[#e8e0d4]/50 overflow-hidden shadow-[0_8px_40px_rgba(30,58,95,0.06)]">
              {/* Gold top accent */}
              <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)' }} />
              
              {/* Corner ornaments */}
              <svg className="absolute top-4 right-4 w-10 h-10 opacity-[0.1]" viewBox="0 0 30 30" fill="none">
                <path d="M28,2 L28,14 M28,2 L16,2" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="28" cy="2" r="1.5" fill="#c9a84c" opacity="0.5" />
              </svg>
              <svg className="absolute bottom-4 left-4 w-10 h-10 opacity-[0.1]" viewBox="0 0 30 30" fill="none">
                <path d="M2,28 L2,16 M2,28 L14,28" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="2" cy="28" r="1.5" fill="#c9a84c" opacity="0.5" />
              </svg>

              <h3 className="font-heading text-[22px] md:text-[26px] font-semibold mb-3 text-[#1e3a5f]">
                {t('contact.formTitle')}
              </h3>
              <div className="w-12 h-[2px] mb-10" style={{ background: 'linear-gradient(90deg, #c9a84c, #e8d5a3, transparent)' }} />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[11px] font-body text-[#c9a84c]/70 tracking-[0.2em] uppercase mb-3 block font-medium">{t('contact.labelName')}</label>
                  <Input
                    placeholder={t('contact.placeholderName')}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-[#faf7f2]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#1e3a5f] placeholder:text-[#1e3a5f]/20 focus:border-[#c9a84c]/50 focus:ring-[#c9a84c]/15 h-14 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-body text-[#c9a84c]/70 tracking-[0.2em] uppercase mb-3 block font-medium">{t('contact.labelEmail')}</label>
                  <Input
                    type="email"
                    placeholder={t('contact.placeholderEmail')}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-[#faf7f2]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#1e3a5f] placeholder:text-[#1e3a5f]/20 focus:border-[#c9a84c]/50 focus:ring-[#c9a84c]/15 h-14 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-body text-[#c9a84c]/70 tracking-[0.2em] uppercase mb-3 block font-medium">{t('contact.labelMessage')}</label>
                  <Textarea
                    placeholder={t('contact.placeholderMessage')}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-[#faf7f2]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#1e3a5f] placeholder:text-[#1e3a5f]/20 focus:border-[#c9a84c]/50 focus:ring-[#c9a84c]/15 min-h-[150px] resize-none rounded-lg"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="relative bg-[#1e3a5f] text-white hover:bg-[#1e3a5f]/90 text-[13px] font-body tracking-[0.2em] uppercase px-12 h-14 transition-all duration-500 rounded-sm overflow-hidden group hover:shadow-[0_8px_32px_rgba(30,58,95,0.2)]"
                >
                  <span className="relative z-10">{sent ? t('contact.buttonSent') : t('contact.buttonSend')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}