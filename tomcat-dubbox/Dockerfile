FROM tomcat:7-jre7
ENV ENTRY_FILE=/opt/entry.sh
MAINTAINER yuanyue
COPY entry.sh ${ENTRY_FILE}
RUN chmod +x ${ENTRY_FILE}
CMD ["/opt/entry.sh"]

