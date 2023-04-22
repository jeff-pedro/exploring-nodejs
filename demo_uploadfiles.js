const formidable = require('formidable');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/fileupload') {
        // Parse the uplouded file
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            // Save the file
            const oldpath = files.filetoupload.filepath;
            const newpath = '/home/jefferson/Downloads/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, (err) => {
                if (err) throw err;
                res.write('File uploaded and moved!')
                res.end();
            })
        });
    } else {
        // Create an upload form
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
}).listen(8080, () => console.log('server is running...'));

