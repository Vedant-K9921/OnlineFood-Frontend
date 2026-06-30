import api from "./axios";
import type { RegisterRequest } from "../types";

export const login = async (
  email: string,
  password: string
) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data.data;
};

export async function register(request: RegisterRequest) {
  const response = await api.post("/auth/register", request);
  return response.data;
}

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data.data;
};
