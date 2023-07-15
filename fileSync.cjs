const { isUtf8 } = require('buffer');
const fs = require('fs');

// fs con sincronismo

fs.writeFileSync('./ejemplo.txt', 'creamos archivo para tener persistencia en memoria');

if (fs.existsSync('./ejemplo.txt')) {
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);


    fs.appendFileSync('./ejemplo.txt', '\nsalimos de persistencia en memoria');
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);

    fs.unlinkSync('./ejemplo.txt'); 
}