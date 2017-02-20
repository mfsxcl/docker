var url = require("url");
var util = require("util");
module.exports = {
    init: function () {
        this.BLACKLISTED_DOMAINS = (process.env.BLACKLISTED_DOMAINS && process.env.BLACKLISTED_DOMAINS.split(',')) || [];
    },
    beforePhantomRequest: function (req, res, next) {
        util.log("----" + req.prerender.url + "--beforePhantomRequest");
        if (req.prerender.url.indexOf("favicon.ico") < 0) {
            next();
        }
    },
    onPhantomPageCreate: function (phantom, req, res, next) {
        util.log("----" + req.prerender.url + "--onPhantomPageCreate");
        next();
    },

    afterPhantomRequest: function (req, res, next) {
        util.log("----" + req.prerender.url + "--afterPhantomRequest");
        next();
    },

    beforeSend: function (req, res, next) {
        util.log("----" + req.prerender.url + "--beforeSend");
        next();
    }


}