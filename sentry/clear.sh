#!/usr/bin/env bash
rm -rf data/postgres/*
docker ps |grep sentry |awk '{print $1}'|xargs docker rm -f