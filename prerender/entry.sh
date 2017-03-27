#!/usr/bin/env bash
nohup npm start > log.out &
node monitor.js