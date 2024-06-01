// npm i express bcryptjs dotenv jsonwebtoken mongoose cookie-parser
import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Serever is running on port 3000");
});
