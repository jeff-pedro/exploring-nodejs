const http = require('http');

// create a server object
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // write an http header
    res.write('Hello World!\n') // write a response to the client
    res.end(); // end the response
}).listen(3000); // the server object listens on port 3000