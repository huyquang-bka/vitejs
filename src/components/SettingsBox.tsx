import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export function SettingsBox() {
  return (
    <div className="absolute top-4 right-4">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 p-2 flex gap-2">
        <LanguageToggle />
        <div className="w-px bg-gray-200 dark:bg-gray-700" />
        <ThemeToggle />
      </div>
    </div>
  );
}