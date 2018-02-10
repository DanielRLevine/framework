var http = require("http");
var express = require("express");
var app = express();

function my_route(req, res) {
    var array = [];
    for (var j = 0; j < 1000; ++j)
        array.push(Math.random());
    array.sort();
    res.send(true);
}

app.get("/", my_route);

var server = http.createServer(app);
server.listen(1390, function() {
    console.log("Launched server.");
});