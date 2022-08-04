const cors = require("cors");
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    // Middleware
    this.middleware();

    // Rutas de mi app
    this.routes();
  }
  //   funciones de la clase

  middleware() {

    // Cors
    this.app.use(cors());

    // Parseo y lectura
    this.app.use(express.json());

    // Directorio pub
    this.app.use(express.static("public"));
  }

  routes() {

    this.app.use(this.usuariosPath, require('../routes/usuarios'));

  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
