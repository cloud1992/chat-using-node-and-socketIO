var io = require('socket.io-client');
var socket = io.connect('http://192.168.0.59:6677', {'forceNew':true});