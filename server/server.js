const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

//SERVERS
const app = express();
let server = http.createServer(app);





//PATH
const publicPath = path.resolve(__dirname, '../public');
//CONFIG PORT
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//INICIALIZACION IO
//IO BACKEND
// let io 

//EXPORTACION DEL MODULO
module.exports.io = socketIO(server);
require('./sockets/sockets');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});