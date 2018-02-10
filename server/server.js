/*** BEGIN dependencies ***/

var BPromise = require("bluebird");
var http = require("http");
var express = require("express");

/*** END dependencies ***/
/*** BEGIN startup ***/

// express instance
var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,user_id,session_id");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

var router = require("express").Router();

// routes
router.post("/", request_license);

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
    var result = busy_work(1).return(true);
    res.send(true);
    return true;
}

// routes
app.use("/license", router);


// server instance
var server = http.createServer(app);
server.listen(1390, function() {
    console.log("Launched server.");
});

/*** END startup ***/