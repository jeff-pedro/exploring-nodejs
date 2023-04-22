const fs = require('fs');

fs.unlink('./files/mynewfile1', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});