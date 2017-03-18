FROM davidcaste/alpine-tomcat:jdk7tomcat7

ENV ENTRY_FILE=/opt/entry.sh
ENV GREYS_ROOT=/root/.greys/lib/1.7.6.4/greys

MAINTAINER yuanyue yuanyue@staff.hexun.com

COPY entry.sh ${ENTRY_FILE}
RUN chmod +x ${ENTRY_FILE}

COPY greys ${GREYS_ROOT}
RUN chmod +x ${GREYS_ROOT}/*.sh
RUN ${GREYS_ROOT}/install-local.sh
#RUN curl -sLk http://ompc.oss.aliyuncs.com/greys/install.sh|sh

RUN ln -s ${GREYS_ROOT} ${CATALINA_HOME}/greys
RUN ln -s ${CATALINA_HOME} /usr/local/tomcat


WORKDIR ${CATALINA_HOME}
CMD ["/opt/entry.sh"]

