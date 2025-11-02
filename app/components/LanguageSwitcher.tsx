'use client';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#f28701] rounded-full shadow-md transition-all duration-300 hover:bg-[#d97300] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2   focus:ring-[#f28701] active:scale-95"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
      style={{color:'white'}}
    >
      {language === 'en' ? 'عربي' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
