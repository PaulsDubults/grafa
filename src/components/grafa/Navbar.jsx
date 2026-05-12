import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Tituls", href: "#", active: true },
  { label: "Pieeja", href: "#pieeja" },
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Saziņa", href: "#kontakti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#f8f5f0]/92 backdrop-blur-lg border-b border-[#e8e0d4]/60' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[72px]">
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-[14px] font-bold tracking-wide">SIA firma GRĀFA</span>
            <span className="text-[9px] text-foreground/35 tracking-[0.12em] font-body">Grāmatvedība. Finanses. Apmācības.</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-body transition-colors duration-300 relative pb-0.5 ${
                  link.active 
                    ? 'text-foreground font-medium' 
                    : 'text-foreground/45 hover:text-foreground/70'
                }`}
              >
                {link.label}
                {link.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground/60" />
                )}
              </a>
            ))}
          </div>

          <button className="md:hidden p-2 text-foreground/50" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#f8f5f0]/98 backdrop-blur-xl pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-8 pt-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-heading text-foreground/70"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}