import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Par mums", href: "#par-mums" },
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Pieredze", href: "#kapec" },
  { label: "Atsauksmes", href: "#atsauksmes" },
  { label: "Kontakti", href: "#kontakti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/40' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://media.base44.com/images/public/user_69ad5905a7e5b1a9d898e9ff/e04cddb52_Screenshot2026-05-12at112109.png" 
              alt="GRĀFA logo" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-purple-500 via-teal-400 to-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a 
              href="#kontakti"
              className="ml-2 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/90 via-teal-500/90 to-amber-400/90 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Sazināties
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-6 pt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-heading font-medium text-foreground/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <a 
                href="#kontakti"
                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500/90 via-teal-500/90 to-amber-400/90 text-white font-medium"
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