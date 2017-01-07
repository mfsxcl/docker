FROM centos:7
MAINTAINER yuanyue

# Tomcat and Java Vars
ENV JAVA_HOME=/usr/local/jdk \
    CATALINA_HOME=/usr/local/tomcat \
    PATH=$PATH:$JAVA_HOME/bin:${CATALINA_HOME}/bin:${CATALINA_HOME}/scripts \
    JAVA_OPTS="-Xms512m -Xmx2048m"

# Update and install latest packages and prerequisites
RUN yum -y install lrzsz net-tools
    
COPY jdk/ ${JAVA_HOME}
COPY apache-tomcat ${CATALINA_HOME}


# Tomcat scripts setup
#COPY scripts/ ${CATALINA_HOME}/scripts/
#RUN chmod +x ${CATALINA_HOME}/scripts/*.sh

# Expose and Start Services
WORKDIR ${CATALINA_HOME}
EXPOSE 8080 8009
CMD ["/usr/local/tomcat/bin/catalina.sh","run"]
