import { apiClient } from "./axios";

export const getTasks = async () => {
  const response = await apiClient.get("/tasks");
  return response.data;
};

export const createTask = async (name) => {
  const response = await apiClient.post("/tasks", { name });
  return response.data;
};

export const updateStatusTask = async (id, isCompleted) => {
  const response = await apiClient.patch(`/tasks/${id}`, { isCompleted });
  return response.data;
};
