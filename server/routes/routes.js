const router = require("express").Router();
const user = require("../controllers/user.controllers");


router.post("/registro",user.register);
router.post("/inscripcion",user.inscripcion);
router.post("/login",user.login);
router.get("/competiciones",user.competiciones);
router.post("/actualizarEmail",user.actualizarEmail);
router.post("/actualizarPassword",user.actualizarPassword);
router.get("/id", user.id);



module.exports = router;




