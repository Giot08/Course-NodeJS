const axios = require('axios');

class Busquedas {
    historial = ['Barquisimeto', 'Iquique'];

    constructor(){
        //Leer db

    }
    async ciudad (lugar = ''){
        
        try {
            // peticion HTTP
/*
            //No funciona porque no tiene parametros
            const instance = axios.create({
              baseURL: `https://restcountries.com/v3.1/${lugar}/`  
            });

            const resp = await instance.get() */
            const resp = await axios.get(`https://restcountries.com/v3.1/name/${lugar}`)
            console.log(resp)
            console.log('hola!')
            
            return []; //Retorna las ciudades que coinciden
        } catch (error) {
            return
            
        }

    }
}


module.exports = Busquedas;