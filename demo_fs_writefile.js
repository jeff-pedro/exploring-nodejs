const fs = require('fs');

// create a new file and append content
fs.appendFile('./files/mynewfile1.txt', 'Hello content!', (err) => {
    if (err) throw err;
    console.log('Saved!');
});

// create new empty file
fs.open('./files/mynewfile2.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('Saved!');
});

// create a new file
fs.writeFile('./files/mynewfile3.txt', 'Hello content!', (err) => {
    if (err) throw err;
    console.log('Saved!');
});