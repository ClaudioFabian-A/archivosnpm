const fs = require('fs');



const operacionesArchivosAsincrona = async () => {
    try {
        await fs.promises.writeFile ('./fs-promesas.txt', 'persistiendo en archivos con promesas.');
        
        let resultado = await fs.promises.readFile('./fs-promesas.txt', 'utf-8');
        console.log(resultado);

        await fs.promises.appendFile('./fs-promesas.txt', 'se actualiza el texto.');
        resultado = await fs.promises.readFile('./fs-promesas.txt','utf-8');
        console.log(resultado);

      await fs.promises.unlink('./fs-promesas.txt');

    } catch (error) {
        console.log(error);
    }
}
operacionesArchivosAsincrona();