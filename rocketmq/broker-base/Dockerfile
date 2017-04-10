#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

# Start from a Java image.
FROM java:8
#FROM davidcaste/alpine-java-unlimited-jce:jdk8
# Rocketmq home
ENV ROCKETMQ_HOME  /opt/rocketmq
# cp rocketmq bin
COPY rocketmq ${ROCKETMQ_HOME}
# Rocketmq home
ENV ROCKETMQ_HOME  /opt/rocketmq
# set work dir
WORKDIR  ${ROCKETMQ_HOME}
# mkdir logs and store
RUN mkdir -p /opt/data/logs /opt/data/store

RUN chmod +x bin/mqbroker

CMD cd ${ROCKETMQ_HOME}/bin && export JAVA_OPT=" -Duser.home=/opt/data" && sh mqbroker -c ${ROCKETMQ_HOME}/conf/broker.conf

EXPOSE 10909 10911 10919 10921

VOLUME /opt/data

