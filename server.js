
var express = require('express');
var app = express();


//Define a port
const PORT = 8080;



app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '\\pages\\' + 'index.html');
});



//this handles all of our html file responses
app.get('/:n', function(req, res, next){
	//console.log(req);

	var options = {
		root: __dirname + '\\pages\\',
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}	
	};
	
	var fileName = req.params.n;
	
	res.sendFile(fileName, options, function(err){
		if(err){
			console.log(err);
			res.status(err.status).end();
		}
		else{
			console.log("Sent: ", fileName);
		}
	});
});





//listen for requests
app.listen(PORT, function(req, res){
	console.log("Listening on localhost..." + PORT);
});


