const express  = require('express');
const fs = require('fs');
const http = require('http');
const PORT = 6789;

const server = http.createServer((request, response) => {
  if(request.url === '/') {
      fs.readFile('index.html', 'utf8', (errors, contents) => {
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(contents); 
          response.end();
      });
  }
  else if (request.url === "/ninjas") {
       fs.readFile('ninjas.html', 'utf8', (errors, contents) => {
           response.writeHead(200, {'Content-type': 'text/html'});
           response.write(contents); 
           response.end();
       });
  }
  else if (request.url === "/dojos") {
    fs.readFile('dojos.html', 'utf8', (errors, contents) => {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
    });
}
  else {
      response.end('File not found!!!');
  }
});


server.listen(PORT, () => {
  console.log(`Server now listening on port: ${PORT}...`);
});