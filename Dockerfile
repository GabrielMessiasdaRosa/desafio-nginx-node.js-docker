FROM node:latest as builded-project

WORKDIR /usr/src/app
COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

FROM node:slim

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app

COPY ./src ./src
COPY --from=builded-project /usr/src/app/package.json .
COPY --from=builded-project /usr/src/app/package-lock.json .
COPY --from=builded-project /usr/src/app/node_modules ./node_modules

ENTRYPOINT wait-for mysqldb:3306 -t 40 -- npm run start
