const { response, request } = require("express");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "SIN NOMBRE", api = "SIN APIKEY" } = req.query;

  res.json({
    ok: true,
    message: "get api - controlador",
    q,
    nombre,
    api,
  });
};

const usuariosPost = async (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Verificar correo
  const existeEmail = await Usuario.findOne({ where: { correo: correo } });
  if (existeEmail) {
    return res.status(400).json({
      message: "El correo ya existe",
    });
  }

  // encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  // Guardar en DB
  await usuario.save();

  res.json({
    usuario,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    ok: true,
    message: "put  api - controlador",
    id,
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
