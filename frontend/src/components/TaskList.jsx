import React from "react";
import { updateStatusTask } from "../apis/tasks";

const TaskList = ({ tasks, setTasks }) => {
  const handleChangeStatus = async (taskId) => {
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
    <div className="flex flex-col gap-4 py-4">
      {tasks.map((task) => {
        return (
          <div key={task._id} className="flex justify-between gap-4">
            <span className="text-lg ">{task.name}</span>
            <button
              onClick={() => handleChangeStatus(task._id)}
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
