#!/bin/bash
source="/opt/inc_source"
target="/opt/inc_target"
if [ "`ls -A $source`" = "" ]; then
    echo "$source is indeed empty"
else
    cd ${source} && find . -type d -exec mkdir -p ${target}/{} \;
    cd ${source} && find . -type f -exec iconv -f GBK -t UTF-8 {} -o ${target}/{} \;
fi
