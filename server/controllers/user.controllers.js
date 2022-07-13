


require('express');
const mongo = require('mongodb');
const url = "mongodb://localhost:27017/";
const MongoClient = mongo.MongoClient;
const mydb = "juegoRol3";
var dorsal=0;

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
    },
    inscripcion: (req, res) => {






        

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);

            dbo.collection("Usuarios").findOne({ email: req.body.email }, function (err, result) {
                if (err) throw err;
                ;
               

                const data1 = { "usuario": result._id.valueOf(), "competicion": req.body.competicion, "dorsal": dorsal+1, "tarjeta": req.body.tarjeta};

                dbo.collection("Competiciones").findOne({nombre: req.body.competicion}, function (err, result1) {
                    if (err) throw err;
                    

                    dbo.collection("Inscripciones").findOne({usuario: result._id.valueOf()}, function (err, result2) {
                        if (err) throw err;
                        ;
                        if(result1.participantesMax > dorsal){
                            if(result2 == null){
                                dbo.collection("Inscripciones").insertOne(data1, function (err, result3) {
                                    if (err) throw err;
                                    ;
                                    console.log('inscripción con éxito')
                                    dorsal ++
                                    // db.close();
                                });
                            } else { console.log('usuario ya inscrito')}
                          
                        } else { console.log('exceso de participantes')}
                        // db.close();
                    });

                   
                    // db.close();
                });

            
            });
        });
    },
};

module.exports = user;
