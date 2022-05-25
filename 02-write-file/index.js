/*  console.log('Привет, я готов записать в файл. Введите чтонибудь...');
const { stdout } = process;
console.log(stdout);
stdout.write('Node.js');
const fs = require('fs'); */


const fs = require('fs');
const path = require('path');
const process = require('process');

const pathToFile = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(pathToFile, {flags: 'a'});

process.stdout.write('Please, write some text:\n');

process.stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    console.log('Good bye!');
    process.exit();
  }
  writeStream.write(data);
});

process.on('SIGINT', () => {
  console.log('Good bye!');
  process.exit();
});
