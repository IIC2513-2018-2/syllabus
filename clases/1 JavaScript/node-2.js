const http = require('http');

let id = 1;

const server = http.createServer((req, res) => {
  const currentId = id;
  id += 1;
  console.log(`${currentId} starts - ${new Date().toISOString()}`);
  const a = new Array(1000000).fill(10);
  a.map(x => Math.pow(x, 100));
  res.end('Hello World!');
  console.log(`${currentId} finishes - ${new Date().toISOString()}`);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});