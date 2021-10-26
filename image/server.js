var http = require('http');

var handleRequest = function(request, response) {
  console.log('Am primit o interogare pe URL: ' + request.url);
  response.writeHead(200);
	response.write("Este versiunea 2.Aplicatia se executa pe podul >>");
	response.write(host);
  response.end('| v2 \n');
};
var www = http.createServer(handleRequest);
www.listen(8080);
