var express = require("express");
var app = express();
var color = require("./lib/color.js");

app.set("view engine", "jade");

app.get("/", function(req, res) {
	console.log("req '/'");
	res.render("index", {"color" : color.get_color()});
    });

var server = app.listen(3000, function() {
	var address = server.address();
	var host = address.address;
	var port = address.port;
	console.log("listening at http://%s:%s", host, port);
});