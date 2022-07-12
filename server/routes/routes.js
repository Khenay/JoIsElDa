const router = require("express").Router();



const user = require("../controllers/user.controllers");

router.post("/register",jsonParser,user.register);

module.exports = router;


