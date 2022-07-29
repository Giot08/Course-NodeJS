const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  
  const busquedas = new Busquedas();
  let opt;


  do {
    opt = await inquirerMenu();

    switch(opt){
      case 1: 
      //mostrar mensaje
      const lugar = await leerInput('Ciudad: ');
      await busquedas.ciudad(lugar)
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
