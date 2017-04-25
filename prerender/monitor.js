//************************ monitor error ***********************
(function () {
    //raven sentry client
    var client = require('raven');
    //tail client
    var Tail = require('tail').Tail;
    //config sentry
    client.config('http://dff064a0a55a4467be5d57d045d89764:a49d033e39d14c9fa2e39b8bdfb705d3@sentry.intcoop.hexun.com/10').install();
    //logged function
    client.on('logged', function () {
        console.log('send to sentry !!!!!!');
    });
    //on error alert
    client.on('error', function (e) {
        console.log('WARNING!!!!!, couldnt record the event');
    });
    client.captureMessage("raven init complete");

    var tail = new Tail("log.out");

    tail.on("line", function (data) {
        console.log("mon log==" + data);
        if (data.toString().indexOf("error") >= 0) {
            client.captureMessage(data.toString());
        }
    });

    tail.on("error", function (error) {
        console.log('ERROR: ', error);
    });
})();

//****************worker clearn cache********************
(function () {
    //require http
    var http = require('http');
    //require remote require
    require("node-async-require").install();
    // get cache config from disconf
    var remote_cache = require("./lib/plugins/remote/prerender.ajs");

    for (var i = 0, l = remote_cache.worker.length; i < l; i++) {
        var item = remote_cache.worker[i];
        var func = function () {
            try {
                http.get(item.url, function (res) {
                    console.log("\n" + new Date().toISOString() +
                        "::::" + item.url + " ==== " + res.statusCode
                    );
                    // res.on('data', function (data) {
                    // });
                }).on('error', function (e) {
                    console.log("Got error: " + e.message);
                });
            }
            catch (e) {
            }
        };
        func();
        setInterval(func, item.interval * 1000);
    }
})();

module.exports = {};