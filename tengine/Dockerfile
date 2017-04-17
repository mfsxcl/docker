FROM centos:7
MAINTAINER yuanyue 87439247@qq.com

ENV NGINX_VERSION tengine-2.2.0
# install dependency
RUN yum -y update && yum -y install wget tar openssl openssl-devel git gcc gcc-c++ autoconf automake make \
libxml2 libxml2-dev libxslt-devel gd-devel perl-devel perl-ExtUtils-Embed GeoIP GeoIP-devel GeoIP-data inotify-tools
# download tengine 2.2.0
RUN  wget http://tengine.taobao.org/download/${NGINX_VERSION}.tar.gz && \
 tar -zvxf ${NGINX_VERSION}.tar.gz && \
 rm -rf ${NGINX_VERSION}.tar.gz && \
 mv ${NGINX_VERSION} /opt/${NGINX_VERSION}
# download ngx_http_substitutions_filter_module
RUN cd /opt/${NGINX_VERSION} && git clone git://github.com/yaoweibin/ngx_http_substitutions_filter_module.git

RUN cd /opt/${NGINX_VERSION} && ./configure --enable-mods-static=all \
        --user=root \
        --group=root \
        --prefix=/opt/nginx \
        --conf-path=/opt/nginx/nginx.conf \
        --lock-path=/var/lock/nginx.lock \
        --pid-path=/run/nginx.pid \
        --http-client-body-temp-path=/opt/nginx/body \
        --http-fastcgi-temp-path=/opt/nginx/fastcgi \
        --http-proxy-temp-path=/opt/nginx/proxy \
        --http-scgi-temp-path=/opt/nginx/scgi \
        --http-uwsgi-temp-path=/opt/nginx/uwsgi \
        --with-http_ssl_module \
        --with-http_gzip_static_module \
        --with-http_gunzip_module \
        --with-md5=/usr/include/openssl \
        --with-sha1-asm \
        --with-md5-asm \
        --with-http_auth_request_module \
        --with-http_image_filter_module \
        --with-http_addition_module \
        --with-http_dav_module \
        --with-http_realip_module \
        #--with-http_spdy_module \
        --with-http_ssl_module \
        --with-http_stub_status_module \
        --with-http_sub_module \
        --with-http_xslt_module \
        --with-http_upstream_ip_hash_module=shared \
        --with-http_upstream_least_conn_module=shared \
        --with-http_upstream_session_sticky_module=shared \
        --with-http_map_module=shared \
        --with-http_user_agent_module=shared \
        --with-http_mp4_module \
        --with-http_split_clients_module=shared \
        --with-http_access_module=shared \
        --with-http_user_agent_module=shared \
        --with-http_degradation_module \
        --with-http_upstream_check_module \
        --with-http_upstream_consistent_hash_module \
        --with-ipv6 \
        --with-file-aio \
        --with-mail \
        --with-mail_ssl_module \
        --with-pcre \
        --with-pcre-jit \
        --with-debug \
        --http-log-path=/var/log/nginx/access.log \
        --error-log-path=/var/log/nginx/error.log \
        --sbin-path=/usr/sbin/nginx \
        --add-module=ngx_http_substitutions_filter_module

RUN cd /opt/${NGINX_VERSION} && make && make install
# inotify watch file change
COPY inotify-tools-3.14-8.el7.x86_64.rpm /opt/
# install inotify
RUN rpm -ivh /opt/inotify-tools-3.14-8.el7.x86_64.rpm
# copy convertGBK2UTF8.sh
COPY convertGBK2UTF8.sh /opt/convertGBK2UTF8.sh
# copy entry.sh
COPY entry.sh /opt/entry.sh
# set executable
RUN chmod +x /opt/*.sh
# link /opt/inc/utf-8 to /opt/nginx/html/inc
RUN mkdir -p /opt/inc_target && ln -s /opt/inc_target /opt/nginx/html/inc

WORKDIR /opt/nginx

EXPOSE 80 443

VOLUME /opt/inc_source

CMD ["/opt/entry.sh"]


