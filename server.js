require('dotenv').config();

var express = require('express');
var app = express();
var router = require('./config/routes.js');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(router);
app.use(express.static('public'));

app.get('/', function(req, res){
	res.redirect('/api/machines')
})

app.set('port', process.env.PORT || 3000)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })