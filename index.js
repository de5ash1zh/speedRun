import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hii");
});

app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
