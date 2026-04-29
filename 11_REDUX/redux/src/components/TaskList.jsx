import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from '../store/taskSlice';

export default function TaskList() {
  const tasks = useSelector(state => state.tasksState.list);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li
          key={task.id}
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.text} {task.completed ? '✅' : ''}
        </li>
      ))}
    </ul>
  );
}