const router = require("express").Router();

const bodyParser= require('body-parser')
var jsonParser = bodyParser.json()

const user = require("../controllers/user.controllers");

router.post("/register",jsonParser,user.register);

module.exports = router;

