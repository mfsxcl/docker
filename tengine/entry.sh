#!/bin/bash
ps -ef | grep crond | grep -v grep
if [ $? -ne 0 ]
then
    echo "start crond....."
    crond
else
    echo "crond runing....."
fi

ps -ef | grep convertGBK2UTF8 | grep -v grep
if [ $? -ne 0 ]
then
    echo "start convertGBK2UTF8....."
    nohup /opt/convertGBK2UTF8.sh &
else
    echo "convertGBK2UTF8 runing....."
fi

nginx -g 'daemon on;'

tail -f -n 2000 /opt/nginx/nginx.conf
