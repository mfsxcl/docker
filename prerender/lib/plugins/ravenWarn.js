// Raven.captureException(e, function (sendErr, eventId) {
//     if (sendErr) {
//         console.error('Failed to send captured exception to Sentry');
//     } else {
//         console.log('Captured exception and send to Sentry successfully');
//     }
// });
//
//
// Raven.captureMessage('Broken!', function (err, eventId) {
//     // The message has now been sent to Sentry
// });



module.exports = {
    onPhantomPageCreate: function(phantom, req, res, next) {
        req.prerender.page.run(function() {

            this.onConsoleMessage = function(msg) {
                console.log(msg);
            };
        });

        next();
    }
}
