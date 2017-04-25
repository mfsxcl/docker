#基础镜像版本：openjdk:7
FROM openjdk:7
MAINTAINER yuanyue "87439247@qq.com"
COPY . /usr/local/
ENV ROOT_DIR=/usr/local/elastic-job-console
WORKDIR ${ROOT_DIR}
# set permission
RUN chmod +x ${ROOT_DIR}/bin/*.sh
CMD ${ROOT_DIR}/bin/start.sh
VOLUME ${ROOT_DIR}/logs /root/.elastic-job-console
EXPOSE 8899