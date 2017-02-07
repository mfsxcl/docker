#!/usr/bin/env bash

docker ps -a|grep sentry|awk '{print $1}'|xargs docker rm -f
docker images|grep sentry_|awk '{print $1":"$2}'|xargs docker rmi
rm -rf ./data/postgres/*