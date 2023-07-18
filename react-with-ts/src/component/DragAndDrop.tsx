import { log } from "console";
import React, { useState } from "react";
import { DragEvent } from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  const tasks = ["one", "two", "three"];
  const [todo, setTodo] = useState(tasks);
  const [done, setDone] = useState<any[]>([]);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragStart = (task: any) => {
    return (event: DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData("id", task);
    };
  };

  const handleToDoDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("id");
    setDone((previous) => previous.filter((task) => task !== data));
    setTodo((previous) => [...previous, data]);
  };

  const handleDoneDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("id");

    setTodo((previous) => previous.filter((task) => task !== data));
    setDone((previous) => [...previous, data]);
  };

  const formHandler = () => {};

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <form className="form-size" onSubmit={formHandler}>
          <input
            type="text"
            placeholder="enter here..."
            className="form-control"
          />
          <button className="submit-btn">Go</button>
        </form>
      </div>
      <div className="list-card">
        <div
          className="card list-card-todo"
          onDragOver={handleDragOver}
          onDrop={handleToDoDrop}
        >
          <b>Todo</b>
          <div className="task-list">
            {todo.map((task) => (
              <div
                className="task"
                draggable
                onDragStart={handleDragStart(task)}
                key={task}
              >
                {task}
              </div>
            ))}
          </div>
        </div>
        <div
          className="card list-card-done"
          onDragOver={handleDragOver}
          onDrop={handleDoneDrop}
        >
          <b>Done</b>
          <div className="task-list">
            {done.map((task, index) => (
              <div
                className="task"
                draggable
                onDragStart={handleDragStart(task)}
                key={index}
              >
                {task}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
