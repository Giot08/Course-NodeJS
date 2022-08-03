const { response } = require("express");

const usuariosGet = (req = request, res = response) => {
  const {q, nombre = 'SIN NOMBRE' , api ='SIN APIKEY'} = req.query;

  res.json({
    ok: true,
    message: "get api - controlador",
    q, nombre, api   
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    ok: true,
    message: "put  api - controlador",
    id
  });
};

const usuariosPost = (req, res = response) => {
  const {nombre, edad} = req.body;

  res.json({
    ok: true,
    message: "post  api - controlador",
    nombre, edad
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    ok: true,
    message: "Delete api - controller",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
