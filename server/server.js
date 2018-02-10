/*** BEGIN dependencies ***/

var BPromise = require("bluebird");
var http = require("http");
var express = require("express");

/*** END dependencies ***/
/*** BEGIN startup ***/

// express instance
var app = express();

function busy_work(n)
{
    for (var i = 0; i < n; ++i)
    {
        var array = [];
        for (var j = 0; j < 1000; ++j)
            array.push(Math.random());
        array.sort();
    }
    return BPromise.resolve(true);
}

// callers
function request_license(req, res) {
    var result = busy_work(1)
    .then(function(){
        res.send(true);
        return true;
    });
}

// routes
app.use("/", request_license);


// server instance
var server = http.createServer(app);
server.listen(1390, function() {
    console.log("Launched server.");
});

/*** END startup ***/