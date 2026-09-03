import { useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  return (
    <main>
      <h1> Todo App </h1>
      <p>Create a task: {task}</p>
      <input
        value={task}
        onChange={ (event) => setTask(event.target.value)}
        placeholder="Enter a task"
      />
    </main>
  );
}

export default App;
