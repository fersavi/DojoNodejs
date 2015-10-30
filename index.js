var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
	  res.send('<html><body>'
		      + '<h1>Hola mundo</h1>'
		      + 'path para saldar: .../saludar'	
		      + '</body></html>');
		
});

app.get('/saludar', function (req, res) {
 
	var nombre = req.query.nombre || '';
	var saludo = '';
 
	if (nombre != '')
		saludo = "Hola " + nombre;
 
	res.send('<html><body>'
		      + '<h1>Saludo</h1>'
		      + '<p>' + saludo + '</p>'
		      + '<form method="get" action="/saludar">'
		      + '<label for="nombre">Escribe tu nombre</label>'
		      + '<input type="text" name="nombre" id="nombre">'	
		      + '<input type="submit" value="Saludar"/>'
		      + '</form>'
		      + '</body></html>');
 
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


