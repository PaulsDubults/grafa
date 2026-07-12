import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import GoldLine from './GoldLine';
import TypewriterText from './TypewriterText';
import { FullFeather, WatercolorStain, PaperTexture } from './Decorations';
import { useI18n } from '@/lib/i18n';

export default function ContactSection() {
  const { t } = useI18n();
  const [form, setForm] = useState({ company: '', name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [typewriterDone, setTypewriterDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ company: '', name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="kontakti" className="relative py-20 md:py-28 overflow-hidden">
      <PaperTexture id="contP" />
      <FullFeather className="w-[220px] md:w-[330px] h-[270px] md:h-[410px] right-[-30px] md:right-0 top-[3%]" opacity={0.16} />
      <WatercolorStain className="right-[-80px] bottom-[-30px]" color="#e0b5b0" opacity={0.1} size={480} id="ct1" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Script line — typewriter */}
        <div className="mb-6 md:mb-8 min-h-[50px] md:min-h-[60px]">
          <TypewriterText
            text={t('contact.scriptLine')}
            className="font-script text-[22px] md:text-[28px] text-[#C89B3C]/80 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[42px] md:text-[58px] lg:text-[68px] font-semibold text-[#08233E] mb-4 leading-[1.1]">
            {t('contact.heading')}
          </h2>
          <GoldLine width="w-28" className="mb-6" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-[#08233E] font-body text-[16px] md:text-[18px] leading-[1.9] mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('contact.description')}
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-start">
          {/* Left — contact info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center group-hover:bg-[#C89B3C]/[0.22] transition-all duration-500">
                  <Phone className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-[17px] font-semibold text-[#08233E] mb-1">{t('contact.phoneLabel')}</p>
                  <p className="font-body text-[14px] text-[#08233E]/45 mb-2">{t('contact.phoneDesc')}</p>
                  <a href="tel:+37120383974" className="font-body text-[16px] text-[#C89B3C] hover:text-[#b8973f] transition-colors font-medium">+371 20 383 974</a>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center group-hover:bg-[#C89B3C]/[0.22] transition-all duration-500">
                  <Mail className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-[17px] font-semibold text-[#08233E] mb-1">{t('contact.emailLabel')}</p>
                  <p className="font-body text-[14px] text-[#08233E]/45 mb-2">{t('contact.emailDesc')}</p>
                  <a href="mailto:firmagrafa@gmail.com" className="font-body text-[16px] text-[#C89B3C] hover:text-[#b8973f] transition-colors font-medium">firmagrafa@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#C89B3C]/[0.12] flex items-center justify-center group-hover:bg-[#C89B3C]/[0.22] transition-all duration-500">
                  <Clock className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-[17px] font-semibold text-[#08233E] mb-1">{t('contact.hoursLabel')}</p>
                  <p className="font-body text-[15px] text-[#08233E]/55 whitespace-pre-line">{t('contact.hoursValue')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
            <div className="relative bg-white rounded-xl p-8 md:p-12 border border-[#e8e0d4]/50 overflow-hidden shadow-[0_8px_40px_rgba(30,58,95,0.06)]">
              <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-2 block font-medium">{t('contact.labelCompany')}</label>
                  <Input placeholder={t('contact.placeholderCompany')} value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 h-13 rounded-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-2 block font-medium">{t('contact.labelName')}</label>
                    <Input placeholder={t('contact.placeholderName')} value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 h-13 rounded-lg" required />
                  </div>
                  <div>
                    <label className="text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-2 block font-medium">{t('contact.labelPhone')}</label>
                    <Input placeholder={t('contact.placeholderPhone')} value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 h-13 rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-2 block font-medium">{t('contact.labelEmail')}</label>
                  <Input type="email" placeholder={t('contact.placeholderEmail')} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 h-13 rounded-lg" required />
                </div>
                <div>
                  <label className="text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-2 block font-medium">{t('contact.labelMessage')}</label>
                  <Textarea placeholder={t('contact.placeholderMessage')} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 min-h-[120px] resize-none rounded-lg" required />
                </div>
                <Button type="submit" className="relative bg-[#08233E] text-white hover:bg-[#08233E]/90 text-[13px] font-body tracking-[0.15em] uppercase px-10 h-13 transition-all duration-500 rounded-sm overflow-hidden group hover:shadow-[0_8px_32px_rgba(30,58,95,0.2)] w-full md:w-auto">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M10,2 C10,2 4,7 4,11 C4,15 7,18 10,18 C13,18 16,15 16,11 C16,7 10,2 10,2Z" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
                    {sent ? t('contact.buttonSent') : t('contact.buttonSend')}
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Closing — per mockup: script text + "Uz tikšanos!" + logo */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="font-script text-[22px] md:text-[28px] text-[#C89B3C]/70 italic mb-4">{t('contact.closingLine1')}</p>
          {t('contact.closingLine2') && (
            <p className="font-script text-[32px] md:text-[42px] text-[#C89B3C] italic mb-6">{t('contact.closingLine2')}</p>
          )}
          <GoldLine width="w-20" className="mx-auto mb-6" />
          <p className="font-heading text-[14px] tracking-[0.15em] text-[#08233E]/30 uppercase">SIA firma GRĀFA</p>
          <p className="font-body text-[12px] text-[#08233E]/20 mt-1">{t('footer.tagline')}</p>
        </motion.div>
      </div>
    </section>
  );
}