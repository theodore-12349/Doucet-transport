const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? 'home.html' : req.url);
  fs.readFile(filePath, (err, data) => {
    res.writeHead(err ? 404 : 200, {'Content-Type': 'text/html'});
    res.end(err ? 'Not Found' : data);
  });
}).listen(3000, () => console.log('Server on 3000'));