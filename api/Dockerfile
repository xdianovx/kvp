FROM node:alpine
WORKDIR /usr/www/api
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm i
CMD ["npm", "run", "start:dev"]
EXPOSE 8000

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
