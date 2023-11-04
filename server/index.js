var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola', function(req, res){
    res.status(200).send('Hola');
});

var messages = [{
    id:1,
    text: "Welcome to private chat",
    nickname: 'Bot - cloud1992'
}];

io.on('connection', function(socket){
    console.log('The device IP is: ' + socket.handshake.address + ' has been connected');

    socket.emit('messages', messages);
});

server.listen(6677, function(){
    console.log('Servidor esta funcionando en http://localhost:6677');
});