/* console.log('Привет, я готов записать в файл. Введите чтонибудь...');
const { stdout } = process;
console.log(stdout);
stdout.write('Node.js');
const fs = require('fs');

 */
const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Напишите что-нибудь...\n', (name) => {

  /* readline.close(); */
  fs.open('text.txt', 'w', (err) => {
    if(err) throw err;
    
    fs.writeFile('text.txt', name, function(error){
   
      if(error) throw error; // если возникла ошибка
      /*console.log('запись файла завершена. Содержимое файла:');
      let data = fs.readFileSync('text.txt', 'utf8');
      console.log(data);  // выводим считанные данные */
      console.log('запись файла завершена.Чтобы выйти из режима ЖМИ CTR + C');
    });
  });
});



