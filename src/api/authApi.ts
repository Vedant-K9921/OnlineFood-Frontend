import api from "./axios";

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

export const register = async (
  data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }
) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data.data;
};