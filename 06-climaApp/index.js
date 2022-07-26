require('dotenv').config()

const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

console.log(process.env);

const main = async () => {
  
  const busquedas = new Busquedas();
  let opt;


  do {
    opt = await inquirerMenu();

    switch(opt){
      case 1: 
      //mostrar mensaje
      const pais = await leerInput('Pais: ');
      const paisEncontrado = await busquedas.pais(pais);
      console.log(paisEncontrado);
      
      // buscar el lugar
      // seleccionar el lugar
      // obtener datos del clima
      // mostrar resultados

      console.log('\n informacion: \n' .cyan)
      console.log('Ciudad:', )
      console.log('Lat:', )
      console.log('Long:', )
      console.log('Temp:', )
      console.log('T-Max:', )
      console.log('T-Min:', )
      break
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
