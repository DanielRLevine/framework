// dependencies
var BPromise = require("bluebird");

exports.request_license = function(redis_read_db, redis_write_db, MVPD_id, user_id, rule_id, device_type, device_id, ip)
{
    return BPromise.resolve(true);
};

/*** END routes ***/