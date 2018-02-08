// dependencies
var BPromise = require("bluebird");

function sleep_promise(ms)
{
    return new BPromise(function(resolve, reject){
        setTimeout(function(){
            resolve(true);
        }, ms);
    });
}

exports.request_license = function(redis_read_db, redis_write_db, MVPD_id, user_id, rule_id, device_type, device_id, ip)
{
    return sleep_promise(500)
    .return(true);
};

/*** END routes ***/