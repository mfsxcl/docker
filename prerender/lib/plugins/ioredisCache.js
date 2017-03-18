// require remote module
require("node-async-require").install();
// get cache config from disconf
var remote_cache_conf = require("./remote/cacheConf.ajs");
// get server config from disconf
var remote_server_conf = require("./remote/serverConf.ajs");
// require ioredis
var Redis = require('ioredis');
// set cache prefix
var cachePrefix = "prerender:";
// default cache ttl
var default_ttl = process.env.PAGE_TTL || 3600;
// whether redis connection opened
var redis_online = false;
// init redis config
var redis = new Redis(remote_server_conf);
// on connect
redis.connect(function () {
    redis_online = true;
});

// exports this module
module.exports = {
    beforePhantomRequest: function (req, res, next) {
        if (req.method !== 'GET' || redis_online !== true || req.prerender.url.indexOf("prerender_cache_clean") >= 0 ) {
            return next();
        }

        redis.get(cachePrefix + req.prerender.url, function (err, result) {
            // Page found - return to prerender and 200
            if (!err && result) {
                res.send(200, result);
            } else {
                next();
            }
        });
    },

    afterPhantomRequest: function (req, res, next) {
        if (redis_online !== true) {
            return next();
        }
        // Don't cache anything that didn't result in a 200. This is to stop caching of 3xx/4xx/5xx status codes
        if (req.prerender.statusCode === 200) {
            var ttl = default_ttl;
            for (var i = 0, l = remote_cache_conf.length; i < l; i++) {
                var regex = new RegExp(remote_cache_conf[i].regex, 'gi');
                if (regex.test(req.prerender.url)) {
                    ttl = remote_cache_conf[i].ttl;
                    break;
                }
            }
            redis.set(cachePrefix + req.prerender.url, req.prerender.documentHTML, 'EX', ttl);
        }
        next();
    }
};