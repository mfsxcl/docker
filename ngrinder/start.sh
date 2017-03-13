#!/bin/sh
${AGENT_ROOT}/run_agent_bg.sh && /opt/entry.sh
#run sample is ==========
#docker run -d --name=ngrinder --net=host -e SERVER_PORT=8585 --privileged=true docker-registry.hexun.com/hexunzq/ngrinder:1.0.0