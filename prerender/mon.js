//raven sentry client
var client = require('raven');
//tail client
var Tail = require('tail').Tail;
//config sentry
client.config('http://dff064a0a55a4467be5d57d045d89764:a49d033e39d14c9fa2e39b8bdfb705d3@10.4.60.107/10').install();
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

