import tasksModel from "../../models/tasksModel/tasksModel.js";

async function saveTask(req, res) {
  const { task_content } = req.body;
  console.log(req.body);

  if (task_content === "") {
    return res
      .status(400)
      .json({ message: "please provide a task content", status: "failed" });
  }

  // lets save our tasks
  try {
    const tasks = await tasksModel.create({
      task_content: task_content,
    });

    // await tasks.save();
    console.log(tasks);

    // success message
    res
      .status(201)
      .json({ tasks, message: "task created successfully", status: "success" });
  } catch (error) {
    console.error("Error saving task: ", error);

    res.status(400).json({ message: error.message, status: "failed" });
  }
}

export default saveTask;
