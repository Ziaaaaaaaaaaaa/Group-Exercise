const express = require("express");
const app = express();
const port = process.env.port || 3000;

const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hoya Mense!");
});

app.get("/admin", (req,res)=>{
    res.send("Hoyaaaaaa!")
})

app.post("/admin", (req, res) => {
  const user = req.body.user;
  res.send(`Hoya Mense! ${user}`);
});

app.listen(port, () => {
  console.log(`Example app listening at localhost:${port}`);
});
