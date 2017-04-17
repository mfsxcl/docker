#!/bin/bash
source="/opt/inc_source"
target="/opt/inc_target"
cd ${source} && find . -type d -exec mkdir -p ${target}/{} \;
cd ${source} && find . -type f -exec iconv -f GBK -t UTF-8 {} -o ${target}/{} \;

#watch file change
inotifywait -mrq --format '%w%f' -e modify,delete,create,attrib ${source} |  while read file
do
      target_file=${file/inc_source/inc_target}
      echo "${file} was changed, saved utf8 to ${target_file}" >> /opt/inotify.log 2>&1
      dir_name=`dirname ${file}`
      mkdir -p ${dir_name}
      iconv -f GBK -t UTF-8 ${file} -o ${target_file}
done
