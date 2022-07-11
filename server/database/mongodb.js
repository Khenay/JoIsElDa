const mongoose = require('mongoose')

const connection = 'mongodb://localhost:27017/juegoRol3'

mongoose.connect(connection)
.then(() => {
    console.log('Conexión con la base de datos de MongoDB satisfactoria');
})
.catch(() => {
    console.error(err);
})