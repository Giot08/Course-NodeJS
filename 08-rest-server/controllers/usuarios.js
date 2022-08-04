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
  res.json({
    ok: true,
    msg: "post api - controlador",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    ok: true,
    msg: "delete api - controlador",
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    ok: true,
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
