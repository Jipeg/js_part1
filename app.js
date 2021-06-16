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
  let qw = 5;
  const a = qwe.hi(qw);
  let a1=5,b=6;
  let c = a1+b;
  //res.write(c.toString);
  res.write(a + '\n');




  res.end('This is the end for you, master');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('You are kozlina');
});