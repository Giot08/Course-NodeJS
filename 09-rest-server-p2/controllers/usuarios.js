const { response, request } = require("express");
const bcryptjs = require("bcryptjs");


const Usuario = require("../models/usuario");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit = 5 } = req.query;

  res.json({
    msg: "get api - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;

  res.json({
    msg: "put api - controlador",
    id,
  });
};

const usuariosPost = async (req, res) => {

  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  // encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  // Guardar en base de datos
  await usuario.save();

  res.json({
    msg: "post api - controlador",
    usuario,
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
