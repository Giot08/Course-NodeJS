const { response } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");

const login = async (req, res = response) => {
  const { correo, password } = req.body;

  try {
    // Verificar si el email existe
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(404).json({
        msg: "Usuario / Password no son correctos",
      });
    }

    // Ver si el usuario esta activo actualmente
    if (!usuario.estado) {
      return res.status(404).json({
        msg: "El usuario no esta registrado, Estado: false",
      });
    }

    // Verificar si el password es correcto
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(404).json({
        msg: "Usuario / Password no son correctos - Password",
      });
    }

    // Generar el JWT

    const token = await generarJWT(usuario.id);

    res.json({
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hubo un error, contacte el admin",
    });
  }
};

const googleSignIn = async (req, res = response) => {
  const { id_token } = req.body;

  res.json({
    msg: "todo ok",
    id_token,
  });
};

module.exports = {
  login,
  googleSignIn,
};
