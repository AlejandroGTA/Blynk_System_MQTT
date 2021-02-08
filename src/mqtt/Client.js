var mqtt = require('mqtt');

let settings = {
    port:1883,
    clientId:'Pl',
    username: '',
    password: ''
};

var client  = mqtt.connect('mqtt://127.0.0.1',settings)
 
client.on('connect', function () {
  client.subscribe('published', function (err) {
    if (!err) {
      client.publish('published', 'Hello mqtt')
    }
  })
})