// dependencies
var BPromise = require("bluebird");

var router = require("express").Router();
var server = require("../server.js");

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
    var msg = "LICENSE POST";
    return server.result_handler(res, result, "license", "Request License", "user not specified");
}

module.exports = router;