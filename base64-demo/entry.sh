#!/usr/bin/env bash
nginx;
echo ${FILE_DATA} |sed 's/ /\n/g'| base64 -d > ${FILE_NAME}
tail -f /var/log/nginx/error.log