const fs = require('fs');

// update by append content to end of the file 
fs.appendFile('./files/mynewfile1.txt', 'This text was updated.', (err) => {
    if (err) throw err;
    console.log('Updated!');
});

// update file by replacing old content
fs.writeFile('./files/mynewfile2.txt', 'This text was updated.', (err) => {
    if (err) throw err;
    console.log('Replaced!');
});