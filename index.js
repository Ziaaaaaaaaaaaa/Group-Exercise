// node_example.js
const http = require('http');
const port = ++process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a basic Node.js server!');
}).listen(port, () => {
  console.log(`Node.js server running on http://localhost:${port}`);
});
