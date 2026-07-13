import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const sections = [
  { id: 'sakumlapa', labelKey: 'nav.home' },
  { id: 'pakalpojumi', labelKey: 'nav.services' },
  { id: 'kapec-izvel', labelKey: 'whyChoose.heading' },
  { id: 'zinasanu-telpa', labelKey: 'knowledge.heading' },
  { id: 'pievienojies', labelKey: 'careers.heading' },
  { id: 'kontakti', labelKey: 'contact.heading' },
];

export default function SectionNav() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return el ? el.offsetTop - 200 : 0;
      });

      const scrollY = window.scrollY;
      let current = 0;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i]) {
          current = i;
          break;
        }
      }
      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Vertical gold line behind dots */}
          <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-[1px] bg-[#C89B3C]/15" />

          {sections.map((section, i) => {
            const isActive = activeIndex === i;
            const isHovered = hoverIndex === i;
            const showLabel = isHovered || isActive;

            return (
              <div
                key={section.id}
                className="relative flex items-center group"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Number button */}
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-heading text-[12px] font-bold transition-all duration-300 cursor-pointer
                    ${isActive
                      ? 'bg-[#C89B3C] text-white shadow-[0_0_12px_rgba(201,168,76,0.3)]'
                      : 'bg-white/80 text-[#08233E]/40 border border-[#e8e0d4]/60 hover:border-[#C89B3C]/40 hover:text-[#C89B3C]'
                    }`}
                >
                  {i + 1}
                </button>

                {/* Label tooltip — appears on hover */}
                <AnimatePresence>
                  {showLabel && (
                    <motion.div
                      className="absolute left-11 whitespace-nowrap pointer-events-none"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`px-3 py-1.5 rounded-md shadow-sm border text-[12px] font-body leading-tight max-w-[220px] whitespace-normal
                        ${isActive
                          ? 'bg-[#08233E] text-white border-[#08233E]'
                          : 'bg-white text-[#08233E] border-[#e8e0d4]/60'
                        }`}>
                        {t(section.labelKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}