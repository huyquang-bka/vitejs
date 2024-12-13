export interface LoginCredentials {
  client_id: string;
  client_secret: string;
  user_name: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  accessTokenExpires: string;
  refreshToken: string;
  refreshTokenExpires: string;
  fullName: string;
  userName: string;
  unitId: number;
  userId: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: LoginResponse | null;
  loading: boolean;
  error: string | null;
}