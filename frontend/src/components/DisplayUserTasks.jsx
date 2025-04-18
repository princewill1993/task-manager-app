import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import {
  addNewTask,
  deleteTask,
  setUserTasks,
} from "../features/task/taskSlice";
import EditTask from "./EditTask";
import { serverUrl } from "../utils/helper";
import axios from "axios";
import { useEffect } from "react";

const DisplayUserTasks = () => {
  const dispatch = useDispatch();

  const taskContent = useSelector((state) => state.userTasks?.task_content);
  const userTasks = taskContent?.data?.task_content;
  console.log(userTasks);

  if (!userTasks) {
    return <p className="text-white font-extrabold">Loading tasks...</p>;
  }

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${serverUrl}/task/allTask`);
      dispatch(addNewTask(response.data));
      // Assuming the response contains the tasks in the expected format
      console.log("Fetched tasks:", response.data);
      // Update the Redux store with the fetched tasks
      dispatch(setUserTasks(response.data));
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    // Fetch tasks when the component mounts
    fetchTasks();
    // Optionally, you can also fetch tasks when the component updates
    // fetchTasks();
    // Cleanup function to avoid memory leaks
    return () => {
      // Any cleanup logic if needed
    };
  }, [dispatch]);

  return (
    <div className="bg-white p-16">
      {userTasks.map((item) => {
        return (
          <div
            key={item.task_id}
            className="border-b py-3 flex justify-between"
          >
            <div>
              <li className="font-medium tracking-wide ">
                {item.task_content}
              </li>
              <li className="text-gray-500 font-light text-sm mt-2">
                {item.task_createdAt}
              </li>
              <li className="font-medium tracking-wide ">{item.taskStatus}</li>
            </div>

            <div>
              <select name="" id="">
                <option value="">Ongoing</option>
                <option value="">Completed</option>
              </select>
            </div>

            <div className="flex gap-4">
              <button onClick={() => dispatch(deleteTask(item.task_id))}>
                <DeleteOutlined style={{ color: "red", fontSize: "1.5rem" }} />
              </button>

              <EditTask
                taskId={item.task_id}
                task_content={item.task_content}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUserTasks;
