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
        });
    }, 
    actualizar: (req, res) => {
        const actualizarEmail = req.body.actualizarEmail;
        const actualizarPassword = req.body.actualizarPassword; 

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            var myquery = { "direccion": "C/Recoletos" };
            var newvalues = { $set: { "direccion": "C/Serrano" } };
            dbo.collection(coleccion).updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("Documento actualizado");
                db.close();
            });
        });

    }
};

module.exports = user;