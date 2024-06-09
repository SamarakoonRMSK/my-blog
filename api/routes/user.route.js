import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { getUser, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.put("/update/:userId", verifyToken, updateUser);
router.get("/:userId", verifyToken, getUser);

export default router;
