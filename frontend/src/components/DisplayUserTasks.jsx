import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deleteTask } from "../features/task/taskSlice";
import EditTask from "./EditTask";

const DisplayUserTasks = () => {
  const dispatch = useDispatch();

  const { userTasks } = useSelector((state) => state.task);

  return (
    <div>
      {userTasks.map((item) => {
        return (
          <div
            key={item.task_id}
            className="border-b py-3 flex justify-between"
          >
            <div>
              <p className="font-medium tracking-wide ">{item.task_content}</p>
              <p className="text-gray-500 font-light text-sm mt-2">
                {item.task_createdAt}
              </p>
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
