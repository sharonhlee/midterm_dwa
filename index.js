
var express = require('express');//equivalent of a script tag, but in javascript
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var Mongoose = require('mongoose');

var app = express();

require('dotenv').config();

Mongoose.connect(process.env.DB_URL);

var portNum = 8800;
app.set('port', portNum);

//tell express to use handlebars
app.engine('handlebars', hbs({defaultLayout:'main'}) );
app.set('view engine', 'handlebars');

var game = require('./routes/games');
app.use('/games', game);

app.use( express.static('public') );

app.listen(portNum, function(){
	console.log('listening on port ', portNum);
})