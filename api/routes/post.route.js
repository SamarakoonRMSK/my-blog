import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createPost,
  favoriteHandle,
  getPosts,
  getFavPosts,
  removefavorite,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create/:userId", verifyToken, createPost);
router.get("/getposts", getPosts);
router.put("/likepost/:postId", verifyToken, favoriteHandle);
router.get("/favorite/:userId", verifyToken, getFavPosts);
router.put("/removefavorite/:postId", verifyToken, removefavorite);

export default router;
