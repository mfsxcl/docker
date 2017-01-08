FROM centos7-jdk7-tomcat8:latest
MAINTAINER yuanyue

# Tomcat
ENV CATALINA_HOME=/usr/local/tomcat
# COPY camel-admin war to ${CATALINA_HOME}/webapps/ROOT.war
COPY camel-agent-1.0.0.war ${CATALINA_HOME}/webapps/ROOT.war
#cp server.xml
COPY server.xml ${CATALINA_HOME}/conf/
#start tomcat
#RUN ${CATALINA_HOME}/bin/startup.sh
#install dengine
RUN yum -y install git gcc gcc-c++ automake autoconf libtool make ncurses-devel zlib zlib-devel libtermcap-devel libevent-devel readline-devel patch

RUN export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig

COPY Dengine /opt/Dengine/

RUN cd /opt/Dengine && ./install_dengine

#RUN /usr/local/nginx/sbin/nginx
