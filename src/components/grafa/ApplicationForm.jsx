import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { base44 } from '@/api/base44Client';
import { useI18n } from '@/lib/i18n';

export default function ApplicationForm({ open, onClose, vacancyTitle }) {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: '', email: '', phone: '', motivation: '', notes: '' });
  const [cvFile, setCvFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    let cvUrl = '';
    if (cvFile) {
      const { file_url } = await base44.integrations.Core.UploadFile({ file: cvFile });
      cvUrl = file_url;
    }
    await base44.functions.invoke('sendJobApplication', {
      ...form,
      vacancyTitle: vacancyTitle || '',
      cvUrl,
    });
    setSending(false);
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', motivation: '', notes: '' });
      setCvFile(null);
      setSent(false);
    }, 300);
  };

  const inputClass = "bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 h-14 rounded-lg";
  const labelClass = "text-[11px] font-body text-[#C89B3C]/70 tracking-[0.2em] uppercase mb-3 block font-medium";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[#08233E]/40 backdrop-blur-sm" onClick={handleClose} />
          <motion.div
            className="relative bg-white rounded-xl w-full max-w-[560px] max-h-[90vh] overflow-y-auto p-8 md:p-10 border border-[#e8e0d4]/50 shadow-[0_20px_60px_rgba(30,58,95,0.15)]"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-8 right-8 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, #E8D1A0, #C89B3C, transparent)' }} />
            <button onClick={handleClose} className="absolute top-4 right-4 text-[#08233E]/30 hover:text-[#08233E]/60 transition-colors">
              <X size={20} />
            </button>

            {sent ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-[#C89B3C] mx-auto mb-5" strokeWidth={1.2} />
                <h3 className="font-heading text-[22px] font-semibold text-[#08233E] mb-3">{t('careers.formSentTitle')}</h3>
                <p className="text-[#08233E]/50 font-body text-[14px] leading-[1.8]">{t('careers.formSentText')}</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-[22px] md:text-[26px] font-semibold text-[#08233E] mb-1">{t('careers.formTitle')}</h3>
                {vacancyTitle && (
                  <p className="text-[#C89B3C] font-body text-[13px] tracking-wider mb-1">{vacancyTitle}</p>
                )}
                <div className="w-12 h-[2px] mb-8" style={{ background: 'linear-gradient(90deg, #C89B3C, #E8D1A0, transparent)' }} />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>{t('careers.labelName')} *</label>
                    <Input placeholder={t('careers.placeholderName')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>{t('careers.labelEmail')} *</label>
                    <Input type="email" placeholder={t('careers.placeholderEmail')} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>{t('careers.labelPhone')} *</label>
                    <Input type="tel" placeholder={t('careers.placeholderPhone')} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>{t('careers.labelCV')} *</label>
                    <label className="flex items-center gap-3 cursor-pointer bg-[#FBF7F0]/80 border border-[#e8e0d4]/80 rounded-lg px-5 h-14 hover:border-[#C89B3C]/50 transition-colors">
                      <Upload className="w-4 h-4 text-[#C89B3C]" />
                      <span className="text-[14px] font-body text-[#08233E]/40">
                        {cvFile ? cvFile.name : t('careers.placeholderCV')}
                      </span>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setCvFile(e.target.files[0])} required={!cvFile} />
                    </label>
                  </div>
                  <div>
                    <label className={labelClass}>{t('careers.labelMotivation')}</label>
                    <Textarea placeholder={t('careers.placeholderMotivation')} value={form.motivation} onChange={(e) => setForm({ ...form, motivation: e.target.value })} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 min-h-[100px] resize-none rounded-lg" />
                  </div>
                  <div>
                    <label className={labelClass}>{t('careers.labelNotes')}</label>
                    <Textarea placeholder={t('careers.placeholderNotes')} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="bg-[#FBF7F0]/80 border-[#e8e0d4]/80 text-[15px] font-body text-[#08233E] placeholder:text-[#08233E]/20 focus:border-[#C89B3C]/50 focus:ring-[#C89B3C]/15 min-h-[80px] resize-none rounded-lg" />
                  </div>
                  <Button type="submit" disabled={sending} className="relative bg-[#08233E] text-white hover:bg-[#08233E]/90 text-[13px] font-body tracking-[0.2em] uppercase px-12 h-14 transition-all duration-500 rounded-sm overflow-hidden group hover:shadow-[0_8px_32px_rgba(30,58,95,0.2)] w-full">
                    {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <span className="relative z-10">{t('careers.buttonSubmit')}</span>}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}