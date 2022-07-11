


require('body-parser')
const mongo = require('mongodb');
const url = "mongodb://localhost:27017/";
const MongoClient = mongo.MongoClient;
const mydb = "juegoRol3";

const user = {



    register: (req, res) => {


        const userName = req.body.userName;
        const pass = req.body.pass;
        const nombre = req.body.nombre;
        const apellidos = req.body.apellidos;
        const email = req.body.email;

        const data = { "userName": userName, "pass": pass, "nombre": nombre, "apellidos": apellidos, "email": email };
        console.log(data)

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo.collection("Usuarios").insertOne(data, function (err, result) {
                if (err) throw err;
                console.log('usuario insertado')
                ;
            })
        });
    }
};

module.exports = user;
