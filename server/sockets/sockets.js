const { io } = require('../server');


//INFORMACION DE UNA CONEXION
io.on('connection', (client) => {
    console.log('Usuario Conectado')

    //EMISION AL CLIENTE
    client.emit('enviarMensaje', {
        usuario: 'ADMIN-SG',
        mensaje: 'Bienvenido a esta APP'
    })


    //INFORMACION DE UNA DESCONEXION
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    //ESCUCHAR CLIENTE
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //EMISION A TODOS LO USUARIO    
        client.broadcast.emit('enviarMensaje', data)



        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Ok todo bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'MAL valio maddre'
        //     });
        // }

    });





});