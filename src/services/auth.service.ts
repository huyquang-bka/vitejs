import { API_CONFIG } from '../config/api';
import { LoginCredentials, LoginResponse } from '../types/auth';

export async function loginUser(credentials: Omit<LoginCredentials, 'client_id' | 'client_secret'>): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...credentials,
        client_id: API_CONFIG.auth.clientId,
        client_secret: API_CONFIG.auth.clientSecret,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const data = await response.json();
    
    // Store tokens in localStorage
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    
    return data;
  } catch (error) {
    throw error;
  }
}