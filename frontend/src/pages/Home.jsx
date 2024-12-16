import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import { getTasks } from "../apis/tasks";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await getTasks();
      if (res) setTasks(res);
    };
    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto px-80 py-20">
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
