import React from "react";

function Task({ task, category}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
