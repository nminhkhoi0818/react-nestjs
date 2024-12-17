import React, { useState } from "react";
import { useTask } from "../context/TaskContext";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTask();

  const handleAddTask = async () => {
    if (task === "") {
      return;
    }
    addTask(task);
    setTask("");
  };

  return (
    <div className="flex justify-center gap-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-white border w-full border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 "
        placeholder="Enter task"
        required
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
