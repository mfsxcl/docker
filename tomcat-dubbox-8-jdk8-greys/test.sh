#!/usr/bin/env bash
HOST_PORT=10.0.150.159:2375
IMAGE_NAME=docker-registry.hexun.com/hexunzq/javaweb
IMAGE_TAG=7-jre7-dubbox
WAR_SOURCE=/root/.jenkins/workspace/package-lesson/px-admin/target/px-admin.war
CONTAINER_NAME=px-admin1


#whether container is running
CONTAINER_ID=`docker --host=${HOST_PORT} ps -a|grep ${CONTAINER_NAME} |grep -v grep|awk '{print $1}'`
if [ "${CONTAINER_ID}" != "" ]; then
echo "docker container is running!"
docker --host=${HOST_PORT} rm -f ${CONTAINER_NAME}
else
echo "docker container not running!"
fi

#whether exists image
IMAGE_ID=`docker --host=${HOST_PORT} images|grep -v grep|grep ${IMAGE_NAME}|grep ${IMAGE_TAG}|awk '{print $3}'`
if [ "${IMAGE_ID}" != "" ]; then
echo "image IMAGE_ID exists!"
else
echo "image IMAGE_ID not exists!"
docker --host=${HOST_PORT} pull ${IMAGE_NAME}:${IMAGE_TAG}
fi

#start container
docker --host=${HOST_PORT} run -d --name=${CONTAINER_NAME} --restart=always -d -p 3331:8080 docker-registry.hexun.com/hexunzq/javaweb:7-jre7-dubbox
echo "docker copy file"
docker --host=${HOST_PORT} cp ${WAR_SOURCE} ${CONTAINER_NAME}:/usr/local/tomcat/webapps/ROOT.war