const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs")
const colors = require("colors");


console.clear();
console.log(argv );

crearArchivo(argv.b, argv.l, argv.h)
  .then((salida) => console.log(`Archivo creado: ${salida}`))
  .catch((err) => console.log(err));
