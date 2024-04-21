const mongoose = require('mongoose');
// debe ser igual  a lo que tenga BD

const clienteSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },    
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }
},{versionKey: false});

module.exports = mongoose.model('Cliente', clienteSchema);