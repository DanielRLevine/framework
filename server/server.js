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

// routes
app.use("/license", require("./license/routes.js"));


// server instance
var server = http.createServer(app);
server.listen(1390, function() {
    console.log("Launched server.");
});

/*** END startup ***/
/*** BEGIN result handling ***/

// called by every route
// responsible for sending result once it has resolved (along with appropriate status code),
//      printing console.log(), and logging http statistics
exports.result_handler = function(res, result_promise, license_or_dashboard, msg, user_id)
{
    var status = 200;
    return result_promise
    .then(function(result){     // successful

        // send result
        res.send(result);

        // console.log() result
        //console.log(msg);
        //console.log("\tClient: " + user_id);

        return true;
    })
    .catch(function(e){         // unsuccessful

        // compute status code
        status = get_error_code(e);

        // send result
        res.status(status).send({"error" : e.toString()});

        // console.log() 500 errors
        if (status === 500)
        {
            console.log(msg);
            console.log(e);
        }

        // console.log() result
        //console.log("FAILURE " + status + " (" + e + "): " + msg);
        //console.log("\tClient: " + user_id);

        return true;
    });
};

/*** END result handling ***/