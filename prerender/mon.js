var http = require('http');
//raven sentry client
var client = require('raven');
//tail client
var Tail = require('tail').Tail;
//config sentry
client.config('http://dff064a0a55a4467be5d57d045d89764:a49d033e39d14c9fa2e39b8bdfb705d3@sentry.intcoop.hexun.com/10').install();
//logged function
client.on('logged', function () {
    console.log('Yay, it worked!');
});
//on error alert
client.on('error', function (e) {
    console.log('uh oh, couldnt record the event');
});
client.captureMessage("raven init complete");

var tail = new Tail("log.out");

tail.on("line", function (data) {
    console.log(data);
    if (data.toString().indexOf("error") >= 0) {
        console.log("**************sending****************");
        client.captureMessage(data.toString());
    }
});

tail.on("error", function (error) {
    console.log('ERROR: ', error);
});


require("node-async-require").install();
// get cache config from disconf
var remote_cache = require("./lib/plugins/remote/prerender.ajs");

for (var i = 0, l = remote_cache.worker.length; i < l; i++) {
    var item = remote_cache.worker[i];
    var func = function () {
        try {
            http.get(item.url, function (res) {
                console.log("\nGot response: " + res.statusCode);
                res.on('data', function (data) {
                    console.log("\nGot data: " + data);
                });
            }).on('error', function (e) {
                console.log("Got error: " + e.message);
            });
        }
        catch (e) {}
    };
    func();
    setInterval(func, item.interval * 1000);
}
