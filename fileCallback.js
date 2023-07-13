const { isUtf8 } = require('buffer');
const fs = require('fs');


fs.writeFile('./info-Callback.txt', 'persistencia en memoria con callback', error => {
    if (error) {
        throw new Error(`error en la creacion del archivo `)
    }
    fs.readFile('./info-Callback.txt','utf-8',(error,contenido)=>{
        if(error){
            throw new Error(`error en la lectura del archivo `)
        }
        console.log(contenido);
    });
    fs.appendFile('./info-Callback.txt','\nactualizamos la info',error=>{
        if(error){
            throw new Error(`Error en la actualizacion del archivo`)
        }
        fs.readFile('./info-Callback.txt','Utf-8',(erro,contenido)=>{
            if(error){
                throw new Error (`error en la lectura del archivo`)
            }
            console.log(contenido);

            fs.unlink('./info-Callback.txt',error=>{
                if(error){
                    throw new Error(`erro en el delete del archivo`);
                }
            })
        })
        
    })
})