import React, { useState } from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", status: "Incomplete" },
    { id: 2, name: "Task 2", status: "Completed" },
  ]);

  return (
    <div className="container mx-auto px-40 py-20">
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
