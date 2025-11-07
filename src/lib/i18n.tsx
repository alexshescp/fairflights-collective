import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations, Language } from './translations';

type TranslationContent = (typeof translations)[Language];

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

interface I18nContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: TranslationContent;
  availableLanguages: LanguageOption[];
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const DEFAULT_LANGUAGE: Language = 'en';
const STORAGE_KEY = 'fairflights-language';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (storedLanguage && storedLanguage in translations) {
    return storedLanguage;
  }

  const navigatorLanguage = window.navigator.language.slice(0, 2) as Language;
  if (navigatorLanguage && navigatorLanguage in translations) {
    return navigatorLanguage;
  }

  return DEFAULT_LANGUAGE;
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const availableLanguages = useMemo<LanguageOption[]>(
    () =>
      (Object.keys(translations) as Language[]).map(code => ({
        code,
        label: translations[code].meta.languageName,
        nativeLabel: translations[code].meta.languageNativeName
      })),
    []
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      translations: translations[language],
      availableLanguages
    }),
    [language, availableLanguages]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
};
