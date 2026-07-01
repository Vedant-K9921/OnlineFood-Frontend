export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role:
    | "ROLE_CUSTOMER"
    | "ROLE_OWNER"
    | "ROLE_ADMIN";
}

export interface AuthResponse {
  token: string;
  user: User;
}