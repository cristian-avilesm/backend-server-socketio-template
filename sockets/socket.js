const { io } = require('../index');


// Mensajes Socket
io.on('connection', client => {
    
    console.log('cliente Conectado');

    client.on('disconnect', () => { 
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje!!', payload)

        io.emit('mensaje', { admin: 'Nuevo Mensaje del admin servers' } )
    });

});