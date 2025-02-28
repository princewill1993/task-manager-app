import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",

  initialState: {
    userTasks: [],
  },

  reducers: {
    addNewTask: (state, action) => {
      const date = new Date();

      state.userTasks = [
        {
          task_id: Math.floor(Math.random() * 9999),
          task_content: action.payload,
          task_createdAt: date.toDateString(),
        },
        ...state.userTasks,
      ];
    },
    /******* ********/

    /*** Action for deleting a task */
    deleteTask: (state, action) => {
      const updatedTask = state.userTasks.filter(
        (item) => item.task_id !== action.payload
      );
      state.userTasks = updatedTask;
    },
    /******* ********/

    /*** Action for updating a task*/
    updateTask: (state, action) => {
      const updatedTask = state.userTasks.map((item) => {
        if (item.task_id === action.payload.taskId) {
          item.task_content = action.payload.update_task_content;
        }
        return item;
      });
      state.userTasks = updatedTask;
    },
  },
});

export const { addNewTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
