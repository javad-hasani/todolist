import { useState } from "react";
import Lottie from "lottie-react";
import animation from "./assets/animation_lks158i1.json";
import "./Todolist.css";

interface Task {
  id: number;
  name: string;
  category: string;
  dueDate: string;
  priority: string;
  progress: string;
}

const TodoList = () => {
  // State variables
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [progress, setProgress] = useState("");

  // Event handlers
  const handleAddTask = () => {
    // Check if the task name is empty
    if (newTask.trim() === "") return;

    // Create a new task object
    const task = {
      id: new Date().getTime(),
      name: newTask,
      category,
      dueDate,
      priority,
      progress,
    };

    // Add the task to the state
    setTasks([...tasks, task]);

    // Reset the task name and other input fields
    setNewTask("");
    setCategory("");
    setDueDate("");
    setPriority("");
    setProgress("");
  };

  const handleDeleteTask = (taskId: number) => {
    // Remove the task from the state
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Render the component
  return (
    <div className="container">
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="یادداشت خود را بنویسید..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn" onClick={handleAddTask}>
          اضافه کردن
        </button>
      </div>
      <div className="ul-container">
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span>{task.name}</span>
              <button
                className="btn1"
                onClick={() => handleDeleteTask(task.id)}
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="animation-container">
        <Lottie
          animationData={animation}
          className="animationData"
        />
      </div>
    </div>
  );
};

// Export the component
export default TodoList;
