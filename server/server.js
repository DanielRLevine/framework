var http = require("http");
var express = require("express");
var BPromise = require("bluebird");

var app = express();

function my_route(req, res) {
    var array = [];
    for (var j = 0; j < 1000; ++j)
        array.push(Math.random());
    array.sort();

    BPromise.resolve(true)
    .then(function(){
        res.send(true);
    });
}

app.use("/", my_route);

var server = http.createServer(app);
server.listen(1390, function() {
    console.log("Launched server.");
});