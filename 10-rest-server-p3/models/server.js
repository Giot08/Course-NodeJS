const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    this.authPath = "/api/auth";

    // Conectar a db
    this.conectarDB();

    // Middleware
    this.middleware();

    // Rutas de mi app
    this.routes();
  }
  //   funciones de la clase

  async conectarDB() {
    await dbConnection();
  }

  middleware() {
    // Cors
    this.app.use(cors());

    // Parseo y lectura
    this.app.use(express.json());

    // Directorio pub
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
