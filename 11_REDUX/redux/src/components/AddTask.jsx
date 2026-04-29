import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import { useState } from 'react';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}