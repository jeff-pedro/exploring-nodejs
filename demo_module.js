const http = require('http');
const dt = require('./demo_module_first');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The date and time currently: ' + dt.myDateTime());
    res.end();
}).listen(3000);