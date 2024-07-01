# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY ./src /app/src
COPY ./public /app/public
COPY package.json /app/
COPY package-lock.json /app/
COPY *config.* /app/
COPY .env.standalone /app/

RUN npm install

# Run the application.
ENTRYPOINT ["npm", "run", "serve", "--", "--port", "4000"]
