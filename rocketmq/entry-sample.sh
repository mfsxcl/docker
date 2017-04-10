#!/bin/bash

ROCKETMQ_HOME=/Users/yuanyue/code/docker/rocketmq/rocketmq

nohup /Users/yuanyue/code/docker/rocketmq/rocketmq/bin/mqnamesrv &
#在机器 B，启动第二个 Master
/Users/yuanyue/code/docker/rocketmq/rocketmq/bin/mqbroker -c /Users/yuanyue/code/docker/rocketmq/broker-m.properties

