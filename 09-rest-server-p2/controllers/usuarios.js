const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response) => {
  // const { q, nombre = "No name", apikey, page = 1, limit = 5 } = req.query;

  const { limite = 5, desde = 0 } = req.query;
  const queryEstado = { estado: true };

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(queryEstado), // total
    Usuario.find(queryEstado).skip(Number(desde)).limit(Number(limite)), //usuarios
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuariosPut = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  // Validad contra db
  if (password) {
    // encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json(usuario);
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

const usuariosDelete = async (req, res) => {
  const { id } = req.params;

  // Lo borramos totralmente
  // const usuario = await Usuario.findByIdAndDelete(id); // Lo borra de la db

  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json(usuario);
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
