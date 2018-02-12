var http = require('http');
var BPromise = require("bluebird");

process.env.NODE_ENV = 'production';
BPromise.setScheduler(fn => process.nextTick(fn));

function my_route(req, res) {
    var array = [];
    for (var j = 0; j < 1000; ++j)
        array.push(Math.random());
    array.sort();

    BPromise.resolve(true)
    .then(function(){
        res.writeHead(200);
        res.end("true", 'utf-8');
    });
}

http.createServer(function (req, res) {

    my_route(req, res);

}).listen(1390);

console.log('Server running at http://127.0.0.1:1390/');