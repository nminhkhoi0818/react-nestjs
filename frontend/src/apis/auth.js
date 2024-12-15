import { apiClient } from "./axios";

export const authenticate = async (username, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const register = async (username, password) => {
  try {
    const response = await apiClient.post("/auth/register", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
