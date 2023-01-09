import React from "react";
import Task from "./Task";

function TaskList({ TASKS }) {
  return (
    <div className="tasks">
    {TASKS.map((task) => {
      // console.log(task)
    return <Task key={task.text} task={task.text} category={task.category} /> })}    
    </div>
  );
}

export default TaskList;
