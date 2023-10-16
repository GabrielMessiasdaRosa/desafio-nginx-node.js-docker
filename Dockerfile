FROM node:slim

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app

COPY ./src ./src
COPY ./package*.json .

ENTRYPOINT wait-for mysqldb:3306 -t 40 -- npm install && npm run start
