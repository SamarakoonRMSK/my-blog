import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username == "" ||
    email == "" ||
    password == ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const hashedPass = bcrypt.hashSync(password, 10);
    const newUser = User({
      username,
      email,
      password: hashedPass,
    });
    await newUser.save();
    res.json("Signup is successfull");
  } catch (error) {
    next(error);
  }
};
