import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  getUser,
  updateUser,
  getusers,
  signout,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.get("/getusers", verifyToken, getusers);
router.post("/signout", signout);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.get("/:userId", verifyToken, getUser);

export default router;
