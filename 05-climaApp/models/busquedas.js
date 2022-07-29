const axios = require('axios');

class Busquedas {
    historial = ['Barquisimeto', 'Iquique'];

    constructor(){
        //Leer db

    }
    async ciudad (lugar = ''){
        
        try {
            // peticion HTTP
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log(resp.data)
            
            return []; //Retorna las ciudades que coinciden
        } catch (error) {
            return
            
        }

    }
}


module.exports = Busquedas;