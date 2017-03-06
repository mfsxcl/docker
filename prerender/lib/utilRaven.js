/**
 * Created by yuanyue on 17/3/4.
 */
var client = require('raven');

var ravenMsg = [];

client.config('http://dff064a0a55a4467be5d57d045d89764:a49d033e39d14c9fa2e39b8bdfb705d3@10.4.60.107/10').install();

client.on('logged', function () {
    console.log('Yay, it worked!');
});
client.on('error', function (e) {
    console.log('uh oh, couldnt record the event');
});
client.captureMessage("raven init complete");

setInterval(function () {
    while (true) {
        var msg = ravenMsg.pop();
        if (typeof msg != "undefined") {
            console.log("send complete =======" + msg);
            client.captureMessage(msg);
        } else {
            console.log("send over");
            break;
        }
    }
}, 5000);

var raven = exports = module.exports = {};

raven.send = function (msg) {
    console.log("sending------" + msg);
    ravenMsg.push(msg);
};

raven.queue = ravenMsg;
