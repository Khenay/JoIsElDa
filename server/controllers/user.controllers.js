
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const mydb = "juegoRol3";
const coleccion = "Competiciones";
const url = 'mongodb://127.0.0.1:27017/juegoRol3';

const user = {
    login: (req, res) => {
        const loginNick = req.body.loginNick;
        const loginPassword = req.body.loginPassword;

        if(loginNick && loginPassword) {
            //conectarme a la colección de usuarios y comprobar que
            // está registrado.
            res.json({ code: 200, message: "Usuario logueado", state: true });
        } else {
            res.json({ code: 400, message: "Usuario o contraseña incorrecta", state: false });
        }
    }, 
    competiciones: (req, res) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            //var query = { "lugar": "Tenerife" };
            dbo.collection(coleccion).find().toArray(function (err, result) {
                if (err) throw err;
                //res.send(result)
                console.log(result);
                if(result) {
                    res.json({message: result, satus: true});
                } else {
                    res.json({message: "No hay nada en la BD", satus: false});
                }
                //db.close();
            });
            },
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






module.exports = user;

