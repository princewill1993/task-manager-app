import { userModel } from "../../models/usersModel/userModel.js";
import validator from "validator";

async function signupUser(req, res) {
  const { name, email, password } = req.body;

  if (validator.isEmpty(name, { ignore_whitespace: true })) {
    return res
      .status(400)
      .json({ message: "Please provide your name", status: "failed" });
  }

  if (validator.isEmail(email, { ignore_whitespace: true })) {
    return res
      .status(400)
      .json({ message: "Please enter a valid email address" });
  }

  if (
    validator.isStrongPassword(password, {
      minLength: 6,
      minNumbers: 1,
      minSymbols: 1,
      minLowercase: 1,
      minUppercase: 1,
    })
  ) {
    return res
      .status(400)
      .json({ message: "Please provide a strong password", status: "failed" });
  }

  // lets register our user
  try {
    const user = new userModel({
      name: name,
      email: email,
      password: password,
    });

    await user.save();
    res
      .status(201)
      .json({ message: "success", data: "Account created  successfully " });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
}

export { signupUser };
