#!/bin/bash
source="/opt/inc_source"
target="/opt/inc_target"
cd ${source} && find . -type d -exec mkdir -p ${target}/{} \;
cd ${source} && find . -type f -exec iconv -f GBK -t UTF-8 {} -o ${target}/{} \;

log_file=/opt/inotify.log
#watch file change
inotifywait -mrq --format '%w%f' -e modify,delete,create,attrib ${source} |  while read file
do
      target_file=${file/inc_source/inc_target}
      echo "${file} was changed, saved utf8 to ${target_file}" >> ${log_file}
      dir_name=`dirname ${target_file}`
      mkdir -p ${dir_name}
      echo "dir ${dir_name} created" >> ${log_file}
      iconv -f GBK -t UTF-8 ${file} -o ${target_file}
done
