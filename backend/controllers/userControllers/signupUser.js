import { userModel } from "../../models/usersModel/userModel.js";
import validator from "validator";
import bcyrpt from "bcrypt";
import { tasksModel } from "../../models/tasksModel/tasksModel.js";

async function signupUser(req, res) {
  const { name, email, password } = req.body;

  if (validator.isEmpty(name, { ignore_whitespace: true })) {
    return res
      .status(400)
      .json({ message: "Please provide your name", status: "failed" });
  }

  if (validator.isEmail(email) === false) {
    return res.status(400).json({
      message: "Please enter a valid email address",
      status: "failed",
    });
  }

  if (
    validator.isStrongPassword(password, {
      minLength: 6,
      minNumbers: 1,
      minSymbols: 1,
      minLowercase: 1,
      minUppercase: 1,
    }) === false
  ) {
    return res.status(400).json({
      message:
        "password must contain uppercase, lowercase, number, special character and a digit",
      status: "failed",
    });
  }

  const salt = await bcyrpt.genSalt(10);
  const hashedPassword = await bcyrpt.hash(password, salt);

  // lets register our user
  try {
    const user = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await user.save();

    // success message
    res
      .status(201)
      .json({ message: "Account created  successfully ", status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
}

export { signupUser };
