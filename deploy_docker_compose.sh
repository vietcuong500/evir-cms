#!/bin/bash
npm run build
docker-compose build
docker save -o cms.tar cms_cms:latest
scp -P 24700 ./cms.tar root@eviromet:/root/cms