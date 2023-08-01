const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hoya Mense!");
});

app.post("/admin", (req, res) => {
  const user = req.body.user;
  res.send("Hoya Mense!", user);
});

app.listen(port, () => {
  console.log(`Example app listening at localhost:${port}`);
});
