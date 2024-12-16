import { apiClient } from "./axios";

export const authenticate = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const register = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/register", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
