#!/bin/bash 
docker run -d -p 10911:10911 -p 10909:10909 --name rmqbroker-a apache/incubator-rocketmq-broker:broker-master-a
