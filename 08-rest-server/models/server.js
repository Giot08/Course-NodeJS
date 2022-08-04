const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middleware
    this.middleware();

    // Rutas de mi app
    this.routes();
  }
  //   funciones de la clase

  middleware() {
    // Directorio pub
    this.app.use(express.static("public"));
  }

  routes() {


    this.app.get("/api", (req, res) => {
      res.json({
        ok: true,
        msg: 'get api'
      });
    });

    this.app.put("/api", (req, res) => {
      res.json({
        ok: true,
        msg: 'put api'
      });
    });

    this.app.post("/api", (req, res) => {
      res.json({
        ok: true,
        msg: 'post api'
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        ok: true,
        msg: 'delete api'
      });
    });

    this.app.patch("/api", (req, res) => {
      res.json({
        ok: true,
        msg: 'patch api'
      });
    });


  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
