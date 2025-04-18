import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import userReducer from "./features/user/userSlice";

export default configureStore({
  reducer: {
    task: taskReducer,
    user: userReducer,
  },
});
