import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Sākumlapa", href: "#sakumlapa" },
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Kāpēc GRĀFU", href: "#kapec-grafu" },
  { label: "Process", href: "#process" },
  { label: "Zināšanu telpa", href: "#zinasanu-telpa" },
  { label: "Par mums", href: "#par-mums" },
  { label: "Pievienojies", href: "#pievienojies" },
  { label: "Kontakti", href: "#kontakti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('sakumlapa');
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 600;
      setVisible(window.scrollY > heroBottom - 80);
      setScrolled(window.scrollY > heroBottom - 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[#f5f0e8]/95 backdrop-blur-xl shadow-sm border-b border-[#c9a84c]/15'
            : 'bg-[#f5f0e8]/80 backdrop-blur-md'
        }`}
        initial={{ y: -80 }}
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-end h-14 md:h-[60px]">

          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[12px] font-body transition-all duration-300 relative pb-1 text-[#1e3a5f]/50 hover:text-[#1e3a5f]/80"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button className="lg:hidden p-2 text-[#1e3a5f]/60" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#f5f0e8]/98 backdrop-blur-xl pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-7 pt-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-heading text-[#1e3a5f]/80 hover:text-[#1e3a5f]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => handleClick(e, link.href)}
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