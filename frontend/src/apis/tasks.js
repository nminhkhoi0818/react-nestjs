import { apiClient } from "./axios";

export const getTasks = async () => {
  try {
    const response = await apiClient.get("/tasks");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (name) => {
  try {
    const response = await apiClient.post("/tasks", { name });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateStatusTask = async (id, isCompleted) => {
  try {
    const response = await apiClient.patch(`/tasks/${id}`, { isCompleted });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
