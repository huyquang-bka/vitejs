import { API_CONFIG } from '../config/api';
import { LoginCredentials, LoginResponse } from '../types/auth';

export async function loginUser(credentials: Omit<LoginCredentials, 'client_id' | 'client_secret'>): Promise<LoginResponse> {
  try {
    const requestBody = {
      ...credentials,
      client_id: API_CONFIG.auth.clientId,
      client_secret: API_CONFIG.auth.clientSecret,
    };
    
    console.log('Login Request:', {
      url: `${API_CONFIG.baseURL}${API_CONFIG.endpoints.login}`,
      body: requestBody
    });

    const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.login}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    console.log('Login Response:', data);

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    // Store tokens in localStorage
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    
    return data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
}