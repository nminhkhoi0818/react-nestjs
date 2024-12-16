import { apiClient } from "./axios";

export const getProfile = async () => {
  const response = await apiClient.get("/users/me");
  return response.data;
};
