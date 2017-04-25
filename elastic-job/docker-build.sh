#!/usr/bin/env bash

docker build -t "docker-registry.hexun.com/hexunzq/elastic-job-lite-console:2.1.1" .

docker push "docker-registry.hexun.com/hexunzq/elastic-job-lite-console:2.1.1"