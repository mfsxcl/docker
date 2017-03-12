FROM docker-registry.hexun.com/hexunzq/javaweb:8-jdk8-greys
MAINTAINER yuanyue yuanyue@staff.hexun.com
ENV NGRINDER_ENTRY=/opt/start.sh
ENV AGENT_ROOT=/opt/ngrinder-agent
RUN export AGENT_ROOT


RUN mkdir -p ${AGENT_ROOT}
COPY ngrinder-agent ${AGENT_ROOT}/
RUN chmod +rx ${AGENT_ROOT}/*
WORKDIR ${AGENT_ROOT}

COPY ngrinder-controller-3.4.1.war ${CATALINA_HOME}/webapps/ROOT.war
WORKDIR ${CATALINA_HOME}

COPY start.sh ${NGRINDER_ENTRY}
RUN chmod +x ${NGRINDER_ENTRY}

EXPOSE 8080 8787 16001
CMD ["/opt/start.sh"]
