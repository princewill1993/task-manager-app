import express from "express";
import { loginUser } from "../controllers/userControllers/loginUser.js";
import { signupUser } from "../controllers/userControllers/signupUser.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);

export default router;
