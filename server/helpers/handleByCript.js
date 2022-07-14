const bcrypt = require('bcryptjs');

//Función donde se encripta la contraseña y se llama de forma asíncrona para meterla en constante "hash"
const encrypt = async (textPplain) => {
  
  const hash = await bcrypt.hash(textPplain, 10);
  return hash;
  
};

//Se compara la contraseña introducida por usuario con la que conserva la bd
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
