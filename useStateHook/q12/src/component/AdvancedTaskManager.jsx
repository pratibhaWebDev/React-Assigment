import React, { useState } from "react";

const PRIORITY_ORDER = { High: 3, Medium: 2, Low: 1 };

function AdvancedTaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // Add new task with title and priority
  const addTask = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      priority,
      completed: false,
    };

    // Add task and sort by priority descending
    const updatedTasks = [...tasks, newTask].sort(
      (a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]
    );

    setTasks(updatedTasks);
    setTitle("");
    setPriority("Medium");
  };

  // Toggle completed state of task
  const toggleCompleted = (id) => {
    const updatedTasks = tasks
      .map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
      // Sort again after toggling to maintain consistent order
      .sort((a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]);

    setTasks(updatedTasks);
  };

  // Delete task by id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on selected filters
  const filteredTasks = tasks.filter((task) => {
    const priorityMatch =
      filterPriority === "All" || task.priority === filterPriority;
    const statusMatch =
      filterStatus === "All" ||
      (filterStatus === "Completed" && task.completed) ||
      (filterStatus === "Incomplete" && !task.completed);
    return priorityMatch && statusMatch;
  });

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Advanced Task Manager</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ marginRight: 10 }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label>
          Filter by Priority:{" "}
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>

        <label style={{ marginLeft: 20 }}>
          Filter by Status:{" "}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Incomplete</option>
          </select>
        </label>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.length === 0 && <li>No tasks found.</li>}
        {filteredTasks.map(({ id, title, priority, completed }) => (
          <li
            key={id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
              padding: 10,
              borderRadius: 5,
              backgroundColor: priority === "High" ? "#ffdada" : "#f0f0f0",
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleCompleted(id)}
              style={{ marginRight: 10 }}
            />
            <div style={{ flexGrow: 1 }}>
              <strong>{title}</strong>{" "}
              <span style={{ fontSize: 12, color: "#555" }}>
                ({priority})
              </span>
            </div>
            <button onClick={() => deleteTask(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvancedTaskManager;
