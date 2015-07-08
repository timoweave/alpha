var express = require("express");
var app = express();
var color = require("./lib/color");

app.set("view engine", "jade");
app.set("views", "jade");

app.get("/", function(req, res) {
	console.log("req '/'");
	res.render("index", {"colors" : color.get_colors(),
                             "title" : "COLOR TEST WITH MOCHA & JADE"});
    });

/*
app.get("/algorithms", function(req, res) {
	console.log("req '/algorithms'");
	res.render("algorithms", {"color" : color.get_color()});
    });
*/

var server = app.listen(3000, function() {
	var address = server.address();
	var host = address.address;
	var port = address.port;
	console.log("listening at http://%s:%s", host, port);
});
