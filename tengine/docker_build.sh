#!/usr/bin/env bash
docker build -t "docker-registry.hexun.com/hexunzq/tengine:v2.2.0" .

docker push "docker-registry.hexun.com/hexunzq/tengine:v2.2.0"