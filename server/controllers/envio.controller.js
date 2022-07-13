const mongo = require('mongodb');
const url = "mongodb://localhost:27017/";
const MongoClient = mongo.MongoClient;
const mydb = "juegoRol3";



const envio = {


   dorsal: (req, res) => {
    let emailUser = req.body.email;

    MongoClient.connect(url, async function (err, db) {
      if (err) throw err;
      var dbo = db.db(mydb);
      const user = dbo.collection('Inscripciones').findOne({ email: emailUser }, function (err, result) {
        if (err) throw err;
        if (result != null) {
            const dorsal = user.dorsal;


      
          sendMail("doomsacks@hotmail.com", `${emailUser}`, "Información de su dorsal", `${dorsal}`)
        } else {
          console.log('El email no existe en nuestra base de datos');
        }
    })
      })
   },
};

module.exports = envio;
