var Redis = require('ioredis');
var cachePrefix = "prerender:";
var ttl = process.env.PAGE_TTL || 86400;
var redis_online = false;
var redis = new Redis({
    sentinels: [
        {host: '10.4.12.100', port: 26384},
        {host: '10.4.12.101', port: 26384},
        {host: '10.4.12.102', port: 26384}
    ],
    name: 'master2'
});
redis.connect(function () {
    redis_online = true;
});

module.exports = {
    beforePhantomRequest: function (req, res, next) {
        if (req.method !== 'GET' || redis_online !== true) {
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
            redis.set(cachePrefix + req.prerender.url, req.prerender.documentHTML, 'EX', ttl);
        }
        next();
    }
};