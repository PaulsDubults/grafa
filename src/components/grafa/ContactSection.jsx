import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import GoldLine from './GoldLine';
import { HalfFeather, DiagonalFeather, SmallFeather, FeatherTip, PyramidOutline, SmallPyramid, WatercolorStain, GoldFlourish, GoldDotGrid, StarConstellation, ScatteredDots, PaperTexture } from './Decorations';
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
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); setForm({ name: '', email: '', message: '' }); };

  return (
    <section id="kontakti" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="contP" />

      {/* COMPOSITION: upright feather right, diagonal left bottom, horizontal accent */}
      <HalfFeather className="w-[220px] md:w-[330px] h-[270px] md:h-[410px] right-[-30px] md:right-0 top-[3%]" opacity={0.2} />
      <DiagonalFeather className="w-[180px] md:w-[270px] h-[220px] md:h-[340px] left-[-30px] md:left-0 bottom-[8%]" opacity={0.16} angle={-25} />
      <FeatherTip className="w-[80px] md:w-[110px] h-[95px] md:h-[140px] left-[5%] top-[8%]" opacity={0.14} rotate={10} />
      <SmallFeather className="w-[70px] md:w-[100px] h-[85px] md:h-[120px] right-[25%] bottom-12" opacity={0.12} rotate={-8} />
      
      <PyramidOutline className="w-[320px] md:w-[450px] h-[310px] md:h-[430px] left-[-50px] top-[15%]" opacity={0.1} />
      <SmallPyramid className="w-[50px] md:w-[65px] h-[50px] md:h-[65px] right-[20%] top-[60%]" opacity={0.13} />

      <WatercolorStain className="right-[-80px] top-[25%]" color="#e0b5b0" opacity={0.12} size={480} id="ct1" />
      <WatercolorStain className="left-[-100px] bottom-[-30px]" color="#e8c89a" opacity={0.1} size={350} id="ct2" />

      <GoldFlourish className="w-[220px] md:w-[320px] h-[85px] md:h-[125px] right-[8%] top-8" opacity={0.18} flip />
      <GoldDotGrid className="w-[150px] h-[90px] left-4 top-16" rows={5} cols={8} opacity={0.28} />
      <StarConstellation className="w-[180px] h-[180px] right-4 bottom-12" opacity={0.3} />
      <ScatteredDots className="w-[100px] h-[100px] left-[15%] bottom-[25%]" opacity={0.22} count={12} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-body text-[12px] md:text-[14px] tracking-[0.3em] uppercase text-[#C89B3C] mb-5 font-medium">{t('contact.subtitle')}</p>
            <h2 className="font-heading text-[38px] md:text-[54px] lg:text-[64px] font-semibold mb-6 leading-[1.1] text-[#08233E]">{t('contact.heading')}</h2>
            <GoldLine width="w-28" className="mb-10" />
            <p className="text-[#08233E]/50 font-body text-[17px] md:text-[19px] leading-[2] mb-12 max-w-md">{t('contact.description')}</p>
            <p className="font-heading text-[22px] font-semibold mb-10 text-[#08233E]">{t('contact.companyName')}</p>
            <div className="flex flex-col gap-7">
              {contactItems.map((item, i) => (
                <motion.div key={i} className="flex items-center gap-5 group" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}>
                  <div className="w-12 h-12 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center group-hover:bg-[#C89B3C]/[0.22] transition-all duration-500 group-hover:shadow-[0_4px_16px_rgba(201,168,76,0.2)]">
                    <item.icon className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} />
                  </div>
                  {item.href ? <a href={item.href} className="text-[17px] font-body text-[#08233E]/65 hover:text-[#08233E] transition-colors duration-300">{item.label}</a> : <span className="text-[17px] font-body text-[#08233E]/55">{item.label}</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
            <div className="relative bg-white rounded-xl p-10 md:p-14 border border-[#e8e0d4]/50 overflow-hidden shadow-[0_8px_40px_rgba(30,58,95,0.06)]">
              <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <svg className="absolute top-4 right-4 w-10 h-10 opacity-[0.15]" viewBox="0 0 30 30" fill="none"><path d="M28,2 L28,14 M28,2 L16,2" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round"/><circle cx="28" cy="2" r="1.5" fill="#C89B3C" opacity="0.5"/></svg>
              <svg className="absolute bottom-4 left-4 w-10 h-10 opacity-[0.15]" viewBox="0 0 30 30" fill="none"><path d="M2,28 L2,16 M2,28 L14,28" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round"/><circle cx="2" cy="28" r="1.5" fill="#C89B3C" opacity="0.5"/></svg>
              <h3 className="font-heading text-[26px] md:text-[30px] font-semibold mb-3 text-[#08233E]">{t('contact.formTitle')}</h3>
              <div className="w-12 h-[2px] mb-10" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0, transparent)' }} />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><label className="text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-3 block font-medium">{t('contact.labelName')}</label><Input placeholder={t('contact.placeholderName')} value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 h-14 rounded-lg" required/></div>
                <div><label className="text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-3 block font-medium">{t('contact.labelEmail')}</label><Input type="email" placeholder={t('contact.placeholderEmail')} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 h-14 rounded-lg" required/></div>
                <div><label className="text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-3 block font-medium">{t('contact.labelMessage')}</label><Textarea placeholder={t('contact.placeholderMessage')} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 min-h-[150px] resize-none rounded-lg" required/></div>
                <Button type="submit" className="relative bg-[#08233E] text-white hover:bg-[#08233E]/90 text-[13px] font-body tracking-[0.2em] uppercase px-12 h-14 transition-all duration-500 rounded-sm overflow-hidden group hover:shadow-[0_8px_32px_rgba(30,58,95,0.2)]">
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