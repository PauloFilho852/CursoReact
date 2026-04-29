import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTask: (state, action) => {
      const task = state.list.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { addTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;