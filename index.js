// node example
const http = require('http');
const port = ++process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a basic Node.js server!');
}).listen(port, () => {
  console.log(`Node.js server running on http://localhost:${port}`);
});

//express example
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


