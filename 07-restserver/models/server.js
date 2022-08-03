const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosEndpoints = "/api/usuarios";

    //Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }
  middlewares() {
    // Cors
    this.app.use(cors());

    // Lectura y parseo
  this.app.use(express.json());    

    // Public
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosEndpoints, require("../routes/user"));
  }
  

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
