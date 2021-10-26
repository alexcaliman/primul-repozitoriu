var http = require('http');

var handleRequest = function(request, response) {
  console.log('Am primit o interogare pe URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
