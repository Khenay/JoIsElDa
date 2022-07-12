const express = require('express');

require('./database/mongodb');


const router =require("./routes/routes")

const app = express();

app.use("/",router)

app.use(express.json());

app.use(require('./routes/routes'));

const port = 5050;

app.listen(port , console.log("Sevidor escuchando en puerto "+ port))





