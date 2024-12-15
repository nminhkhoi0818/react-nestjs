import React from "react";

const TaskList = ({ tasks, setTasks }) => {
  const handleChangeStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId && task.status === "Incomplete") {
        return { ...task, status: "Completed" };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col gap-4 py-4">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="flex gap-4">
            <button
              onClick={() => handleChangeStatus(task.id)}
              className="px-2 py-1 text-white rounded"
              style={{
                backgroundColor: task.status === "Completed" ? "green" : "red",
              }}
            >
              {task.status}
            </button>
            <span className="text-lg ">{task.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
