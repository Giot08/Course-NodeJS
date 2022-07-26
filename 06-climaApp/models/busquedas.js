const axios = require("axios");

class Busquedas {
  historial = ["Barquisimeto", "Iquique"];

  constructor() {
    //Leer db
  }
  async pais(lugar = "") {
    const api = process.env.API_KEY;

    try {
      // peticion HTTP
      /*
            //No funciona porque no tiene parametros
            const instance = axios.create({
              baseURL: `https://restcountries.com/v3.1/${lugar}/`  
            });

            const resp = await instance.get() */
      //En su lugar uso la api de restcountries
      const resp = await axios.get(`${api}${lugar.toLowerCase()}`);
      //   const resp = await axios.get(`${api}${lugar}`);

      // console.log(resp.data[0]);
      return resp.data[0].map(lugar => ({
        nombre: lugar.name.official,
        lng: lugar.latlng[1],
        lat: lugar.latlng[0],
        codigo: lugar.cca3,
      }));

      //Retorna las ciudades que coinciden
    } catch (error) {
      return;
    }
  }
}

module.exports = Busquedas;
