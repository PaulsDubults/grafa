import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactItems = [
  { icon: Phone, label: "+371 20383974", href: "tel:+37120383974" },
  { icon: Mail, label: "firmagrafa@gmail.com", href: "mailto:firmagrafa@gmail.com" },
  { icon: MapPin, label: "Jelgavas novads / Eleja", href: null },
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
      style={{ background: '#f5f1eb' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
    >
      <div className="max-w-[1200px] mx-auto">
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
            <div className="w-12 h-[1.5px] bg-[#c9a84c]/50 mb-8 mx-auto" />

            <p className="text-foreground/50 font-body text-[15px] md:text-[16px] leading-[1.9] mb-10 max-w-lg mx-auto">
              Ja Jums nepieciešami grāmatvedības pakalpojumi ar individuālu pieeju, droši 
              sazinieties. Ar prieku palīdzēsim atrast piemērotāko risinājumu Jūsu uzņēmumam 
              vai saimnieciskajai darbībai.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-12 items-center">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <item.icon className="w-[16px] h-[16px] text-foreground/25" strokeWidth={1.5} />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[14px] font-body text-foreground/55 hover:text-foreground transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-[14px] font-body text-foreground/45">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
              <Input
                placeholder="Vārds"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-[#faf8f4] border-foreground/[0.08] text-[14px] font-body placeholder:text-foreground/30 focus:border-foreground/20 h-11"
                required
              />
              <Input
                type="email"
                placeholder="E-pasts"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-[#faf8f4] border-foreground/[0.08] text-[14px] font-body placeholder:text-foreground/30 focus:border-foreground/20 h-11"
                required
              />
              <Textarea
                placeholder="Ziņa"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-[#faf8f4] border-foreground/[0.08] text-[14px] font-body placeholder:text-foreground/30 focus:border-foreground/20 min-h-[120px] resize-none"
                required
              />
              <Button
                type="submit"
                className="bg-foreground text-primary-foreground hover:bg-foreground/85 text-[13px] font-body tracking-wide px-8 h-11 transition-all duration-300"
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