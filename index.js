const express = require('express');
require('dotenv').config();

//Crear el servidor de express
const app = express();

//Directorio publico
//Middleware: Es una funcion que se ejecuta cuando alquien hace una peticion
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//rutas
//TODO: aut //crear, login, renew
//TODO: CRUD: Eventos
app.use('/api/auth', require('./routes/auth'));

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo');
});
