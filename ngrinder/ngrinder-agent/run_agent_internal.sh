#!/bin/sh
CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
PATH=$PATH:${JAVA_HOME}/bin
java -server -cp "lib/*" org.ngrinder.NGrinderAgentStarter --mode=agent --command=run $@
