/* 
    This File Server should serve files requested by the clients
 */

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = '../files' + q.pathname;

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/hmtl' })
            return res.end('404 Not Found!');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080, () => console.log('server is running...'));