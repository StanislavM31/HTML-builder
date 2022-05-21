/* console.log('Hello, world!'); */
/* const { stdout } = process;
stdout.write('Node.js'); */
let fs = require('fs');

let stream = new fs.ReadStream('text.txt', 'utf8');
stream.on('readable', function(){
  let data = stream.read();
  if(data != null)console.log(data);
});