const router = require("express").Router();
const { application } = require("express");


const passRecovery = require("../controllers/recuperacion.controller");
const user = require("../controllers/user.controllers");
const envio = require("../controllers/envio.controller")

router.post("/register",user.register);
router.post("/dorsal", envio.dorsal);
router.post("/recovery", passRecovery.confirmedUser);
router.get("/recovery/:email/:token", passRecovery.confirmUserGet);
router.post("/recovery/:email/:token", passRecovery.checkUserPost);



module.exports = router;

