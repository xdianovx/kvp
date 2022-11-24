FROM node:alpine
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api
COPY package.json /usr/src/api
COPY ./ /usr/src/api
RUN npm i
EXPOSE 8000
CMD "npm" "run" "start:dev"

# FROM node:lts-alpine

# ARG NODE_ENV

# WORKDIR /var/www/api

# RUN apk add bash

# RUN npm i

# RUN npm i -g typescript ts-node nodemon @nestjs/cli

# RUN if [[ ${NODE_ENV} = 'production' ]]; then npm i -g pm2; fi

# COPY ./package.json ./

# COPY . .

# RUN if [[ ${NODE_ENV} = 'development' ]]; then npm install; else npm install --only=prod && npm install --only=dev ; fi

# RUN npm install

# RUN chmod +x /var/www/api/start_app.sh

# RUN ls -l -a

# EXPOSE 8000
