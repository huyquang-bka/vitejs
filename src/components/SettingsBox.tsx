import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

export function SettingsBox() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="absolute top-4 right-4">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 p-2 flex gap-2">
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={t('auth.language.' + (language === 'en' ? 'vi' : 'en'))}
        >
          <span className="text-lg" role="img" aria-label={`${language} flag`}>
            {language === 'en' ? '🇺🇸' : '🇻🇳'}
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {t('auth.language.' + language)}
          </span>
        </button>

        {/* Divider */}
        <div className="w-px bg-gray-200 dark:bg-gray-700" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={t('auth.theme.' + (theme === 'light' ? 'dark' : 'light'))}
        >
          {theme === 'light' ? (
            <>
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('auth.theme.dark')}
              </span>
            </>
          ) : (
            <>
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t('auth.theme.light')}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}