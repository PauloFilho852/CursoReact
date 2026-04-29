import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux ToDo</h1>
      <AddTask />
      <TaskList />
      <TaskStats />
    </>
  )
}

export default App
