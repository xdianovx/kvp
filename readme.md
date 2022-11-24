cd api && npm i
cd client && npm i

docker-compose up --build
docker exec -it postgres /bin/sh
psql --username postgres
CREATE DATABASE kvpfmedia
