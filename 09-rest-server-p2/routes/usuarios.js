const { Router } = require("express");
const { check } = require("express-validator");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/usuarios");

const { validarCampos } = require("../middlewares/validar-campos");


const router = Router();

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El correo no es valido y minimo 6 caracteres").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    check("rol", "El rol es invalido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validarCampos,
  ],
  usuariosPost
);

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
