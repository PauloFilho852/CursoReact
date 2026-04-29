import { useSelector } from 'react-redux';

export default function TaskStats() {
  const tasks = useSelector(state => state.tasksState.list);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div>
      <p>Total: {total}</p>
      <p>Concluídas: {completed}</p>
    </div>
  );
}