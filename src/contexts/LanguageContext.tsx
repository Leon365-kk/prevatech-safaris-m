import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, languages } from '@/lib/translations';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  availableLanguages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (languages.some(lang => lang.code === browserLang)) {
        setCurrentLanguage(browserLang);
      }
    }
  }, []);

  // Save language preference to localStorage
  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
  };

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][currentLanguage]) {
      return translations[key][currentLanguage];
    }
    // Fallback to English if translation not found
    if (translations[key] && translations[key]['en']) {
      return translations[key]['en'];
    }
    // Return key if no translation found
    return key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    availableLanguages: languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
