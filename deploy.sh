npm install
npm run build:prod

docker build -t cms .
docker rm -f cms
docker run --name cms -d -p 3005:3005 --restart unless-stopped cms