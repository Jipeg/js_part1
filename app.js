//import {hello} from './1.js';
//import {require} from './require.js'
const http = require('http');
const qwe = require('./1.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World');
  const a = qwe.hi();
  res.write(a + '\n');




  res.end('This is the end');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});