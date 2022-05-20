/* console.log('Hello, world!'); */
/* const { stdout } = process;
stdout.write('Node.js'); */
let fs = require('fs');
let fileContent = fs.readFileSync('text.txt', 'utf8');
console.log(fileContent);
/* const { stdin, stdout } = process;
stdin.on('data', data => stdout.write(data));
process.exit(); */