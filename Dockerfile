# base image
FROM node:18.16.0-alpine3.17

# app dir
WORKDIR /usr/src/app

# not root user
USER node

# specify application listening port
EXPOSE 3000