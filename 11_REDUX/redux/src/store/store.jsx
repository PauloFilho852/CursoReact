import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

// Create the Redux store and combine reducers
export const store = configureStore({
  reducer: {
    tasksState: taskReducer
  }
});