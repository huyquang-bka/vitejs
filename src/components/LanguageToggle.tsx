import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const FLAGS = {
  en: "🇺🇸",
  vi: "🇻🇳"
};

const LABELS = {
  en: "English",
  vi: "Tiếng Việt"
};

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      <span className="text-lg" role="img" aria-label={`${language} flag`}>
        {FLAGS[language]}
      </span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {LABELS[language]}
      </span>
    </button>
  );
}