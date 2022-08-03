const { Router } = require("express");
const { check } = require("express-validator");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
} = require("../controllers/users");

const router = Router();

router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.post("/", [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('correo', 'El correo no es valido').isEmail(),
  
], usuariosPost);
router.delete("/", usuariosDelete);

module.exports = router;
