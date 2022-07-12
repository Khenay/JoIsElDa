const express = require('express');
//const { route } = require('./routes/routes');

require('./database/mongodb');

const router = require("./routes/routes");

const app = express();

app.use(express.json());
app.use("/", router);
//app.use(require('./routes/routes'));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(
      `Servidor corriendo en el puerto ${PORT}`
    );
});