#!/bin/bash
docker rm -f rmqbroker-a
docker rm -f rmqbroker-b
docker run -d -p 10911:10911 -p 10909:10909 -e brokerId=0 -e brokerName=broker1 -e namesrvAddr=192.168.1.4:9876 -e brokerIP1=192.168.1.4 -e listenPort=10911 -e brokerRole=SYNC_MASTER --name rmqbroker-a rocketmq-broker:4.0.0
docker run -d -p 10921:10921 -p 10919:10919 -e brokerId=1 -e brokerName=broker1 -e namesrvAddr=192.168.1.4:9876 -e brokerIP1=192.168.1.4 -e listenPort=10921 -e brokerRole=SLAVE --name rmqbroker-b rocketmq-broker:4.0.0
