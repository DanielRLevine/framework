// dependencies
var BPromise = require("bluebird");

/*function sleep_promise(ms)
{
    return new BPromise(function(resolve, reject){
        setTimeout(function(){
            resolve(true);
        }, ms);
    });
}*/

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

exports.request_license = function(redis_read_db, redis_write_db, MVPD_id, user_id, rule_id, device_type, device_id, ip)
{
    return busy_work(1)
    .return(true);
};

/*** END routes ***/