#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    // workers: 1,
    logRequests: true,
    cookiesEnabled: true,
    workers: process.env.PRERENDER_NUM_WORKERS,
    iterations: process.env.PRERENDER_NUM_ITERATIONS
});


server.use(prerender.sendPrerenderHeader());
// server.use(prerender.basicAuth());
// server.use(prerender.whitelist());
server.use(prerender.blacklist());
server.use(prerender.logger());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
// server.use(prerender.inMemoryHtmlCache());
// server.use(prerender.redisCache());
server.use(prerender.ioredisCache());
server.start();
