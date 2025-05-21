import React, { useState } from "react";

function TodoList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add task only if non-empty
  const addTask = () => {
    const trimmedTask = taskInput.trim();
    if (trimmedTask === "") return; // Prevent adding empty tasks

    // Create new task object with unique id
    const newTask = {
      id: Date.now(), // unique id
      text: trimmedTask,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  // Toggle completed state
  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task by id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id} style={{ textDecoration: completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleCompleted(id)}
            />
            {text}
            <button onClick={() => deleteTask(id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
