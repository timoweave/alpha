var express = require("express");
var app = express();

app.get("/", function(req, res) {
	console.log("req '/'");
	res.send("Hello world!");
    });

var server = app.listen(3000, function() {
	var address = server.address();
	var host = address.address;
	var port = address.port;
	console.log("listening at http://%s:%s", host, port);
});