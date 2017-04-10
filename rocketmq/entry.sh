#!/bin/bash
brokerNameMaster="a";
brokerNameSlave="b";
if [ "brokerName" = "a" ];then
    brokerNameMaster="broker-a";
    brokerNameSlave="broker-b";
else
    brokerNameMaster="broker-b";
    brokerNameSlave="broker-a";
fi

echo -e "\nbrokerName=$brokerNameMaster" >> /opt/broker-m.properties
echo -e "\nbrokerName=$brokerNameSlave" >> /opt/broker-s.properties

echo "namesrvAddr=$namesrvAddr" >> /opt/broker-m.properties
echo "namesrvAddr=$namesrvAddr" >> /opt/broker-s.properties

echo "brokerName=$brokerName"
echo "namesrvAddr=$namesrvAddr"

#CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
#export CLASSPATH
#
#echo "CLASSPATH=$CLASSPATH"

nohup ${ROCKETMQ_HOME}/bin/mqnamesrv &
#在机器 B，启动第二个 Master
nohup ${ROCKETMQ_HOME}/bin/mqbroker -c /opt/broker-m.properties &

#nohup ${ROCKETMQ_HOME}/bin/mqbroker -c /opt/broker-s.properties &

tail -f -n 200 nohup.out
