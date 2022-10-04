FROM node:16.16.0-alpine

RUN apk add --no-cache bash

RUN yarn global add @nestjs/cli

USER node

WORKDIR /home/node/api