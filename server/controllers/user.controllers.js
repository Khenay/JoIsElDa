const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

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
    }
};

module.exports = user;