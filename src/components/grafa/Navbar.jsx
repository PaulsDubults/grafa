import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Sākums", href: "#" },
  { label: "Par mums", href: "#par-mums" },
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Kontakti", href: "#kontakti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/85 backdrop-blur-xl border-b border-foreground/5' 
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-heading text-lg font-semibold tracking-wide">
            GRĀFA
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-body font-medium tracking-wide uppercase text-foreground/50 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#kontakti"
              className="ml-4 px-6 py-2 text-[13px] font-medium tracking-wide uppercase border border-foreground/20 rounded-full text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Sazināties
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-foreground/60"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-8 pt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-heading tracking-wide text-foreground/70"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <a 
                href="#kontakti"
                className="mt-6 px-8 py-3 rounded-full border border-foreground/20 text-foreground font-body text-sm tracking-wide uppercase"
                onClick={() => setMobileOpen(false)}
              >
                Sazināties
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}