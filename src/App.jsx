import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <main>
      <h1> Todo App </h1>
      <p>Create a task: {task}</p>
      <input
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Enter a task"
      />
      <br></br>

      <button onClick={addTask}> Add Task </button>

      <br></br>

      {tasks.map((task) => (
        <h1> {task} </h1>
      ))}
    </main>
  );
}

export default App;
