FROM nginx:stable
MAINTAINER yuanyue
RUN mkdir -p /opt
COPY entry.sh /opt/entry.sh
RUN chmod +x /opt/entry.sh
CMD ["/opt/entry.sh"]
#CMD ["nginx", "-g", "daemon off;"]


