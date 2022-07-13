require('express');
const mongo = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/juegoRol3';
const MongoClient = mongo.MongoClient;
const mydb = "juegoRol3";
var dorsal = 0;
const coleccion = "Competiciones";



const user = {
    login: (req, res) => {
        const loginNick = req.body.loginNick;
        const loginPassword = req.body.loginPassword;

        if (loginNick && loginPassword) {
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
                if (result) {
                    res.json({ message: result, satus: true });
                } else {
                    res.json({ message: "No hay nada en la BD", satus: false });
                }
                //db.close();
            });
        })
    },
    register: (req, res) => {

        const userName = req.body.signNich;
        const pass = req.body.signPassword;
        const nombre = req.body.signName;
        const apellidos = req.body.signLastName;
        const email = req.body.signMail;

        const data = { "userName": userName, "pass": pass, "nombre": nombre, "apellidos": apellidos, "email": email };
        console.log(data)

        // if (!userName || !pass || !nombre || !apellidos || !email) {
        //     res.json({message: "Todos los campos son obligatorios", status: false});
        // } else  {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db(mydb);
                dbo.collection("Usuarios").insertOne(data, function (err, result) {
                    if (err) throw err;
                    res.json({status: true});
                    console.log('usuario insertado');
                });
            });
        //}  
    },

    actualizarEmail: (req, res) => {
        const emailAntiguo = req.body.emailAntiguo;
        const actualizarEmail = req.body.actualizarEmail;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            var myquery = { "email": emailAntiguo };
            var newvalues = { $set: { "email": actualizarEmail } };
            dbo.collection("Usuarios").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("Email actualizado");
                //db.close();
            });

        });

        if (!emailAntiguo || !actualizarEmail) {
            res.json({ message: "Datos incorrectos", status: false });
        } else {
            res.json({ message: "Email actualizado", status: true });
        }
    },
    actualizarPassword: (req, res) => {
        const passwordAntigua = req.body.passwordAntigua;
        const actualizarPassword = req.body.actualizarPassword;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            var myquery = { "pass": passwordAntigua };
            var newvalues = { $set: { "pass": actualizarPassword } };
            dbo.collection("Usuarios").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("Contraseña actualizada");
                //db.close();
            });
        });

        if (!passwordAntigua || !actualizarPassword) {
            res.json({ message: "Datos incorrectos", status: false });
        } else {
            res.json({ message: "Contraseña actualizada", status: true });
        }
    },

    inscripcion: (req, res) => {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);

            dbo.collection("Usuarios").findOne({ email: req.body.email }, function (err, result) {
                if (err) throw err;
                ;


                const data1 = { "usuario": result._id.valueOf(), "competicion": req.body.competicion, "dorsal": dorsal + 1, "tarjeta": req.body.tarjeta };

                dbo.collection("Competiciones").findOne({ nombre: req.body.competicion }, function (err, result1) {
                    if (err) throw err;


                    dbo.collection("Inscripciones").findOne({ usuario: result._id.valueOf() }, function (err, result2) {
                        if (err) throw err;
                        ;
                        if (result1.participantesMax > dorsal) {
                            if (result2 == null) {
                                dbo.collection("Inscripciones").insertOne(data1, function (err, result3) {
                                    if (err) throw err;
                                    ;
                                    console.log('inscripción con éxito')
                                    dorsal++
                                    // db.close();
                                });
                            } else { console.log('usuario ya inscrito') }

                        } else { console.log('exceso de participantes') }
                        // db.close();
                    });


                    // db.close();
                });


            });
        });
    },
};

module.exports = user;

