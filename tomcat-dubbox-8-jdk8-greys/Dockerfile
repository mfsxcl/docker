FROM centos:7
MAINTAINER yuanyue 87439247@qq.com

# Tomcat and Java Vars
ENV JAVA_HOME=/usr/local/jdk
ENV CATALINA_HOME=/usr/local/tomcat
ENV CLASSPATH=.:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
ENV PATH=$PATH:${JAVA_HOME}/bin:${CATALINA_HOME}/bin
ENV JAVA_OPTS="-Xms512m -Xmx2048m"
ENV ENTRY_FILE=/usr/local/entry.sh
ENV GREYS_ROOT=/root/.greys/lib/1.7.6.4/greys

# cp resource
COPY jdk ${JAVA_HOME}
COPY apache-tomcat ${CATALINA_HOME}

COPY entry.sh ${ENTRY_FILE}
RUN chmod +x ${ENTRY_FILE}

COPY greys ${GREYS_ROOT}
RUN chmod +x ${GREYS_ROOT}/*.sh
RUN ${GREYS_ROOT}/install-local.sh

RUN ln -s ${GREYS_ROOT} ${CATALINA_HOME}/greys

WORKDIR ${CATALINA_HOME}
CMD ${ENTRY_FILE}