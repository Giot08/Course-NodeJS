const { response } = require("express");

const esAdminRole = (req, res = response, next) => {
  if (!req.usuario) {
    return res.status(500).json({
      msg: "se quiere verificar si es admin",
    });
  }

  const { rol, nombre } = req.usuario;

  if (rol !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${nombre} no es administrador`,
    });
  }
  next();
};

const tieneRole = (...roles) => {
  return (req, res = response, next) => {
    
    if (!req.usuario) {
      return res.status(500).json({
        msg: "se quiere verificar si es admin",
      });
    }

    if (!roles.includes(req.usuario.rol)) {
      return res.status(401).json({
        msg: `El servicio requiere uno de estos roles ${roles}`,
      });
    }

    // console.log(roles, req.usuario.rol)
    next();
  };
};

module.exports = {
  esAdminRole,
  tieneRole,
};
