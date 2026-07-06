import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { lang, switchLang } = useI18n();

  return (
    <div className="flex items-center gap-0.5 text-[11px] font-body tracking-wider">
      <button
        onClick={() => switchLang('lv')}
        className={`px-1.5 py-0.5 rounded-sm transition-all duration-300 ${
          lang === 'lv'
            ? 'text-[#1e3a5f] font-semibold'
            : 'text-[#1e3a5f]/35 hover:text-[#1e3a5f]/60'
        }`}
      >
        LV
      </button>
      <span className="text-[#c9a84c]/40">|</span>
      <button
        onClick={() => switchLang('ru')}
        className={`px-1.5 py-0.5 rounded-sm transition-all duration-300 ${
          lang === 'ru'
            ? 'text-[#1e3a5f] font-semibold'
            : 'text-[#1e3a5f]/35 hover:text-[#1e3a5f]/60'
        }`}
      >
        RU
      </button>
    </div>
  );
}