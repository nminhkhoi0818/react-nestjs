import { apiClient } from "./axios";

export const getAccounts = async () => {
  const response = await apiClient.get("/accounts");
  return response.data;
};

export const getTransactionsByAccount = async (id) => {
  const response = await apiClient.get(`/transactions/${id}`);
  return response.data;
};
