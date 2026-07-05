import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import WatercolorBackground from './WatercolorBackground';
import GoldLine from './GoldLine';

const contactItems = [
  { icon: User, label: "Liene Upeniece", href: null },
  { icon: Phone, label: "+371 20383974", href: "tel:+37120383974" },
  { icon: Mail, label: "firmagrafa@gmail.com", href: "mailto:firmagrafa@gmail.com" },
  { icon: MapPin, label: "Jelgavā strādājošs uzņēmums", href: null },
  { icon: Clock, label: "P.–Pk. 9:00–17:00", href: null },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      id="kontakti"
      className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="contact" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <p className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#c9a84c] mb-4 font-medium">
              Sazinieties
            </p>
            <h2 className="font-heading text-[30px] md:text-[40px] lg:text-[48px] font-semibold mb-5 leading-tight text-[#1e3a5f]">
              Kontakti
            </h2>
            <GoldLine width="w-24" className="mb-8" />

            <p className="text-[#1e3a5f]/50 font-body text-[15px] md:text-[16px] leading-[1.9] mb-10 max-w-lg">
              Ja Jums nepieciešami grāmatvedības pakalpojumi ar individuālu pieeju, droši 
              sazinieties. Ar prieku palīdzēsim atrast piemērotāko risinājumu.
            </p>

            <p className="font-heading text-[16px] font-semibold mb-8 text-[#1e3a5f]">
              SIA firma GRĀFA
            </p>

            <div className="flex flex-col gap-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/[0.05] flex items-center justify-center group-hover:bg-[#1e3a5f]/[0.1] transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-[#c9a84c]" strokeWidth={1.5} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[14px] font-body text-[#1e3a5f]/65 hover:text-[#1e3a5f] transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-[14px] font-body text-[#1e3a5f]/55">
                      {item.label}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-white rounded-sm p-8 md:p-12 shadow-[0_4px_24px_rgba(30,58,95,0.08)] border border-[#e8e0d4]/50">
              <h3 className="font-heading text-[20px] md:text-[22px] font-semibold mb-2 text-[#1e3a5f]">
                Nosūtiet ziņu
              </h3>
              <div className="w-10 h-[1.5px] mb-8" style={{ background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[11px] font-body text-[#1e3a5f]/40 tracking-wider uppercase mb-2 block">Vārds</label>
                  <Input
                    placeholder="Jūsu vārds"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-[#faf7f2]/60 border-[#e8e0d4] text-[14px] font-body text-[#1e3a5f] placeholder:text-[#1e3a5f]/25 focus:border-[#c9a84c]/50 focus:ring-[#c9a84c]/20 h-12 rounded-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-body text-[#1e3a5f]/40 tracking-wider uppercase mb-2 block">E-pasts</label>
                  <Input
                    type="email"
                    placeholder="jusu@epasts.lv"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-[#faf7f2]/60 border-[#e8e0d4] text-[14px] font-body text-[#1e3a5f] placeholder:text-[#1e3a5f]/25 focus:border-[#c9a84c]/50 focus:ring-[#c9a84c]/20 h-12 rounded-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-body text-[#1e3a5f]/40 tracking-wider uppercase mb-2 block">Ziņa</label>
                  <Textarea
                    placeholder="Jūsu ziņojums..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-[#faf7f2]/60 border-[#e8e0d4] text-[14px] font-body text-[#1e3a5f] placeholder:text-[#1e3a5f]/25 focus:border-[#c9a84c]/50 focus:ring-[#c9a84c]/20 min-h-[130px] resize-none rounded-sm"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#1e3a5f] text-white hover:bg-[#1e3a5f]/90 hover:shadow-lg active:scale-[0.98] text-[13px] font-body tracking-wider uppercase px-10 h-12 transition-all duration-400 rounded-sm"
                >
                  {sent ? "Nosūtīts ✓" : "Sūtīt ziņu"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}