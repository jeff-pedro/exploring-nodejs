const url = require('url');
const address = 'http://localhost:3000/default.htm?year=2017&month=february';
const q = url.parse(address, true);

console.log(q);

console.log(q.query); // return an object with query parameters
console.log(q.query.month); // return month property value