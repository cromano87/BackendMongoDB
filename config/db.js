// se importa el modulo de mongoose
const mongoose = require('mongoose');
require('dotenv').config();

// funcion para conectar a la base de datos

const conectarBD = () =>{
    mongoose
    .connect(process.env.MONGO_URI)
            .then(() => console.log("Conectado a la base de datos"))
            .catch((err) => console.error(err));
}

module.exports = conectarBD;