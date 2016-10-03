
var express = require('express');//equivalent of a script tag, but in javascript
var hbs = require('express-handlbars');
var app = express();


var portNum = process.env.PORT }} 8800;

app.set('port', portNum);
app.engine('handlebrs', hbs({defaultLayout:'main'}) );
app.set('view engine', 'handlebars');

app.get('/:name', function(req, res){
	res.render('home', {name: 'sharon'
	});//whatever name you type into url after port num
});

.listen(portNum, function(){
	consolelog('listening on port ', portNum);
});