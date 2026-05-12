import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import InkLine from './InkLine';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise(r => setTimeout(r, 1000));
    toast.success('Ziņa nosūtīta! Sazināsimies ar Jums drīzumā.');
    setForm({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <SectionWrapper id="kontakti" className="bg-gradient-to-b from-transparent via-purple-50/15 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            className="text-sm tracking-widest uppercase text-muted-foreground font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Kontakti
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sazināsimies{' '}
            <span className="gradient-text italic">personīgi</span>
          </motion.h2>
          <div className="flex justify-center">
            <InkLine className="max-w-[120px]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/70 font-body leading-relaxed text-lg">
              Zvaniet, rakstiet vai vienkārši pasveicinieties — 
              ar prieku atbildēsim un palīdzēsim atrast labāko risinājumu Jūsu uzņēmumam.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-teal-500/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-heading font-semibold">Liene Upeniece</p>
                  <a href="tel:+37120383974" className="text-muted-foreground hover:text-foreground transition-colors">
                    +371 20 383 974
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/10 to-green-500/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <p className="font-heading font-semibold">E-pasts</p>
                  <a href="mailto:firmagrafa@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    firmagrafa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="font-heading font-semibold">Atrašanās vieta</p>
                  <p className="text-muted-foreground">Jelgava, Latvija</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-sm font-body font-medium text-foreground/70 mb-1.5 block">Jūsu vārds</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ievadiet vārdu"
                  required
                  className="bg-white/60 border-white/50 focus:border-purple-300 rounded-xl"
                />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground/70 mb-1.5 block">E-pasts</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jusu@epasts.lv"
                  required
                  className="bg-white/60 border-white/50 focus:border-purple-300 rounded-xl"
                />
              </div>
              <div>
                <label className="text-sm font-body font-medium text-foreground/70 mb-1.5 block">Ziņojums</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Pastāstiet par savu vajadzību..."
                  rows={4}
                  required
                  className="bg-white/60 border-white/50 focus:border-purple-300 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-gradient-to-r from-purple-500 via-teal-500 to-amber-400 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 h-12"
              >
                {sending ? 'Sūta...' : 'Nosūtīt ziņojumu'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}