import React, { useState } from "react";

const AddTask = ({ setTasks }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task === "") {
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      name: task,
      status: "Incomplete",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTask("");
  };

  return (
    <div className="flex justify-center gap-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-80 p-2.5 "
        placeholder="Enter task"
        required
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
