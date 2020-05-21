        //FUNCIONES IO

        var socket = io();

        // CONEXION AL SERVIDOR
        socket.on('connect', function() {
            console.log('conectado al servidor')
        })

        //INFORMACION DE DESCONEXION
        socket.on('disconnect', function() {
            console.log('Se perdion la conexion con el server')
        });

        //EMISION AL SERVIDOR
        socket.emit('enviarMensaje', {
            usuario: "Sergio",
            mensaje: "Hola mundo"
        }, function(resp) {
            console.log('Respuesta server: ', resp)
        });

        //ESCUCHAR AL SERVIDOR
        socket.on('enviarMensaje', function(resp) {
            console.log(resp)
        })