import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "you are not allowed to update this user"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "password must be at least 6 characters"));
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  try {
    const user = await User.findById(req.params.userId);
    if (req.body.username) {
      if (req.body.username.length < 4 && req.body.username.length < 20) {
        return next(
          errorHandler(400, "Username must be between 4 and 20 characters")
        );
      }
      if (req.body.username != req.body.username.toLowerCase()) {
        return next(errorHandler(400, "Username must be lowercase"));
      }
      if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        return next(
          errorHandler(400, "Username can only contain letters and numbers")
        );
      }
      if (user.username != req.body.username) {
        const isUsernameExist = await User.findOne({
          username: req.body.username,
        });

        if (isUsernameExist) {
          return next(errorHandler(409, "Username is already exist"));
        }
      }
    }
    if (req.body.email) {
      if (user.email != req.body.email) {
        const isEmailExist = await User.findOne({ email: req.body.email });
        if (isEmailExist) {
          return next(errorHandler(409, "Email is already exist"));
        }
      }
    }
  } catch (error) {
    next(error);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password: pass, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
