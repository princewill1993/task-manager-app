import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",

  initialState: {
    userTasks: JSON.parse(localStorage.getItem("tasks")) || [],
  },

  reducers: {
    addNewTask: (state, action) => {
      const date = new Date();

      state.userTasks = [
        {
          task_id: Math.floor(Math.random() * 9999),
          task_content: action.payload,
          task_createdAt: date.toDateString(),
          taskStatus: "ongoing",
        },
        ...state.userTasks,
      ];

      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
      console.log(state.userTasks);
    },
    /******* ********/

    /*** Action for deleting a task */
    deleteTask: (state, action) => {
      const updatedTask = state.userTasks.filter(
        (item) => item.task_id !== action.payload
      );
      state.userTasks = updatedTask;
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
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
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },

    //******(********) */
    // filterTask: (state, action) => {
    //   const filterdTask = state.userTasks.filter((task) => {});
    // },

    setUserTasks: (state, action) => {
      state.userTasks = action.payload;
      console.log(state.userTasks);
    },
  },
});

export const { addNewTask, deleteTask, updateTask, setUserTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
