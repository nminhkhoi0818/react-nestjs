import React from "react";
import { useTask } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, completeTask } = useTask();

  return (
    <div className="flex flex-col gap-4 py-4">
      {tasks.map((task) => {
        return (
          <div key={task._id} className="flex justify-between gap-4">
            <span className="text-lg ">{task.name}</span>
            <button
              onClick={() => completeTask(task._id)}
              className="px-2 py-1 text-white rounded"
              style={{
                backgroundColor: task.isCompleted ? "green" : "red",
              }}
            >
              {task.isCompleted ? "Completed" : "Incomplete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
