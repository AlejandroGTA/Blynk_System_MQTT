

let mosca = require('mosca');

let settings = {
    port:1883
    
};

let server = new mosca.Server(settings);

server .on('ready', () =>{
    console.log('Server  Listo');

    // var authenticate = function(client, username, password, callback) {
    //     var authorized = (username === '' && password.toString() === '');
    //     if (authorized) client.user = username;
    //     callback(null, authorized);
    //   }
    // server.authenticate = authenticate;
});

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});


server.on('published', function(packet, client) {
    console.log('Published', packet.payload.toString());
});