const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// configuracion express y puert
const app = express();
const port = 5000;
app.use(express.json());
app.use('/api/clientes', require('../routes/RoutesCliente'));
app.use('/api/estudiantes', require('../routes/RoutesEstudiante'));

// enlazamos la conexion a la base de datos
conectarBD();
app.use(cors());


app.listen(port, () => console.log("Listening on port http://localhost:5000/"));

app.get('/', (req, res) => {res.send('Bienvenido server configurado');});