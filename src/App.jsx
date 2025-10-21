import { useState } from "react";
import "./App.css";

function App() {
  const [openSection, setOpenSection] = useState({
    taskList: false,
    task: true,
    completedTask: true,
  });

  const [tasks, setTasks] = useState([]);

  function toggleSection(section) {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }

  console.log(tasks);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button
          className={`close-button ${openSection.taskList ? "open" : ""}`}
          onClick={() => toggleSection("taskList")}
        >
          +
        </button>
        {openSection.taskList && <TaskForm addTask={addTask} />}
      </div>

      <div className="task-container">
        <h2>Task</h2>
        <button className={`close-button ${openSection.task ? "open" : ""}`} onClick={() => toggleSection("task")}>
          +
        </button>
        <div className="sort-controls">
          <button className="sort-button">By Date</button>
          <button className="sort-button">By Priority</button>
        </div>
        {openSection.task && <TaskList />}
      </div>

      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button
          className={`close-button ${openSection.completedTask ? "open" : ""}`}
          onClick={() => toggleSection("completedTask")}
        >
          +
        </button>
        {openSection.completedTask && <CompletedTaskList />}
      </div>
      <Footer />
    </div>
  );
}

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && deadline) {
      addTask({ title, priority, deadline });
      setTitle("");
      setPriority("Low");
      setDeadline("");
    }
  }

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="task title"
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <select
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value);
        }}
      >
        <option value="Hight">Hight</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="datetime-local"
        value={deadline}
        required
        onChange={(e) => {
          console.log(e.target.value);

          setDeadline(e.target.value);
        }}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

function TaskList() {
  return (
    <ul className="task-list">
      <TaskItem />
    </ul>
  );
}

function CompletedTaskList() {
  return (
    <ul className="completed-task-list">
      <TaskItem />
    </ul>
  );
}

function TaskItem() {
  return (
    <li className="task-item">
      <div className="task-info">
        <div>
          Title <strong>Medium</strong>
        </div>
        <div className="task-deadline">Due: {new Date().toLocaleString()}</div>
      </div>
      <div className="task-buttons">
        <button className="complete-button">Complete</button>
        <button className="delete-button">Delete</button>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>Technologies and React concept:</strong> React, JSX, props, useState, component composition, conditional
        rendering, array methods (map, filter), event handling.
      </p>
    </footer>
  );
}

export default App;
