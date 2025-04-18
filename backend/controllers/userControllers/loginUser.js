import { userModel } from "../../models/usersModel/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import { tasksModel } from "../../models/tasksModel/tasksModel.js";

async function loginUser(req, res) {
  const { email, password } = req.body;

  if (validator.isEmail(email) === false) {
    return res.status(400).json({
      message: "please provide a valid email address",
      status: "failed",
    });
  }
  if (
    validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }) === false
  ) {
    return res.status(400).json({
      message:
        "password must contain uppercase, lowercase, number, special character and a digit",
      status: "failed",
    });
  }

  try {
    // check for the users login info is in the database
    const user = await userModel.findOne({ email: email.toLowerCase().trim() });

    if (user === null) {
      return res
        .status(400)
        .json({ message: "Couldn't find user", status: "failed" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect === false) {
      return res
        .status(400)
        .json({ message: "Email or Password do not match", status: "failed" });
    }
    user.password = undefined;
    res.status(201).json({
      user,
      status: "success ",
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
}

export { loginUser };
