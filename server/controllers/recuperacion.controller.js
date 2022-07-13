const mongo = require('mongodb');
const url = "mongodb://localhost:27017/";
const MongoClient = mongo.MongoClient;
const mydb = "juegoRol3";

const jwt = require("jsonwebtoken");
const sendMail = require("../email")


const SECRET = "asereje";

const passRecovery = {

  confirmedUser: async (req, res, next) => {
    let emailUser = req.body.email;

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;

      var dbo = db.db(mydb);
      dbo.collection('Usuarios').findOne({ email: emailUser }, function (err, result) {
        if (err) throw err;
        if (result != null) {


          const payload = {
            email: emailUser,


          };
          const token = jwt.sign(payload, SECRET, { expiresIn: "15m" });

          const link = `<a href="http://localhost:5050/recovery/${emailUser}/${token}">Enlace</a>`;
          console.log(link);
          sendMail("doomsacks@hotmail.com", `${emailUser}`, "Recuperación de contraseña", `${link}`)
        } else {
          console.log('El usuario no existe');
        }
      })
    });


  },




  checkUserPost: async (req, res) => {

    const { pass } = req.body;
    const email = req.params.email
    MongoClient.connect(url, function(err,db){
      
      var dbo = db.db(mydb);
     
        dbo.collection("Usuarios").findOneAndUpdate({email: email}, {$set: {pass: pass}}, {upsert: true}, function(err,doc) {
          if (err) { throw err; }
          else { console.log("Updated"); } 
        });  
      
    });


  },

  confirmUserGet: async (req, res) => {
    const { token } = req.params;

    try {
      jwt.verify(token, SECRET);

      res.render("confirmed-user");
    } catch (error) {
      res.send("No se puede confirmar el usuario, token inválido");
    }
  },





}

module.exports = passRecovery;