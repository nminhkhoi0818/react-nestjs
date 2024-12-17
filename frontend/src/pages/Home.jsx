import React from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

const Home = () => {
  return (
    <div className="container mx-auto px-80 py-20">
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
