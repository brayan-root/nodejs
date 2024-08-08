http = require('node:http'); 

listener = function(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1>Hello world</h1>');
}

server = http.createServer(listener);
server.listen(2000);
console.log('server is running on port 2000');