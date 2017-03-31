// require remote module
require("node-async-require").install();
// get cache config from disconf
var remote_cache = require("./remote/prerender.ajs");
// require ioredis
var Redis = require('ioredis');
// set cache prefix
var cachePrefix = "prerender:";
// default cache ttl
var default_ttl = process.env.PAGE_TTL || 3600;
// whether redis connection opened
var redis_online = false;
// init redis config
var redis = new Redis(remote_cache.server);
// on connect
redis.connect(function () {
    redis_online = true;
});
// import minify module
var minify = require('html-minifier').minify;
//remove key
var rmQueryKey = function (url, param) {
    if (url.endsWith(param)) {
        return url.replace("?" + param, "").replace("&" + param, "");
    }
    return url.replace(param + "&", "");
};
//invoking remove cache keywords is "prerender_cache_clean"
var cacheCleanKey = "prerender_cache_clean";
// exports this module
module.exports = {
    beforePhantomRequest: function (req, res, next) {
        if (req.method !== 'GET' || redis_online !== true || req.prerender.url.indexOf(cacheCleanKey) >= 0) {
            req.prerender.url = rmQueryKey(req.prerender.url, cacheCleanKey);
            return next();
        }

        redis.get(cachePrefix + req.prerender.url, function (err, result) {
            // Page found - return to prerender and 200
            if (!err && result) {
                console.log("get from cache = " + req.prerender.url);
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
            for (var i = 0, l = remote_cache.cache.length; i < l; i++) {
                var regex = new RegExp(remote_cache.cache[i].regex, 'gi');
                if (regex.test(req.prerender.url)) {
                    ttl = remote_cache.cache[i].ttl;
                    break;
                }
            }
            var content = minify(req.prerender.documentHTML, {collapseWhitespace: true});
            //console.log("((((((((((" + content + ")))))");
            redis.set(cachePrefix + req.prerender.url, content, 'EX', ttl);
        }
        next();
    }
};