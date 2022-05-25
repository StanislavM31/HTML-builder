/* console.log('Hello, world!'); */
/* const { stdout } = process;
stdout.write('Node.js'); */
let fs = require('fs');
const path = require('path');
const input = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
input.on('data', data => console.log(data));
input.on('error', error => console.log('Error', error.message));