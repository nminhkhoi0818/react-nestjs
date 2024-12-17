import { createContext, useContext, useEffect, useState } from "react";
import { createTask, getTasks, updateStatusTask } from "../apis/tasks";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await getTasks();
      if (res) setTasks(res);
    };
    fetchTasks();
  }, []);

  const addTask = async (name) => {
    if (!name) return;

    try {
      const newTask = await createTask(name);
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error(error);
    }
  };

  const completeTask = async (taskId) => {
    const response = await updateStatusTask(taskId, true);

    const updatedTasks = tasks.map((task) => {
      if (task._id === taskId && !task.isCompleted) {
        return { ...task, isCompleted: true };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
