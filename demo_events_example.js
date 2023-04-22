const fs = require('fs');
const rs = fs.createReadStream('./files/demofile.txt');

rs.on('open', () => {
    console.log('The file is open');
});