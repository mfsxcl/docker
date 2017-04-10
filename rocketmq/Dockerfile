# Start from a Java image.
FROM davidcaste/alpine-java-unlimited-jce:jdk8

# Rocketmq version
ENV ROCKETMQ_VERSION 4.0.0-incubating

RUN mkdir -p /opt/data/master/store \
 /opt/data/master/store/commitlog \
 /opt/data/master/store/consumequeue \
 /opt/data/master/store/index \
 /opt/data/master/store/checkpoint \
 /opt/data/master/store/abort \
 /opt/data/master/logs \
 /opt/data/slave/store \
 /opt/data/slave/store/commitlog \
 /opt/data/slave/store/consumequeue \
 /opt/data/slave/store/index \
 /opt/data/slave/store/checkpoint \
 /opt/data/slave/store/abort \
 /opt/data/slave/logs

COPY . /opt/
# Rocketmq home
ENV ROCKETMQ_HOME  /opt/rocketmq
WORKDIR  ${ROCKETMQ_HOME}

RUN chmod +x bin/*
RUN chmod +x /opt/*

EXPOSE 9876 10909 10911 10919 10921
VOLUME /opt/data

CMD /opt/entry.sh

