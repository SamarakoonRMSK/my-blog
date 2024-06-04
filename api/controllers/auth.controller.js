import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return next(errorHandler(404, "User not found"));
    }
    const isValidPassword = bcrypt.compareSync(password, findUser.password);
    if (!isValidPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign(
      {
        id: findUser._id,
        isAdmin: findUser.isAdmin,
      },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = findUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};