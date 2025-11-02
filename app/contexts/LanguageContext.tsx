'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header translations
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Connect Us',
    'nav.schedule': 'Schedule an appointment',
    'nav.cart': 'Cart',
    // Hero section translations
    'hero.subtitle': 'Car repair',
    'hero.title': 'Auto maintenance, service & repair',
    'hero.description': 'At vitae commodo amet libero tortor blandit risus condimentum mauris. cras arcu tortor aenean turpis massa mauris ac mi facilisi.',
    'hero.cta.schedule': 'Schedule an appointment',
    'hero.cta.browse': 'Browse services',
  },
  ar: {
    // Header translations
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    'nav.schedule': 'احجز موعداً',
    'nav.cart': 'السلة',
    // Hero section translations
    'hero.subtitle': 'إصلاح السيارات',
    'hero.title': 'صيانة وخدمة وإصلاح السيارات',
    'hero.description': 'نقدم خدمات صيانة وإصلاح السيارات بأعلى جودة وأفضل الأسعار. فريق متخصص من الفنيين ذوي الخبرة في خدمتكم.',
    'hero.cta.schedule': 'احجز موعداً',
    'hero.cta.browse': 'تصفح خدماتنا',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};