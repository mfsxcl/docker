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

RUN chmod +x ${ROCKETMQ_HOME}/entry.sh
# set conf envariment
ENV CONF=${ROCKETMQ_HOME}/conf/broker.conf

CMD ${ROCKETMQ_HOME}/entry.sh
# expose multi ports
EXPOSE 10909 10911 10919 10921

VOLUME /opt/data


# cp rocketmq bin
