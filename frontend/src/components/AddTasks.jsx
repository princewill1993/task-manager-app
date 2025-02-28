import React from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../features/task/taskSlice";
import { Input, Button, Divider } from "antd";

const AddTasks = () => {
  const [taskText, setTaskText] = React.useState("");
  const dispatch = useDispatch();

  function handleAddTask() {
    // check to see if the task field is empty
    if (taskText.trim() === "") {
      return;
    }
    dispatch(addNewTask(taskText));
    setTaskText("");
  }

  return (
    <div className="p-20 grid gap-3">
      <Input
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="Enter task title"
        size="large"
      />
      <Button onClick={handleAddTask} type="primary" size="large" block>
        Create Task
      </Button>

      <Divider />
    </div>
  );
};

export default AddTasks;
