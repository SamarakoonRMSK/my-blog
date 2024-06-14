// npm i express bcryptjs dotenv jsonwebtoken mongoose cookie-parser
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();
// MongoDb Connection -----------------
mongoose
  .connect(process.env.MONGO, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => console.log(err));

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());
// Routes------------------------------
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Serever is running on port 3000");
});

// Middlewa Error Handle -----------------
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
