const Role = require("../models/role");
const Usuario = require("../models/usuario");

const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error("El rol no existe");
  }
};

const emailExiste = async (correo = '') =>{
  // Verificar correo
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error("El correo ya existe");
  }
}

module.exports = {
  esRoleValido,
  emailExiste
};
