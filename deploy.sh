npm install
npm run build --mode production

docker build -t cms .

docker save cms > cms.tar
scp -P 24700 cms.tar root@103.57.220.81:/home

ssh root@103.57.220.81 -p 24700 'docker load < /home/cms.tar'
ssh root@103.57.220.81 -p 24700 'docker rm -f cms'
ssh root@103.57.220.81 -p 24700 'docker run --name cms -d -p 3005:3005 --restart unless-stopped cms'