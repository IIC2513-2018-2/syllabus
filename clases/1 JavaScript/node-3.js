const http = require('http');
const getData = require('./get-data');

let id = 1;

const server = http.createServer((req, res) => {
  const currentId = id;
  id += 1;
  console.log(`${currentId} starts - ${new Date().toISOString()}`);

  getData((err, data) => {
    if (err) {
      res.end('Ups!');
    } else {
      res.end(data);
    }

    console.log(`${currentId} finishes - ${new Date().toISOString()}`);
  });
  // más código JS
  // // más código JS
  // // más código JS
  // // más código JS
  //
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
