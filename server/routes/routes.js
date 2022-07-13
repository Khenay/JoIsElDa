const router = require("express").Router();
const user = require("../controllers/user.controllers");

router.post("/login",user.login);
router.get("/competiciones",user.competiciones);
router.post("/actualizar",user.actualizar);
router.post("/register",jsonParser,user.register);

module.exports = router;




