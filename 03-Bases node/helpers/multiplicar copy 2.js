const fs = require("fs");

const crearArchivo = (x) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    for (let i = 0; i <= 10; i++) {
      salida += `El Resultado de ${x} * ${i} es: ${x * i} \n`;
    }

    console.log(`Tabla de multiplicar de ${x}`);
    console.log(salida);

    fs.writeFile(`Tabla del ${x}`, salida, (err) => {
      if (err) throw err;
      resolve(console.log("Archivo creado"));
    });
  });
};
module.exports = {
  crearArchivo,
};
