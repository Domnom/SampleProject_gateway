var express = require('express');
var path = require('path');
var request = require('request');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/ping/backend', function(req, res) {

	request.get({
		url : process.env.BACKEND_API_URL + "/ping"
	}, function(error, response, body) {
		
		if (error)
		{
			res.status(404)
				.send({
					error : error
				});
		}
		else
		{
			res.status(200)
				.send({
					'success' : true,
					'body' : JSON.parse(body)
				});
		}
		
	});

});

app.use('/', function(req, res){

	res.render('index');

});



module.exports = app;
