#!/bin/sh
##Create date: 2017-02-15
#Author: Chuck
#Action: logrotate nginx log  everyday
Dateformat=$(date +%Y%m%d)
Basedir="/opt/nginx"
Nginxlogdir="${Basedir}/logs"
Logname="access"
[ -d ${Nginxlogdir} ] && cd ${Nginxlogdir} || exit 1
[ -f ${Logname}.log ] || exit 1
/bin/mv ${Logname}.log ${Logname}_${Dateformat}.log
nginx -s reload
find $Nginxlogdir -type f -name access.* -mtime +90| xargs rm -f