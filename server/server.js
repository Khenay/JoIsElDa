const express = require('express');

require('./database/mongodb');

const app = express();

app.use(express.json());

app.use(require('./routes/routes'));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(
      `Servidor corriendo en el puerto ${PORT}`
    );
});