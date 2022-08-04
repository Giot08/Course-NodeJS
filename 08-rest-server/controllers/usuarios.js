const { response } = require("express");

const usuariosGet = (req, res = response) => {
  res.json({
    msg: "get api - controlador",
  });
};

const usuariosPut = (req, res) => {
  res.json({
    msg: "put api - controlador",
  });
};

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

  res.json({
    msg: "post api - controlador",
    nombre,
    edad
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete api - controlador",
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msg: "patch api - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
