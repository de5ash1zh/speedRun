import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hii there");
});

app.get("/piyush", (req, res) => {
  res.send("Piyush page");
});

app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
