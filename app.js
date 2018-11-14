// Requireds
//  const fs = require('express');  // no nativo 
//  const fs = require('./fs');  // ./ son los archivos que escribimos

const argv = require('./config/yargs').argv; 
const colors = require('colors');

const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){
    case 'listar':
      listarTabla( argv.base, argv.limite);
            console.log('Listar');
    break;
    case 'crear':
      crearArchivo( argv.base, argv.limite );
            console.log('crear');
    break;
    default:
        console.log(` ${comando} no reconocido `);
    break;


}
//  console.log(argv);


// console.log(process.argv);
//let argv2 = process.argv;



// console.log(argv.base);
//console.log('Limite', argv.limite);

//  let parametro = argv[2];
//  let base = parametro.split('=')[1];

//console.log(base);

  crearArchivo(argv.base)
        .then(archivo => console.log(`Archivo Creado: ${ archivo }`))
        .catch(e => console.log(e));