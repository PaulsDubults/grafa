import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import TypewriterText from './TypewriterText';
import { WatercolorStain, PaperTexture } from './Decorations';
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
    <section id="kontakti" className="relative py-16 md:py-24 overflow-hidden">
      <PaperTexture id="contP" />
      <img
        src="https://media.base44.com/images/public/6a02e63e7c5f99b008a3ed38/4ed940b7b_Screenshot_2026-07-13_at_200426-removebg-preview1.png"
        alt=""
        className="absolute w-[240px] md:w-[360px] lg:w-[440px] right-[-60px] md:right-[-20px] top-[8%] pointer-events-none select-none opacity-[0.55]"
        style={{ mixBlendMode: 'multiply' }}
        draggable={false}
      />
      <WatercolorStain className="left-[-60px] bottom-[-30px]" color="#b8cde8" opacity={0.1} size={500} id="ct1" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Script line */}
        <div className="mb-6 md:mb-8 min-h-[50px] md:min-h-[60px]">
          <TypewriterText
            text={t('contact.scriptLine')}
            className="font-script text-[18px] md:text-[22px] text-[#08233E]/70 leading-[1.6] italic"
            onComplete={() => setTypewriterDone(true)}
          />
        </div>

        {/* Heading with gold divider */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={typewriterDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[42px] md:text-[56px] lg:text-[68px] font-semibold text-[#08233E] mb-4 leading-[1.05]">
            {t('contact.heading')}
          </h2>
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#C89B3C]/60 via-[#E8D1A0]/40 to-transparent" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-[#08233E]/60 font-body text-[14px] md:text-[15px] leading-[1.85] mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('contact.description')}
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          {/* Left — contact info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex flex-col gap-7">
              <ContactItem icon={Phone} label={t('contact.phoneLabel')} desc={t('contact.phoneDesc')} value="+371 20 383 974" href="tel:+37120383974" />
              <ContactItem icon={Mail} label={t('contact.emailLabel')} desc={t('contact.emailDesc')} value="firmagrafa@gmail.com" href="mailto:firmagrafa@gmail.com" />
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full bg-[#C89B3C]/[0.1] flex items-center justify-center group-hover:bg-[#C89B3C]/[0.18] transition-all duration-400">
                  <Clock className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading text-[14px] font-semibold text-[#08233E] mb-0.5">{t('contact.hoursLabel')}</p>
                  <p className="font-body text-[13px] text-[#08233E]/45 whitespace-pre-line">{t('contact.hoursValue')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7 }}>
            <div className="relative bg-white rounded-xl p-6 md:p-8 border border-[#e8e0d4]/50 overflow-hidden shadow-[0_6px_30px_rgba(30,58,95,0.04)]">
              <div className="absolute top-0 left-5 right-5 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <FormField label={t('contact.labelCompany')} placeholder={t('contact.placeholderCompany')} value={form.company} onChange={(v) => setForm({...form, company: v})} />
                <div className="grid grid-cols-2 gap-3">
                  <FormField label={t('contact.labelName')} placeholder={t('contact.placeholderName')} value={form.name} onChange={(v) => setForm({...form, name: v})} required />
                  <FormField label={t('contact.labelPhone')} placeholder={t('contact.placeholderPhone')} value={form.phone} onChange={(v) => setForm({...form, phone: v})} />
                </div>
                <FormField label={t('contact.labelEmail')} placeholder={t('contact.placeholderEmail')} type="email" value={form.email} onChange={(v) => setForm({...form, email: v})} required />
                <div>
                  <label className="text-[10px] font-body text-[#08233E]/35 tracking-[0.15em] uppercase mb-1.5 block font-medium">{t('contact.labelMessage')}</label>
                  <Textarea placeholder={t('contact.placeholderMessage')} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="bg-[#FBF7F0]/50 border-[#e8e0d4]/60 text-[13px] font-body text-[#08233E] placeholder:text-[#08233E]/18 focus:border-[#C89B3C]/35 min-h-[90px] resize-none rounded-md" required />
                </div>
                <Button type="submit" className="bg-[#08233E] text-white hover:bg-[#08233E]/90 text-[11px] font-body tracking-[0.15em] uppercase px-7 h-10 rounded-sm w-full md:w-auto">
                  <span className="flex items-center gap-2">
                    <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5"><path d="M10,2 C10,2 4,7 4,11 C4,15 7,18 10,18 C13,18 16,15 16,11 C16,7 10,2 10,2Z" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
                    {sent ? t('contact.buttonSent') : t('contact.buttonSend')}
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div
          className="mt-14 md:mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p className="font-script text-[20px] md:text-[24px] text-[#08233E]/60 italic mb-2">{t('contact.closingLine1')}</p>
          <div className="flex justify-center my-3">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#C89B3C]/30"><path d="M12,5 L12,19 M7,14 L12,19 L17,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <p className="font-script text-[32px] md:text-[42px] text-[#08233E] italic mb-6">{t('contact.closingLine2')}</p>
          <div className="w-14 h-[1.5px] mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, transparent)' }} />
          <div className="inline-block">
            <p className="font-body text-[8px] tracking-[0.2em] text-[#08233E]/20 uppercase mb-0.5">SIA firma</p>
            <p className="font-heading text-[24px] md:text-[30px] font-bold text-[#08233E]/18 tracking-[0.12em] leading-none">GRĀFA</p>
            <p className="font-body text-[9px] text-[#08233E]/12 mt-1.5 tracking-wider">{t('footer.tagline')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, desc, value, href }) {
  return (
    <div className="flex items-start gap-3.5 group">
      <div className="w-10 h-10 rounded-full bg-[#C89B3C]/[0.1] flex items-center justify-center group-hover:bg-[#C89B3C]/[0.18] transition-all duration-400">
        <Icon className="w-5 h-5 text-[#C89B3C]" strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-heading text-[14px] font-semibold text-[#08233E] mb-0.5">{label}</p>
        <p className="font-body text-[11px] text-[#08233E]/35 mb-1">{desc}</p>
        <a href={href} className="font-body text-[14px] text-[#C89B3C] hover:text-[#b8973f] transition-colors font-medium">{value}</a>
      </div>
    </div>
  );
}

function FormField({ label, placeholder, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="text-[10px] font-body text-[#08233E]/35 tracking-[0.15em] uppercase mb-1.5 block font-medium">{label}</label>
      <Input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="bg-[#FBF7F0]/50 border-[#e8e0d4]/60 text-[13px] font-body text-[#08233E] placeholder:text-[#08233E]/18 focus:border-[#C89B3C]/35 h-10 rounded-md" required={required} />
    </div>
  );
}