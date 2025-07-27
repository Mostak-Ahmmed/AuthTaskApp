import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push({ id: Date.now(), title: action.payload });
    },
    updateTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const task = state.taskList.find(t => t.id === id);
      if (task) task.title = newTitle;
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
