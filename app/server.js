// server.js

// Import all our dependencies
var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var server   = require('http').Server(app);
var io   	 = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb://127.0.0.1:27017/scotch-chat");


// schema for scotch-chat

 var Chat = mongoose.model('Chat', ChatSchema);

 allow CORS

 app.all('*', function(req, res, next) 
 	es.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});


 /*||||||||||ROUTES||||||||||<*/
app.post('/setup' function(res, req){
	var chatData = [{
		created: new Date(),
    content: 'Hi',
    username: 'Chris',
    room: 'php'
  }, {
    created: new Date(),
    content: 'Hello',
    username: 'Obinna',
    room: 'laravel'
  }, {
    created: new Date(),
    content: 'Ait',
    username: 'Bill',
    room: 'angular'
  }, {
    created: new Date(),
    content: 'Amazing room',
    username: 'Patience',
    room: 'socet.io'
	}]

})