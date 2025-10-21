import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button className="close-button">+</button>
        <TaskForm />
      </div>

      <div className="task-container">
        <h2>Task</h2>
        <button className="close-button">+</button>
        <div className="sort-controls">
          <button className="sort-button">By Date</button>
          <button className="sort-button">By Priority</button>
        </div>
        <TaskList />
      </div>

      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button className="close-button">+</button>
        <CompletedTaskList />
      </div>
      <Footer />
    </div>
  );
}

function TaskForm() {
  return (
    <form action="" className="task-form">
      <input type="text" value={""} placeholder="task title" required />
      <select value={""}>
        <option value="Hight">Hight</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="datetime-local" value={""} required />
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
        Technologies and React concept: React, JSX, props, useState, component composition, conditional rendering, array
        methods (map, filter), event handling.
      </p>
    </footer>
  );
}

export default App;
