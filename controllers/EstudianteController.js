// Exportamos nuestro modelo
const Estudiante = require('../models/Estudiante');

// crear una función agregar Estudiantes

exports.agregarEstudiantes = async (req, res) => {
try {
        let estudiantes = new Estudiante(req.body);
        await estudiantes.save();
        res.json(estudiantes);
} catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al agregar el Estudiante');    
}
}

//mostrar Estudiantes
exports.mostrarEstudiantes = async (req, res) => {
    try {
        let estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los Estudiantes');
    }
}

// mostrar un Estudiante
exports.mostrarUnEstudiante = async (req, res) => {
    try {
        let estudiantes = await Estudiante.findById(req.params.id);        
        if(!estudiantes){
            res.status(400).json({msg:"No se encuentra Estudiante con ese ID"})
        }

        res.json(estudiantes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al buscar un Estudiante');
    }
}

// funcion para eliminar Estudiante
exports.eliminarEstudiante = async (req, res) => {
    try {
        let estudiantes = await Estudiante.findById(req.params.id);
        
        if(!estudiantes){
            res.status(404).json({msg:"El Estudiante no existe con ese ID"});
            return
        }
        await Estudiante.findOneAndDelete({_id: req.params.id});
        res.json({msg:"Estudiante eliminado"});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar un Estudiante en la BD');
    }
}

// funcion actualizar Estudiantes
exports.actualizarEstudiante = async (req, res) => {
    try {
        let estudiantes = await Estudiante.findById(req.params.id);
        if(!estudiantes){
            res.status(404).json({msg:"No se encuentra Estudiante con ese ID"})
        }
        await Estudiante.updateOne({_id: req.params.id}, req.body);
        res.json({msg:"Estudiante actualizado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar un Estudiante en la BD');
    }
}
