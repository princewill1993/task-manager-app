import { userModel } from "../../models/usersModel/userModel.js";
import validator from "validator";

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
    const user = await userModel.findOne({ email: email.toLowercase().trim() });

    if (user === null) {
      res.status(400).json({ message: "Couldn't find user", status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ data: error, status: "failed" });
  }

  res
    .status(201)
    .json({ message: "success", data: "user logged in successfully" });
}

export { loginUser };
