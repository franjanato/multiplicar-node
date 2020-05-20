// requiereds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('================'.green);
    console.log(`tabla de ${base}`.green );
    console.log('================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log( `${base}`.red,
                     `*`,
                     `${i}`.green,
                     `=`.cyan, 
                     `${base * i}`.grey);   
    }
    
}


let crarArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }else if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-Del ${base} al ${limite}.txt`, data, (err) => {

            if (err) throw err
            else
                resolve(`tabla-Del ${base} al ${limite}.txt`);
        });

    });

}

module.exports = {
    crarArchivo,
    listarTabla
}


