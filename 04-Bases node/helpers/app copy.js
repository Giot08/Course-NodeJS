const {crearArchivo} = require("./multiplicar");

console.clear();

const [,,arg1 = 'base=5'] = process.argv;
const [, base=5] = arg1.split('=');

crearArchivo(base)
    .then(salida => console.log(`Archivo creado: ${salida}`))
    .catch(err => console.log(err)); 