const router = require("express").Router();

const user = require("../controllers/user.controllers");

router.post("/login",user.login);
router.get("/competiciones",user.competiciones);

module.exports = router