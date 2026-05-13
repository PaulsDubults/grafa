import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import WatercolorBackground from './WatercolorBackground';

const contactItems = [
  { icon: User, label: "Liene Upeniece", href: null },
  { icon: Phone, label: "+371 20383974", href: "tel:+37120383974" },
  { icon: Mail, label: "firmagrafa@gmail.com", href: "mailto:firmagrafa@gmail.com" },
  { icon: MapPin, label: "Jelgavā strādājošs uzņēmums", href: null },
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
      className="relative min-h-[70vh] md:min-h-[80vh] py-20 md:py-32 px-6 md:px-10 overflow-hidden"
      style={{ background: '#faf7f2' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <WatercolorBackground variant="contact" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="w-full max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[42px] font-semibold mb-4 leading-tight">
              Sazinieties
            </h2>
            <div className="w-20 h-[2px] bg-[#c9a84c] mb-8 mx-auto" />

            <p className="text-foreground/55 font-body text-[15px] md:text-[16px] leading-[1.9] mb-10 max-w-lg mx-auto">
              Ja Jums nepieciešami grāmatvedības pakalpojumi ar individuālu pieeju, droši 
              sazinieties. Ar prieku palīdzēsim atrast piemērotāko risinājumu Jūsu uzņēmumam 
              vai saimnieciskajai darbībai.
            </p>

            {/* Company name */}
            <p className="font-heading text-[15px] font-semibold mb-6 text-foreground/70">
              SIA firma GRĀFA
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-12 items-center">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4"
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-[16px] h-[16px] text-foreground/30 hover:text-foreground/50 transition-colors duration-300" strokeWidth={1.5} />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[14px] font-body text-foreground/55 hover:text-foreground transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-[14px] font-body text-foreground/50">
                      {item.label}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
              <Input
                placeholder="Vārds"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white/60 backdrop-blur-sm border-foreground/[0.08] text-[14px] font-body placeholder:text-foreground/30 focus:border-foreground/20 h-11"
                required
              />
              <Input
                type="email"
                placeholder="E-pasts"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white/60 backdrop-blur-sm border-foreground/[0.08] text-[14px] font-body placeholder:text-foreground/30 focus:border-foreground/20 h-11"
                required
              />
              <Textarea
                placeholder="Ziņa"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white/60 backdrop-blur-sm border-foreground/[0.08] text-[14px] font-body placeholder:text-foreground/30 focus:border-foreground/20 min-h-[120px] resize-none"
                required
              />
              <Button
                type="submit"
                className="bg-foreground text-primary-foreground hover:bg-foreground/85 hover:scale-105 active:scale-95 text-[13px] font-body tracking-wide px-8 h-11 transition-all duration-300"
              >
                {sent ? "Nosūtīts ✓" : "Sūtīt ziņu"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}