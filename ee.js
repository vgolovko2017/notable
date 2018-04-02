
var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(request) {
    request.approved= true;
});

server.on('request', function(request) {
   console.log(request);
});

server.emit('request', {from: "client"});
server.emit('request', {from: "another one client"});


server.on('error', function () {

});


server.emit('error');