// Exportamos nuestro modelo
const Cliente = require('../models/Cliente');

// crear una función agregar clientes

exports.agregarClientes = async (req, res) => {
try {
        let clientes = new Cliente(req.body);
        await clientes.save();
        res.send('Cliente agregado');
} catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al agregar el cliente');    
}
}

//mostrar clientes
exports.mostrarClientes = async (req, res) => {
    try {
        let clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los clientes');
    }
}

// mostrar un cliente
exports.mostrarUnCliente = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);        
        if(!clientes){
            res.status(400).json({msg:"No se encuentra cliente con ese ID"})
        }

        res.json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al buscar un cliente');
    }
}

// funcion para eliminar cliente
exports.eliminarCliente = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        
        if(!clientes){
            res.status(404).json({msg:"El cliente no existe con ese ID"});
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg:"Cliente eliminado"});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar un cliente en la BD');
    }
}

// funcion actualizar clientes
exports.actualizarCliente = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).json({msg:"No se encuentra cliente con ese ID"})
        }
        await Cliente.updateOne({_id: req.params.id}, req.body);
        res.json({msg:"Cliente actualizado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar un cliente en la BD');
    }
}