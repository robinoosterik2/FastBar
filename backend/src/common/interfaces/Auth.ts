export interface AuthResponse {
  access_token: string;
}

export interface JwtPayload {
  sub: string;
  email: string;
  roles: string[];
  status: string;
  iat?: number;
  exp?: number;
}
