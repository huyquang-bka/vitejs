import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../hooks/useLanguage';

export function AccountPage() {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {t('account.title')}
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
            {t('account.fullName')}
          </label>
          <p className="mt-1 text-gray-900 dark:text-white">{user?.fullName}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
            {t('account.username')}
          </label>
          <p className="mt-1 text-gray-900 dark:text-white">{user?.userName}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
            {t('account.unitId')}
          </label>
          <p className="mt-1 text-gray-900 dark:text-white">{user?.unitId}</p>
        </div>
      </div>
    </div>
  );
}