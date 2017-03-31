#!/usr/bin/env bash
prerender_ajs=./lib/plugins/remote/prerender.ajs
echo $DISCONF_URL;
echo "module.exports = {" > $prerender_ajs
echo "remoteUrl : \"$DISCONF_URL\"" >> $prerender_ajs
echo "}" >> $prerender_ajs


nohup npm start > log.out &
node monitor.js