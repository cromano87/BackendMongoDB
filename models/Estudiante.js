const mongoose = require('mongoose');
// debe ser igual  a lo que tenga BD

const estudianteSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    Calificacion: {
        type: Number,
        required: true
    }
},{versionKey: false});

module.exports = mongoose.model('Estudiante', estudianteSchema);