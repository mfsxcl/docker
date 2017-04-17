#!/bin/bash
nohup /opt/convertGBK2UTF8.sh &
nginx -g 'daemon off;'