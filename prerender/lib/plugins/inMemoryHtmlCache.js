var cacheManager = require('cache-manager');
var utils = require('util');
module.exports = {
    init: function () {
        this.cache = cacheManager.caching({
            store: 'memory', max: process.env.CACHE_MAXSIZE || 1000000, ttl: process.env.CACHE_TTL || 6000/*seconds*/
        });
    },

    beforePhantomRequest: function (req, res, next) {
        // utils.log('get cache ' + req.prerender.url);
        this.cache.get(req.prerender.url, function (err, result) {
            // utils.log('getting cache = ' + req.prerender.url);
            // utils.log('get cache err=' + err);

            if (!err && result) {
                res.send(200, result);
            } else {
                // utils.log('get cache result=' + result);

                next();
            }
        });
    },

    afterPhantomRequest: function (req, res, next) {
        // utils.log('setting cache = ' + req.prerender.url + 'content=' + req.prerender.documentHTML);
        this.cache.set(req.prerender.url, req.prerender.documentHTML);
        next();
    }
}
