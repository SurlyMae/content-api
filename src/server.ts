import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.status(200);
  res.json({ message: "hiiii" });
});

export default app;
