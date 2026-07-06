import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '@/lib/translations';

const I18nContext = createContext();

const SUPPORTED_LANGS = ['lv', 'ru'];
const DEFAULT_LANG = 'lv';

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('grafa_lang');
    return saved && SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;
  });

  const switchLang = useCallback((newLang) => {
    if (SUPPORTED_LANGS.includes(newLang)) {
      setLang(newLang);
      localStorage.setItem('grafa_lang', newLang);
    }
  }, []);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let val = translations[lang];
    for (const k of keys) {
      val = val?.[k];
    }
    if (val !== undefined) return val;
    // Fallback to default language
    let fallback = translations[DEFAULT_LANG];
    for (const k of keys) {
      fallback = fallback?.[k];
    }
    return fallback ?? key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}