const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./files/demo_file1.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(3000);
