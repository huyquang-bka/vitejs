import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { PasswordInput } from './ui/PasswordInput';
import { loginUser } from '../services/auth.service';
import { useLanguage } from '../hooks/useLanguage';

export function LoginForm() {
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await loginUser({ 
        user_name: username, 
        password 
      });
      console.log('Login successful:', response);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (err) {
      setError(t('auth.error.invalidCredentials'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactAdmin = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:admin@gmail.com?subject=Login Support Request';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-200 text-sm">
          {error}
        </div>
      )}

      <Input
        id="username"
        type="text"
        label={t('auth.username')}
        icon={User}
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <PasswordInput
        id="password"
        label={t('auth.password')}
        icon={Lock}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            {t('auth.rememberMe')}
          </label>
        </div>

        <div className="text-sm">
          <a 
            href="#" 
            onClick={handleContactAdmin}
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {t('auth.contactAdmin')}
          </a>
        </div>
      </div>

      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        {t('auth.login')}
      </Button>
    </form>
  );
}