var http = require('http');
var express = require('express');
var fs = require('fs');
// Load express-resource BEFORE app is instantiated
//var resource = require('express-resource');
var app = express();
app.use(express.bodyParser({
	keepExtensions: false,
	uploadDir: './tempuploads'
	}));

app.use(app.router);
// Load the resourceful route handler
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/images', express.static('./images'));
app.use('/fonts', express.static(__dirname + '/bower_components/bootstrap/dist/fonts')); //使用字体

console.log('dirname:'+__dirname);

var routes = require('./routes')(app, fs);

/*
app.get('/', function(req, res) {
res.send(404, 'not all found');
});
*/

http.createServer(app).listen(3000, function() {
console.log('App started');
});
