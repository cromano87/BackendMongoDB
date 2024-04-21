const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

// aca se colocan las rutas del crud
router.post('/', ClienteController.agregarClientes);
router.get('/', ClienteController.mostrarClientes);
router.get('/:id', ClienteController.mostrarUnCliente);
router.delete('/:id', ClienteController.eliminarCliente);
router.put('/:id', ClienteController.actualizarCliente);

module.exports = router;
