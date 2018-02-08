// dependencies
var router = require("express").Router();
var server = require("../server.js");
var license = require("./license.js");

// routes
router.post("/", request_license);

// callers
function request_license(req, res) {
    var result = license.request_license();
    var msg = "LICENSE POST";
    return server.result_handler(res, result, "license", "Request License", "user not specified");
}

module.exports = router;