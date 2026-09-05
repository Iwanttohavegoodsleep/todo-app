import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(indexToDelete) {
    setTasks(tasks.filter((task, index) => (index != indexToDelete)))
  }

  return (
    <main>
      <h1> Todo App </h1>
      <p>Create a task: {task}</p>
      <br></br>
      <input onChange={(event) => setTask(event.target.value)} />
      <br></br>
      <button onClick={addTask}>Add task</button>

      {tasks.map((task, index) => (
        <div>
          <h1>
            {task} {index}
          </h1>
          <button onClick={() => deleteTask(index)}> Delete </button>
        </div>
      ))}

    </main>
  );
}

export default App;
