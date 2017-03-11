#!/usr/bin/env bash

nohup forever mon.js &
npm start | tee log.out

