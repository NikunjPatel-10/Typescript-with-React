import { log } from "console";
import React, { ChangeEvent, useState } from "react";
import { DragEvent } from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  const [text, setText] = useState<string>("");
  const tasks = ["one", "two", "three"];
  const [todo, setTodo] = useState(tasks);
  const [done, setDone] = useState<any[]>([]);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragStart = (task: any, list: string, index: number) => {
    return (event: DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData("task", task);
      event.dataTransfer.setData("list", list);
      event.dataTransfer.setData("index", index.toString());
    };
  };

  const handleToDoDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("task");
    const originList = event.dataTransfer.getData("list");
    const index = parseInt(event.dataTransfer.getData("index"));

    if (originList === "done") {
      setDone((previous) => previous.filter((_, i) => i !== index));
      setTodo((previous) => [...previous, data]);
    }
  };

  const handleDoneDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("task");
    const originList = event.dataTransfer.getData("list");
    const index = parseInt(event.dataTransfer.getData("index"));

    if (originList === "todo") {
      setTodo((previous) => previous.filter((_, i) => i !== index));
      setDone((previous) => [...previous, data]);
    }
  };

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    setTodo((prev: any) => [...prev, text]);
    setText("");
  };

  return (
    <div className="main-wrapper">
      <div className="form-wrapper">
        <form className="form-size" onSubmit={formHandler}>
          <input
            type="text"
            placeholder="enter here..."
            className="form-control"
            value={text}
            onChange={handleChange}
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
            {todo.map((task, index) => (
              <div
                className="task"
                draggable
                onDragStart={handleDragStart(task, "todo", index)}
                key={index}
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
                onDragStart={handleDragStart(task, "done", index)}
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
