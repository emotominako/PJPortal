var express = require('express');
var path = require('path');
var routes = require('./routes/get/index');
var post = require('./routes/post/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

app.get('/', routes);
app.post('/', post);

app.use('/', express.static(__dirname + "/view/common"));
app.use('/images', express.static(__dirname + "/public/images"));
app.use('/routes', express.static(__dirname + "/routes"));

//app.listen(3000);

console.log('Server running at port 3000');

module.exports = app;