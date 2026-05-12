import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 800));
    toast.success('Ziņa nosūtīta! Sazināsimies ar Jums drīzumā.');
    setForm({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <SectionWrapper id="kontakti" className="bg-foreground/[0.015]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.p
            className="text-[12px] tracking-[0.2em] uppercase text-foreground/30 font-body mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Kontakti
          </motion.p>
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-medium leading-tight mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sazināsimies
          </motion.h2>
          <InkLine className="w-12 mb-6" />
          <motion.p
            className="text-foreground/40 font-body text-[15px] max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Sazinieties, ja vēlaties grāmatvedības pakalpojumus ar individuālu pieeju.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-7">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl border border-foreground/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-foreground/30" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm mb-1">Liene</p>
                  <p className="text-[13px] text-foreground/40 mb-0.5">SIA firma GRĀFA</p>
                  <a href="tel:+37120383974" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    +371 20 383 974
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl border border-foreground/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-foreground/30" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm mb-1">E-pasts</p>
                  <a href="mailto:firmagrafa@gmail.com" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    firmagrafa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl border border-foreground/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-foreground/30" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm mb-1">Atrašanās vieta</p>
                  <p className="text-sm text-foreground/50">Jelgavas novads / Eleja</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[12px] font-body tracking-wide uppercase text-foreground/30 mb-2 block">Jūsu vārds</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Vārds"
                  required
                  className="bg-transparent border-foreground/[0.08] focus:border-foreground/20 rounded-xl h-11 text-sm placeholder:text-foreground/20"
                />
              </div>
              <div>
                <label className="text-[12px] font-body tracking-wide uppercase text-foreground/30 mb-2 block">E-pasts</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jusu@epasts.lv"
                  required
                  className="bg-transparent border-foreground/[0.08] focus:border-foreground/20 rounded-xl h-11 text-sm placeholder:text-foreground/20"
                />
              </div>
              <div>
                <label className="text-[12px] font-body tracking-wide uppercase text-foreground/30 mb-2 block">Ziņojums</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Pastāstiet par savu vajadzību..."
                  rows={4}
                  required
                  className="bg-transparent border-foreground/[0.08] focus:border-foreground/20 rounded-xl text-sm resize-none placeholder:text-foreground/20"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-full bg-foreground text-background font-body text-sm font-medium tracking-wide hover:bg-foreground/85 transition-all duration-300 disabled:opacity-50"
              >
                {sending ? 'Sūta...' : 'Nosūtīt ziņojumu'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}