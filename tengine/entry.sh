#!/bin/bash
#every five minutes convert inc file from charset gbk to utf8
echo "*/5 * * * * /opt/convertGBK2UTF8.sh > /dev/null 2>&1" >> /var/spool/cron/root
nginx -g 'daemon off;'