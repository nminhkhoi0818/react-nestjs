import { apiClient } from "./axios";

export const createTransaction = async (data) => {
  const response = await apiClient.post("/transactions", data);
  return response.data;
};
