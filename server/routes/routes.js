const router = require("express").Router();
const user = require("../controllers/user.controllers");


router.post("/register",user.register);
router.post("/inscripcion",user.inscripcion);
router.post("/login",user.login);
router.get("/competiciones",user.competiciones);
router.post("/actualizar",user.actualizar);



module.exports = router;




