const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (x, listar = false, hasta = 10) => {
  try {
    if (listar) {
      let salida = "";
      for (let i = 0; i <= hasta; i++) {
        salida += `El Resultado de ${x} * ${i} es: ${x * i} \n`;
      }

      console.log(`Tabla de multiplicar de ${x}`);
      console.log(salida.rainbow);

      fs.writeFile(`./salida/Tabla del ${x}.txt`, salida, (err) => {
        if (err) throw err;
        return console.log("Archivo creado");
      });
    }
  } catch (error) {
    throw error;
  }
};
module.exports = {
  crearArchivo,
};
