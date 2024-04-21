const express = require('express');
const router = express.Router();
const EstudianteController = require('../controllers/EstudianteController');

router.post('/', EstudianteController.agregarEstudiantes);
router.get('/', EstudianteController.mostrarEstudiantes);
router.get('/:id', EstudianteController.mostrarUnEstudiante);
router.delete('/:id', EstudianteController.eliminarEstudiante);
router.put('/:id', EstudianteController.actualizarEstudiante);

module.exports = router;