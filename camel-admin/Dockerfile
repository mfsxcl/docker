FROM centos7-jdk7-tomcat8:7
MAINTAINER yuanyue

# Tomcat
ENV CATALINA_HOME=/usr/local/tomcat
# COPY camel-admin war to ${CATALINA_HOME}/webapps/ROOT.war
COPY camel-admin-1.0.0.war ${CATALINA_HOME}/webapps/ROOT.war
#mkdir for store configs file
RUN mkdir -p /data/appdatas/camel
# COPY configs to /data/appdatas/camel
COPY init-data/* /data/appdatas/camel/

# Expose and Start Services
WORKDIR ${CATALINA_HOME}
EXPOSE 8080 8009
CMD ["/usr/local/tomcat/bin/catalina.sh","run"]
