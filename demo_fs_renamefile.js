const fs = require('fs');

// rename file (and move to another path)
fs.rename('./files/mynewfile3.txt', './files/myrenamedfile3.txt', (err) => {
    if (err) throw err;
    console.log('File Renamed!');
});