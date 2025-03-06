// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'comments.html');
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.