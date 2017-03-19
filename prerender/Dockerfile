FROM node:6
EXPOSE 3000

# ****************************************
# install dependency
#ENV DEB_SOURCE=/etc/apt/sources.list
#
#RUN echo "deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse" > ${DEB_SOURCE}
#RUN echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse" >> ${DEB_SOURCE}
#RUN echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse" >> ${DEB_SOURCE}
#RUN echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse" >> ${DEB_SOURCE}
#RUN echo "deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse" >> ${DEB_SOURCE}

#RUN echo "deb http://mirrors.163.com/debian/ jessie main non-free contrib" > ${DEB_SOURCE}
#RUN echo "deb http://mirrors.163.com/debian/ jessie-updates main non-free contrib" >> ${DEB_SOURCE}
#RUN echo "deb http://mirrors.163.com/debian/ jessie-backports main non-free contrib" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.163.com/debian/ jessie main non-free contrib" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.163.com/debian/ jessie-updates main non-free contrib" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.163.com/debian/ jessie-backports main non-free contrib" >> ${DEB_SOURCE}
#RUN echo "deb http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib" >> ${DEB_SOURCE}
#RUN echo "deb-src http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib" >> ${DEB_SOURCE}
#
#RUN apt-get update \
#    && apt-get install -y \
#        build-essential g++ flex bison gperf ruby perl \
#        libsqlite3-dev libfontconfig1-dev libicu-dev libfreetype6 libssl-dev \
#        libpng-dev libjpeg-dev python libx11-dev libxext-dev
#*****************set taobao npm registry************************
RUN npm config set registry https://registry.npm.taobao.org
RUN npm info underscore
#mkdir root
ENV PRERENDER_ROOT=/usr/local/prerender
# mkdir root directory
RUN mkdir -p ${PRERENDER_ROOT}
# set work dir to prerender root dir
WORKDIR ${PRERENDER_ROOT}
# copy package.json
COPY package.json ${PRERENDER_ROOT}

COPY phantomjs-2.1.1-linux-x86_64.tar.bz2 /tmp/phantomjs/
# install forever
RUN npm install forever -g
# install all
RUN npm install
#copy resource to root
COPY . ${PRERENDER_ROOT}
# set *.sh executable
RUN chmod +x ${PRERENDER_ROOT}/*.sh
# entry
CMD ${PRERENDER_ROOT}/entry.sh